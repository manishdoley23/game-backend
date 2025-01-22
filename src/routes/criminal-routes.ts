import express from "express";
import { getCriminal } from "../controllers/criminal-controller";

const router = express.Router();

router.get("/", getCriminal);

export default router;
