import React from "react";
import "./About.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const data = [
  {
    name: "Toor Dal",
    price: "2850",
    detail: "Premium Quality Pulses",
    image: require("../../assets/images/Product_1.png"),
    symbole: "₹",
  },
  {
    name: "Toor Dal",
    price: "2850",
    detail: "Premium Quality Pulses",
    image: require("../../assets/images/Product_2.png"),
    symbole: "₹",
  },
  {
    name: "Toor Dal",
    price: "2850",
    detail: "Premium Quality Pulses",
    image: require("../../assets/images/Product_3.png"),
    symbole: "₹",
  },
  {
    name: "Toor Dal",
    price: "2850",
    detail: "Premium Quality Pulses",
    image: require("../../assets/images/Product_4.png"),
    symbole: "₹",
  },
];

const About = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="p-arrow1 p-next1" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="p-arrow1 p-prev1" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    autoplay: true,
    // dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 900,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  var navigate = useNavigate();

  const product = () => {
    navigate("/product");
  };
  const about = () => {
    navigate("/mabout");
  };

  return (
    <div className="main-section">
      <div className="a-section1">
        <div className="a-info1">
          <div className="a-sub-title1">
            One of the leading manufcturing company of pulses
          </div>
          <div className="a-main-title1">JKSwara</div>
          <div className="main-subtitle1">AGRO PROCESSING PVT. LTD.</div>
          <div className="a-sub-text1">
            At JKSwara, our mission is to spread happiness beyond kitchens and
            we're happy that the young generation in our team has also JKSWARA
            Agro Processing Pvt. Ltd. offers our customers wide range of pulses.
            It's impressive to see such a diverse selection of pulses available,
            catering to various culinary preferences and nutritional needs. .
          </div>
          <div className="a-main-button1">
            <button className="a-button1" onClick={about}>
              More About Us
            </button>
          </div>
        </div>
        <div className="a-img1">
          <img
            src={require("../../assets/images/3.png")}
            alt="DAL"
            className="dal_img1"
          />
        </div>
      </div>
      <div className="a_head1">
        <p>Our Products</p>
      </div>

      <div className="bgcolor">
        <div className="sideimg">
          <img src={require("../../assets/images/d2.png")} alt="" />
        </div>
        <div className="s_container">
          <Slider {...settings}>
            {data.map((card, idx) => (
              <div
                className={
                  idx === imageIndex ? "slide1 activeSlide" : "slide1"
                }>
                <div className="cart-content">
                  <p className="p-name1">{card.name}</p>
                  <p className="p-subt1">{card.detail}</p>
                </div>
                <img src={card.image} alt="img" className="a_img" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="o-btn">
          <button onClick={product}>Order Now</button>
        </div>
        <div className="sideimg2">
          <img src={require("../../assets/images/pngegg 6.png")} alt="" />
        </div>
        <div className="sideimg3">
          <img src={require("../../assets/images/pngegg 5.png")} alt="" />
        </div>
        <div className="center">
          <div className="bg-footer">
            <div className="bgf-header">
              <p className="hd">Quality</p>
              <ul className="q-list">
                <li>
                  <p className="sub-hd">
                    Our High-quality dal is having a uniform size, shape, and
                    color. It is free from foreign materials, stones, or debris.
                  </p>
                </li>
                <li>
                  <p className="sub-hd">
                    Fresh and good-quality dal emits a pleasant aroma
                    characteristic of the particular type of pulse.
                  </p>
                </li>
                <li>
                  <p className="sub-hd">
                    High-quality dal is having natural, nutty flavor, and it
                    doesn't any off-flavors or bitterness.
                  </p>
                </li>
                <li>
                  <p className="sub-hd">
                    Good dal cooks evenly and within a reasonable time frame.
                  </p>
                </li>
              </ul>
            </div>
            <div className="brands">
              <img
                src={require("../../assets/images/b-logo.png")}
                alt="img"
                className="grid-item"
              />
              <img
                src={require("../../assets/images/b-logo.png")}
                alt="img"
                className="grid-item"
              />
              <img
                src={require("../../assets/images/b-logo.png")}
                alt="img"
                className="grid-item"
              />
              <img
                src={require("../../assets/images/b-logo.png")}
                alt="img"
                className="grid-item"
              />
              <img
                src={require("../../assets/images/b-logo.png")}
                alt="img"
                className="grid-item"
              />
              <img
                src={require("../../assets/images/b-logo.png")}
                alt="img"
                className="grid-item"
              />
              <img
                src={require("../../assets/images/b-logo.png")}
                alt="img"
                className="grid-item"
              />
              <img
                src={require("../../assets/images/b-logo.png")}
                alt="img"
                className="grid-item"
              />
              <img
                src={require("../../assets/images/b-logo.png")}
                alt="img"
                className="grid-item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
