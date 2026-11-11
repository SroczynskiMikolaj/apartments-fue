import { useTranslation, Trans } from "react-i18next";
import MapExplorer from "./MapExplorer";
import { SIGHTSEEING_PLACES } from "../data/sightseeing";

function Sightseeing() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <div className="page-head">
        <div className="page-head__inner">
          <p className="page-head__eyebrow">{t("Sightseeing_eyebrow")}</p>
          <h1 className="page-head__title">{t("Sightseeing_title")}</h1>
          <div className="page-head__lead">
            <Trans
              i18nKey="Fuerteventura_description"
              components={{
                island: <strong>Fuerteventura</strong>,
                park: <strong>Corralejo National Park</strong>,
                oasis: <strong>Oasis Park</strong>,
                cotillo: <strong>El Cotillo</strong>,
                sotavento: <strong>Sotavento</strong>,
                cofete: <strong>Cofete</strong>,
                ajuy: <strong>Ajuy Caves</strong>,
              }}
            />
          </div>
        </div>
      </div>

      <MapExplorer places={SIGHTSEEING_PLACES} />
    </div>
  );
}

export default Sightseeing;
