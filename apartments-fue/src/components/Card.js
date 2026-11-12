import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RatingBadge from "./RatingBadge";

/**
 * Apartment teaser card.
 *
 * The whole card is one <Link>, not a <div onClick={navigate}>. That gives
 * back keyboard focus, middle-click / cmd-click to open in a new tab, the
 * browser status-bar URL preview, and a crawlable href for search engines —
 * none of which the old click handler provided.
 */
function Card({ apartment }) {
  const { t } = useTranslation();
  const { slug, title, shortTitleKey, images, people, beds, surface, rating } =
    apartment;

  return (
    <Link className="apt-card" to={`/${slug}`}>
      <div className="apt-card__media">
        <img
          src={images[0]}
          alt={t("Apartment_card_image_alt", { name: title })}
          loading="lazy"
          decoding="async"
        />
        <span className="apt-card__badge">{t(shortTitleKey)}</span>
      </div>

      <div className="apt-card__body">
        <div className="apt-card__heading">
          <h3 className="apt-card__title">{title}</h3>
          <RatingBadge rating={rating} />
        </div>

        <ul className="apt-card__specs">
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

        <span className="apt-card__cta">
          {t("Card_view_details")}
          <span className="material-icons-outlined" aria-hidden="true">
            arrow_forward
          </span>
        </span>
      </div>
    </Link>
  );
}

export default Card;
