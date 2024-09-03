import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (indexToRemove) => {
    const updatedWishlist = wishlist.filter(
      (_, index) => index !== indexToRemove
    );
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const addToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...storedCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    navigate("/add-to-cart");

    console.log("Cart updated:", updatedCart);
  };

  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>
      {wishlist.length > 0 ? (
        <ul>
          {wishlist.map((product, index) => (
            <li key={index} className="wishlist-product-card">
              <img src={product.product_url} alt={product.product_title} />
              <div className="wishlist-product-details">
                <p>{product.product_title}</p>
                <p>{product.product_content}</p>
                <p>{product.product_cost}</p>
              </div>
              <div className="button-group">
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromWishlist(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
