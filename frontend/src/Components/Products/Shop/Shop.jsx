import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../utils/Data";
import "./shop.css";

const Shop = () => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    return savedWishlist || [];
  });
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || [];
  });
  const navigate = useNavigate();

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.some(
        (item) => item.product_url === product.product_url
      )
        ? prevWishlist.filter(
            (item) => item.product_url !== product.product_url
          )
        : [...prevWishlist, product];

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      return updatedWishlist;
    });
  };

  const isInWishlist = (product) => {
    return wishlist.some((item) => item.product_url === product.product_url);
  };

  const handleWishlistClick = (product) => {
    toggleWishlist(product);
    navigate("/wish-list", { state: { product } });
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });

    navigate("/add-to-cart");
  };

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product, index) => (
          <div className="col" key={index}>
            <div className="card">
              <img
                src={product.product_url}
                className="card-img-top"
                alt={product.product_title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.product_title}</h5>
                <p className="card-text">{product.product_content}</p>
                <p className="card-text">
                  <strong>{product.product_cost}</strong>
                </p>
                <div className="button-group">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className={`btn ${
                      isInWishlist(product)
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => handleWishlistClick(product)}
                  >
                    {isInWishlist(product)
                      ? "Remove from Wishlist"
                      : "Add to Wishlist"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
