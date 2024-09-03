/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./section3.css";
import { FaArrowRight } from "react-icons/fa";

const Section3 = () => {
  return (
    <div className="section3-container">
      <div className="titlePart-1">
        <h1 className="display-4">Fast setup, no commitments</h1>
        <p className="display-6">
          Sign up for Square and we’ll drop your free card reader in the mail—no
          commitments or <br /> long-term contracts.
        </p>
      </div>
      <div className="titlePart-2 row container">
        <div className="col-6">
          <h2 className="display-6">Clear pricing, fast transfers</h2>
          <p className="display-5">
            Pay 2.6% + 10¢ per swipe for Visa, Mastercard, Discover, <br /> and
            American Express. Get your money as fast as the next <br /> business
            day.
          </p>
          <p>
            Learn more about Square Payments <FaArrowRight />
          </p>
        </div>
        <div className="image col-6">
          <img
            src="https://images.ctfassets.net/2d5q1td6cyxq/3ZwrRACtc4oIeEIaMcWIK0/274a598ab7f05a87ce4c7c1861d8b4f8/PD00497_-_lightning_reader_amex.png?w=498&h=418&fm=avif&q=85&fit=scale"
            alt="Square Reader Image"
          />
        </div>
      </div>
      <div className="titlePart-3 row">
        <div className="image col-6">
          <img
            src="https://images.ctfassets.net/2d5q1td6cyxq/B3FV5onjygocgo08u6QcA/f0a7dfe2785eab7dbfa2a9c492a11bf3/PD00498_-_magstripe_and_lightning_readers.png?w=498&h=390&fm=avif&q=85&fit=scale"
            alt="Square Reader Image"
          />
        </div>
        <div className="col-6">
          <h2 className="display-6">Works with iOS and Android</h2>
          <p className="display-5">
            With two versions of Square Reader for magstripe—one for <br /> a
            headset jack, the other a Lightning connector—you’re <br /> covered.
            Just pick the credit card reader that works <br /> for you.
          </p>
          <p>
            Get paid any way you like with the Square Point of Sale <br /> app.
          </p>
          <p>
            Take payments at the counter or on the go, remotely <br /> through
            invoices, or by manually entering card numbers.
          </p>
          <img
            src="https://xms-production-f.squarecdn.com/xms/assets/public-web-styles/buttons/app_store-a5393c3ebb006482d5b8fbcd375b109ec2d3a2c9ae8fff8819a89511f6f3cef3.svg"
            alt="playstore-1"
          />
          <img
            src="https://xms-production-f.squarecdn.com/xms/assets/public-web-styles/buttons/google_play-41cde8cd445fc4b02e8e1b3c3343a0f6ceb596544d258b427976224f054e8c61.svg"
            alt="playstore-2"
          />
        </div>
      </div>
      <img
        src="https://images.ctfassets.net/2d5q1td6cyxq/JfyHJjpYzpu5HuYyoMEyw/b40c76e5ba891b714b1a917754dfc34f/PD01029_-_US_collins_family_orchard_lightning_reader.png?w=1016&h=423&fm=avif&q=85&fit=scale"
        alt=""
        className="end-image"
      />
    </div>
  );
};

export default Section3;
