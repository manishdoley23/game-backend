import express from "express";
import { cities, criminal, vehicles } from "../enitities/db";
import { gameState } from "../enitities/game-state";
import { Cop } from "../enitities/model";
const router = express.Router();

router.get("/criminal", (req, res) => {
  try {
    res.status(200).json(gameState.getCriminal());
  } catch (error) {
    console.error("Failed to fetch criminal", error);
    throw error;
  }
});

router.get("/cities", (req, res) => {
  try {
    res.status(200).json(cities);
  } catch (error) {
    console.error("Failed to fetch cities", error);
    throw error;
  }
});

router.get("/cop", (req, res) => {
  try {
    res.status(200).json(gameState.getCops());
  } catch (error) {
    console.error("Failed to fetch cops", error);
    throw error;
  }
});

router.post("/investigation", (req, res) => {
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

    const winner = cops.find((cop) => {
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
});

router.get("/vehicles", (req, res) => {
  try {
    res.status(200).json(vehicles);
  } catch (error) {
    console.error("Failed to fetch vehicles", error);
    throw error;
  }
});

export default router;
