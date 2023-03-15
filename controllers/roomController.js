import Room from "../modelsof/Room.js";
import Hotel from "../modelsof/Hotel.js";
import { createError } from "../utils/error.js";

//Creating a room
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (e) {
      next(e);
    }
    res.status(200).json(savedRoom);
  } catch (e) {
    next(e);
  }
};
//Deleting a room
export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (e) {
        next(e);
      }
    //if its succesfull we will delete the Room
    res.status(200).json("You just deleted the Room.");
    //if not we will have an error
  } catch (e) {
    next(e);
  }
};

//Updating existing Rooms
export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body } /*updates*/,
      { new: true } /*returns the updated version */
    );

    //if its succesfull we will get the updated Room

    res.status(200).json(updatedRoom);

    //if not we will have an error
  } catch (e) {
    next(e);
  }
};
//Getting a specific Room
export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);

    //if its succesfull we will get the Rooms
    res.status(200).json(room);

    //if not we will have an error
  } catch (e) {
    next(e);
  }
};
//Getting all the Rooms that exist
export const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();

    //if its succesfull we will get the Room
    res.status(200).json(rooms);

    //if not we will have  an error
  } catch (e) {
    next(e);
  }
};
