import { useTranslation, Trans } from "react-i18next";
import Card from "./Card";
import Hero from "./Hero";
import OceanBand from "./OceanBand";
import VideoPlayer from "./VideoPlayer";
import { APARTMENTS } from "../data/apartments";
// A landscape of the town itself, not an interior. The first apartment's
// kitchen shot is already the card image directly below the hero, so using
// it twice in one screen made the page look like it had one photo.
import heroImage from "../assets/sightseeing/CostaCalma.jpg";
import "../styles/Home.scss";

const HIGHLIGHTS = [
  { icon: "pool", titleKey: "Highlight_pool", bodyKey: "Highlight_pool_text" },
  {
    icon: "beach_access",
    titleKey: "Highlight_beach",
    bodyKey: "Highlight_beach_text",
  },
  {
    icon: "directions_car",
    titleKey: "Highlight_parking",
    bodyKey: "Highlight_parking_text",
  },
  {
    icon: "wb_sunny",
    titleKey: "Highlight_climate",
    bodyKey: "Highlight_climate_text",
  },
];

function Home() {
  const { t } = useTranslation();
  const [first, second] = APARTMENTS;

  return (
    <>
      <Hero image={heroImage} secondaryTo="/Apartments" />

      {/* Welcome / intro */}
      <section className="section" id="about">
        <div className="u-container intro">
          <p className="u-eyebrow">{t("Intro_eyebrow")}</p>
          <div className="intro__columns">
            <h2 className="intro__title">{t("Intro_title")}</h2>
            <div className="intro__text u-prose">
              <p>
                <Trans
                  i18nKey="Apartment_Info1"
                  components={{
                    island: <strong>Fuerteventura</strong>,
                    colores27: <strong>Colores de Fuerteventura 27</strong>,
                    colores23: <strong>Colores de Fuerteventura 23</strong>,
                  }}
                />
              </p>
              <p>{t("Apartment_Info2")}</p>
              <p>{t("Apartment_Info3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The two apartments */}
      <section className="section section--sand" id="apartments">
        <div className="u-container">
          <div className="section__head">
            <p className="u-eyebrow">{t("Apartments_eyebrow")}</p>
            <h2>{t("Apartments_title")}</h2>
            <p>{t("Apartments_lead")}</p>
          </div>

          <div className="apt-grid">
            {APARTMENTS.map((apartment) => (
              <Card key={apartment.slug} apartment={apartment} />
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section">
        <div className="u-container">
          <div className="section__head">
            <p className="u-eyebrow">{t("Highlights_eyebrow")}</p>
            <h2>{t("Highlights_title")}</h2>
          </div>

          <ul className="highlights">
            {HIGHLIGHTS.map(({ icon, titleKey, bodyKey }) => (
              <li className="highlight" key={titleKey}>
                <span className="highlight__icon material-icons-outlined" aria-hidden="true">
                  {icon}
                </span>
                <h3 className="highlight__title">{t(titleKey)}</h3>
                <p className="highlight__text">{t(bodyKey)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About Costa Calma — the showcase band: beach photograph, rolling
          waves, and a bubble trail that follows the cursor. */}
      <OceanBand eyebrow={t("Town_eyebrow")} title={t("About_Costa_Calma")}>
        <p>{t("Costa_Calma_Info")}</p>
      </OceanBand>

      {/* Video */}
      <section className="section section--tight">
        <div className="u-container">
          <div className="section__head">
            <p className="u-eyebrow">{t("Video_eyebrow")}</p>
            <h2>{t("Video_title")}</h2>
          </div>
          <VideoPlayer />
        </div>
      </section>

      {/* Closing booking prompt */}
      <section className="section--tight booking-cta">
        <div className="u-container booking-cta__inner">
          <div>
            <h2 className="booking-cta__title">{t("Booking_cta_title")}</h2>
            <p className="booking-cta__text">{t("Booking_cta_text")}</p>
          </div>
          <div className="booking-cta__actions">
            <a
              className="btn btn--primary"
              href={first.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(first.shortTitleKey)}
            </a>
            <a
              className="btn btn--ghost"
              href={second.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(second.shortTitleKey)}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
