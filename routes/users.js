import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

// deleting existing Users
router.delete("/:id", deleteUser);

// updating existing Users
router.put("/:id", updateUser);

// getting a specific User
router.get("/:id", getUser);

// getting all the Users that exist
router.get("/", getAllUsers);
export default router;
