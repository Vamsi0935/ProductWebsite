const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  product_id: String,
  product_title: String,
  product_content: String,
  product_url: String,
  product_cost: Number,
  quantity: { type: Number, default: 1 },
});

const CartSchema = new mongoose.Schema({
  user_id: String,
  items: [cartItemSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("addtocart", CartSchema);
