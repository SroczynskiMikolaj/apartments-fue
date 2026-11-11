import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "../assets/marker.png";
import "../styles/MapExplorer.scss";

/**
 * Map + detail panel, shared by Sightseeing and Restaurants.
 *
 * Those two pages previously carried their own copies of this markup and
 * state, including a dead `handleClick`/`useNavigate` pair neither used.
 *
 * `filters` is optional; pass it to get the category bar (Restaurants).
 */

// Created once at module scope. The old pages built a `new Icon(...)`
// inside the render for every marker, so panning a 25-marker map
// allocated 25 icons per render.
const markerIcon = new Icon({
  iconUrl: markerIconPng,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -26],
});

const ISLAND_CENTER = [28.334794, -14.16182];

function MapExplorer({
  places,
  filters,
  defaultFilter,
  center = ISLAND_CENTER,
  zoom = 10,
}) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState(defaultFilter);

  const visiblePlaces = useMemo(() => {
    if (!filters || activeFilter === defaultFilter) return places;
    return places.filter((place) => place.categories?.includes(activeFilter));
  }, [places, filters, activeFilter, defaultFilter]);

  return (
    <div className="explorer">
      {filters && (
        <div className="explorer__filters" role="group" aria-label={t("Filter_by_cuisine")}>
          {filters.map(({ key, icon, labelKey }) => {
            const active = activeFilter === key;
            return (
              // A real <button> with aria-pressed. These were divs with
              // onClick, so they were invisible to keyboard and screen
              // reader users — and the active state was colour-only.
              <button
                key={key}
                type="button"
                className={`filter-chip${active ? " is-active" : ""}`}
                aria-pressed={active}
                onClick={() => setActiveFilter(key)}
              >
                <img src={icon} alt="" width="28" height="28" />
                <span>{t(labelKey)}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className="explorer__layout">
        <div className="explorer__map">
          <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {visiblePlaces.map((place) => (
              <Marker
                key={place.name}
                position={[place.latitude, place.longitude]}
                icon={markerIcon}
                eventHandlers={{ click: () => setSelected(place) }}
                keyboard
              >
                <Popup>{place.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
          <p className="explorer__count">
            {t("Places_shown", { count: visiblePlaces.length })}
          </p>
        </div>

        <div className="explorer__detail">
          {selected ? (
            <article className="place-card">
              <div className="place-card__media">
                <img
                  src={selected.image}
                  alt={selected.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="place-card__body">
                <h2 className="place-card__title">{selected.name}</h2>
                <p className="place-card__text">{t(selected.description)}</p>
                <a
                  className="place-card__directions"
                  href={`https://www.google.com/maps/search/?api=1&query=${selected.latitude},${selected.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-icons-outlined" aria-hidden="true">
                    directions
                  </span>
                  {t("Get_directions")}
                </a>
              </div>
            </article>
          ) : (
            // The empty state used to be the same sentence already shown
            // above the map, with no visual indication it was a placeholder.
            <div className="place-card place-card--empty">
              <span className="material-icons-outlined" aria-hidden="true">
                touch_app
              </span>
              <p>{t("Place_select")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MapExplorer;
