import React from "react";
import { headerImages } from "../Products/utils/Data";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      {headerImages.map((headerImage, index) => (
        <div className="items" key={index}>
          <img src={headerImage.url} alt={headerImage.name} />
          <p>{headerImage.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Header;
