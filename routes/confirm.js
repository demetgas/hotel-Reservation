import express from "express";
import { login,register } from "../utils/controllers/confirmController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
export default router;
