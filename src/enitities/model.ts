export interface City {
  id: string;
  name: string;
  distance: number;
  description: string;
  imrSrc: string;
}

export interface Vehicle {
  id: string;
  name: string;
  range: number;
  availableCount: number;
  imgSrc: string;
}

export interface Cop {
  id: string;
  name: string;
  selectedCity: string | null;
  selectedVehicle: string | null;
  imgSrc: string;
}

export interface Criminal {
  id: string;
  name: string;
  cityHiding: string | null;
  imgSrc: string;
}

export interface GameState {
  criminalLocation: string | null; // city id
  cops: Cop[];
  status: "NOT_STARTED" | "IN_PROGRESS" | "WON" | "LOST";
  winner: string | null; // cop id who caught the criminal
}
