const bcryptjs = require("bcryptjs");
const User = require("../models/user.model.js");
const { errorHandler } = require("../utils/error.js");
const Token = require("../models/token.js");

module.exports.test = (req, res) => {
  res.json({
    message: "API Route is Working",
  });
};

// UPDATE USER ROUTE
module.exports.updateUser = async (req, res, next) => {
  console.log("User:", req.user);
  console.log("Request Params:", req.params);
  console.log("Request Body:", req.body);

  if (req.user.id != req.params.id)
    return next(errorHandler(401, "You can only update your own account"));
  try {
    if (req.body.password) {
      //agar user password change karna chahta hai to hum password ko hash karenge.
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updateUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

// DELETE USER

module.exports.deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only delete your own account"));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};

// VERIFY THE LINK
module.exports.verifyEmail = async (req, res) => {
  try {
    const { userId, token } = req.params;
    console.log("User ID:", userId);
    console.log("Token:", token);

    const user = await User.findOne({ _id: userId });
    if (!user) {
      console.log("Invalid user ID");
      return res.status(400).send({ message: "Invalid link" });
    }

    const tokenRecord = await Token.findOne({ userId: user._id, token });
    if (!tokenRecord) {
      console.log("Invalid token");
      return res.status(400).send({ message: "Invalid link" });
    }

    await User.updateOne({ _id: user._id }, { verified: true });
    await Token.deleteOne({ _id: tokenRecord._id });

    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// data ko update hum set method ka use karke karenge , kyuki aisa ho skta hai ki user skuch hi data ko change karna chahata hai , like bas password or bas email etc.
//set method check karta hai ki kya data change hua h agar yes to update karenge else ignore
