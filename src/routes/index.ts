import express from "express";
import criminalRoutes from "./criminal-routes";
import cityRoutes from "./city-routes";
import vehicleRoutes from "./vehicle-routes";
import copRoutes from "./cop-routes";
import gameRoutes from "./game-routes";

const router = express.Router();

router.use("/criminal", criminalRoutes);
router.use("/city", cityRoutes);
router.use("/vehicle", vehicleRoutes);
router.use("/cop", copRoutes);
router.use("/game", gameRoutes);

export default router;
