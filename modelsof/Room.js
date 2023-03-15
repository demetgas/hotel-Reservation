import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  pwd: {
    type: String,
    required: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: false,
  },
},{timestamps:true});

export default mongoose.model("Room", RoomSchema);