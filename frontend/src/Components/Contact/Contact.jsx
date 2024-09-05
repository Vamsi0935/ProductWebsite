import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/contact",
        formData
      );
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Failed to send message.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred.",
      });
    }
  };

  return (
    <div>
      <div className="container row">
        <div className="col-6">
          <h1 className="display-2">Contact</h1>
          <img
            src="https://www.shutterstock.com/image-photo/using-computerhand-typing-keyboard-laptop-600nw-1774949384.jpg"
            alt=""
          />
        </div>
        <div className="col-6 bg bg-light border border-light p-4 rounded ms-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-5">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                className="form-control"
                id="name"
                placeholder="Enter your fullname"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={formData.email}
                className="form-control"
                id="email"
                placeholder="square@gmail.com"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-danger w-25">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
