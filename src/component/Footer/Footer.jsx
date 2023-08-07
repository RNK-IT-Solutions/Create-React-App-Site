import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      <div className="ff-container">
        <div className="f-header">
          <span className="f-header_content">
            Taste the joy of <br />{" "}
            <span style={{ marginLeft: "70px" }}>flavors in every bite.</span>
          </span>
          <div className="f-button">
            <button className="f-btn">RECIEVE NEWS</button>
            <button className="f-btn">DONATE</button>
          </div>
        </div>
        <div className="f-content">
          <div className="f-navigation">
            <div className="nav_header">
              <span className="f-content_header">NAVIGATION</span>
            </div>
            <div className="f-nav_item">
              <Link className="f-link" to="/">
                Home
              </Link>
              <Link className="f-link" to="/mabout">
                About
              </Link>
              <Link className="f-link" to="/product">
                Product
              </Link>
              <Link className="f-link" to="/contact">
                Contact
              </Link>
            </div>
          </div>
          <Link className="f-work" to="/mabout">
            <div className="work_header">
              <span className="f-content_header">WHAT WE DO</span>
            </div>
            <div className="work_content">
              <ul className="work_list">
                <li className="work_item">Deliciously Fresh</li>
                <li className="work_item">Taste the Difference</li>
                <li className="work_item">From Farm to Fork</li>
                <li className="work_item">Taste the World</li>
                <li className="work_item">Passion for Food</li>
                <li className="work_item">Delight Your Guests</li>
              </ul>
            </div>
          </Link>
          <div className="f-contact">
            <div className="contact_header">
              <span className="f-content_header  ff">LOCATION</span>
            </div>
            <div className="f-address">
              <HiLocationMarker size={43} style={{ marginTop: "-1rem" }} />
              <span>
                A-1030, Sun Westbank, Ashram road, Ahmedabad, Gujarat 380015
              </span>
            </div>
            <div className="f-address">
              <HiLocationMarker size={50} style={{ marginTop: "-2.2rem" }} />
              <span>
                JkSwara A-State, Vavdi Gopalpura road, Rajpipda, Nandod, Narmada
                393145
              </span>
            </div>
            <div className="f-number">
              <BsFillTelephoneFill
                size={18}
                style={{ marginLeft: ".25rem", marginTop: "-0.2rem" }}
              />
              <span>6356000503/9978988247</span>
            </div>
          </div>
          <div className="f-social">
            <div className="social_header">
              <span className="f-content_header">SOCIAL</span>
            </div>
            <div className="social_icons">
              <FaFacebook size={20} />
              <BiLogoInstagramAlt size={20} />
              <BsTwitter size={20} />
              <BiLogoGmail size={20} />
            </div>
          </div>
        </div>
        <div className="copyrights">
          <span>2023 JKSwara. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
