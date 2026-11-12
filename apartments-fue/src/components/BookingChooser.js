import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import RatingBadge from "./RatingBadge";
import { APARTMENTS } from "../data/apartments";
import "../styles/BookingChooser.scss";

/**
 * "Book on Airbnb" for places that aren't about one specific apartment.
 *
 * It used to link straight to apartment 23's listing, so anyone wanting 27
 * had to find it some other way. Now the button opens a small list of both
 * listings in place; picking one opens Airbnb. Two clicks to Airbnb, no
 * page change in between.
 *
 * A plain disclosure (button + list of links), not an ARIA menu: the items
 * are ordinary links and should behave like them for screen readers.
 */
function BookingChooser({ className = "", placement = "up" }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`booking-chooser booking-chooser--${placement} ${className}`}
    >
      <button
        ref={buttonRef}
        type="button"
        className="btn btn--primary"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        {t("Airbnb_reservation")}
        <span
          className={`material-icons-outlined booking-chooser__caret${open ? " is-open" : ""}`}
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>

      <div className="booking-chooser__panel" id={listId} hidden={!open}>
        <p className="booking-chooser__title">{t("Book_choose_title")}</p>
        <ul className="booking-chooser__list">
          {APARTMENTS.map((apartment) => (
            <li key={apartment.slug}>
              <a
                className="booking-chooser__option"
                href={apartment.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <img
                  className="booking-chooser__thumb"
                  src={apartment.images[0]}
                  alt=""
                  loading="lazy"
                />
                <span className="booking-chooser__name">
                  <strong>{t(apartment.shortTitleKey)}</strong>
                  <RatingBadge rating={apartment.rating} />
                </span>
                <span
                  className="material-icons-outlined booking-chooser__out"
                  aria-hidden="true"
                >
                  open_in_new
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BookingChooser;
