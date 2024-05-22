const express = require("express");
const { signup, signin, google, signOut } = require("../controllers/auth.controller");
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout' , signOut);
router.post('/google', google);

module.exports = router;
