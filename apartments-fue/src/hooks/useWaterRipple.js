import { useEffect, useState } from "react";

/**
 * Makes the photo on `canvasRef` ripple like a real water surface wherever
 * the pointer moves over `sectionRef` — the actual pixels bend (refraction),
 * there are no particles drawn on top of the photo. This is the standard
 * "water ripple" technique: a 2D wave equation simulated on a small
 * height-field texture (ping-ponged every frame, each cursor position
 * gently raising the surface), then the real photo is re-drawn with each
 * pixel offset by the local slope of that height field — the same way
 * light bends through real moving water.
 *
 * `imgRef` must point to the <img> already rendering the photo in the DOM;
 * its pixels become the WebGL texture, so there is no second image fetch.
 * The canvas stays invisible (`.is-ready` is never added) until everything
 * compiles and the photo has decoded, so a driver that can't do this (no
 * float-texture support, a shader that fails to link, whatever) silently
 * leaves the plain <img> on screen — nothing about the page depends on
 * this effect working.
 */

const VERTEX_SHADER = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// Classic finite-difference wave equation: each texel's height eases toward
// the average of its four neighbours (that's the wave spreading outward),
// a velocity term carries momentum so it overshoots and springs back, and
// damping bleeds energy out of the system — without it ripples would
// spread forever instead of settling back to a flat surface.
const SIMULATE_FS = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform vec2 uDelta;
  void main() {
    vec4 info = texture2D(uTexture, vUv);
    vec2 dx = vec2(uDelta.x, 0.0);
    vec2 dy = vec2(0.0, uDelta.y);
    float average = (
      texture2D(uTexture, vUv - dx).r +
      texture2D(uTexture, vUv - dy).r +
      texture2D(uTexture, vUv + dx).r +
      texture2D(uTexture, vUv + dy).r
    ) * 0.25;
    info.g += (average - info.r) * 2.0;
    info.g *= 0.991; // damping — waves linger and travel before settling
    info.r += info.g;
    gl_FragColor = info;
  }
`;

// Raises the surface in a smooth bump centred on the pointer — this is the
// "finger touching the water" moment, written into the height field.
const DROP_FS = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform vec2 uCenter;
  uniform float uRadius;
  uniform float uStrength;
  void main() {
    vec4 info = texture2D(uTexture, vUv);
    float dist = length(uCenter - vUv);
    float drop = max(0.0, 1.0 - dist / uRadius);
    drop = 0.5 - cos(drop * 3.14159265) * 0.5;
    info.r += drop * uStrength;
    gl_FragColor = info;
  }
`;

// Reads the slope of the height field around each pixel and uses it to
// offset where that pixel samples the real photo from — a flat area
// samples straight through (no distortion); a sloped area (the side of a
// ripple) samples from slightly off to the side, which is exactly what
// refraction through real water does to light passing through it.
const RENDER_FS = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uRipple;
  uniform sampler2D uBackground;
  uniform vec2 uDelta;
  uniform vec2 uScale;
  uniform vec2 uFocal;
  uniform float uRefraction;
  void main() {
    vec2 bgUv = (vUv - uFocal) * uScale + uFocal;

    float hL = texture2D(uRipple, vec2(vUv.x - uDelta.x, vUv.y)).r;
    float hR = texture2D(uRipple, vec2(vUv.x + uDelta.x, vUv.y)).r;
    float hD = texture2D(uRipple, vec2(vUv.x, vUv.y - uDelta.y)).r;
    float hU = texture2D(uRipple, vec2(vUv.x, vUv.y + uDelta.y)).r;
    vec2 gradient = vec2(hR - hL, hU - hD);

    vec4 color = texture2D(uBackground, bgUv + gradient * uRefraction);

    // A faint highlight along the steepest edge of each ripple, the way
    // real water catches the light — kept subtle on purpose.
    vec3 normal = normalize(vec3(-gradient * 40.0, 1.0));
    float specular = pow(max(dot(normal, normalize(vec3(-0.3, 0.4, 0.75))), 0.0), 80.0);

    gl_FragColor = color + vec4(specular * 0.35);
  }
