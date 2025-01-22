import request from "supertest";
import app from "../src/app";
import { Cop } from "../src/enitities/model";
import { initialCops } from "../src/enitities/db";

describe("Cops Controller", () => {
  describe("GET /api/cop", () => {
    it("should return all the cops", async () => {
      const mockCops: Cop[] = initialCops;
      const response = await request(app).get("/api/cop");
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockCops);
    });

    it("should return cops with correct properties", async () => {
      const response = await request(app).get("/api/cop");
      const firstCop = response.body[0];

      expect(firstCop).toHaveProperty("id");
      expect(firstCop).toHaveProperty("name");
      expect(firstCop).toHaveProperty("selectedCity");
      expect(firstCop).toHaveProperty("selectedVehicle");
      expect(firstCop).toHaveProperty("imgSrc");
    });

    it("should return exactly three cops", async () => {
      const response = await request(app).get("/api/cop");
      expect(response.body.length).toBe(3);
    });

    it("should return cops with initial null selections", async () => {
      const response = await request(app).get("/api/cop");
      response.body.forEach((cop: Cop) => {
        expect(cop.selectedCity).toBeNull();
        expect(cop.selectedVehicle).toBeNull();
      });
    });
  });
});
