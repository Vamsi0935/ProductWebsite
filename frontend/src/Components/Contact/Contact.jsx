import React from "react";
import "./contact.css"

const Contact = () => {
  return (
    <div>
      <div className="container row">
        <div className="col-6">
          <h1 className="display-2">Contact</h1>
          <img src="https://www.shutterstock.com/image-photo/using-computerhand-typing-keyboard-laptop-600nw-1774949384.jpg" alt="" />
        </div>
        <div className="col-6">
          <div class="mb-3">
            <label for="name" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter your fullname"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="square@gmail.com"
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">
              Message:
            </label>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="button" class="btn btn-outline-info w-100">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
