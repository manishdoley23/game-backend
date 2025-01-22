import express from "express";
import { gameReset, startInvestigation } from "../controllers/game-controller";

const router = express.Router();

router.post("/investigation", startInvestigation);
router.post("/reset", gameReset);

export default router;
