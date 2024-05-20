const User = require("../models/user.model");
const Jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../utils/error");

// signup function
module.exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  // try catch
  try {
    await newUser.save();
    res.setHeader("Content-Type", "application/json");
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

// signin function

module.exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //checking email & password in mongodb
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    const ValidPassword = bcryptjs.compareSync(password, validUser.password);
    if (!ValidPassword) return next(errorHandler(401, "Wrong Credentials"));
    //if every thing is fine means email & password then we sign a token using jwt package.
    const token = Jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    //password ko even hash form mai bhi nahi bhejna hai so ...rest ko bhej rhe except password
    const { password: pass, ...rest } = validUser._doc;
    //now we are saving the cookie
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
