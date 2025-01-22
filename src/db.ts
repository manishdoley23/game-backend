import { City, Cop, Criminal, Vehicle } from "./enitities/model";

export const cities: City[] = [
  {
    id: "yapkashnagar",
    name: "Yapkashnagar",
    distance: 60,
    description:
      "Neon Oasis - Glowing alleys and rooftop races, powered by solar energy.",
    imgSrc: "https://i.imgur.com/fIssQzT.png",
  },
  {
    id: "lihaspur",
    name: "Lihaspur",
    distance: 50,
    description:
      "Misty Labyrinth - Ancient temples shrouded in fog, whispers of forgotten tech.",
    imgSrc: "https://i.imgur.com/WrWHzzE.png",
  },
  {
    id: "narmis",
    name: "Narmis City",
    distance: 40,
    description:
      "Steel Jungle - Towering skyscrapers and hidden underground networks.",
    imgSrc: "https://i.imgur.com/V5aYwsG.png",
  },
  {
    id: "shekharvati",
    name: "Shekharvati",
    distance: 30,
    description:
      "Sun-Kissed Valley - Rolling hills and forgotten mining tunnels.",
    imgSrc: "https://i.imgur.com/5QP9jTf.png",
  },
  {
    id: "nuravgram",
    name: "Nuravgram",
    distance: 20,
    description:
      "Quirky Village - Talking robots and malfunctioning AI guardians.",
    imgSrc: "https://i.imgur.com/lhVSW8s.png",
  },
];

export const vehicles: Vehicle[] = [
  {
    id: "ev-bike",
    name: "EV Bike",
    range: 60,
    availableCount: 2,
    imgSrc: "https://i.imgur.com/nxK5Rhz.png",
  },
  {
    id: "ev-car",
    name: "EV Car",
    range: 100,
    availableCount: 1,
    imgSrc: "https://i.imgur.com/Z6OscbE.png",
  },
  {
    id: "ev-suv",
    name: "EV SUV",
    range: 120,
    availableCount: 1,
    imgSrc: "https://i.imgur.com/YuGPA33.png",
  },
];

export const criminal: Criminal = {
  id: "criminal",
  name: "Criminal",
  cityHiding: null,
  imgSrc: "https://i.imgur.com/h2NX72X.png",
};

export const initialCops: Cop[] = [
  {
    id: "cop1",
    name: "Officer Alpha",
    selectedCity: null,
    selectedVehicle: null,
    imgSrc: "https://i.imgur.com/WK1PdPg.png",
  },
  {
    id: "cop2",
    name: "Officer Beta",
    selectedCity: null,
    selectedVehicle: null,
    imgSrc: "https://i.imgur.com/9tpyGcX.png",
  },
  {
    id: "cop3",
    name: "Officer Gamma",
    selectedCity: null,
    selectedVehicle: null,
    imgSrc: "https://i.imgur.com/HPF9ovS.png",
  },
];