`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(info || "shader compile failed");
  }
  return shader;
}

function createProgram(gl, vsSource, fsSource) {
  const vs = compileShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) || "program link failed");
  }
  const uniforms = {};
  const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  for (let i = 0; i < count; i += 1) {
    const info = gl.getActiveUniform(program, i);
    uniforms[info.name] = gl.getUniformLocation(program, info.name);
  }
  return { program, uniforms, attrib: gl.getAttribLocation(program, "position") };
}

function createRenderTarget(gl, width, height, type, filter) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, type, null);

  const framebuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    texture,
    0
  );
  const complete =
    gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;

  // texImage2D(..., null) allocates storage but does NOT guarantee it's
  // zeroed — on some drivers it's whatever was already in that GPU memory.
  // Left uncleared, that garbage becomes the starting height field, and
  // the simulation reads it as a real (if slowly decaying) disturbance —
  // which is what was warping/darkening the photo even with zero pointer
  // interaction. An explicit clear guarantees height = velocity = 0 at rest.
  if (complete) {
    gl.viewport(0, 0, width, height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  if (!complete) {
    gl.deleteTexture(texture);
    gl.deleteFramebuffer(framebuffer);
    return null;
  }
  return { texture, framebuffer };
}

const QUAD = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

export function useWaterRipple(sectionRef, canvasRef, imgRef, options = {}) {
  const {
    focal = [0.5, 0.5],
    // Simulation grid, long edge in texels — short edge is derived from
    // the section's aspect ratio so ripples stay circular rather than
    // stretched. Small on purpose: the simulation cost is per-texel, and
    // the result is smoothed back out across the full-resolution photo in
    // the final pass regardless of how coarse this grid is.
    simResolution = 320,
    dropRadius = 0.065,
    dropStrength = 0.024,
    // How far a ripple's slope shifts the photo. The slope between two
    // texels is tiny (~0.005), so this has to be large: the old 0.0017
    // moved pixels by ~0.02 px, i.e. nothing visible at all. 0.3 gives a
    // few pixels of gentle wobble at the crest of a ripple.
    refraction = 0.3,
  } = options;
  const [focalX, focalY] = focal;
  // Bumped when the browser restores a lost WebGL context, which re-runs
  // the whole setup below against the fresh context.
  const [contextGeneration, setContextGeneration] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const imgEl = imgRef.current;
    if (!section || !canvas || !imgEl) return undefined;

    // No cursor to drag across the water without any mouse/trackpad — skip
    // rather than run a loop nobody will ever see move. `any-pointer`, not
    // `pointer`: on a touchscreen laptop the *primary* pointer is the touch
    // screen, which used to switch this off even with a mouse plugged in.
    if (!window.matchMedia("(any-pointer: fine)").matches) return undefined;

    const gl =
      canvas.getContext("webgl", { alpha: false, antialias: false }) ||
      canvas.getContext("experimental-webgl", { alpha: false, antialias: false });
    if (!gl || gl.isContextLost()) return undefined;

    const halfFloat = gl.getExtension("OES_texture_half_float");
    const textureType = halfFloat
      ? halfFloat.HALF_FLOAT_OES
      : gl.getExtension("OES_texture_float")
      ? gl.FLOAT
      : null;
    // No usable float render target on this GPU/driver — the simulation
    // can't run at all. Bail silently; the <img> underneath is unaffected.
    if (!textureType) return undefined;

    const linearExt = halfFloat
      ? gl.getExtension("OES_texture_half_float_linear")
      : gl.getExtension("OES_texture_float_linear");
    const filter = linearExt ? gl.LINEAR : gl.NEAREST;

    let programs;
    try {
      programs = {
        simulate: createProgram(gl, VERTEX_SHADER, SIMULATE_FS),
        drop: createProgram(gl, VERTEX_SHADER, DROP_FS),
        render: createProgram(gl, VERTEX_SHADER, RENDER_FS),
      };
    } catch {
      // Shader failed to compile/link on this driver — bail silently.
      return undefined;
    }

    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, QUAD, gl.STATIC_DRAW);

    const bindProgram = ({ program, attrib }) => {
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
      gl.enableVertexAttribArray(attrib);
      gl.vertexAttribPointer(attrib, 2, gl.FLOAT, false, 0, 0);
    };

    let destroyed = false;
    let raf = null;
    let onScreen = false;
    let ready = false;

    let simWidth = simResolution;
    let simHeight = simResolution;
    let targetA = null;
    let targetB = null;
    let backgroundTexture = null;
    let scale = [1, 1];

    const disposeTargets = () => {
      [targetA, targetB].forEach((t) => {
        if (!t) return;
        gl.deleteTexture(t.texture);
        gl.deleteFramebuffer(t.framebuffer);
      });
      targetA = null;
      targetB = null;
    };

    const allocateTargets = () => {
      disposeTargets();
      targetA = createRenderTarget(gl, simWidth, simHeight, textureType, filter);
      targetB = createRenderTarget(gl, simWidth, simHeight, textureType, filter);
      // Render-to-float-texture unsupported here either — give up cleanly.
      if (!targetA || !targetB) {
        disposeTargets();
        return false;
      }
      return true;
    };

    // Uploads the photo at roughly the resolution the canvas can actually
    // show, not at full camera resolution. The source photos are 4032x3024:
    // as an RGBA texture that's ~48 MB of video memory each, plus a long
    // synchronous upload. On weaker GPUs that was enough to get the WebGL
    // context dropped, which is one reason the effect didn't always appear.
    const uploadBackground = () => {
      const iw = imgEl.naturalWidth;
      const ih = imgEl.naturalHeight;
      const rect = section.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = Math.max(rect.width, window.innerWidth) * dpr;
      const ch = Math.max(rect.height, 1) * dpr;
      const maxSize = Math.min(gl.getParameter(gl.MAX_TEXTURE_SIZE), 2560);
      // "cover" shows the image at max(cw/iw, ch/ih) of its size; matching
      // that gives about one texel per screen pixel.
      const factor = Math.min(
        1,
        Math.max(cw / iw, ch / ih),
        maxSize / Math.max(iw, ih)
      );

      let source = imgEl;
      if (factor < 1) {
        const scaled = document.createElement("canvas");
        scaled.width = Math.max(1, Math.round(iw * factor));
        scaled.height = Math.max(1, Math.round(ih * factor));
        const ctx2d = scaled.getContext("2d");
        if (ctx2d) {
          ctx2d.imageSmoothingQuality = "high";
          ctx2d.drawImage(imgEl, 0, 0, scaled.width, scaled.height);
          source = scaled;
        }
      }

      backgroundTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, backgroundTexture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    };

    const resize = () => {
      const rect = section.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const containerAspect = rect.width / rect.height;
      simWidth = simResolution;
      simHeight = Math.max(32, Math.round(simResolution / containerAspect));
      allocateTargets();

      const imgAspect = imgEl.naturalWidth / imgEl.naturalHeight || containerAspect;
      // "cover": shrink the UV range on whichever axis has slack, so that
      // axis samples a tight crop instead of the full [0,1] texture range.
      // (Inverting these two ratios — i.e. using a scale > 1 here — was
      // the earlier bug: bgUv then ran outside the texture on that axis
      // and CLAMP_TO_EDGE smeared the edge pixel across it instead of
      // cropping, which is why the rendered photo didn't match the <img>
      // it was supposed to be reproducing.)
      scale =
        containerAspect > imgAspect
          ? [1, imgAspect / containerAspect]
          : [containerAspect / imgAspect, 1];
    };

    const pendingDrops = [];

    const runDrop = ({ u, v, strength }) => {
      gl.viewport(0, 0, simWidth, simHeight);
      gl.bindFramebuffer(gl.FRAMEBUFFER, targetB.framebuffer);
      bindProgram(programs.drop);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, targetA.texture);
      gl.uniform1i(programs.drop.uniforms.uTexture, 0);
      gl.uniform2f(programs.drop.uniforms.uCenter, u, v);
      gl.uniform1f(programs.drop.uniforms.uRadius, dropRadius);
      gl.uniform1f(programs.drop.uniforms.uStrength, strength);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      [targetA, targetB] = [targetB, targetA];
    };

    const simulate = () => {
      gl.viewport(0, 0, simWidth, simHeight);
      gl.bindFramebuffer(gl.FRAMEBUFFER, targetB.framebuffer);
      bindProgram(programs.simulate);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, targetA.texture);
      gl.uniform1i(programs.simulate.uniforms.uTexture, 0);
      gl.uniform2f(programs.simulate.uniforms.uDelta, 1 / simWidth, 1 / simHeight);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      [targetA, targetB] = [targetB, targetA];
    };

    const renderFrame = () => {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      bindProgram(programs.render);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, targetA.texture);
      gl.uniform1i(programs.render.uniforms.uRipple, 0);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, backgroundTexture);
      gl.uniform1i(programs.render.uniforms.uBackground, 1);
      gl.uniform2f(programs.render.uniforms.uDelta, 1 / simWidth, 1 / simHeight);
      gl.uniform2f(programs.render.uniforms.uScale, scale[0], scale[1]);
      gl.uniform2f(programs.render.uniforms.uFocal, focalX, focalY);
      gl.uniform1f(programs.render.uniforms.uRefraction, refraction);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    // Hand the photo back to the plain <img> underneath.
    const fallBackToPhoto = () => {
      ready = false;
      canvas.classList.remove("is-ready");
    };

    // The wave equation advances one fixed step per call, so it must run at
    // a fixed rate, not once per screen refresh. On a 144/240 Hz monitor a
    // step per frame made ripples spread and die 2.4–4x faster than on
    // 60 Hz — gone before you could see them. (Opening DevTools often
    // drops the page to 60 Hz, which is why it "worked with DevTools open".)
    const STEP_MS = 1000 / 60;
    const MAX_STEPS_PER_FRAME = 4; // after a stall, catch up a little, not forever
    let lastTime = null;
    let pendingTime = 0;

    const loop = (now) => {
      if (destroyed) return;
      const elapsed = lastTime === null ? STEP_MS : Math.min(now - lastTime, 250);
      lastTime = now;
      if (ready && onScreen) {
        try {
          pendingTime += elapsed;
          let steps = 0;
          while (pendingTime >= STEP_MS && steps < MAX_STEPS_PER_FRAME) {
            simulate();
            pendingTime -= STEP_MS;
            steps += 1;
          }
          if (steps === MAX_STEPS_PER_FRAME) pendingTime = 0;
          while (pendingDrops.length > 0) runDrop(pendingDrops.shift());
          renderFrame();
        } catch {
          // A single unexpected error used to kill the loop for good and
          // leave a frozen canvas over the photo. Show the photo instead.
          fallBackToPhoto();
        }
      }
      raf = requestAnimationFrame(loop);
    };

    let lastPoint = null;
    const onPointerMove = (event) => {
      const rect = section.getBoundingClientRect();
      const u = (event.clientX - rect.left) / rect.width;
      const v = 1 - (event.clientY - rect.top) / rect.height;
      if (u < 0 || u > 1 || v < 0 || v > 1) return;

      // A slow drag barely disturbs the surface; a quick one raises a
      // slightly bigger ripple — closer to how a real fingertip behaves
      // than a fixed-strength drop on every event would be.
      const travel = lastPoint ? Math.hypot(u - lastPoint.u, v - lastPoint.v) : 0.01;
      // pointermove fires once per frame, so a 144 Hz screen gets ~2.4x
      // as many drops as a 60 Hz one. Weight each drop by the time it
      // covers (relative to a 60 Hz frame) so the surface gets the same
      // push per second on any monitor.
      const sincePrevious = lastPoint ? event.timeStamp - lastPoint.time : STEP_MS;
      const weight = Math.min(1, Math.max(0.15, sincePrevious / STEP_MS));
      lastPoint = { u, v, time: event.timeStamp };
      pendingDrops.push({
        u,
        v,
        strength:
          weight *
          Math.min(dropStrength * (0.6 + (travel / weight) * 18), dropStrength * 2.2),
      });
    };

    const onPointerLeave = () => {
      lastPoint = null;
    };

    const start = () => {
      if (destroyed || gl.isContextLost()) return;
      if (!allocateTargets()) return; // unsupported — leave the <img> as-is
      uploadBackground();
      resize();
      ready = true;
      canvas.classList.add("is-ready");
    };

    // Decode off the main thread first where supported, so the upload
    // doesn't stall scrolling while a large JPEG decodes synchronously.
    const begin = () => {
      const decoded = imgEl.decode ? imgEl.decode() : Promise.resolve();
      decoded.catch(() => {}).then(start);
    };

    if (imgEl.complete && imgEl.naturalWidth > 0) {
      begin();
    } else {
      imgEl.addEventListener("load", begin, { once: true });
    }

    // The browser can drop a WebGL context at any time (GPU memory
    // pressure, driver reset, too many contexts on the page). Fall back to
    // the static photo straight away, and rebuild everything if the
    // browser later offers the context back.
    const onContextLost = (event) => {
      event.preventDefault(); // required for webglcontextrestored to fire
      fallBackToPhoto();
    };
    const onContextRestored = () => setContextGeneration((g) => g + 1);
    canvas.addEventListener("webglcontextlost", onContextLost);
    canvas.addEventListener("webglcontextrestored", onContextRestored);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(section);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(section);

    section.addEventListener("pointermove", onPointerMove);
    section.addEventListener("pointerleave", onPointerLeave);

    raf = requestAnimationFrame(loop);

    return () => {
      destroyed = true;
      if (raf !== null) cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
      imgEl.removeEventListener("load", begin);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      // Free GPU memory now rather than whenever the old canvas happens to
      // be garbage-collected. Only the targets were released before, so
      // every visit to the home page leaked the full-size photo texture.
      disposeTargets();
      if (backgroundTexture) gl.deleteTexture(backgroundTexture);
      Object.values(programs).forEach(({ program }) => gl.deleteProgram(program));
      gl.deleteBuffer(quadBuffer);
      canvas.classList.remove("is-ready");
    };
    // sectionRef/canvasRef/imgRef are refs — stable identity, safe to omit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    contextGeneration,
    simResolution,
    dropRadius,
    dropStrength,
    refraction,
    focalX,
    focalY,
  ]);
}
