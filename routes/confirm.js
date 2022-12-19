import express from "express";
import { register } from "../utils/controllers/confirmController.js";

const router = express.Router();

router.post("/register", register);
export default router;
