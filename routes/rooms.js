import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/roomController";
import {verifyAdmin} from "../utils/verifyToken"

const router = express.Router();

// creating  new rooms
router.post("/", verifyAdmin, createRoom);

// deleting existing rooms
router.delete("/:id", verifyAdmin, deleteRoom);

// updating existing rooms
router.put("/:id", verifyAdmin, updateRoom);

// getting a specific hotel
router.get("/:id", getRoom);

// getting all the rooms that exist
router.get("/", getAllRooms);

export default router