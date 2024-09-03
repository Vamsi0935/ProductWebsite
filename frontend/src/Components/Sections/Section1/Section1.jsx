import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./section1.css";

const Section1 = () => {
  return (
    <div className="section-container">
      <h2 className="display-3">Square Reader for magstripe</h2>
      <h1 className="display-1">
        Small credit card <br /> reader, big possibilities.
      </h1>
      <button type="button">
        Get a free reader
      </button>
      <p>
        Already claimed your free reader? Order another 
        <FaArrowRight />
      </p>
      <div className="image">
        <img
          src="https://images.ctfassets.net/2d5q1td6cyxq/DjRIOWJhu0KQIkAcaiM0M/86fbc819628472cf08fe11487506186b/PD00491_-_hardware_hero_magstripe_reader.extra-large.png?w=1680&h=380&fm=avif&q=85&fit=scale"
          alt="reader-img"
        />
      </div>
    </div>
  );
};

export default Section1;
