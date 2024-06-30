const User = require("../models/user.model");
// const Verified = require("../models/token")
const bcryptjs = require("bcryptjs");
const Jwt = require("jsonwebtoken");
const { errorHandler } = require("../utils/error");
const Token = require("../models/token");
const sendMail = require("../utils/sendEmail");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const router = require("express").Router();

// signup function
module.exports.signup = async (req, res, next) => {
  const { username, email, password, role } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword, role });

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }
    // Save user to the database
    await newUser.save();

    // Generate a verification token
    const verificationToken = await new Token({
      userId: newUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    // Construct verification URL
    const url = `${process.env.BASE_URL}/api/user/${newUser._id}/verify/${verificationToken.token}`;

    // Send verification email
    await sendEmail(
      newUser.email,
      "Email Verification",
      url.replace("localhost:3000", "celebrated-palmier-a7462a.netlify.app")
    );

    res
      .status(201)
      .json({ message: "An email is sent to your account please verify" });
  } catch (error) {
    next(error);
  }
};

// signup function
module.exports.signup = async (req, res, next) => {
  const { username, email, password, role } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword, role });

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }
    // Save user to the database
    await newUser.save();

    // Generate a verification token
    const verificationToken = await new Token({
      userId: newUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    // Construct verification URL
    const url = `${process.env.BASE_URL}/api/user/${newUser._id}/verify/${verificationToken.token}`;

    // Send verification email
    await sendEmail(newUser.email, "Email Verification", url);

    res
      .status(201)
      .json({ message: "An email is sent to your account please verify" });
  } catch (error) {
    next(error);
  }
};

// signin function
module.exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser)
      return next(errorHandler(404, "User not found - Create a Account"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong Credentials"));

    // Create JWT token
    const token = Jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...userData } = validUser._doc;

    // Set token as cookie
    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Resend the verification link if user is not verified
    if (!validUser.verified) {
      let token = await Token.findOne({ userId: validUser._id });
      if (!token) {
        // Generate a new verification token
        token = await new Token({
          userId: validUser._id,
          token: crypto.randomBytes(32).toString("hex"),
        }).save();
      }
      // Construct verification URL
      const url = `${process.env.BASE_URL}/api/user/${validUser._id}/verify/${token.token}`;
      // Send verification email
      await sendEmail(validUser.email, "Email Verification", url);

      return res.status(400).send({
        message: "An email has been sent to your account. Please verify.",
      });
    }

    // Send success response with user data and token
    res.status(200).json({ success: true, ...userData, token });
  } catch (error) {
    next(error);
  }
};

// google
// module.exports.google = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     //if user exist
//     if (user) {
//       //creating token
//       const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//       //sending rest except password for security purpose.
//       const { password, ...rest } = user._doc;
//       //creating cookie
//       res
//         .cookie("access_token", token, { httpOnly: true })
//         .status(200)
//         .jso(rest);
//     }
//     //otherwise we create a user
//     else {
//       //humne model mai bnaya hai ki password required hai/must h but google se login ke time hume password  required nahi hoti h. so yaha error aayga isliye ak random password generate kar rhe hai.
//       const generatePassword =
//         Math.random().toString(36).slice(-8) +
//         Math.random().toString(36).slice(-8);
//       //hasing the geenrated password.
//       const hashedPassword = bcryptjs.hashSync(generatePassword, 10);
//       //so yaha humko username mai koi space nahi chahiye and sab lower case mai hone chahiye so uske according convert kar rhe hai.
//       //username with random number at the end.
//       const newUser = new User({
//         username:
//           req.body.name.split(" ").join("").toLowerCase() +
//           Math.random().toString(36).slice(-4),
//         email: req.body.email,
//         password: hashedPassword,
//         avatar: req.body.photo,
//       });
//       //save kar rhe h user ko
//       await newUser.save();

//       //creating tokens - vhi same process.
//       const token = Jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
//       const { password: pass, ...rest } = newUser._doc;
//       res
//         .cookie("access_token", token, { httpOnly: true })
//         .status(200)
//         .json(rest);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// SIGNOUT FUNCTION

module.exports.signOut = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out");
  } catch (error) {
    next(error);
  }
};
