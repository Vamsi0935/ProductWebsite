const express = require("express");
const router = express.Router();
const { registerUser, loginUser, contactUser } = require("../controller/user.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/contact", contactUser)

module.exports = router;
