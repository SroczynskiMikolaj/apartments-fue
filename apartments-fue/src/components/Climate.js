import { useTranslation, Trans } from "react-i18next";
import "../styles/styles.scss";
import i18n from "i18next";
import "../styles/Climate.scss";
import WeatherChart from "./WeatherChart.js"
function Climate() {
  const { t } = useTranslation();

  return (
    <div className="climate-container">
      <div className="container">
        <div className="climate-title">
          <div>{t("Climate_title")}</div>
        </div>
        <div className="climate-descriptions-container">
          <div>
          <Trans i18nKey="Climate_description_1" 
            components={{
              }}/>
          </div>
          <div className="">
          <Trans i18nKey="Climate_description_2" 
            components={{
              }}/>
          </div>
          <div>
          <Trans i18nKey="Climate_description_3" 
            components={{
              }}/>
          </div>
        </div>
        <div className="weather-chart">
          <WeatherChart></WeatherChart>
        </div>
        <div className="four-seasons">
          <div className="season-header">{t("Spring")}</div>
          <div className="season-text">
            <ul>
              <li>
              <Trans i18nKey="Spring_text_1" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Spring_text_2" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Spring_text_3" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Spring_text_4" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Spring_text_5" 
            components={{
              }}/>
              </li>
            </ul>
          </div>
          <div className="season-header">{t("Summer")}</div>
          <div className="season-text">
          <ul>
              <li>
              <Trans i18nKey="Summer_text_1" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Summer_text_2" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Summer_text_3" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Summer_text_4" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Summer_text_5" 
            components={{
              }}/>
              </li>
            </ul>
          </div>

          <div className="season-header">{t("Autumn")}</div>
          <div className="season-text">
          <ul>
              <li>
              <Trans i18nKey="Autumn_text_1" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Autumn_text_2" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Autumn_text_3" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Autumn_text_4" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Autumn_text_5" 
            components={{
              }}/>
              </li>
            </ul>
          </div>

          <div className="season-header">{t("Winter")}</div>
          <div className="season-text">
          <ul>
              <li>
              <Trans i18nKey="Winter_text_1" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Winter_text_2" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Winter_text_3" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Winter_text_4" 
            components={{
              }}/>
              </li>
              <li>
              <Trans i18nKey="Winter_text_5" 
            components={{
              }}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Climate;
