import React from "react";
import "./about.css";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="container row">
        <div className="col-6">
          <h1 className="display-2">About Square</h1>
        </div>
        <div className="col-6">
          <p>
            Fifteen years ago, not all businesses could accept credit cards.
            Square set out to change that — inventing the first mobile card
            reader of its kind. This allowed businesses to take payments
            anywhere and keep thriving in the economy. It also completely
            disrupted how the financial system thinks about small businesses.
            With this shift, Square’s journey took off — moving far beyond its
            origins as a payment processor to building new tools and solutions
            for the future.
          </p>
          <p>
            Today, Square is the largest business technology platform serving
            all kinds of businesses. The Square operating system allows business
            owners to sell anywhere, work more efficiently, manage inventory,
            communicate with customers, book appointments, course meals, order
            online, and so much more. These tools unlock endless possibilities
            and countless opportunities for any operation from global chains to
            mom-and-pop shops.
          </p>
        </div>
      </div>
      <div className="card-group">
        <div className="card">
          <img
            src="https://images.ctfassets.net/2d5q1td6cyxq/5Q0p6IGVfUpmRYc67ltxTc/a2318425371626dba246674c3ce049f0/PD05943_-_square_newsroom.png?w=400&h=319&fm=avif&q=85&fit=scale"
            className="card-img-top"
            alt="Square Newsroom"
          />
          <div className="card-body">
            <h5 className="card-title">Read the latest Square news</h5>
            <p>
              Square Newsroom <FaArrowRightLong />
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.ctfassets.net/2d5q1td6cyxq/4c1dYuMSXEmd0SchODngl4/5f2b41b6a6c91ca895e0afdf2e09dd12/PD05943_-_USEN_square_tbl_townsquare.png?w=400&h=319&fm=avif&q=85&fit=scale"
            className="card-img-top"
            alt="The Bottom Line"
          />
          <div className="card-body">
            <h5 className="card-title">
              Get in-depth business insights and exclusive interviews
            </h5>
            <p>
              The Bottom Line <FaArrowRightLong />
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.ctfassets.net/2d5q1td6cyxq/ti6WlhJeZypfb48Fuwas5/8d030ee6127d0ee59b24bb1a5e85b47a/PD05943_-_USEN_all_hardware_collage.png?w=400&h=319&fm=avif&q=85&fit=scale"
            className="card-img-top"
            alt="Square products"
          />
          <div className="card-body">
            <h5 className="card-title">
              Learn about our hardware and software
            </h5>
            <p>
              Square products <FaArrowRightLong />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
