import express from "express";
import { cities, criminal, initialCops, vehicles } from "../db";
import { Criminal } from "../enitities/model";
const router = express.Router();

router.get("/criminal", (req, res) => {
  try {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    const criminalWithHideout: Criminal = {
      ...criminal,
      cityHiding: randomCity,
    };

    res.status(200).json(criminalWithHideout);
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
    res.status(200).json(initialCops);
  } catch (error) {
    console.error("Failed to fetch cops", error);
    throw error;
  }
});

router.post("/cop/select-city", (req, res) => {
  try {
    const { copdId, cityId } = req.body;

    const selectedCop = initialCops.find((cop) => cop.id === copdId);
    if (!selectedCop) {
      res.status(404).json({ message: "Cop not found" });
      return;
    }

    const selectedCity = cities.find((city) => city.id === cityId);
    if (!selectedCity) {
      res.status(404).json({ message: "City not found" });
      return;
    }

    selectedCop.selectedCity = selectedCity;

    console.log("Selected Cop", selectedCop);

    res.status(200).json(selectedCop);
  } catch (error) {
    console.error("Failed to add cop", error);
    throw error;
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
