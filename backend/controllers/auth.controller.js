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

// google
module.exports.google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    //if user exist
    if (user) {
      //creating token
      const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      //sending rest except password for security purpose.
      const { password, ...rest } = user._doc;
      //creating cookie
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
    //otherwise we create a user
    else {
      //humne model mai bnaya hai ki password required hai/must h but google se login ke time hume password  required nahi hoti h. so yaha error aayga isliye ak random password generate kar rhe hai.
      const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      //hasing the geenrated password.
      const hashedPassword = bcryptjs.hashSync(generatePassword, 10);
      //so yaha humko username mai koi space nahi chahiye and sab lower case mai hone chahiye so uske according convert kar rhe hai.
      //username with random number at the end.
      const newUser = new User({ username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4), email: req.body.email, password: hashedPassword, avatar: req.body.photo })
      //save kar rhe h user ko
      await newUser.save();

      //creating tokens - vhi same process.
      const token = Jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
    }
  } catch (error) {
    next(error);
  }
};
