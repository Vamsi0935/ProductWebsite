import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../utils/AuthProvider";
import "./wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth(); 

  useEffect(() => {
    if (user) {
      const fetchWishlist = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/wishlist/${user._id}`
          );
          setWishlist(response.data.wishlist.products);
        } catch (error) {
          console.error("Error fetching wishlist:", error);
        }
      };

      fetchWishlist();
    }
  }, [user]);

  const removeFromWishlist = async (productId) => {
    try {
      await axios.delete("http://localhost:5000/api/wishlist/remove", {
        data: { userId: user._id, productId },
      });
      setWishlist(
        wishlist.filter((product) => product.productId !== productId)
      );
    } catch (error) {
      console.error("Error removing product from wishlist:", error);
    }
  };

  const addToCart = async (product) => {
    try {
      await axios.post("http://localhost:5000/api/cart/add", {
        userId: user._id,
        product,
      });
      navigate("/add-to-cart");
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  if (!user) {
    return <p>Please log in to view your wishlist.</p>;
  }

  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>
      {wishlist.length > 0 ? (
        <ul>
          {wishlist.map((product) => (
            <li key={product.productId} className="wishlist-product-card">
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
                  onClick={() => removeFromWishlist(product.productId)}
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
