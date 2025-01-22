export interface City {
  id: string;
  name: string;
  distance: number;
  description: string;
  imgSrc: string;
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
  selectedCity: City | null;
  selectedVehicle: Vehicle | null;
  imgSrc: string;
}

export interface Criminal {
  id: string;
  name: string;
  cityHiding: City | null;
  imgSrc: string;
}

export interface GameState {
  criminalLocation: string | null; // city id
  cops: Cop[];
  status: "NOT_STARTED" | "IN_PROGRESS" | "WON" | "LOST";
  winner: string | null;
}
