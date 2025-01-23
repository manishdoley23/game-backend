import { City, Cop, Criminal, Vehicle } from "./model";

export const cities: City[] = [
  {
    id: "yapkashnagar",
    name: "Yapkashnagar",
    distance: 60,
    description:
      "Neon Oasis - Glowing alleys and rooftop races, powered by solar energy.",
    imgSrc:
      "https://ucarecdn.com/69d70cbc-e842-4922-8ad7-3a2026e99dd3/Screenshot20250123at195044.png",
  },
  {
    id: "lihaspur",
    name: "Lihaspur",
    distance: 50,
    description:
      "Misty Labyrinth - Ancient temples shrouded in fog, whispers of forgotten tech.",
    imgSrc:
      "https://ucarecdn.com/0951bde6-255c-484a-8b57-85c58fa2b865/Screenshot20250123at195108.png",
  },
  {
    id: "narmis",
    name: "Narmis City",
    distance: 40,
    description:
      "Steel Jungle - Towering skyscrapers and hidden underground networks.",
    imgSrc:
      "https://ucarecdn.com/f6a1dcac-d25c-42c1-b566-a54b8d6d5c09/Screenshot20250123at195127.png",
  },
  {
    id: "shekharvati",
    name: "Shekharvati",
    distance: 30,
    description:
      "Sun-Kissed Valley - Rolling hills and forgotten mining tunnels.",
    imgSrc:
      "https://ucarecdn.com/46b03a6c-3b63-489e-8d8a-b6c9e57dc0ed/Screenshot20250123at195151.png",
  },
  {
    id: "nuravgram",
    name: "Nuravgram",
    distance: 20,
    description:
      "Quirky Village - Talking robots and malfunctioning AI guardians.",
    imgSrc:
      "https://ucarecdn.com/6568db73-d5ca-4099-89c3-d5d8971b8c31/Screenshot20250123at195208.png",
  },
];

export const vehicles: Vehicle[] = [
  {
    id: "ev-bike",
    name: "EV Bike",
    range: 60,
    availableCount: 2,
    imgSrc:
      "https://ucarecdn.com/648ed6ab-1e1f-4a4e-b631-f479efb9e0aa/Screenshot20250123at195600.png",
  },
  {
    id: "ev-car",
    name: "EV Car",
    range: 100,
    availableCount: 1,
    imgSrc:
      "https://ucarecdn.com/edf8e22c-ef69-4da6-9066-fa704d56b5dd/Screenshot20250123at195616.png",
  },
  {
    id: "ev-suv",
    name: "EV SUV",
    range: 120,
    availableCount: 1,
    imgSrc:
      "https://ucarecdn.com/fb459c0b-7227-4f5b-a78a-ec5e9558cb99/Screenshot20250123at195629.png",
  },
];

export const criminal: Criminal = {
  id: "criminal",
  name: "Criminal",
  cityHiding: null,
  imgSrc:
    "https://ucarecdn.com/4420ca6d-bf02-48d2-b7f4-e8318255ffc1/Screenshot20250123at195731.png",
};

export const initialCops: Cop[] = [
  {
    id: "cop1",
    name: "Officer Alpha",
    selectedCity: null,
    selectedVehicle: null,
    imgSrc:
      "https://ucarecdn.com/d0daa51b-19c4-49f0-8f29-983bd10207db/Screenshot20250123at195748.png",
  },
  {
    id: "cop2",
    name: "Officer Beta",
    selectedCity: null,
    selectedVehicle: null,
    imgSrc:
      "https://ucarecdn.com/53ce053d-c3c8-49c2-bf92-20cea0d8db2f/Screenshot20250123at195800.png",
  },
  {
    id: "cop3",
    name: "Officer Gamma",
    selectedCity: null,
    selectedVehicle: null,
    imgSrc:
      "https://ucarecdn.com/14a7a315-d1d7-47c6-ae17-6dc89c0a972d/Screenshot20250123at195811.png",
  },
];
