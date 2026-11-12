import { useRef } from "react";
import beach from "../assets/sightseeing/sotavento.jpg";
import { useWaterRipple } from "../hooks/useWaterRipple";
import "../styles/OceanBand.scss";

/**
 * The showcase band: a beach photograph that ripples like real water
 * wherever the cursor moves over it (see useWaterRipple), plus animated
 * wave shapes along the bottom edge. The section reads identically with
 * none of it — on touch devices, wherever WebGL isn't available, and
 * whenever it's scrolled off screen.
 */

// One wave period, 1440 user units wide. Tiled twice per layer.
const WAVE_PATH =
  "M0,60 C180,110 360,10 540,50 C720,90 900,20 1080,55 C1260,90 1380,70 1440,60 L1440,120 L0,120 Z";

function OceanBand({ eyebrow, title, children }) {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  // Matches the photo's old `object-position: center 60%` so the ripple
  // crops the same region the static <img> used to.
  useWaterRipple(sectionRef, canvasRef, imgRef, { focal: [0.5, 0.4] });

  return (
    <section className="ocean" ref={sectionRef}>
      <div className="ocean__media">
        {/* Not lazy: the ripple can't start until this photo has fully
            downloaded, and with lazy loading the download only began once
            the band scrolled near — so on a first visit the effect usually
            wasn't ready by the time the cursor reached it. Low priority
            keeps it from competing with the hero photo above the fold. */}
        <img
          ref={imgRef}
          src={beach}
          alt=""
          loading="eager"
          fetchpriority="low"
          decoding="async"
        />
        {/* Replaces the <img> pixel-for-pixel once the ripple shader is
            ready; invisible (and inert) until then. */}
        <canvas className="ocean__ripple" ref={canvasRef} aria-hidden="true" />
      </div>
      <div className="ocean__scrim" aria-hidden="true" />

      <div className="ocean__body u-container">
        <p className="u-eyebrow ocean__eyebrow">{eyebrow}</p>
        <h2 className="ocean__title">{title}</h2>
        <div className="ocean__text">{children}</div>
      </div>

      {/* Three wave layers at different speeds and opacities. Pure CSS, so
          they keep moving even when the ripple shader is switched off. */}
      <div className="ocean__waves" aria-hidden="true">
        {[0, 1, 2].map((layer) => (
          <svg
            key={layer}
            className={`ocean__wave ocean__wave--${layer}`}
            /* 2880 wide, not 1440: the element is 200% wide and holds two
               copies of the path, so the viewBox has to span both. At 1440
               the second copy fell outside it and was clipped, leaving a
               notch at the right edge as the loop ran. */
            viewBox="0 0 2880 120"
            preserveAspectRatio="none"
            focusable="false"
          >
            <path d={WAVE_PATH} />
            <path transform="translate(1440 0)" d={WAVE_PATH} />
          </svg>
        ))}
      </div>
    </section>
  );
}

export default OceanBand;
