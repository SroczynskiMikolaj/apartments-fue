import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useWaterRipple } from "../hooks/useWaterRipple";
import BookingChooser from "./BookingChooser";
import "../styles/Hero.scss";

/**
 * Full-bleed opening image. The old homepage opened on a centred text
 * heading and a decorative PNG rule, so nothing above the fold showed the
 * product. This puts a photograph, the name, and the booking action there.
 *
 * Also carries the same water ripple as the "About Costa Calma" band
 * further down — it's the first photo a visitor sees, so it's the most
 * natural place to notice the effect exists.
 */
function Hero({ image, secondaryTo }) {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  // Matches the photo's `object-position: center 55%` so the ripple crops
  // the same region the static <img> used to.
  useWaterRipple(sectionRef, canvasRef, imgRef, { focal: [0.5, 0.45] });

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero__media">
        <img
          ref={imgRef}
          src={image}
          alt=""
          // Above the fold: never lazy, and decode eagerly so the first
          // paint isn't a blank dark rectangle.
          loading="eager"
          fetchpriority="high"
          decoding="sync"
        />
        {/* Replaces the <img> pixel-for-pixel once the ripple shader is
            ready; invisible (and inert) until then. */}
        <canvas className="hero__ripple" ref={canvasRef} aria-hidden="true" />
      </div>

      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__body">
        <p className="hero__eyebrow">{t("Hero_eyebrow")}</p>
        <h1 className="hero__title">Colores de Fuerteventura</h1>
        <p className="hero__lead">{t("Hero_lead")}</p>

        <div className="hero__actions">
          <BookingChooser placement="up" />
          <Link className="btn btn--on-image" to={secondaryTo}>
            {t("Hero_view_apartments")}
          </Link>
        </div>
      </div>

      <div className="hero__facts">
        <dl className="hero__facts-list">
          <div className="hero__fact">
            <dt>{t("Hero_fact_guests_label")}</dt>
            <dd>4</dd>
          </div>
          <div className="hero__fact">
            <dt>{t("Hero_fact_sun_label")}</dt>
            <dd>300+</dd>
          </div>
          <div className="hero__fact">
            <dt>{t("Hero_fact_beach_label")}</dt>
            <dd>5 min</dd>
          </div>
          <div className="hero__fact">
            <dt>{t("Hero_fact_pool_label")}</dt>
            <dd>{t("Hero_fact_pool_value")}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Hero;
