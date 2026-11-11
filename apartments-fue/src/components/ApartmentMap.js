import { useTranslation } from "react-i18next";

/**
 * Google Maps embed for one listing.
 *
 * Replaces Map23.js and Map27.js, which were byte-identical apart from the
 * embed URL — and were each named after the *other* apartment. Both also
 * ran a window resize listener purely to swap the iframe's width/height
 * attributes; CSS does that without re-rendering on every resize event.
 */
function ApartmentMap({ src, title }) {
  const { t } = useTranslation();

  return (
    <div className="apartment-map">
      <iframe
        src={src}
        title={title || t("Map_title")}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default ApartmentMap;
