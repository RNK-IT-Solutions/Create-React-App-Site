import React from "react";
import "./About3.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const About3 = () => {
  return (
    <div className="a3-back">
      <div className="a3-content">
        HOME <FaLongArrowAltRight /> ABOUTUS
      </div>
      <div className="a3-img">
        <img src="./dal.png" alt="DAL" />
      </div>
    </div>
  );
};

export default About3;
