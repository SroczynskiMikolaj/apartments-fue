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
          <a href="mailto:coloresdefuerteventure@gmail.com">
            coloresdefuerteventure@gmail.com
          </a>
        </div>
        <div className="footer-text">
          {t("Telephone")}:<div>+34 697 30 89 89</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
