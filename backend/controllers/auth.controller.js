const User = require('../models/user.model');
const bcryptjs = require("bcryptjs")

module.exports.signup = async (req, res,next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    // try catch
    try {
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch(error)
    {
        next(error); 
    }
 
}; 
