import React from "react";
import "./About4.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const About4 = () => {
  return (
    <section className="s-about4">
      <div className="sub1-section">
        <nav className="sub1-nav">
          <div className="sub1_logo">
            <img src="./logo.png" alt="LOGO" className="sub1-logo" />
          </div>
          <div className="sub1_navabar">
            <div className="sub1-nav-items">
              <Link className="sub1-nav-link" to="/">
                HOME
              </Link>
              <Link className="sub1-nav-link" to="/mabout">
                ABOUT
              </Link>
              <Link className="sub1-nav-link" to="/product">
                PRODUCT
              </Link>
              <Link className="sub1-nav-link" to="/contact">
                CONTACT
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="sub1-back">
        <div className="sub1-content">
          HOME <BsArrowRight /> ABOUT US
        </div>
        <div className="sub1_img">
          <img src="./dal.png" alt="DAL" className="sub1-img" />
        </div>
      </div>
      <div className="a4-section1">
        <div className="a4-info1">
          <div className="a4-sub-title1">
            One of the leading manufcturing company of pulses
          </div>
          <div className="a4-main-title1">JKSwara</div>
          <div className="main4-subtitle1">AGRO PROCESSING PVT LTD.</div>
          <div className="a4-sub-text1">
            We, JKSwara AGRO PROCESSING PRIVATE LIMITED are counted amidst the
            leading and reputed companies dealing in branded pulses in India. As
            a prominent player in the agro processing sector, WE have the
            opportunity to positively impact both farmers and consumers. By
            ensuring top-notch quality, WE build trust among OUR customers,
            which is key to sustaining and expanding our market presence. If
            there's anything specific you'd like to know or discuss about our
            company or the agro processing industry, feel free to ask. I'm here
            to assist you with any information or guidance you may need.
          </div>
        </div>
        <div className="a4-img1">
          <img
            src={require("../../assets/images/22.png")}
            alt="DAL"
            className="dal4_img1"
          />
        </div>
      </div>
      <div className="a4-section2">
        <div className="a4-img1">
          <img
            src={require("../../assets/images/33.png")}
            alt="DAL"
            className="dal4_img1"
          />
        </div>
        <div className="a4-info2">
          <div className="a4-main-title1">WHAT WE DO</div>

          <div className="a4-sub-text2">
            JKSwara Agro Processing Pvt. Ltd. offers our customers wide range of
            pulses. It's impressive to see such a diverse selection of pulses
            available, catering to various culinary preferences and nutritional
            needs. Having a comprehensive product range like this allows our
            customers to find their preferred types of pulses easily, and it
            shows that our company is committed to meeting the demands of the
            market. Additionally, our online presence through the web store,
            jkswara.com, offers convenience for customers to Explore and
            purchase our products from the comfort of their homes. Maintaining a
            hygienic processing environment is a crucial aspect of ensuring the
            exceptional quality of our products, and it's great to hear that our
            company, places a strong emphasis on this. High-quality products not
            only satisfy customers but also contribute to building a strong
            reputation in the market.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About4;
