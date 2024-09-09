import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";
import "./addtocart.css";

const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const auth = useAuth();
  const user = auth?.user;

  useEffect(() => {
    const fetchCart = async () => {
      if (user?.userId) {
        setLoading(true);
        try {
          const response = await axios.get(
            `http://localhost:5000/api/cart/${user.userId}`
          );
          setCart(response.data.items || []);
        } catch (err) {
          console.error("Error fetching cart:", err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCart();
  }, [location, user]);

  const addToCart = async (product) => {
    if (user?.userId) {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:5000/api/cart/add",
          {
            user_id: user.userId,
            product,
          }
        );
        setCart(response.data.items || []);
      } catch (err) {
        console.error("Error adding item to cart:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  const removeFromCart = async (product_id) => {
    if (user?.userId) {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:5000/api/cart/remove",
          {
            user_id: user.userId,
            product_id,
          }
        );
        setCart(response.data.items || []);
      } catch (err) {
        console.error("Error removing item from cart:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  const updateQuantity = async (index, increment) => {
    if (user?.userId) {
      const updatedCart = [...cart];
      const product = updatedCart[index];

      if (increment) {
        product.quantity += 1;
      } else if (product.quantity > 1) {
        product.quantity -= 1;
      }

      setLoading(true);
      try {
        await axios.post("http://localhost:5000/api/cart/add", {
          user_id: user.userId,
          product,
        });
        setCart(updatedCart);
      } catch (err) {
        console.error("Error updating quantity:", err);
      } finally {
        setLoading(false);
      }
    }
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
      {loading && <p className="loading">Loading...</p>}
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
                  onClick={() => removeFromCart(product.product_id)}
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
