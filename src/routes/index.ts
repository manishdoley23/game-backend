import express from "express";
import { cities, criminal } from "../db";
const router = express.Router();

router.get("/criminal", (req, res) => {
  try {
    res.status(200).json(criminal);
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

router.get("/vehicles", (req, res) => {});

export default router;
