import { useTranslation, Trans } from "react-i18next";
import "../styles/Commuting.scss";
import airportMap from "../assets/airport-map.png";
import taxiStand from "../assets/taxi-stand.jpeg";
import canaryShuttle from "../assets/cannary_shuttle_1.jpeg";
import tiadhe from "../assets/tialdhe.jpg";

/**
 * Airport → Costa Calma transport options, as a comparison grid.
 * The four cards were hand-written with three different inner layouts and
 * a `cursor: pointer` on each despite nothing being clickable.
 */
const OPTIONS = [
  {
    id: "bus",
    name: "Tiadhe",
    typeKey: "Transport_public_bus",
    icon: "directions_bus",
    image: tiadhe,
    priceKey: "Commuting_tiadhe_5",
    priceLabelKey: "Commuting_tiadhe_4",
    bodyKeys: ["Commuting_tiadhe_1"],
    link: {
      href: "https://tiadhe.com/en/line-10/",
      beforeKey: "Commuting_tiadhe_2",
      labelKey: "Commuting_tiadhe_3",
    },
  },
  {
    id: "shuttle",
    name: "Canary Shuttle",
    typeKey: "Transport_shuttle",
    icon: "airport_shuttle",
    image: canaryShuttle,
    priceKey: "Commuting_shuttle_5",
    priceLabelKey: "Commuting_shuttle_4",
    bodyKeys: ["Commuting_shuttle_1"],
    link: {
      href: "https://last-minute.canaryshuttle.com/",
      beforeKey: "Commuting_shuttle_2",
      labelKey: null,
      label: "Canary Shuttle",
      afterKey: "Commuting_shuttle_3",
    },
  },
  {
    id: "taxi",
    name: "Taxi",
    typeKey: "Transport_taxi",
    icon: "local_taxi",
    image: taxiStand,
    price: "80 €",
    priceLabelKey: "Commuting_taxi_3",
    bodyKeys: ["Commuting_taxi_1", "Commuting_taxi_2"],
  },
  {
    id: "hire",
    name: "Car hire",
    typeKey: "Transport_car_hire",
    icon: "directions_car",
    priceKey: "Commuting_hire_4",
    priceLabelKey: "Commuting_hire_3",
    companies: [
      "AutoReisen",
      "Avis",
      "Cicar",
      "Europcar",
      "Hertz",
      "Sixt",
      "TopCar",
      "Goldcar-InterRent",
      "Payless",
    ],
  },
];

function Commuting() {
  const { t } = useTranslation();

  return (
    <div className="page commuting">
      <div className="page-head">
        <div className="page-head__inner">
          <p className="page-head__eyebrow">{t("Commuting_eyebrow")}</p>
          <h1 className="page-head__title">{t("Commuting_title")}</h1>
          <div className="page-head__lead">
            <Trans i18nKey="Commuting_info" />
          </div>
        </div>
      </div>

      <div className="u-container commuting__body">
        <figure className="commuting__map">
          <img
            src={airportMap}
            alt={t("Commuting_map_alt")}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{t("Commuting_map_caption")}</figcaption>
        </figure>

        <div className="transport-grid">
          {OPTIONS.map((option) => (
            <article className="transport" key={option.id}>
              {option.image && (
                <div className="transport__media">
                  <img
                    src={option.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              <div className="transport__body">
                <div className="transport__head">
                  <span
                    className="transport__icon material-icons-outlined"
                    aria-hidden="true"
                  >
                    {option.icon}
                  </span>
                  <div>
                    <p className="transport__type">{t(option.typeKey)}</p>
                    <h2 className="transport__name">{option.name}</h2>
                  </div>
                </div>

                <div className="transport__text">
                  {option.bodyKeys?.map((key) => (
                    <p key={key}>
                      <Trans i18nKey={key} />
                    </p>
                  ))}

                  {option.link && (
                    <p>
                      <Trans i18nKey={option.link.beforeKey} />{" "}
                      <a
                        className="transport__link"
                        href={option.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {option.link.labelKey
                          ? t(option.link.labelKey)
                          : option.link.label}
                      </a>
                      {option.link.afterKey && (
                        <>
                          {" "}
                          <Trans i18nKey={option.link.afterKey} />
                        </>
                      )}
                    </p>
                  )}

                  {option.id === "hire" && (
                    <p>
                      <Trans i18nKey="Commuting_hire_1a" />
                      <span className="transport__pin">P</span>
                      <Trans i18nKey="Commuting_hire_1b" />
                    </p>
                  )}

                  {option.companies && (
                    <>
                      <p>
                        <Trans i18nKey="Commuting_hire_2" />
                      </p>
                      <ul className="transport__companies">
                        {option.companies.map((company) => (
                          <li key={company}>{company}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="transport__price">
                  <span className="transport__price-label">
                    <Trans i18nKey={option.priceLabelKey} />
                  </span>
                  <span className="transport__price-value">
                    {option.price || <Trans i18nKey={option.priceKey} />}
                  </span>
                  {option.id === "hire" && (
                    <span className="transport__price-note">
                      <Trans i18nKey="Commuting_hire_5" />
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Commuting;
