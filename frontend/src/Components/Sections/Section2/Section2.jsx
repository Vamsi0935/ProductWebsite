import React from "react";
import "./section2.css"; 

const Section2 = () => {
  return (
    <div className="section2-container">
      <h1 className="display-2">Accept credit cards anywhere</h1>
      <p className="display-3">
        Square’s free credit card reader works with the free Square Point of
        Sale app to let <br /> everyone accept swipe payments on their
        smartphone or tablet.
      </p>
      <img
        src="https://images.ctfassets.net/2d5q1td6cyxq/4rtj4vjS52iYMO4IOqwkYa/846ca881e2995d5d7c589c2a78b160e7/PD00493_-_US_Social_magstripe_reader_photobreak.png?w=1016&h=532&fm=avif&q=85&fit=scale"
        alt="Square Reader"
      />
    </div>
  );
};

export default Section2;
