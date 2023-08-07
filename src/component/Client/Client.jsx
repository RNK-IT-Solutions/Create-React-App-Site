import React from "react";
import "./Client.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const data = [
  {
    image: require("../../assets/images/clients.png"),
  },
  {
    image: require("../../assets/images/clients.png"),
  },
  {
    image: require("../../assets/images/clients.png"),
  },
  {
    image: require("../../assets/images/clients.png"),
  },
  {
    image: require("../../assets/images/clients.png"),
  },
  {
    image: require("../../assets/images/clients.png"),
  },
  {
    image: require("../../assets/images/clients.png"),
  },
  {
    image: require("../../assets/images/clients.png"),
  },
];

const Client = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="c-arrow c-next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="c-arrow c-prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [ setImageIndex] = useState(0);

  const settings = {
    autoplay: true,
    // dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <>
      <section className="cc-section">
        <div className="client-title">
          <div className="cc-title">Our Clients</div>
        </div>

        <div className="cc-container">
          <img
            src={require("../../assets/images/ggg.png")}
            alt="img"
            className="crown"
          />
          <Slider {...settings}>
            {data.map((card, idx) => (
              <div className="client-slide">
                <img src={card.image} alt="img" className="cc-img" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="cc-container2">
          <div className="cc-details">
            <img
              src={require("../../assets/images/customer.png")}
              alt="clent"
              className="client-img"
            />
            <img
              src={require("../../assets/images/qu1.png")}
              alt="img"
              className="qu1"
            />
            <div className="client-feedback">
              <div className="feedback">
                <span className="feedback-title">Customer Feedback</span>
                <span className="feedback-text">
                  recently had the pleasure of trying out your premium Toor Dal,
                  and I must say, it exceeded all my expectations. As a food
                  enthusiast and a health-conscious individual, I'm very happy.
                </span>
              </div>
            </div>
            <img
              src={require("../../assets/images/qu2.png")}
              alt="img"
              className="qu2"
            />
            <img
              src={require("../../assets/images/stars.png")}
              alt="img"
              className="stars
          "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
