import User from "../../modelsof/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../../utils/error.js";

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
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found"));

    const isPwdCorrect = await bcrypt.compare(req.body.pwd, user.pwd);
    if (!isPwdCorrect)
      return next(createError(400, "Wrong password or username"));
    // pwd and isAdmin features won't be shown
    const { pwd, isAdmin, ...otherDetails } = user._doc;
    res.status(201).json(otherDetails);
  } catch (e) {
    next(e);
  }
};
