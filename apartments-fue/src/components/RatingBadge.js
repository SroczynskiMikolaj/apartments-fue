import { useTranslation } from "react-i18next";
import "../styles/RatingBadge.scss";

/**
 * Displays a manually-maintained Airbnb rating (see the note in
 * data/apartments.js on why this isn't fetched from an API) with a star
 * icon, the score, the review count, and the date it was last checked —
 * so it never reads as more current than it actually is.
 *
 * Renders nothing if `rating` is missing or has zero reviews yet, rather
 * than showing a hardcoded placeholder number as if it were real.
 */
function RatingBadge({ rating, className = "" }) {
  const { t, i18n } = useTranslation();

  if (!rating || !rating.reviews) return null;

  const locale = i18n.resolvedLanguage || "en";
  const formattedDate = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(new Date(rating.checked));
  // "4,81" in Polish/German/Spanish/Italian/Danish, "4.81" in English —
  // the same way Airbnb itself shows it in each language.
  const formattedValue = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rating.value);

  return (
    <span
      className={`rating-badge ${className}`}
      title={t("Rating_checked_on", { date: formattedDate })}
    >
      <span className="material-icons-round rating-badge__star" aria-hidden="true">
        star
      </span>
      <span className="rating-badge__value">{formattedValue}</span>
      <span className="rating-badge__reviews">
        {t("Rating_reviews_count", { count: rating.reviews })}
      </span>
    </span>
  );
}

export default RatingBadge;
