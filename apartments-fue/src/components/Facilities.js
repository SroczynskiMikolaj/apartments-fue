import { useTranslation } from "react-i18next";

/**
 * The at-a-glance spec row under the apartment title.
 * Bath and pool counts were hardcoded to 1 in the markup; they now come
 * from the listing data so a third apartment wouldn't need a code change.
 */
function Facilities({ people, beds, baths = 1, surface }) {
  const { t } = useTranslation();

  const items = [
    { icon: "person", label: t("Card_guests", { count: people }) },
    { icon: "bed", label: t("Card_beds", { count: beds }) },
    { icon: "shower", label: t("Card_baths", { count: baths }) },
    { icon: "pool", label: t("Shared_Swimming_pool") },
    { icon: "straighten", label: `${surface} m²` },
  ];

  return (
    <ul className="facilities">
      {items.map(({ icon, label }) => (
        <li key={icon} className="facilities__item">
          <span className="material-icons-outlined" aria-hidden="true">
            {icon}
          </span>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}

export default Facilities;
