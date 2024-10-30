import { useTranslation } from "react-i18next";
import "../styles/Header.scss";
import "../styles/styles.scss";
import logo from "../assets/logo3.png";
import logo_title from "../assets/logo3_title.png";
import { useEffect, useState } from 'react';
import i18n from 'i18next';
import { useNavigate } from 'react-router-dom';
import { PL, GB, DE, ES } from 'country-flag-icons/react/3x2';

function Header() {
    const { t } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [menuOpen, setMenuOpen] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setCurrentLanguage(lang);
        setMenuOpen(false); // Close the menu after changing the language
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
        setMenuOpen(false); // Close the menu after navigating
    };

    const navigate_sightseeing = () => {
        navigate("/Sightseeing");
        setMenuOpen(false);
    };

    const navigate_climate = () => {
        navigate("/Climate");
        setMenuOpen(false);
    };

    const navigate_fuerteventura = () => {
        navigate("/Fuerteventura");
        setMenuOpen(false);
    };

    const navigate_commuting = () => {
        navigate("/Commuting");
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuOpen && !event.target.closest('.header-container')) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [menuOpen]);

    return (
        <div className="header-container">
            <div className="logo-container" onClick={handleClick}>
                <div className="logo">
                    <img src={logo} alt="Costa Calma Apartments" />
                </div>
                <div className="title">
                    <div className="logo_title">
                        <img src={logo_title} alt="Costa Calma Apartments" />
                    </div>
                </div>
            </div>

            <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className={`navigation ${menuOpen ? 'open' : ''}`}>
                <div onClick={handleClick}>{t("About_us")}</div>
                <div onClick={navigate_sightseeing}>{t("Sightseeing")}</div>
                <div onClick={navigate_climate}>{t("Climate")}</div>
                {/* <div onClick={navigate_fuerteventura}>{t("Fuerteventura")}</div> */}
                <div onClick={navigate_commuting}>{t("Commuting")}</div>
            </div>

            <div className="languages">
                {[
                    { code: 'en', flag: <GB /> },
                    { code: 'pl', flag: <PL /> },
                    { code: 'de', flag: <DE /> },
                    { code: 'es', flag: <ES /> }
                ].map(({ code, flag }) => (
                    <div
                        key={code}
                        className={`language-option ${currentLanguage === code ? 'selected' : ''}`}
                        onClick={() => changeLanguage(code)}
                    >
                        <span className="flag">{flag}</span>
                        {code.toUpperCase()}
                    </div>
                ))}
            </div>
            {menuOpen && (
                <div className="popup-menu">
                    <div className="navigation">
                        <div onClick={handleClick}>{t("About_us")}</div>
                        <div onClick={navigate_sightseeing}>{t("Sightseeing")}</div>
                        <div onClick={navigate_climate}>{t("Climate")}</div>
                        {/* <div onClick={navigate_fuerteventura}>{t("Fuerteventura")}</div> */}
                        <div onClick={navigate_commuting}>{t("Commuting")}</div>
                    </div>
                    <div className="languages">
                        {[
                            { code: 'en', flag: <GB /> },
                            { code: 'pl', flag: <PL /> },
                            { code: 'de', flag: <DE /> },
                            { code: 'es', flag: <ES /> }
                        ].map(({ code, flag }) => (
                            <div
                                key={code}
                                className={`language-option ${currentLanguage === code ? 'selected' : ''}`}
                                onClick={() => changeLanguage(code)}
                            >
                                <span className="flag">{flag}</span>
                                {code.toUpperCase()}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
