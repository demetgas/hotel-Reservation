import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  buildingtype: {
    type: String,
    required: false,
  },
  cityname: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  distancefromcenter: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  images: {
    type: [String],
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  valuation: {
    type: Number,
    max: 10,
    min: 0,
    required: false,
  },
  rooms: {
    type: [String],
    required: false,
  },
  lowestprice: {
    type: Number,
    required: false,
  },
  featuredhotels: {
    type: Boolean,
    default: false,
    required: false,
  },
});

export default mongoose.model("Hotel", hotelSchema);
