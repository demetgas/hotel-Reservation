import express from "express";
import Hotel from "../modelsof/Hotel.js";

const router = express.Router();

// creating  new hotels
router.post("/", async (req, res) => {
  // taking information about hotels from costumers,
  // here req is any parameter that we take from costumer , basically it will store hotel information.
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (e) {
    res.status(500).json(e);
    //500 is a server error, here if an error occurs we will handle and specify them and we will handle them using express middlewares
  }
});
// deleting existing hotels

//updating existing hotels

//getting

//getting all

export default router;
