import express from "express";
import { getAllCities } from "../controllers/cities-controller";

const router = express.Router();

router.get("/", getAllCities);

export default router;
