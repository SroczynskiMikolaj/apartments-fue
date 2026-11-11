import { useTranslation, Trans } from "react-i18next";
import MapExplorer from "./MapExplorer";
import {
  RESTAURANT_PLACES,
  CUISINE_FILTERS,
  ALL_CUISINES,
} from "../data/restaurants";

function Restaurants() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <div className="page-head">
        <div className="page-head__inner">
          <p className="page-head__eyebrow">{t("Restaurants_eyebrow")}</p>
          <h1 className="page-head__title">{t("Restaurants_title")}</h1>
          <div className="page-head__lead">
            <p>
              <Trans i18nKey="Restaurants_description_1" />
            </p>
            <p>
              <Trans i18nKey="Restaurants_description_2" />
            </p>
          </div>
        </div>
      </div>

      <MapExplorer
        places={RESTAURANT_PLACES}
        filters={CUISINE_FILTERS}
        defaultFilter={ALL_CUISINES}
      />
    </div>
  );
}

export default Restaurants;
