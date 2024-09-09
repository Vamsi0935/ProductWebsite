import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import "./login.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { signInFailure, signInStart } from "../../redux/user/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password },
        { withCredentials: true }
      );
      if (res.data.success) {
        Swal.fire({
          title: "Login Successful!",
          text: "You are now logged in.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/shop", { state: { user: res.data.user } });
        });
      } else {
        Swal.fire({
          title: "Login Failed",
          text: res.data.message || "An error occurred.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      Swal.fire({
        title: "Error",
        text: error.res ? error.res.data.message : error.message,
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title display-6">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              type="email"
              id="email"
              placeholder="vamsi@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              value={password}
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="password-toggle" onClick={handleTogglePassword}>
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </span>
          </div>
          <div className="register-link">
            <span>
              Don't have an account?{" "}
              <Link to="/register">Create an account</Link>
            </span>
          </div>
          <button type="submit" className="btn btn-outline-primary w-50">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
