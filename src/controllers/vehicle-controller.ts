import { vehicles } from "../enitities/db";
import { Request, Response } from "express";

export async function getAllVehicles(req: Request, res: Response) {
  try {
    res.status(200).json(vehicles);
  } catch (error) {
    console.error("Failed to fetch vehicles", error);
    throw error;
  }
}
