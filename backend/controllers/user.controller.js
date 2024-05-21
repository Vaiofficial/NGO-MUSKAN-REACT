const bcryptjs = require("bcryptjs");
const User = require("../models/user.model.js");
const { errorHandler } = require("../utils/error.js");

module.exports.test = (req, res) => {
    res.json({
        message: "API Route is Working",
    });
};

module.exports.updateUser = async (req, res, next) => {
    // console.log('User:', req.user);
    // console.log('Request Params:', req.params);
    // console.log('Request Body:', req.body);

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
