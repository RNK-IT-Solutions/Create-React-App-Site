import React from "react";
import "./About2.css";

const About2 = () => {
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
    </>
  );
};

export default About2;
