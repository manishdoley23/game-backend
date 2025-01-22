import { City, Criminal, Cop } from "./model";
import { cities, initialCops, criminal } from "./db";

class GameState {
  private criminal: Criminal = criminal;
  private cops: Cop[] = initialCops;

  constructor() {
    this.resetGame();
  }

  private getRandomCity(): City {
    return cities[Math.floor(Math.random() * cities.length)];
  }

  public resetGame(): void {
    this.criminal = {
      ...this.criminal,
      cityHiding: this.getRandomCity(),
    };

    // Reset cops to initial state
    this.cops = initialCops.map((cop) => ({ ...cop }));
  }

  public getCriminal(): Criminal {
    return this.criminal;
  }

  public getCops(): Cop[] {
    return this.cops;
  }
}

export const gameState = new GameState();
export type GameStateType = typeof gameState;
