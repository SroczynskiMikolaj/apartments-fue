import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";
import logo from "../assets/logo3.png";

const FOOTER_LINKS = [
  { to: "/", labelKey: "About_us" },
  { to: "/Apartments", labelKey: "Nav_apartments" },
  { to: "/Sightseeing", labelKey: "Sightseeing" },
  { to: "/Climate", labelKey: "Climate" },
  { to: "/Restaurants", labelKey: "Restaurants" },
  { to: "/Commuting", labelKey: "Commuting" },
  { to: "/Fuerteventura", labelKey: "Island" },
];

const PHONE = "+34 697 30 89 89";
const EMAIL = "coloresdefuerteventure@gmail.com";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src={logo} alt="" width="52" height="52" />
          <p className="site-footer__tagline">{t("Footer_tagline")}</p>
        </div>

        <nav className="site-footer__nav" aria-label={t("Footer_navigation")}>
          <h2 className="site-footer__heading">{t("Footer_explore")}</h2>
          <ul>
            {FOOTER_LINKS.map(({ to, labelKey }) => (
              <li key={to}>
                <Link to={to}>{t(labelKey)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <h2 className="site-footer__heading">{t("Contact_us")}</h2>
          <p className="site-footer__host">{t("Host")}</p>
          <ul>
            <li>
              <span className="material-icons-outlined" aria-hidden="true">
                mail
              </span>
              {/* Real mailto/tel links so they're tappable on a phone. */}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <span className="material-icons-outlined" aria-hidden="true">
                call
              </span>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
            </li>
            <li>
              <span className="material-icons-outlined" aria-hidden="true">
                place
              </span>
              <span>Costa Calma, Fuerteventura</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__base">
        <p>
          © {new Date().getFullYear()} Colores de Fuerteventura ·
          fuerteventuracostacalma.eu
        </p>
      </div>
    </footer>
  );
}

export default Footer;
