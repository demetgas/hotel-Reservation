import express from "express";
import {verifyAdmin} from "../utils/verifyToken"

const router = express.Router();

// creating  new hotels
router.post("/", verifyAdmin, createRoom);

// deleting existing hotels
router.delete("/:id", verifyAdmin, deleteHotel);

// updating existing hotels
router.put("/:id", verifyAdmin, updateHotel);

// getting a specific hotel
router.get("/:id", getHotel);

// getting all the hotels that exist
router.get("/", getAllHotels);

export default router