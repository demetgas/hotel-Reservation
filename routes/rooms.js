import express from "express";
import Room from "../modelsof/Room.js";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  updateRoomAvb,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// creating  new rooms
router.post("/:hotelid", verifyAdmin, createRoom);

// deleting existing rooms
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// updating existing rooms
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvb);

// getting a specific room
router.get("/:id", getRoom);

// getting all the rooms that exist
router.get("/", getAllRooms);

export default router;
