import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Navbar = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cartItems.length);

    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);

    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 

    console.log("Login status:", !!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    Swal.fire({
      title: "Logged Out",
      text: "You have been logged out.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <div className="header">
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
            {!isLoggedIn ? (
              <>
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
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/profile"
                    className="text-decoration-none text-black"
                  >
                    Profile
                  </Link>
                </li>
                <li onClick={handleLogout} style={{ cursor: "pointer" }}>
                  Logout
                </li>
              </>
            )}
            <li>
              <Link to="/shop" className="text-decoration-none text-black">
                Shop
              </Link>
            </li>
            <li style={{ position: "relative" }}>
              <Link to="/wish-list" className="text-decoration-none text-black">
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
          </ul>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Navbar;
