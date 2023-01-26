import User from "../modelsof/User.js";

//Deleting a User
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("You just deleted the User.");
  } catch (e) {
    next(e);
  }
};
//Updating existing Users
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body } /*updates*/,
      { new: true } /*returns the updated version */
    );
    res.status(200).json(updatedUser);
  } catch (e) {
    next(e);
  }
};
//Getting a specific User
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};
//Getting all the users that exist
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};
