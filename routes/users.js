import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/* router.get("/checkconfirm", verifyToken, (req, res, next) => {
 res.send("You are logged in!");
}); 

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("You are logged in and can delete your account!");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("You are logged in and can delete all accounts!");
});*/

// deleting existing Users
router.delete("/:id", verifyUser, deleteUser);

// updating existing Users
router.put("/:id", verifyUser, updateUser);

// getting a specific User
router.get("/:id", verifyUser, getUser);

// getting all the Users that exist
router.get("/", verifyAdmin, getAllUsers);
export default router;
