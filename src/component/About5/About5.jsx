import React from "react";
import "./About5.css";

const About5 = () => {
  return (
    <div className="a5-section">
      <div className="a5-header">WHY CHOOSE JK SWARA</div>
      <div className="a5-subtitle">
        One of the leading manufcturing company of pulses
      </div>
      <div className="boxes">
        <div className="sub-div1">
          <div className="logo1">
            <img src={require("../../assets/images/quality.png")} alt="logo" />
          </div>
          <div className="title5">Quality & Reliability</div>
          <div className="sub-div1-content">
            Our company takes pride in the unquestionable quality and taste of
            our products. A commitment to delivering top-notch quality with
            excellent taste.
          </div>
        </div>
        <div className="sub-div1">
          <div className="logo1">
            <img src={require("../../assets/images/pricing.png")} alt="logo" />
          </div>
          <div className="title5">Affordable Pricing</div>
          <div className="sub-div1-content">
            Maintaining the trust of customers is crucial for any business, and
            pricing products based on standard market rates is one approach to
            ensure transparency and fairness.
          </div>
        </div>
        <div className="sub-div1">
          <div className="logo1">
            <img
              src={require("../../assets/images/customer_care.png")}
              alt="logo"
            />
          </div>
          <div className="title5">Support and service</div>
          <div className="sub-div1-content">
            We Offer various support channels, such as phone, email, and live
            chat, to accommodate different customer preferences. You can contact
            us via our App also.
          </div>
        </div>
        <div className="sub-div1">
          <div className="logo1">
            <img
              src={require("../../assets/images/certified.png")}
              alt="logo"
            />
          </div>
          <div className="title5">Certified Company</div>
          <div className="sub-div1-content">
            We are a reputable and certified company committed to delivering
            exceptional products and services that meet the highest industry
            standards, and customer satisfaction.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About5;
