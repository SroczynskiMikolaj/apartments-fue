import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation, Trans } from "react-i18next";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import "../styles/Apartment.scss";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { useNavigate } from "react-router-dom";
import i18n from "i18next";
import Facilities from "./Facilities";
import Furnishings from "./Furnishings";
import Map27 from "./Map27";
import Map23 from "./Map23";
import "material-icons/iconfont/material-icons.css";

function Apartment(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup
  const mainSwiperRef = useRef(null);
  const navigate = useNavigate();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="apartment-container">
      <div className="back-button" onClick={handleClick}>
        <span className="material-icons-outlined">chevron_left</span>
        {t("Back")}
      </div>

      <div className="swipers-container">
        {/* Trigger popup on click */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          className="mySwiper2"
          onClick={openPopup}
        >
          {props.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          loop={true}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {props.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-button" onClick={closePopup}>
              &times;
            </span>

            {/* Swiper inside the popup */}
            <Swiper
              ref={mainSwiperRef}
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              loop={true}
              navigation={true}
              pagination={{ clickable: true }}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs, Pagination]}
              className="popupSwiper"
            >
              {props.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <div className="apartment-text-container">
        <div className="apartment-header-container">
          <div className="apartment-name">{props.title}</div>
          <div id="airbnb-btn" className="airbnb-button">
            {props.number === 27 ? (
              <a className="airbnb-link" href="https://www.airbnb.pl/rooms/863722242925772929?guests=1&adults=1&s=67&unique_share_id=69fe8b66-b848-4380-bbb2-3aadfcd052ba">
                {t("Airbnb_reservation")}
              </a>
            ) : (
              <a className="airbnb-link" href="https://www.airbnb.pl/rooms/30067044?guests=1&adults=1&s=67&unique_share_id=df41e7ba-2cca-4db9-acfc-323f7cb93021">
                {t("Airbnb_reservation")}
              </a>
            )}
          </div>
        </div>

        <Facilities
          people={props.people}
          beds={props.beds}
          surface={props.surface}
        />

        <div className="apartment-description">
          {props.number === 27 ? (
            <div className="apartment-description-container">
              <div>
                <Trans i18nKey="Apartment_1_description" />
              </div>
              <div className="description-header-text">
                <div>{t("Apartment_header_text")}</div>
              </div>
              <div>
                <Trans i18nKey="Apartment_1_description_2" />
              </div>
              <div className="description-header-text">
                <div>{t("Apartment_header_text_2")}</div>
              </div>
              <div>
                <Trans i18nKey="Apartment_1_description_3" />
              </div>
            </div>
          ) : (
            <div className="apartment-description-container">
              <div>
                <Trans i18nKey="Apartment_2_description" />
              </div>
              <div className="description-header-text">
                <div>{t("Apartment_header_text")}</div>
              </div>
              <div>
                <Trans i18nKey="Apartment_2_description_2" />
              </div>
              <div className="description-header-text">
                <div>{t("Apartment_header_text_2")}</div>
              </div>
              <div>
                <Trans i18nKey="Apartment_2_description_3" />
              </div>
            </div>
          )}
        </div>

        <div className="apartment-furnishings-name">{t("Furnishings")}</div>

        <div className="apartment-furnishings-map">
          <Furnishings />
          {props.number === 27 ? <Map27 /> : <Map23 />}
        </div>
        <div className="apartment-reservation-container">
          <div className="reservation-header-text">
            <div>{t("Apartment_reservation_header")}</div>
            <div id="airbnb-btn" className="airbnb-button">
              {props.number === 27 ? (
                <a className="airbnb-link" href="https://www.airbnb.pl/rooms/863722242925772929?guests=1&adults=1&s=67&unique_share_id=69fe8b66-b848-4380-bbb2-3aadfcd052ba">
                  {t("Airbnb_reservation")}
                </a>
              ) : (
                <a className="airbnb-link" href="https://www.airbnb.pl/rooms/30067044?guests=1&adults=1&s=67&unique_share_id=df41e7ba-2cca-4db9-acfc-323f7cb93021">
                  {t("Airbnb_reservation")}
                </a>
              )}
            </div>
          </div>
          <div className="reservation-description">
            <div className="text">
              {props.number === 27 ? (
                <p>{t("Apartment_1_reservation_1")}</p>
              ) : (
                <p>{t("Apartment_2_reservation_1")}</p>
              )}
            </div>
            <div className="text">
              <p>{t("Apartment_1_reservation_2")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apartment;
