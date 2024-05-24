const express = require("express");
const { test, updateUser, deleteUser } = require("../controllers/user.controller.js");
const {verifyToken}  = require('../utils/verifyUser.js');
const { verifyEmail } = require("../controllers/user.controller.js");

const router = express.Router();

router.get('/test', test);
router.post('/update/:id' , verifyToken, updateUser);
router.delete('/delete/:id', verifyToken , deleteUser);
router.get("/:userId/verify/:token", verifyEmail);

module.exports = router;