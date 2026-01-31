import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "../assets/marker.png";
import image1 from "../assets/restaurants/no_photo.png";
import image2 from "../assets/restaurants/IMG_1247.jpg";
import image4 from "../assets/restaurants/IMG_1254.jpg"; // ?
import image5 from "../assets/restaurants/IMG_1281.jpg";
import image8 from "../assets/restaurants/IMG_1381.jpg";
import image9 from "../assets/restaurants/IMG_1564.jpg";
import image12 from "../assets/restaurants/IMG_1690.jpg";
import image13 from "../assets/restaurants/IMG_1712.jpg";
import image14 from "../assets/restaurants/IMG_1757.jpg";
import image15 from "../assets/restaurants/IMG_2428.jpg";
import image16 from "../assets/restaurants/IMG_8385.jpg";
// import image17 from "../assets/restaurants/IMG_5763.jpg"; // - la pared
import image18 from "../assets/restaurants/IMG_5768.jpg";
import image19 from "../assets/restaurants/IMG_6897.jpg";
import image20 from "../assets/restaurants/IMG_5515.jpg"; // -pizzeria beach house
import image21 from "../assets/restaurants/IMG_8425.jpg";
import image22 from "../assets/restaurants/IMG_8433.jpg"; // casa isaitas
import image23 from "../assets/restaurants/IMG_3214.jpeg";
import image24 from "../assets/restaurants/IMG_3262.jpeg";
import iconAll from "../assets/icons/all.png";
import iconFish from "../assets/icons/fish.png";
import iconSeafood from "../assets/icons/seafood.png";
import iconMeat from "../assets/icons/meat.png";
import iconPizza from "../assets/icons/pizza.png";
import iconLocal from "../assets/icons/local.png";
import iconVeg from "../assets/icons/veg.png";

import { Icon } from "leaflet";
import "../styles/Restaurants.scss";

