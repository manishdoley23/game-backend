import assert from "node:assert/strict";
import { describe, it, before } from "node:test";
import { gameState, GameStateType } from "../src/enitities/game-state";

describe("Initial Game State", () => {
  let initialGameState: GameStateType;
  before(() => {
    initialGameState = gameState;
  });

  it("should have criminal cityHiding as null", () => {
    assert.strictEqual(initialGameState.getCriminal().cityHiding, null);
  });
  it("should have cops selectedCity as null", () => {
    initialGameState.getCops().forEach((cop) => {
      assert.strictEqual(cop.selectedCity, null);
    });
  });
});
