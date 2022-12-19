import User from "../../modelsof/User.js";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
  try {

    // adding hash with bcryptjs library so our password wont be seen by everyone in mongodb instead it will show a hash number
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.pwd, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      pwd: hash,
    });
    await newUser.save();
    res.status(201).send("user successfully registered");
  } catch (e) {
    next(e);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = User.find({username:req.body.username})
    if(!user) return next(createError(404,"User not found"))
    res.status(201).send("user successfully registered");
  } catch (e) {
    next(e);
  }
};
