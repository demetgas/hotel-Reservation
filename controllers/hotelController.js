import Hotel from "../modelsof/Hotel.js";
//Creating a hotel
export const createHotel = async (req, res, next) => {
  // taking information about hotels from costumers,
  // here req is any parameter that we take from costumer , basically it will store hotel information.
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    //if its succesfull we will create a new hotel
    res.status(200).json(savedHotel);
    //if not we will have an error
  } catch (e) {
    next(e);
    //500 is a server error, here if an error occurs we will handle and specify them and we will handle them using express middlewares
  }
};

//Deleting a hotel
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    //if its succesfull we will delete the hotel
    res.status(200).json("You just deleted the hotel.");
    //if not we will have an error
  } catch (e) {
    next(e);
  }
};
//Updating existing hotels
export const updateHotel = async (req, res, next) => {
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
    next(e);
  }
};
//Getting a specific hotel
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    //if its succesfull we will get the hotels
    res.status(200).json(hotel);

    //if not we will have an error
  } catch (e) {
    next(e);
  }
};
//Getting all the hotels that exist
export const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();

    //if its succesfull we will get the hotel
    res.status(200).json(hotels);

    //if not we will have  an error
  } catch (e) {
    next(e);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((cityname) => {
        return Hotel.countDocuments({ cityname: cityname });
      })
    );
    res.status(200).json(list);
  } catch (e) {
    next(e);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = Hotel.countDocuments({ type: "hotel" });
    const apartCount = Hotel.countDocuments({ type: "apart" });
    const resortCount = Hotel.countDocuments({ type: "resort" });
    const villaCount = Hotel.countDocuments({ type: "villa" });
    const cabinCount = Hotel.countDocuments({ type: "cabin" });

    res
      .status(200)
      .json([
        { type: "hotel" },
        { type: "apart" },
        { type: "resort" },
        { type: "villa" },
        { type: "cabin" },
      ]);
  } catch (e) {
    next(e);
  }
};
