const express = require("express");
const router = express.Router();
const wishlistController = require("../controller/wishlist.controller");

// Add product to wishlist
router.post("/add", wishlistController.addToWishlist);
router.get("/:userId", wishlistController.getWishlist);
router.delete("/remove", wishlistController.removeFromWishlist);

module.exports = router;
