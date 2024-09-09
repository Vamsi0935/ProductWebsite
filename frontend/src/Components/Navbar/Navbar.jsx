import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Navbar = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cartItems.length);

    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const toggleWishlist = (product) => {
    const isAlreadyInWishlist = wishlist.some(
      (item) => item.product_url === product.product_url
    );

    const updatedWishlist = isAlreadyInWishlist
      ? wishlist.filter((item) => item.product_url !== product.product_url)
      : [...wishlist, product];

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    const message = isAlreadyInWishlist
      ? "Removed from Wishlist"
      : "Added to Wishlist";

    MySwal.fire({
      title: `${product.product_title}`,
      text: `${message}`,
      icon: "success",
      confirmButtonText: "OK",
    });

    navigate("/wish-list");
  };
  const onLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <div>
        <div className="header shadow bg-body-tertiary rounded fixed-top">
          <div className="header-left">
            <div className="header-logo">
              <img
                src="https://cdn.mos.cms.futurecdn.net/fkfrpUczs8hmdUuBAi6kva.jpg"
                alt="Square Logo"
              />
            </div>
            <div className="header-nav">
              <ul>
                <Link to="/" className="text-decoration-none text-black">
                  Home
                </Link>
                <Link to="/about" className="text-decoration-none text-black">
                  About
                </Link>
                <Link to="/contact" className="text-decoration-none text-black">
                  Contact
                </Link>
              </ul>
            </div>
          </div>
          <div className="header-right">
            <ul>
              <li>
                <Link to="/login" className="text-decoration-none text-black">
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-decoration-none text-black"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-decoration-none text-black">
                  Shop
                </Link>
              </li>
              <li style={{ position: "relative" }}>
                <Link
                  to="/wish-list"
                  className="text-decoration-none text-black"
                >
                  {wishlist.length > 0 ? (
                    <IoIosHeart className="wishlist-icon-filled" />
                  ) : (
                    <IoIosHeartEmpty className="wishlist-icon-empty" />
                  )}
                  {wishlist.length > 0 && (
                    <span className="wishlist-badge">{wishlist.length}</span>
                  )}
                </Link>
              </li>
              <li style={{ position: "relative" }}>
                <Link
                  to="/add-to-cart"
                  className="text-decoration-none text-black"
                >
                  <MdOutlineShoppingCart />
                  {cartCount > 0 && (
                    <span className="cart-badge">{cartCount}</span>
                  )}
                </Link>
              </li>
              <ProfileInfo onLogout={onLogout} />
            </ul>
          </div>
        </div>
      </div>
      <Header />
    </>
  );
};

export default Navbar;
