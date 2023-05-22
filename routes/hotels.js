import express from "express";
import Hotel from "../modelsof/Hotel.js";
import {
  countByCity,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// creating  new hotels
router.post("/", verifyAdmin, createHotel);

// deleting existing hotels
router.delete("/:id", verifyAdmin, deleteHotel);

// updating existing hotels
router.put("/:id", verifyAdmin, updateHotel);

// getting a specific hotel
router.get("/:id", getHotel);

// getting all the hotels that exist
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getAllHotels);

export default router;
