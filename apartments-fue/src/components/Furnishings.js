import { useTranslation } from "react-i18next";

/**
 * Amenity list. Previously 18 hand-written copies of the same six-line
 * block; now one data array grouped into labelled sections, which also
 * makes the long list scannable instead of a flat wall of 18 rows.
 */
const GROUPS = [
  {
    titleKey: "Furnishings_group_property",
    items: [
      { icon: "pool", key: "Shared_Swimming_pool" },
      { icon: "directions_car", key: "Free_Parking" },
      { icon: "deck", key: "Terrace_Or_Balcony_Furniture" },
      { icon: "local_florist", key: "Garden_View" },
    ],
  },
  {
    titleKey: "Furnishings_group_kitchen",
    items: [
      { icon: "microwave", key: "Microwave_Kettle_Cooktop_Toaster" },
      { icon: "kitchen", key: "Refrigerator_And_Freezer" },
      { icon: "coffee_maker", key: "Coffee_Machine" },
      { icon: "flatware", key: "Crockery_And_Cutlery" },
    ],
  },
  {
    titleKey: "Furnishings_group_comfort",
    items: [
      { icon: "wifi", key: "Wi_Fi" },
      { icon: "tv", key: "Tv_With_Smart_Tv" },
      { icon: "local_laundry_service", key: "Washing_Machine_And_Dryer" },
      { icon: "iron", key: "Iron" },
      { icon: "checkroom", key: "Wardrobe_With_Hangers" },
      { icon: "home_repair_service", key: "Towels_Linen_Toilet_Paper" },
      { icon: "soap", key: "Soap_Shampoo" },
      { icon: "crib", key: "Crib_Chair_Toys_For_The_Little_Ones" },
    ],
  },
  {
    titleKey: "Furnishings_group_rules",
    items: [
      { icon: "smoke_free", key: "No_Smoking_Allowed" },
      { icon: "pets", key: "No_Pets_Allowed" },
    ],
  },
];

function Furnishings() {
  const { t } = useTranslation();

  return (
    <div className="furnishings">
      {GROUPS.map(({ titleKey, items }) => (
        <section className="furnishings__group" key={titleKey}>
          <h3 className="furnishings__group-title">{t(titleKey)}</h3>
          <ul className="furnishings__list">
            {items.map(({ icon, key }) => (
              <li className="furnishings__item" key={key}>
                <span className="material-icons-outlined" aria-hidden="true">
                  {icon}
                </span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default Furnishings;
