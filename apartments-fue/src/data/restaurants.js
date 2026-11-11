import noPhoto from "../assets/restaurants/no_photo.png";
import image2 from "../assets/restaurants/IMG_1247.jpg";
import image5 from "../assets/restaurants/IMG_1281.jpg";
import image8 from "../assets/restaurants/IMG_1381.jpg";
import image9 from "../assets/restaurants/IMG_1564.jpg";
import image12 from "../assets/restaurants/IMG_1690.jpg";
import image13 from "../assets/restaurants/IMG_1712.jpg";
import image14 from "../assets/restaurants/IMG_1757.jpg";
import image15 from "../assets/restaurants/IMG_2428.jpg";
import image16 from "../assets/restaurants/IMG_8385.jpg";
import image18 from "../assets/restaurants/IMG_5768.jpg";
import image19 from "../assets/restaurants/IMG_6897.jpg";
import image21 from "../assets/restaurants/IMG_8425.jpg";
import image23 from "../assets/restaurants/IMG_3214.jpeg";
import image24 from "../assets/restaurants/IMG_3262.jpeg";

import iconAll from "../assets/icons/all.png";
import iconFish from "../assets/icons/fish.png";
import iconSeafood from "../assets/icons/seafood.png";
import iconMeat from "../assets/icons/meat.png";
import iconPizza from "../assets/icons/pizza.png";
import iconLocal from "../assets/icons/local.png";
import iconVeg from "../assets/icons/veg.png";

/**
 * Cuisine categories.
 *
 * The keys used to be Polish display strings ("wszystkie", "mięso",
 * "wegetariańska") compared with `===` against the selected filter — so the
 * data layer was tied to one language. They're now stable English slugs and
 * the visible text comes from `labelKey`.
 */
export const ALL_CUISINES = "all";

export const CUISINE_FILTERS = [
  { key: ALL_CUISINES, icon: iconAll, labelKey: "Food_all" },
  { key: "fish", icon: iconFish, labelKey: "Food_fish" },
  { key: "seafood", icon: iconSeafood, labelKey: "Food_sea" },
  { key: "meat", icon: iconMeat, labelKey: "Food_meat" },
  { key: "pizza", icon: iconPizza, labelKey: "Food_pizza" },
  { key: "local", icon: iconLocal, labelKey: "Food_local" },
  { key: "vegetarian", icon: iconVeg, labelKey: "Food_weg" },
];

// Most places serve the same broad mix; named for readability.
const MIXED = ["fish", "seafood", "local", "meat", "vegetarian"];
const NO_MEAT = ["fish", "seafood", "local", "vegetarian"];

