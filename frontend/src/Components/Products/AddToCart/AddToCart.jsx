import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./addtocart.css";

const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const normalizedCart = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
      product_cost: parseFloat(item.product_cost) || 0,
    }));
    setCart(normalizedCart);
    console.log("Loaded Cart:", normalizedCart);
  }, [location]);

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (index, increment) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (increment) {
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity + 1,
        };
      } else if (updatedCart[index].quantity > 1) {
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity - 1,
        };
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) =>
        total + (product.product_cost || 0) * (product.quantity || 1),
      0
    );
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.length === 0 ? (
          <div className="text-center empty-cart">
            <h5 className="display-6">Nothing yet.</h5>
            <p>Start adding to your cart to view them here.</p>
          </div>
        ) : (
          cart.map((product, index) => (
            <div className="cart-item" key={index}>
              <img
                src={product.product_url}
                className="cart-item-img"
                alt={product.product_title}
              />
              <div className="cart-item-details">
                <h5>{product.product_title}</h5>
                <p>{product.product_content}</p>
                <p>
                  <strong>${(product.product_cost || 0).toFixed(2)}</strong>
                </p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(index, false)}>
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button onClick={() => updateQuantity(index, true)}>+</button>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <h3>Your cart</h3>
        <p>
          {cart.length} item(s) for ${calculateTotal().toFixed(2)}
        </p>
        <div className="summary-details">
          <p>Subtotal: ${calculateTotal().toFixed(2)}</p>
          <p>Shipping: Free</p>
          <p>Tax: To be calculated</p>
          <h4>Total: ${calculateTotal().toFixed(2)}</h4>
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
