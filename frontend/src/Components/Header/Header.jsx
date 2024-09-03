import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header-submenu"> 
        <ul>
          <li>
            <img
              src="https://images.ctfassets.net/2d5q1td6cyxq/1BXsrMLKeBfUNzSuq1hPOR/4a3328cdf1b9225f16bec041f41454e5/prodnav_register.png"
              alt="Register"
            />
            <span>Register</span>
          </li>
          <li>
            <img
              src="https://images.ctfassets.net/2d5q1td6cyxq/56XkDFljFsXkrddxJTEbeo/9b0eb9761602f27cc00f5868d79a994b/prodnav_terminal_V3.png"
              alt="Terminal"
            />
            Terminal
          </li>
          <li>
            <img
              src="https://images.ctfassets.net/2d5q1td6cyxq/4g86hwVhCYMbNdXqRaji23/d81d78504d43f183e83263f97e4eeb9f/Image_Subnav_-_Stand_2nd_gen_v2.png"
              alt="Stand"
            />
            Stand
          </li>
          <li>
            <img
              src="https://images.ctfassets.net/2d5q1td6cyxq/3DOgAgY2mszgUtoy6zvHo2/6a53e5e0eac4f30251567aa01d4eb431/Image_Subnav_-_Kiosk.png"
              alt="Kiosk"
            />
            Kiosk
          </li>
          <li>
            <img
              src="https://images.ctfassets.net/2d5q1td6cyxq/3PR95a4thFPbNahZe49Suu/7f1a89bd803492c56cf9195a848f43a8/HW-Subnav_Reader.png"
              alt="Reader"
            />
            Reader
          </li>
          <li>
            <img
              src="https://images.ctfassets.net/2d5q1td6cyxq/6vDnqTz5OcMN1Jt3rTdqqV/feb3f4d3119bcd83899d480fe2c08288/magreader.png"
              alt="Accessories"
            />
            Accessories
          </li>
          <li>
            <img
              src="https://images.ctfassets.net/2d5q1td6cyxq/10vjNsLjeLlimHvTOD1H6A/b27164bdade13f3aa9ba990fb7030b8b/prodnav_kits_s3.png"
              alt="Hardware Kits"
            />
            Hardware kits
          </li>
          <li>
            <img
              src="https://images.ctfassets.net/2d5q1td6cyxq/5qYHMkS4PJ95LjBvOh88F1/0ba0977186f1ab988ed887f1d16295a0/prodnav_compare_s3.png"
              alt="Compare"
            />
            Compare
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Header;
