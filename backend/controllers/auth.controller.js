const User = require("../models/user.model");
const Jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

// Custom error handler
const errorHandler = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

// signup function
module.exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  
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
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong Credentials"));
    
    const token = Jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    
    res.cookie("access_token", token, { httpOnly: true })
       .status(200)
       .json(rest);
  } catch (error) {
    next(error);
  }
};
