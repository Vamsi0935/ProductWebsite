const Cart = require("../model/cart.model");

// Add item to cart
exports.addToCart = async (req, res) => {
  const { user_id, product } = req.body;

  try { 
    let cart = await Cart.findOne({ user_id });
    if (!cart) {
      cart = new Cart({ user_id, items: [product] });
    } else {
      const productIndex = cart.items.findIndex(
        (item) => item.product_id === product.product_id
      );
      if (productIndex > -1) {
        cart.items[productIndex].quantity += product.quantity;
      } else {
        cart.items.push(product);
      }
    }
    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Error adding to cart", error: err });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  const { user_id, product_id } = req.body;

  try {
    let cart = await Cart.findOne({ user_id });
    if (cart) {
      cart.items = cart.items.filter((item) => item.product_id !== product_id);
      await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error removing from cart", error: err });
  }
};

// Get cart items
exports.getCart = async (req, res) => {
  const { user_id } = req.params;

  try {
    const cart = await Cart.findOne({ user_id });
    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart", error: err });
  }
};
