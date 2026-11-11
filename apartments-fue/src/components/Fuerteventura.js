import { useTranslation, Trans } from "react-i18next";
import "../styles/Fuerteventura.scss";

/**
 * Long-form article about the island.
 *
 * The previous version held 183 lines of Polish copy hardcoded in JSX with
 * no t() calls, so it showed Polish to every visitor regardless of the
 * selected language. The copy now lives in the i18n resources; `paras` is
 * how many paragraph keys each section has.
 */
const SECTIONS = [
  { id: "intro", paras: 1 },
  { id: "facts", paras: 1 },
  { id: "access", paras: 2 },
  { id: "discover", paras: 1 },
  { id: "history", paras: 1 },
  { id: "settlers", paras: 1 },
  { id: "conquest", paras: 2 },
  { id: "pirates", paras: 1 },
  { id: "nineteenth", paras: 1 },
  { id: "twentieth", paras: 2 },
];

const WHY_POINTS = ["Island_why_1", "Island_why_2", "Island_why_3"];

function Fuerteventura() {
  const { t } = useTranslation();

  return (
    <div className="page island">
      <div className="page-head">
        <div className="page-head__inner">
          <p className="page-head__eyebrow">{t("Island_eyebrow")}</p>
          <h1 className="page-head__title">{t("Island_title")}</h1>
          <p className="page-head__lead">{t("Island_lead")}</p>
        </div>
      </div>

      <article className="u-container island__body">
        {SECTIONS.map(({ id, paras }) => (
          <section className="island__section" key={id}>
            <h2 className="island__heading">{t(`Island_${id}_title`)}</h2>
            {Array.from({ length: paras }, (_, i) => (
              <p key={i}>
                <Trans i18nKey={`Island_${id}_p${i + 1}`} />
              </p>
            ))}
          </section>
        ))}

        <section className="island__section">
          <h2 className="island__heading">{t("Island_why_title")}</h2>
          <ol className="island__why">
            {WHY_POINTS.map((key) => (
              <li key={key}>
                <Trans i18nKey={key} />
              </li>
            ))}
          </ol>
        </section>

        <aside className="island__closing">
          <h2>{t("Island_closing_title")}</h2>
          <p>{t("Island_closing_p1")}</p>
        </aside>
      </article>
    </div>
  );
}

export default Fuerteventura;