function Restaurants(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("wszystkie");
  
  // State to hold the currently selected place
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleClick = () => {
    const path = `/${props.path}`;
    navigate(path);
  };

  // { key: "wszystkie", icon: iconAll, label: "Wszystkie" },
  // { key: "ryby", icon: iconFish, label: "Ryby" },
  // { key: "owoce morza", icon: iconSeafood, label: "Owoce morza" },
  // { key: "mięso", icon: iconMeat, label: "Mięsa" },
  // { key: "pizza", icon: iconPizza, label: "Pizza" },
  // { key: "lokalna", icon: iconLocal, label: "Lokalna" },
  // { key: "wegetariańska", icon: iconVeg, label: "Wegetariańska" },

  const places = [
    {
      name: "Restaurante Marabú",
      latitude: 28.077620,
      longitude: -14.30035,
      image: image9,
      description: "Restaurante_Marabu",
      categories: ["ryby","owoce morza","lokalna","mięso","wegetariańska"],
    },
    {
      name: "Restaurante Al Fresco",
      latitude: 28.159134,
      longitude: -14.228719,
      image: image24,
      description: "Restaurante_Al_Fresco",
      categories: ["owoce morza","mięso","wegetariańska"],
    },
    {
      name: "Snack Bar Palmita",
      latitude: 28.145434,
      longitude: -14.234719,
      image: image2,
      description: "Snack_Bar_Palmita",
      categories: ["ryby","owoce morza","lokalna","wegetariańska"],
    },
    {
      name: "Pomodoro Pizza Pasta y Micono Gelato Bar",
      latitude: 28.211500,
      longitude: -14.021300,
      image: image8,
      description: "Micono",
      categories: ["pizza","wegetariańska"],
    },
    {
      name: "Olivo Corso",
      latitude: 28.682031,
      longitude: -14.011637,
      image: image5,
      description: "Olivo_Corso",
      categories: ["ryby","owoce morza","lokalna","mięso","wegetariańska"],
    },
    {
      name: "Restaurante La Vaca Azul",
      latitude: 28.684131,
      longitude: -14.011637,
      image: image15,
      description: "La_Vaca_Azul",
      categories: ["ryby","owoce morza","lokalna","mięso","wegetariańska"],
    },
    {
      name: "La Jaula de Oro",
      latitude: 28.399631,
      longitude: -14.155937,
      image: image19,
      description: "La_Jaula_de_Oro",
      categories: ["ryby","owoce morza","lokalna","wegetariańska"],
    },
    {
      name: "Caretta Beach La Pared",
      latitude: 28.218334,
      longitude: -14.219319,
      image: image18,
      description: "Caretta_Beach_La_Pared",
      categories: ["ryby","owoce morza","lokalna","mięso","wegetariańska"],
    },
    {
      name: "Restaurante Casa Isaitas",
      latitude: 28.351031,
      longitude: -14.108737,
      image: image21,
      description: "Restaurante_Casa_Isaitas",
      categories: ["ryby","owoce morza","lokalna","mięso","wegetariańska"],
    },
    {
      name: "PIZZERÍA BEACH HOUSE",
      latitude: 28.156434,
      longitude: -14.233719,
      image: image16,
      description: "Beach_house",
      categories: ["pizza","mięso","wegetariańska"],
    },
    {
      name: "Lumos",
      latitude: 28.738031,
      longitude: -13.867637,
      image: image14,
      description: "Lumos",
      categories: ["pizza","mięso","wegetariańska"],
    },
    {
      name: "Café Caveto",
      latitude: 28.212834,
      longitude: -14.220000,
      image: image13,
      description: "Cafe_Caveto",
      categories: ["ryby","mięso","wegetariańska"],
    },
    {
      name: "Restaurante La Jaira",
      latitude: 28.500000,
      longitude: -13.860620,
      image: image12,
      description: "Restaurante_La_Jaira",
      categories: ["ryby","owoce morza","lokalna","mięso","wegetariańska"],
    },
    {
      name: "Gastrobar El Pirata Verde",
      latitude: 28.484231,
      longitude: -14.086537,
      image: image23,
      description: "Gastrobar_El_Pirata_Verde",
      categories: ["ryby","owoce morza","lokalna", "mięso"],
    },
    //brak zdjec
    {
      name: "Restaurante Rugama",
      latitude: 28.492231,
      longitude: -13.961000,
      image: image1,
      description: "Restaurante_Rugama",
      categories: ["ryby","owoce morza","lokalna","mięso","wegetariańska"],
    },
    {
      name: "El Invernadero Restaurante",
      latitude: 28.490831,
      longitude: -13.918200,
      image: image1,
      description: "El_Invernadero_Restaurante",
      categories: ["ryby","owoce morza","lokalna","mięso","wegetariańska"],
    },
    {
      name: "Casa Naturaleza",
      latitude: 28.394231,
      longitude: -14.086537,
      image: image1,
      description: "Casa_Naturaleza",
      categories: ["ryby","owoce morza","lokalna", "mięso"],
    },
    {
      name: "El Gallego Luís",
      latitude: 28.051250,
      longitude: -14.35135,
      image: image1,
      description: "El_Gallego_Luis",
      categories: ["ryby","owoce morza","lokalna","mięso","wegetariańska"],
    },
    {
      name: "Leo's",
      latitude: 28.049500,
      longitude: -14.35125,
      image: image1,
      description: "Leos",
      categories: ["ryby","owoce morza","lokalna","mięso","wegetariańska"],
    },
    {
      name: "La Barraca",
      latitude: 28.191914,
      longitude: -14.115948,
      image: image1,
      description: "La_Barraca",
      categories: ["ryby","owoce morza","lokalna","wegetariańska"],
    },
    {
      name: "Restaurante La Cofradía de Gran Tarajal",
      latitude: 28.208914,
      longitude: -14.023648,
      image: image1,
      description: "La_Cofradia",
      categories: ["ryby","owoce morza","lokalna","wegetariańska"],
    },
    {
      name: "Restaurante diner1950",
      latitude: 28.210999,
      longitude: -14.021648,
      image: image1,
      description: "diner1950",
      categories: ["ryby","owoce morza","lokalna","wegetariańska"],
    },
    {
      name: "Restaurante casa Victor",
      latitude: 28.229000,
      longitude: -13.984800,
      image: image1,
      description: "Restaurante_casa_Victor",
      categories: ["ryby","owoce morza","lokalna","wegetariańska"],
    },
    {
      name: "Los Caracoles Fuerteventura",
      latitude: 28.323054,
      longitude: -13.895948,
      image: image1,
      description: "Los_Caracoles",
      categories: ["ryby","owoce morza","lokalna","wegetariańska"],
    },
    {
      name: "Pez Gordo Fuerteventura",
      latitude: 28.684231,
      longitude: -14.011337,
      image: image1,
      description: "Pez_Gordo",
      categories: ["ryby","owoce morza","lokalna","mięso","wegetariańska"],
    },
  ];

  const filteredPlaces =
    selectedCategory === "wszystkie"
      ? places
      : places.filter((p) => p.categories.includes(selectedCategory));

  return (
    <div>
      <div className="restaurants-info-container">
        <Trans i18nKey="Restaurants_description_1"/>
      </div>
      <div className="restaurants-info-container">
        <Trans i18nKey="Restaurants_description_2"/>
      </div>
      <p>{t("Place_select")}</p>
      <div className="filter-icons">
        <div className="filter-icons">
          {[
            { key: "wszystkie", icon: iconAll, label: "Food_all" },
            { key: "ryby", icon: iconFish, label: "Food_fish" },
            { key: "owoce morza", icon: iconSeafood, label: "Food_sea" },
            { key: "mięso", icon: iconMeat, label: "Food_meat" },
            { key: "pizza", icon: iconPizza, label: "Food_pizza" },
            { key: "lokalna", icon: iconLocal, label: "Food_local" },
            { key: "wegetariańska", icon: iconVeg, label: "Food_weg" },
          ].map((category) => (
            <div
              key={category.key}
              className={`filter-icon ${
                selectedCategory === category.key ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.key)}
            >
              <img src={category.icon} alt={t(category.label)} />
              <span>{t(category.label)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="restaurants-container">
        <MapContainer
          center={[28.334794, -14.16182]}
          zoom={10}
          style={{ height: "700px", width: "600px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredPlaces.map((place, idx) => (
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

export default Restaurants;
