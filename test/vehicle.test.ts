import request from "supertest";
import app from "../src/app";
import { Vehicle } from "../src/enitities/model";
import { vehicles } from "../src/enitities/db";

describe("GET /api/vehicle", () => {
  it("should return all the vehicles", async () => {
    const mockVehicles: Vehicle[] = vehicles;
    const response = await request(app).get("/api/vehicle");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockVehicles);
  });

  it("should have valid vehicle properties", async () => {
    const response = await request(app).get("/api/vehicle");
    const vehicle = response.body[0];
    expect(vehicle).toHaveProperty("id");
    expect(vehicle).toHaveProperty("name");
    expect(vehicle).toHaveProperty("range");
    expect(vehicle).toHaveProperty("availableCount");
  });

  it("should have correct vehicle counts", async () => {
    const response = await request(app).get("/api/vehicle");
    const evBikes = response.body.find((v: Vehicle) => v.name === "EV Bike");
    expect(evBikes.availableCount).toBe(2);
  });
});
