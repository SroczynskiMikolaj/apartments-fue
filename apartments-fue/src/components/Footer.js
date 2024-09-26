import { useTranslation } from "react-i18next";
import "../styles/Footer.scss";
import "../styles/styles.scss";
function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer-container">
      <div className="text">
        <div className="contact-us">{t("Contact_us")}</div>
        <div>{t("Host")}</div>
        <div className="footer-text">
          {t("Mail")}: 
          <div>
          fuerteventura@gmail.com
          </div>

        </div>
        <div className="footer-text">
          {t("Telephone")}:
          <div>
            +48
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
