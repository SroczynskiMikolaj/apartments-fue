import { Fragment, useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation, Trans } from "react-i18next";
import { FreeMode, Keyboard, Navigation, Thumbs, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import "../styles/Apartment.scss";
import Facilities from "./Facilities";
import Furnishings from "./Furnishings";
import ApartmentMap from "./ApartmentMap";
import RatingBadge from "./RatingBadge";

function Apartment({ apartment }) {
  const { t } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const {
    title,
    shortTitleKey,
    images,
    people,
    beds,
    baths,
    surface,
    airbnbUrl,
    mapEmbedSrc,
    description,
    reservationKey,
    rating,
  } = apartment;

  const isLightboxOpen = lightboxIndex !== null;
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  // Escape closes the lightbox, and the page behind it stops scrolling
  // while it's open. Neither worked before.
  useEffect(() => {
    if (!isLightboxOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isLightboxOpen, closeLightbox]);

  const bookButton = (className) => (
    <a
      className={className}
      href={airbnbUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("Airbnb_reservation")}
      <span className="material-icons-outlined" aria-hidden="true">
        open_in_new
      </span>
    </a>
  );

  // "Check your dates" card. Rendered twice: at the top of the right column
  // and again at the end of the description.
  const bookingCard = () => (
    <div className="booking-panel__card">
      <div className="booking-panel__intro">
        <p className="u-eyebrow">{t(shortTitleKey)}</p>
        <p className="booking-panel__title">{t("Booking_panel_title")}</p>
        <p className="booking-panel__text">{t("Booking_panel_text")}</p>
      </div>
      <div className="booking-panel__actions">
        {bookButton("btn btn--primary booking-panel__btn")}
        <dl className="booking-panel__meta">
          <div>
            <dt>{t("Hero_fact_guests_label")}</dt>
            <dd>{people}</dd>
          </div>
          <div>
            <dt>{t("Booking_panel_size")}</dt>
            <dd>{surface} m²</dd>
          </div>
        </dl>
      </div>
    </div>
  );

  return (
    <div className="apartment page">
      {/* ---- Header band ---- */}
      <div className="apartment__head">
        <div className="apartment__head-inner">
          <Link className="back-link" to="/">
            <span className="material-icons-outlined" aria-hidden="true">
              chevron_left
            </span>
            {t("Back")}
          </Link>

          <div className="apartment__titles">
            <p className="u-eyebrow apartment__eyebrow">
              {t("Apartment_location_eyebrow")}
            </p>
            <div className="apartment__title-row">
              <h1 className="apartment__name">{title}</h1>
              <RatingBadge rating={rating} />
            </div>
          </div>

          <Facilities
            people={people}
            beds={beds}
            baths={baths}
            surface={surface}
          />
        </div>
      </div>

      {/* ---- Gallery ---- */}
      <div className="gallery u-container">
        <Swiper
          spaceBetween={12}
          loop
          navigation
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Pagination, Keyboard]}
          className="gallery__main"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              {/* A real button, so the lightbox opens from the keyboard too.
                  Previously onClick sat on the Swiper root, which meant
                  clicking the next/prev arrows also opened the lightbox. */}
              <button
                type="button"
                className="gallery__open"
                onClick={() => setLightboxIndex(index)}
                aria-label={t("Gallery_open_photo", { number: index + 1 })}
              >
                <img
                  src={image}
                  alt={t("Gallery_photo_alt", {
                    name: title,
                    number: index + 1,
                  })}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <span className="gallery__zoom material-icons-outlined" aria-hidden="true">
                  zoom_out_map
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          breakpoints={{
            640: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="gallery__thumbs"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt="" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ---- Lightbox ---- */}
      {isLightboxOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t("Gallery_lightbox_label", { name: title })}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label={t("Close")}
            autoFocus
          >
            <span className="material-icons-outlined" aria-hidden="true">
              close
            </span>
          </button>

          {/* Stop propagation so clicking the photo or the arrows doesn't
              fall through to the overlay's close handler. */}
          <div className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
            <Swiper
              initialSlide={lightboxIndex}
              spaceBetween={16}
              loop
              navigation
              keyboard={{ enabled: true }}
              pagination={{ clickable: true, type: "fraction" }}
              modules={[Navigation, Pagination, Keyboard]}
              className="lightbox__swiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={t("Gallery_photo_alt", {
                      name: title,
                      number: index + 1,
                    })}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {/* ---- Description + right column ---- */}
      <div className="apartment__content u-container">
        <div className="apartment__main">
          <section className="apartment__section">
            {/* Intro, any number of headed sections, closing line — the
                shape comes from `description` in data/apartments.js and the
                text from i18n/apartment23.js / apartment27.js. */}
            <div className="u-prose apartment__description">
              <p className="apartment__intro">
                <Trans i18nKey={`${description.prefix}_intro`} />
              </p>

              {description.sections.map((paragraphs, index) => {
                const key = `${description.prefix}_s${index + 1}`;
                return (
                  <Fragment key={key}>
                    <h2 className="apartment__subhead">{t(`${key}_title`)}</h2>
                    {Array.from({ length: paragraphs }, (_, p) => (
                      <p key={p}>
                        <Trans i18nKey={`${key}_p${p + 1}`} />
                      </p>
                    ))}
                  </Fragment>
                );
              })}

              <p className="apartment__closing">
                <Trans i18nKey={`${description.prefix}_closing`} />
              </p>
            </div>
          </section>

          <section className="apartment__section">
            <h2 className="apartment__section-title">
              {t("Apartment_reservation_header")}
            </h2>
            <div className="u-prose">
              <p>{t(reservationKey)}</p>
              <p>{t("Apartment_1_reservation_2")}</p>
            </div>

            {/* The same card again where the reading ends, so nobody has to
                scroll back up to book. Shown on every screen size — on
                phones it's the natural next step after the last paragraph. */}
            <div className="booking-end">{bookingCard()}</div>
          </section>
        </div>

        {/* Right column: booking card, then amenities and the map, so the
            long description has the facts beside it rather than after it.
            Below 1024px the columns stack and only the booking card hides —
            the bottom booking bar takes over its job there. */}
        <aside className="apartment__aside">
          <div className="booking-panel">{bookingCard()}</div>

          <section className="aside-card">
            <h2 className="aside-card__title">{t("Furnishings")}</h2>
            <Furnishings />
          </section>

          <section className="aside-card">
            <h2 className="aside-card__title">{t("Map_heading")}</h2>
            <ApartmentMap
              src={mapEmbedSrc}
              title={t("Map_title_named", { name: title })}
            />
          </section>
        </aside>
      </div>

      {/* Mobile booking bar — the sticky sidebar collapses away below 1024px. */}
      <div className="booking-bar">
        <div className="booking-bar__label">
          <strong>{t(shortTitleKey)}</strong>
          <span>{t("Booking_bar_meta", { guests: people, surface })}</span>
        </div>
        {bookButton("btn btn--primary")}
      </div>
    </div>
  );
}

export default Apartment;
