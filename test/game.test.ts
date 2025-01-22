import request from "supertest";
import app from "../src/app";
import { Cop } from "../src/enitities/model";
import { gameState, GameStateType } from "../src/enitities/game-state";

describe("POST /api/game/investigation", () => {
  it("should return success when cop finds criminal with sufficient range", async () => {
    const criminal = gameState.getCriminal();
    const mockCops: Cop[] = [
      {
        id: "cop1",
        name: "Officer Test",
        selectedCity: criminal.cityHiding,
        selectedVehicle: {
          id: "ev-suv",
          name: "EV SUV",
          range: 120,
          availableCount: 1,
          imgSrc: "test.png",
        },
        imgSrc: "test.png",
      },
    ];

    const response = await request(app)
      .post("/api/game/investigation")
      .send(mockCops);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.winner).toBeDefined();
  });

  it("should fail when cop finds criminal but has insufficient range", async () => {
    const criminal = gameState.getCriminal();
    const mockCops: Cop[] = [
      {
        id: "cop1",
        name: "Officer Test",
        selectedCity: criminal.cityHiding,
        selectedVehicle: {
          id: "ev-bike",
          name: "EV Bike",
          range: 10,
          availableCount: 2,
          imgSrc: "test.png",
        },
        imgSrc: "test.png",
      },
    ];

    const response = await request(app)
      .post("/api/game/investigation")
      .send(mockCops);

    console.log("response.body", response.body);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(false);
    expect(response.body.hints).toBeDefined();
  });

  it("should provide hints for all cops when nobody finds criminal", async () => {
    const mockCops: Cop[] = [
      {
        id: "cop1",
        name: "Officer Test",
        selectedCity: {
          id: "wrong-city",
          name: "Wrong City",
          distance: 30,
          description: "test",
          imgSrc: "test.png",
        },
        selectedVehicle: {
          id: "ev-suv",
          name: "EV SUV",
          range: 120,
          availableCount: 1,
          imgSrc: "test.png",
        },
        imgSrc: "test.png",
      },
    ];

    const response = await request(app)
      .post("/api/game/investigation")
      .send(mockCops);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(false);
    expect(response.body.hints.length).toBe(mockCops.length);
  });
});

describe("Error Handling", () => {
  it("should handle malformed request body", async () => {
    const response = await request(app)
      .post("/api/game/investigation")
      .send({ invalidData: true });

    expect(response.status).toBe(500);
  });
});

describe("Game Rules", () => {
  it("should require round trip range for vehicles", async () => {
    const criminal = gameState.getCriminal();
    const mockCops: Cop[] = [
      {
        id: "cop1",
        name: "Officer Test",
        selectedCity: criminal.cityHiding,
        selectedVehicle: {
          id: "ev-bike",
          name: "EV Bike",
          range: criminal.cityHiding ? criminal.cityHiding.distance * 2 - 1 : 0,
          availableCount: 2,
          imgSrc: "test.png",
        },
        imgSrc: "test.png",
      },
    ];

    const response = await request(app)
      .post("/api/game/investigation")
      .send(mockCops);

    expect(response.body.success).toBe(false);
    expect(response.body.hints[0]).toContain("vehicle range insufficient");
  });
});

describe("POST /api/game/reset", () => {
  let mockGameState: GameStateType;

  beforeAll(() => {
    mockGameState = gameState;
  });

  it("should reset game state successfully", async () => {
    const response = await request(app).post("/api/game/reset");
    expect(response.status).toBe(200);
  });

  it("should assign new criminal location after reset", async () => {
    const initialCriminal = mockGameState.getCriminal();
    const initialLocation = initialCriminal.cityHiding?.id;

    await request(app).post("/api/game/reset");

    const newCriminal = gameState.getCriminal();
    expect(newCriminal.cityHiding).toBeDefined();
    expect(newCriminal.cityHiding?.id).toBeDefined();
    expect(newCriminal.cityHiding?.id).not.toEqual(initialLocation);
  });

  it("should reset all cop selections", async () => {
    const criminal = mockGameState.getCriminal();
    const mockCops: Cop[] = [
      {
        id: "cop1",
        name: "Officer Test",
        selectedCity: criminal.cityHiding,
        selectedVehicle: {
          id: "ev-suv",
          name: "EV SUV",
          range: 120,
          availableCount: 1,
          imgSrc: "test.png",
        },
        imgSrc: "test.png",
      },
    ];

    await request(app).post("/api/game/investigation").send(mockCops);

    const resetResponse = await request(app).post("/api/game/reset");
    expect(resetResponse.status).toBe(200);

    const cops = mockGameState.getCops();
    cops.forEach((cop) => {
      expect(cop.selectedCity).toBeNull();
      expect(cop.selectedVehicle).toBeNull();
    });
  });
});
