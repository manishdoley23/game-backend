import request from "supertest";
import app from "../src/app";
import { Criminal } from "../src/enitities/model";
import { gameState, GameStateType } from "../src/enitities/game-state";

let mockGameState: GameStateType;
beforeAll(() => {
  mockGameState = gameState;
});

describe("GET /api/criminal", () => {
  it("should return criminal", async () => {
    const mockCop: Criminal = gameState.getCriminal();
    const response = await request(app).get("/api/criminal");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockCop);
  });

  it("should return criminal with cityHiding", async () => {
    const mockCop: Criminal = gameState.getCriminal();
    const response = await request(app).get("/api/criminal");
    expect(response.status).toBe(200);
    expect(response.body.cityHiding).toBeDefined();
  });

  it("should have valid criminal properties", async () => {
    const response = await request(app).get("/api/criminal");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("imgSrc");
  });
});
