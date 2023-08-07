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
            Overcome Ignorance <br />
            and Fight for Equiality
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
                <li className="work_item">Encouraging Testing</li>
                <li className="work_item">Strengthening Advocacy</li>
                <li className="work_item">Sharing Information</li>
                <li className="work_item">Building Leadership</li>
                <li className="work_item">Engaging With Global Fund</li>
                <li className="work_item">Shining Light</li>
              </ul>
            </div>
          </Link>
          <div className="f-contact">
            <div className="contact_header">
              <span className="f-content_header  ff">LOCATION</span>
            </div>
            <div className="f-address">
              <HiLocationMarker size={45} />
              <span>
                A-1030, Sun Westbank, Ashram road, Ahmedabad, Gujarat 380015
              </span>
            </div>
            <div className="f-address">
              <HiLocationMarker size={52} />
              <span>
                JkSwara A-State, Vavdi Gopalpura road, Rajpipda, Nandod, Narmada
                393145
              </span>
            </div>
            <div className="f-number">
              <BsFillTelephoneFill size={20} />
              <span>6356000503</span>
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
