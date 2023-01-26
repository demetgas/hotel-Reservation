import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import confirmRoute from "./routes/confirm.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";

export const app = express();
app.use(cookieParser());

// MiddleWare for sending json objects,
// they are important bc they can reach requests and responds
// before sending anything to the users

app.use(express.json());
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB is disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB is connected");
});

// MiddleWare --> requesting an object, responding to an object, and moving to the next middleware function
app.use("/api/confirm", confirmRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.use((e, req, res, next) => {
  const eStatus = e.status || 500;
  const eMessage = e.message || "Error";
  return res.status(eStatus).json({
    success: false,
    status: eStatus,
    message: eMessage,
    stack: e.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("in touch with backend!");
});

mongoose.set("strictQuery", false);
