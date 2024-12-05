// CookiePopup.js
import React, { useState, useEffect } from "react";
import "../styles/CookiePopup.scss";
import { useTranslation, Trans } from "react-i18next";

const CookiePopup = ({ setCookieConsent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("hasAcceptedCookies");
    if (!hasAcceptedCookies) {
      setIsOpen(true);
    } else if (hasAcceptedCookies === "true") {
      setCookieConsent(true);
    }
  }, [setCookieConsent]);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("hasAcceptedCookies", "false");
    setCookieConsent(false);
  };

  const acceptCookies = () => {
    setIsOpen(false);
    localStorage.setItem("hasAcceptedCookies", "true");
    setCookieConsent(true);
  };

  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup-cookies-content">
          <div className="close-button-wrapper">
            <button className="cookies-close-button" onClick={closePopup}>
              X
            </button>
          </div>
          <h2>{t("Privacy_respect")}</h2>
          <div>
            <Trans i18nKey="Cookies_consent" 
            components={{
                webpage: <b>fuerteventuracostacalma.eu</b>,
              }}/>
          </div>
          <div className="popup-buttons-wrapper">
            <button className="cookies-accept-button" onClick={acceptCookies}>
            {t("Accept")}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookiePopup;
