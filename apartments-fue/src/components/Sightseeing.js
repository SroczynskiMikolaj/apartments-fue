import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "../assets/marker.png";
import image1 from "../assets/sightseeing/Picture1.jpg";
import image2 from "../assets/sightseeing/Picture2.jpg";
import image3 from "../assets/sightseeing/Picture3.png";
import image4 from "../assets/sightseeing/Picture4.jpg";
import image5 from "../assets/sightseeing/Picture5.jpg";
import image6 from "../assets/sightseeing/Picture6.jpg";
import image8 from "../assets/sightseeing/Picture8.jpg";
import image9 from "../assets/sightseeing/Picture9.jpg";
import image10 from "../assets/sightseeing/Picture10.jpg";
import image11 from "../assets/sightseeing/Picture11.jpg";
import image12 from "../assets/sightseeing/Picture12.jpg";
import image13 from "../assets/sightseeing/Picture13.jpg";
import image14 from "../assets/sightseeing/Picture14.jpg";
import image15 from "../assets/sightseeing/Picture15.jpg";
import image16 from "../assets/sightseeing/Picture16.jpg";
import image17 from "../assets/sightseeing/Picture17.jpg";
import image18 from "../assets/sightseeing/Antigua.jpg";
import image19 from "../assets/sightseeing/corralejo.jpg";
import image20 from "../assets/sightseeing/CostaCalma.jpg";
import image21 from "../assets/sightseeing/cotillo.jpg";
import image22 from "../assets/sightseeing/FaroEntalada.jpg";
import image23 from "../assets/sightseeing/sotavento.jpg";
import { Icon } from "leaflet";
import "../styles/Sightseeing.scss";

function Sightseeing(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // State to hold the currently selected place
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleClick = () => {
    const path = `/${props.path}`;
    navigate(path);
  };

  const places = [
    {
      name: "Playa El Mejillón - Popcorn beach",
      latitude: 28.753891,
      longitude: -13.89984,
      image: image13,
      description: "Popcorn_beach",
    },
    {
      name: "Corralejo",
      latitude: 28.743891,
      longitude: -13.86984,
      image: image19,
      description: "Corralejo",
    },
    {
      name: "Calderon Hondo",
      latitude: 28.72881,
      longitude: -13.911732,
      image: image14,
      description: "Calderon_Hondo",
    },
    {
      name: "El Cotillo",
      latitude: 28.68881,
      longitude: -14.01232,
      image: image21,
      description: "El_Cotillo",
    },
    {
      name: "Mirador de Guise y Ayose",
      latitude: 28.441472,
      longitude: -14.048278,
      image: image10,
      description: "Mirador_de_Guise_y_Ayose",
    },
    {
      name: "Antigua",
      latitude: 28.419506,
      longitude: -14.0135,
      image: image18,
      description: "Antigua",
    },
    {
      name: "Betancuria",
      latitude: 28.429038,
      longitude: -14.05863,
      image: image11,
      description: "Betancuria",
    },
    {
      name: "Arco de las Penitas",
      latitude: 28.411831,
      longitude: -14.093937,
      image: image17,
      description: "Arco_de_las_planitas",
    },
    {
      name: "Ajuy",
      latitude: 28.399522,
      longitude: -14.155575,
      image: image6,
      description: "Ajuy",
    },
    {
      name: "Aguas Verdes",
      latitude: 28.505528,
      longitude: -14.085575,
      image: image9,
      description: "Aguas_Verdes",
    },
    {
      name: "Caleta de Fuste",
      latitude: 28.390459,
      longitude: -13.86338,
      image: image15,
      description: "Caleta_de_Fuste",
    },
    {
      name: "Oasis Park",
      latitude: 28.184794,
      longitude: -14.16182,
      image: image1,
      description: "Oasis_Park",
    },
    {
      name: "Tarajalejo",
      latitude: 28.193914,
      longitude: -14.115248,
      image: image16,
      description: "Tarajalejo",
    },
    {
      name: "Faro de la Entallada",
      latitude: 28.233914,
      longitude: -13.950248,
      image: image22,
      description: "Faro_Entallada",
    },
    {
      name: "La Pared",
      latitude: 28.224522,
      longitude: -14.226667,
      image: image8,
      description: "La_Pared",
    },
    {
      name: "Playa de Sotavento",
      latitude: 28.137134,
      longitude: -14.239219,
      image: image23,
      description: "Playa_de_Sotavento",
    },
    {
      name: "Costa Calma",
      latitude: 28.160134,
      longitude: -14.226219,
      image: image20,
      description: "Costa_Calma",
    },
    {
      name: "Pico de Zarza",
      latitude: 28.098061,
      longitude: -14.360014,
      image: image4,
      description: "Pico_de_Zarza",
    },
    {
      name: "Cofete",
      latitude: 28.114695,
      longitude: -14.379163,
      image: image5,
      description: "Cofete",
    },
  ];

  return (
    <div>
      <div className="sightseeing-info-container">
        <Trans i18nKey="Fuerteventura_description"
          components={{
            island: <strong>Fuerteventura</strong>,
            park: <strong>Corralejo National Park</strong>,
            oasis: <strong>Oasis Park</strong>,
            cotillo: <strong>El Cotillo</strong>,
            sotavento: <strong>Sotavento</strong>,
            cofete: <strong>Cofete</strong>,
            ajuy: <strong>Ajuy Caves</strong>
          }}
        />
      </div>
      <p>{t("Place_select")}</p>
      <div className="sightseeing-container">
        <MapContainer
          center={[28.334794, -14.16182]}
          zoom={10}
          style={{ height: "700px", width: "600px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {places.map((place, idx) => (
            <Marker
              key={idx}
              position={[place.latitude, place.longitude]}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 25],
                })
              }
              eventHandlers={{
                click: () => {
                  setSelectedPlace(place);
                },
              }}
            >
              <Popup>{place.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
        
        <div className="selected-place">
          {selectedPlace ? (
            <>
              <h3>{selectedPlace.name}</h3>
              <img
                className="place-image"
                src={selectedPlace.image}
                alt={selectedPlace.name}
              />
              <p className="description">{t(selectedPlace.description)}</p>
            </>
          ) : (
            <p>{t("Place_select")}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sightseeing;
