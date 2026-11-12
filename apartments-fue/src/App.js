import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.scss";
import ReactGA from "react-ga4";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Apartment from "./components/Apartment";
import Apartments from "./components/Apartments";
import Sightseeing from "./components/Sightseeing";
import Fuerteventura from "./components/Fuerteventura";
import Climate from "./components/Climate";
import Commuting from "./components/Commuting";
import CookiePopup from "./components/CookiePopup";
import Restaurants from "./components/Restaurants";
import ScrollToTop from "./components/ScrollToTop";
import { APARTMENTS } from "./data/apartments";

function App() {
  const [cookieConsent, setCookieConsent] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (cookieConsent) {
      ReactGA.initialize("G-KDXMFGTPCD");
    }
  }, [cookieConsent]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div className="App">
        <a className="skip-link" href="#main">
          {t("Skip_to_content")}
        </a>
        <Header />
        <main id="main" className="app-main">
          <AnalyticsWrapper cookieConsent={cookieConsent}>
            <Routes>
              <Route path="/" element={<Home />} />
              {APARTMENTS.map((apartment) => (
                <Route
                  key={apartment.slug}
                  path={`/${apartment.slug}`}
                  element={<Apartment apartment={apartment} />}
                />
              ))}
              <Route path="/Apartments" element={<Apartments />} />
              <Route path="/Sightseeing" element={<Sightseeing />} />
              <Route path="/Restaurants" element={<Restaurants />} />
              <Route path="/Fuerteventura" element={<Fuerteventura />} />
              <Route path="/Climate" element={<Climate />} />
              <Route path="/Commuting" element={<Commuting />} />
            </Routes>
          </AnalyticsWrapper>
        </main>
        <Footer />
        <CookiePopup setCookieConsent={setCookieConsent} />
      </div>
    </Router>
  );
}

function AnalyticsWrapper({ children, cookieConsent }) {
  const location = useLocation();

  useEffect(() => {
    if (cookieConsent) {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }
  }, [location, cookieConsent]);

  return <>{children}</>;
}

export default App;
