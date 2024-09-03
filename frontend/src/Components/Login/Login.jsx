import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Attempted with:", email, password);
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