export const RESTAURANT_PLACES = [
  {
    name: "Restaurante Marabú",
    latitude: 28.07762,
    longitude: -14.30035,
    image: image9,
    description: "Restaurante_Marabu",
    categories: MIXED,
  },
  {
    name: "Restaurante Al Fresco",
    latitude: 28.159134,
    longitude: -14.228719,
    image: image24,
    description: "Restaurante_Al_Fresco",
    categories: ["seafood", "meat", "vegetarian"],
  },
  {
    name: "Snack Bar Palmita",
    latitude: 28.145434,
    longitude: -14.234719,
    image: image2,
    description: "Snack_Bar_Palmita",
    categories: NO_MEAT,
  },
  {
    name: "Pomodoro Pizza Pasta y Micono Gelato Bar",
    latitude: 28.2115,
    longitude: -14.0213,
    image: image8,
    description: "Micono",
    categories: ["pizza", "vegetarian"],
  },
  {
    name: "Olivo Corso",
    latitude: 28.682031,
    longitude: -14.011637,
    image: image5,
    description: "Olivo_Corso",
    categories: MIXED,
  },
  {
    name: "Restaurante La Vaca Azul",
    latitude: 28.684131,
    longitude: -14.011637,
    image: image15,
    description: "La_Vaca_Azul",
    categories: MIXED,
  },
  {
    name: "La Jaula de Oro",
    latitude: 28.399631,
    longitude: -14.155937,
    image: image19,
    description: "La_Jaula_de_Oro",
    categories: NO_MEAT,
  },
  {
    name: "Caretta Beach La Pared",
    latitude: 28.218334,
    longitude: -14.219319,
    image: image18,
    description: "Caretta_Beach_La_Pared",
    categories: MIXED,
  },
  {
    name: "Restaurante Casa Isaitas",
    latitude: 28.351031,
    longitude: -14.108737,
    image: image21,
    description: "Restaurante_Casa_Isaitas",
    categories: MIXED,
  },
  {
    name: "PIZZERÍA BEACH HOUSE",
    latitude: 28.156434,
    longitude: -14.233719,
    image: image16,
    description: "Beach_house",
    categories: ["pizza", "meat", "vegetarian"],
  },
  {
    name: "Lumos",
    latitude: 28.738031,
    longitude: -13.867637,
    image: image14,
    description: "Lumos",
    categories: ["pizza", "meat", "vegetarian"],
  },
  {
    name: "Café Caveto",
    latitude: 28.212834,
    longitude: -14.22,
    image: image13,
    description: "Cafe_Caveto",
    categories: ["fish", "meat", "vegetarian"],
  },
  {
    name: "Restaurante La Jaira",
    latitude: 28.5,
    longitude: -13.86062,
    image: image12,
    description: "Restaurante_La_Jaira",
    categories: MIXED,
  },
  {
    name: "Gastrobar El Pirata Verde",
    latitude: 28.484231,
    longitude: -14.086537,
    image: image23,
    description: "Gastrobar_El_Pirata_Verde",
    categories: ["fish", "seafood", "local", "meat"],
  },

  // --- No photograph yet; these fall back to the placeholder image. ---
  {
    name: "Restaurante Rugama",
    latitude: 28.492231,
    longitude: -13.961,
    image: noPhoto,
    description: "Restaurante_Rugama",
    categories: MIXED,
  },
  {
    name: "El Invernadero Restaurante",
    latitude: 28.490831,
    longitude: -13.9182,
    image: noPhoto,
    description: "El_Invernadero_Restaurante",
    categories: MIXED,
  },
  {
    name: "Casa Naturaleza",
    latitude: 28.394231,
    longitude: -14.086537,
    image: noPhoto,
    description: "Casa_Naturaleza",
    categories: ["fish", "seafood", "local", "meat"],
  },
  {
    name: "El Gallego Luís",
    latitude: 28.05125,
    longitude: -14.35135,
    image: noPhoto,
    description: "El_Gallego_Luis",
    categories: MIXED,
  },
  {
    name: "Leo's",
    latitude: 28.0495,
    longitude: -14.35125,
    image: noPhoto,
    description: "Leos",
    categories: MIXED,
  },
  {
    name: "La Barraca",
    latitude: 28.191914,
    longitude: -14.115948,
    image: noPhoto,
    description: "La_Barraca",
    categories: NO_MEAT,
  },
  {
    name: "Restaurante La Cofradía de Gran Tarajal",
    latitude: 28.208914,
    longitude: -14.023648,
    image: noPhoto,
    description: "La_Cofradia",
    categories: NO_MEAT,
  },
  {
    name: "Restaurante diner1950",
    latitude: 28.210999,
    longitude: -14.021648,
    image: noPhoto,
    description: "diner1950",
    categories: NO_MEAT,
  },
  {
    name: "Restaurante casa Victor",
    latitude: 28.229,
    longitude: -13.9848,
    image: noPhoto,
    description: "Restaurante_casa_Victor",
    categories: NO_MEAT,
  },
  {
    name: "Los Caracoles Fuerteventura",
    latitude: 28.323054,
    longitude: -13.895948,
    image: noPhoto,
    description: "Los_Caracoles",
    categories: NO_MEAT,
  },
  {
    name: "Pez Gordo Fuerteventura",
    latitude: 28.684231,
    longitude: -14.011337,
    image: noPhoto,
    description: "Pez_Gordo",
    categories: MIXED,
  },
];
