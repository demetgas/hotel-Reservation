import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    unique: true,
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

export default mongoose.model("User", UserSchema);
