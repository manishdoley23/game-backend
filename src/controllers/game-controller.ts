import { gameState } from "../enitities/game-state";
import { Request, Response } from "express";
import { Cop } from "../enitities/model";

export async function startInvestigation(req: Request, res: Response) {
  try {
    const cops: Cop[] = req.body;
    const criminal = gameState.getCriminal();

    if (!criminal.cityHiding) {
      return res.status(400).json({
        success: false,
        message: "Criminal location not set",
        winner: null,
      });
    }

    const winner =
      cops &&
      cops.find((cop) => {
        const correctCity = cop.selectedCity?.id === criminal.cityHiding?.id;

        const hasEnoughRange = cop.selectedVehicle
          ? cop.selectedVehicle.range >= (cop.selectedCity?.distance ?? 0) * 2
          : false;

        return correctCity && hasEnoughRange;
      });

    if (winner) {
      return res.status(200).json({
        success: true,
        message: `${winner.name} caught the criminal in ${criminal.cityHiding.name}!`,
        winner: winner,
        gameStatus: {
          criminal: criminal,
          correctCity: criminal.cityHiding.name,
          requiredRange: criminal.cityHiding.distance * 2,
        },
      });
    }

    const hints = cops.map((cop) => {
      const cityMatch = cop.selectedCity?.id === criminal.cityHiding?.id;
      const requiredRange = criminal.cityHiding?.distance
        ? criminal.cityHiding.distance * 2
        : 0;
      const vehicleRange = cop.selectedVehicle?.range ?? 0;

      if (cityMatch && vehicleRange < requiredRange) {
        return `${cop.name} found the criminal but vehicle range insufficient (needs ${requiredRange}km)`;
      } else if (cityMatch) {
        return `${cop.name} was in the right city but something went wrong`;
      }
      return `${cop.name} searched the wrong location`;
    });

    return res.status(200).json({
      success: false,
      message: "The criminal escaped!",
      hints: hints,
      gameStatus: {
        criminal: criminal,
        correctCity: criminal.cityHiding.name,
        requiredRange: criminal.cityHiding.distance * 2,
      },
    });
  } catch (error) {
    console.error("Investigation failed:", error);
    res.status(500).json({
      success: false,
      message: "Investigation failed due to internal error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

export async function gameReset(req: Request, res: Response) {
  try {
    gameState.resetGame();
    res.sendStatus(200);
  } catch (error) {
    console.error("Failed to reset game", error);
    throw error;
  }
}
