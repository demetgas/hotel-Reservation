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
    //if its succesfull we will create a new hotel
    res.status(200).json(savedHotel);
    //if not we will have an error
  } catch (e) {
    res.status(500).json(e);
    //500 is a server error, here if an error occurs we will handle and specify them and we will handle them using express middlewares
  }
});
// deleting existing hotels
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    //if its succesfull we will delete the hotel
    res.status(200).json("You just deleted the hotel.");
    //if not we will have an error
  } catch (e) {
    res.status(500).json(e);
  }
});

//updating existing hotels
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body } /*updates*/,
      { new: true } /*returns the updated version */
    );

    //if its succesfull we will get the updated hotel

    res.status(200).json(updatedHotel);

    //if not we will have an error
  } catch (e) {
    res.status(500).json(e);
  }
});
//getting a specific hotel

router.get("/:id", async (req, res) => {
  try {
    await hotel.findById(req.params.id);

    //if its succesfull we will get the hotels
    res.status(200).json(hotel);

    //if not we will have an error
  } catch (e) {
    res.status(500).json(e);
  }
});

//getting all the hotels that exist

router.get("/", async (req, res) => {
  try {
    await hotels.find();

    //if its succesfull we will get the hotel
    res.status(200).json(hotels);

    //if not we will have an error
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;
