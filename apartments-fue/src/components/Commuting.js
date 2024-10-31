import "../styles/Commuting.scss";
import "../styles/styles.scss";
import { useTranslation, Trans } from "react-i18next";
import airport_map from "../assets/airport-map.png";
import taxi_stand from "../assets/taxi-stand.jpeg";
import cannary_shuttle from "../assets/cannary_shuttle_1.jpeg";
import tiadhe from "../assets/tialdhe.jpg";
function Commuting() {
  const { t } = useTranslation();

  return (
    <div className="commuting-container">
      <div className="commuting-intro">
        <Trans i18nKey="Commuting_info" components={{}} />
      </div>
      <div className="commuting-map">
        <img src={airport_map} alt="airport-map" />
      </div>
      <div className="types-of-transport">
        <div className="card">
          <div className="title">Public bus - Tiadhe</div>
          <div className="card-description tiadhe-description">
            <div>
              <Trans i18nKey="Commuting_tiadhe_1" components={{}} />
            </div>
            <div>
              <Trans i18nKey="Commuting_tiadhe_2" components={{}} />
              <a className="link" href="https://tiadhe.com/en/line-10/">
                <Trans i18nKey="Commuting_tiadhe_3" components={{}} />
              </a>
            </div>
            <div className="price-container">
              <Trans i18nKey="Commuting_tiadhe_4" components={{}} />
              <div className="price">
                <Trans i18nKey="Commuting_tiadhe_5" components={{}} />
              </div>
            </div>
            <img className="tiadhe" src={tiadhe} alt="tiadhe" />
          </div>
        </div>
        <div className="card">
          <div className="title">Bus shuttle</div>
          <div className="card-description shuttle-description">
            <div>
              <Trans i18nKey="Commuting_shuttle_1" components={{}} />
            </div>
            <div>
              <Trans i18nKey="Commuting_shuttle_2" components={{}} />{" "}
              <a className="link" href="https://last-minute.canaryshuttle.com/">
                Canary Shuttle
              </a>{" "}
              <Trans i18nKey="Commuting_shuttle_3" components={{}} />
            </div>
            <div className="price-container">
              <Trans i18nKey="Commuting_shuttle_4" components={{}} />
              <div className="price">
                <Trans i18nKey="Commuting_shuttle_5" components={{}} />
              </div>
            </div>
            <img
              className="shuttle"
              src={cannary_shuttle}
              alt="cannary shuttle"
            />
          </div>
        </div>
        <div className="card">
          <div className="title">Taxi</div>
          <div className="card-description taxi-description">
            <div>
              <Trans i18nKey="Commuting_taxi_1" components={{}} />
            </div>
            <div>
              <Trans i18nKey="Commuting_taxi_2" components={{}} />
            </div>
            <div className="price-container">
              <Trans i18nKey="Commuting_taxi_3" components={{}} />
              <div className="price">80 €</div>
            </div>
            <img className="taxi" src={taxi_stand} alt="taxi-stand" />
          </div>
        </div>
        <div className="card">
          <div className="title">Car hire</div>
          <div className="card-description">
            <Trans i18nKey="Commuting_hire_1a" components={{}} />
            <span className="hire-p">P</span>
            <Trans i18nKey="Commuting_hire_1b" components={{}} />
            <div>
              <Trans i18nKey="Commuting_hire_2" components={{}} />
            </div>
            <ul className="car-hire-list">
              <li>AutoReisen</li>
              <li>Avis</li>
              <li>Cicar</li>
              <li>Europcar</li>
              <li>Hertz</li>
              <li>Sixt</li>
              <li>TopCar</li>
              <li>Goldcar-InterRent</li>
              <li>Payless</li>
            </ul>
            <div className="price-container">
              <Trans i18nKey="Commuting_hire_3" components={{}} />
              <div className="price">
                <Trans i18nKey="Commuting_hire_4" components={{}} />
              </div>
              <Trans i18nKey="Commuting_hire_5" components={{}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commuting;
