import { useState, useEffect } from "react";
import "../styles/CookiePopup.scss";
import { useTranslation, Trans } from "react-i18next";

const STORAGE_KEY = "hasAcceptedCookies";

const CookiePopup = ({ setCookieConsent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === null) {
      setIsOpen(true);
    } else if (stored === "true") {
      setCookieConsent(true);
    }
  }, [setCookieConsent]);

  const decide = (accepted) => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, String(accepted));
    setCookieConsent(accepted);
  };

  if (!isOpen) return null;

  return (
    // A bottom sheet rather than a full-screen dimmed overlay. The old
    // version blacked out the whole page at 80% opacity on first visit,
    // so the first thing a visitor saw was a modal, not the apartments.
    <div
      className="cookie-bar"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
    >
      <div className="cookie-bar__inner">
        <div className="cookie-bar__text">
          <h2 className="cookie-bar__title" id="cookie-title">
            {t("Privacy_respect")}
          </h2>
          <p>
            <Trans
              i18nKey="Cookies_consent"
              components={{
                webpage: <b>fuerteventuracostacalma.eu</b>,
              }}
            />
          </p>
        </div>

        <div className="cookie-bar__actions">
          {/* Both choices are explicit and equally prominent. Previously
              declining meant finding an "X" styled as a red close icon. */}
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => decide(false)}
          >
            {t("Decline")}
          </button>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => decide(true)}
          >
            {t("Accept")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;
