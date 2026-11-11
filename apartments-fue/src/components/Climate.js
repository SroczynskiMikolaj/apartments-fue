import { useTranslation, Trans } from "react-i18next";
import WeatherChart from "./WeatherChart";
import "../styles/Climate.scss";

// Was four hand-written blocks of five <li> each, all identical in shape.
const SEASONS = [
  { icon: "filter_vintage", titleKey: "Spring", prefix: "Spring_text" },
  { icon: "wb_sunny", titleKey: "Summer", prefix: "Summer_text" },
  { icon: "air", titleKey: "Autumn", prefix: "Autumn_text" },
  { icon: "ac_unit", titleKey: "Winter", prefix: "Winter_text" },
];

const POINTS_PER_SEASON = 5;

function Climate() {
  const { t } = useTranslation();

  return (
    <div className="page climate">
      <div className="page-head">
        <div className="page-head__inner">
          <p className="page-head__eyebrow">{t("Climate_eyebrow")}</p>
          <h1 className="page-head__title">{t("Climate_title")}</h1>
        </div>
      </div>

      <div className="u-container climate__body">
        <div className="climate__intro u-prose">
          <p>
            <Trans i18nKey="Climate_description_1" />
          </p>
          <p>
            <Trans i18nKey="Climate_description_2" />
          </p>
          <p>
            <Trans i18nKey="Climate_description_3" />
          </p>
        </div>

        <figure className="climate__chart">
          <WeatherChart />
          <figcaption>{t("Climate_chart_caption")}</figcaption>
        </figure>

        <div className="seasons">
          {SEASONS.map(({ icon, titleKey, prefix }) => (
            <section className="season" key={titleKey}>
              <h2 className="season__title">
                <span className="material-icons-outlined" aria-hidden="true">
                  {icon}
                </span>
                {t(titleKey)}
              </h2>
              <ul className="season__list">
                {Array.from({ length: POINTS_PER_SEASON }, (_, i) => (
                  <li key={i}>
                    <Trans i18nKey={`${prefix}_${i + 1}`} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Climate;
