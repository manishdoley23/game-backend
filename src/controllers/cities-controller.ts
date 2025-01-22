import { cities } from "../enitities/db";
import { Request, Response } from "express";

export async function getAllCities(req: Request, res: Response) {
  try {
    res.status(200).json(cities);
  } catch (error) {
    console.error("Failed to fetch cities", error);
    throw error;
  }
}
