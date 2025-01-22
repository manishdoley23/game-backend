import { Request, Response } from "express";
import { gameState } from "../enitities/game-state";

export async function getAllCops(req: Request, res: Response) {
  try {
    res.status(200).json(gameState.getCops());
  } catch (error) {
    console.error("Failed to fetch cops", error);
    throw error;
  }
}
