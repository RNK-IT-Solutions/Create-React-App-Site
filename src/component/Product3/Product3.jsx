import React from "react";
import "./Product3.css";
import { FaLongArrowAltRight } from "react-icons/fa";
// import { useState } from "react";
// import Slider from "react-slick";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Product3 = () => {
  return (
    <>
      <div className="a2-section">
        <nav className="a2-nav">
          <div className="a2-logo">
            <img src="./logo.png" alt="LOGO" className="a2-logo" />
          </div>
          <div className="navabar">
            <div className="a2-nav-items">
              <a href="/home" className="a2-nav-link">
                HOME
              </a>
              <a href="/about" className="a2-nav-link">
                PAGES
              </a>
              <a href="/product" className="a2-nav-link">
                PRODUCT
              </a>
              <a href="/contact" className="a2-nav-link">
                CONTACT
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="a3-back">
        <div className="a3-content">
          HOME <FaLongArrowAltRight /> ABOUTUS
        </div>
        <div className="a3-img">
          <img src="./dal.png" alt="DAL" />
        </div>
      </div>
    </>
  );
};

export default Product3;
