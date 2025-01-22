import { gameState } from "../enitities/game-state";
import { Request, Response } from "express";

export async function getCriminal(req: Request, res: Response) {
  try {
    res.status(200).json(gameState.getCriminal());
  } catch (error) {
    console.error("Failed to fetch criminal", error);
    throw error;
  }
}
