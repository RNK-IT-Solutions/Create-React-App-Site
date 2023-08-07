import React from "react";
import "./Slidercomp.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import data from "../../utils/slider.json";
// import t1 from "../../assets/images/Tooor1.png";
// import t2 from "../../assets/images/Tooor2.png";
// import t3 from "../../assets/images/Tooor3.png";

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

function Slidercomp() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
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
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <>
      <div className="title">
        <p>Our Products</p>
      </div>
      <div className="container">
        <Slider {...settings}>
          {data.map((card, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <div className="cart-content">
                <p className="p-name">{card.name}</p>
                <p className="p-subtext">{card.detail}</p>
                {/* <div className="price">
                <p>{card.symbole}</p>
                <p>{card.price}</p>
              </div> */}
                {/* <button className="order-btn">Order Now</button> */}
              </div>
              <img src={card.image} alt="img" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
export default Slidercomp;
