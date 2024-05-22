const jwt = require('jsonwebtoken');
const { errorHandler } = require('./error.js');

//token ko authenticate kar rhe hai 
module.exports.verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log('Token:', token); // Debug: log the token
    //error function ko call kar rhe hai (next)
    if (!token) {
        console.log("No token found in cookies");
        return next(errorHandler(401, 'Unauthorized'));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log("Token verification failed:", err.message);
            return next(errorHandler(403, 'Forbidden'));
        }
        req.user = user;
        next();
        //agar sab kuch shi hai to req mai ye authenticated user ko de do and next function that is updateUser ko trigger karo.
        //here we are getting id of the verified user. 
    });
};