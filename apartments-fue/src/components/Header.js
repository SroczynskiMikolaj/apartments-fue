import { useTranslation } from "react-i18next";
import "../styles/Header.scss";
import logo from "../assets/logo3.png";
import logo_title from "../assets/logo3_title.png";
import { useEffect, useRef, useState } from "react";
import i18n from "i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import { PL, GB, DE, ES, IT, DK } from "country-flag-icons/react/3x2";

// Declared once and rendered twice (desktop bar + mobile drawer). The old
// header hand-wrote both copies, so every nav change had to be made twice.
const NAV_ITEMS = [
  { to: "/", labelKey: "About_us" },
  { to: "/Apartments", labelKey: "Nav_apartments" },
  { to: "/Sightseeing", labelKey: "Sightseeing" },
  { to: "/Climate", labelKey: "Climate" },
  { to: "/Restaurants", labelKey: "Restaurants" },
  { to: "/Commuting", labelKey: "Commuting" },
  // Same "Island" key and route the footer already links to.
  { to: "/Fuerteventura", labelKey: "Island" },
];

const LANGUAGES = [
  { code: "en", Flag: GB, label: "English" },
  { code: "pl", Flag: PL, label: "Polski" },
  { code: "de", Flag: DE, label: "Deutsch" },
  { code: "es", Flag: ES, label: "Español" },
  { code: "it", Flag: IT, label: "Italiano" },
  // ISO 639-1 for Danish is "da"; "dk" is the *country* code. The i18n
  // resources are keyed "da" so browser detection works for Danish users.
  { code: "da", Flag: DK, label: "Dansk" },
];

function Header() {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    i18n.resolvedLanguage || i18n.language
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const location = useLocation();

  // The home page opens on a full-bleed photo, so the header sits
  // transparently over it until the user scrolls past the hero.
  const overHero = location.pathname === "/" && !scrolled && !menuOpen;

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    setMenuOpen(false);
  };

  // Keep the state in sync when the language changes from elsewhere
  // (e.g. i18next finishing its initial detection).
  useEffect(() => {
    const onChanged = (lng) => setCurrentLanguage(lng);
    i18n.on("languageChanged", onChanged);
    return () => i18n.off("languageChanged", onChanged);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on outside click or Escape, and return focus to the
  // toggle so keyboard users aren't dropped at the top of the document.
  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // Close the drawer whenever navigation happens.
  useEffect(() => setMenuOpen(false), [location.pathname]);

  const renderNav = (variant) => (
    <nav
      className={`nav nav--${variant}`}
      aria-label={t("Primary_navigation")}
    >
      {NAV_ITEMS.map(({ to, labelKey }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            `nav__link${isActive ? " is-active" : ""}`
          }
          // The pathname effect below closes the drawer on navigation, but
          // tapping the link for the page you're already on doesn't change
          // the pathname — so close here too.
          onClick={() => setMenuOpen(false)}
        >
          {t(labelKey)}
        </NavLink>
      ))}
    </nav>
  );

  const renderLanguages = (variant) => (
    <div className={`langs langs--${variant}`}>
      <span className="u-visually-hidden" id={`lang-label-${variant}`}>
        {t("Choose_language")}
      </span>
      <div
        className="langs__list"
        role="group"
        aria-labelledby={`lang-label-${variant}`}
      >
        {LANGUAGES.map(({ code, Flag, label }) => {
          const selected = currentLanguage === code;
          return (
            <button
              key={code}
              type="button"
              lang={code}
              className={`lang${selected ? " is-selected" : ""}`}
              aria-pressed={selected}
              title={label}
              onClick={() => changeLanguage(code)}
            >
              <span className="lang__flag" aria-hidden="true">
                <Flag />
              </span>
              <span className="lang__code">{code.toUpperCase()}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <header
      ref={headerRef}
      className={[
        "site-header",
        overHero ? "is-over-hero" : "",
        scrolled ? "is-scrolled" : "",
        menuOpen ? "is-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="site-header__inner">
        <Link className="brand" to="/">
          <img className="brand__mark" src={logo} alt="" width="48" height="48" />
          <img
            className="brand__word"
            src={logo_title}
            alt="Colores de Fuerteventura"
          />
        </Link>

        <div className="site-header__desktop">
          {renderNav("bar")}
          {renderLanguages("bar")}
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t("Close_menu") : t("Open_menu")}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
        </button>
      </div>

      {/* Always in the DOM and toggled with [hidden], so the drawer is wired
          to aria-controls on the toggle whether it's open or not. */}
      <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
        {renderNav("drawer")}
        <div className="mobile-menu__rule" />
        {renderLanguages("drawer")}
      </div>
    </header>
  );
}

export default Header;
