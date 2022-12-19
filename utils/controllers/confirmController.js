import User from "../../modelsof/User.js";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
  try {
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
