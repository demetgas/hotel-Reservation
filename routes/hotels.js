import express from "express";
import Hotel from "../modelsof/Hotel.js";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";

const router = express.Router();

// creating  new hotels
router.post("/", createHotel);

// deleting existing hotels
router.delete("/:id", deleteHotel);

// updating existing hotels
router.put("/:id", updateHotel);

// getting a specific hotel
router.get("/:id", getHotel);

// getting all the hotels that exist
router.get("/", getAllHotels);
export default router;
