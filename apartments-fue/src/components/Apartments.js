import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RatingBadge from "./RatingBadge";
import { APARTMENTS } from "../data/apartments";
import "../styles/Apartments.scss";

/**
 * The Apartments tab: both apartments side by side, 50/50. Hovering (or
 * keyboard-focusing) one grows it to 75% and reveals its details; the other
 * shrinks to 25%. The width change is a flex-grow transition in CSS, so it
 * animates smoothly without any JS.
 *
 * On touch screens there's no hover to drive this, so the panels stack and
 * show their details straight away (see the media query in the stylesheet).
 */
function Apartments() {
  const { t } = useTranslation();

  return (
    <section className="showcase" aria-labelledby="apartments-title">
      <h1 className="u-visually-hidden" id="apartments-title">
        {t("Apartments_page_title")}
      </h1>

      <div className="showcase__panels">
        {APARTMENTS.map((apartment) => (
          <ShowcasePanel key={apartment.slug} apartment={apartment} />
        ))}
      </div>

      {/* Sits on the seam between the two photos and fades out as soon as
          one is hovered — by then it has done its job. */}
      <div className="showcase__hint" aria-hidden="true">
        <span className="showcase__hint-icon">
          <span className="material-icons-outlined">chevron_left</span>
          <span className="material-icons-outlined">chevron_right</span>
        </span>
        <span className="showcase__hint-label">{t("Showcase_hint")}</span>
      </div>
    </section>
  );
}

function ShowcasePanel({ apartment }) {
  const { t } = useTranslation();
  const {
    slug,
    title,
    shortTitleKey,
    images,
    people,
    beds,
    surface,
    rating,
    airbnbUrl,
  } = apartment;

  return (
    <article className="showcase-panel">
      <img
        className="showcase-panel__photo"
        src={images[0]}
        alt={t("Apartment_card_image_alt", { name: title })}
        decoding="async"
      />
      <div className="showcase-panel__scrim" aria-hidden="true" />

      <div className="showcase-panel__content">
        <p className="showcase-panel__eyebrow">{t(shortTitleKey)}</p>
        <h2 className="showcase-panel__title">
          {/* "Stretched link": its ::after covers the whole panel, so the
              entire photo is clickable without wrapping the Airbnb link
              inside another link (which isn't valid HTML). */}
          <Link className="showcase-panel__link" to={`/${slug}`}>
            {title}
          </Link>
        </h2>
        <RatingBadge rating={rating} className="showcase-panel__rating" />

        {/* Revealed when the panel is expanded. */}
        <div className="showcase-panel__details">
          <ul className="showcase-panel__specs">
            <li>
              <span className="material-icons-outlined" aria-hidden="true">
                person
              </span>
              {t("Card_guests", { count: people })}
            </li>
            <li>
              <span className="material-icons-outlined" aria-hidden="true">
                bed
              </span>
              {t("Card_beds", { count: beds })}
            </li>
            <li>
              <span className="material-icons-outlined" aria-hidden="true">
                straighten
              </span>
              {surface} m²
            </li>
          </ul>

          <div className="showcase-panel__actions">
            <Link className="btn btn--on-image" to={`/${slug}`}>
              {t("Card_view_details")}
            </Link>
            <a
              className="btn btn--primary"
              href={airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Airbnb_reservation")}
              <span className="material-icons-outlined" aria-hidden="true">
                open_in_new
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Apartments;
