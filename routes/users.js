import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkconfirm", verifyToken, (req, res, next) => {
  res.send("You are logged in!");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("You are logged in and can delete your account!");
});

// deleting existing Users
router.delete("/:id", deleteUser);

// updating existing Users
router.put("/:id", updateUser);

// getting a specific User
router.get("/:id", getUser);

// getting all the Users that exist
router.get("/", getAllUsers);
export default router;
