import express from "express";
import { getAllCops } from "../controllers/cop-controller";

const router = express.Router();

router.get("/", getAllCops);

export default router;
