const express = require("express");
const {
  addToCart,
  removeFromCart,
  getCart,
} = require("../controller/cart.controller");

const router = express.Router();

// Routes
router.post("/add", addToCart);
router.post("/remove", removeFromCart);
router.get("/:user_id", getCart);

module.exports = router;
