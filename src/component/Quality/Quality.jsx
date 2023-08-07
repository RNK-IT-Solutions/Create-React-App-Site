import React from "react";
import "./Quality.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const data = [
  {
    title: "TOOR DAL",
    text: "Toor dal is a great plant-based source of protein. maintaining muscle mass, and supporting various physiological functions in the body. Toor dal contains essential minerals like magnesium, phosphorus, and calcium, which are vital for maintaining strong and healthy. ",
    image: require("../../assets/images/toor_dal.png"),
  },
  {
    title: "Mung Dal",
    text: "Mung dal is an excellent source of plant-based protein. Protein is essential for building and repairing tissues, supporting muscle growth, and maintaining overall bodily functions. high in dietary fiber, which aids digestion, promotes bowel regularity, and helps prevent constipation",
    image: require("../../assets/images/mung_dal.png"),
  },
  {
    title: "Chana Dal",
    text: "Chana dal is high in dietary fiber, chana dal supports a healthy digestive system by promoting regular bowel movements and preventing digestive issues.",
    image: require("../../assets/images/dal33.png"),
  },
  {
    title: "Chana Besan",
    text: "Chana besan is commonly used to make batters for deep-frying. It is used to coat vegetables, potatoes, or paneer (Indian cheese) before frying to create crispy fritters or pakoras",
    image: require("../../assets/images/Besan.png"),
  },
];

const Quality = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="subq-arrow quality-nexts" onClick={onClick}>
        <FaArrowRight className="sub1-arrow-icon" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="subq-arrow quality-prevs" onClick={onClick}>
        <FaArrowLeft style={{ width: "1.29169rem", height: "0.96431rem" }} />
      </div>
    );
  };

  const settings = {
    autoplay: true,
    // dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <section className="q-section2">
      <div className="q-container">
        <div className="quality-carousel-container">
          <Slider {...settings}>
            {data.map((card, idx) => {
              return (
                <div className="quality-slide">
                  <div className="q-flex">
                    <div className="q-details">
                      <span className="q-details-text">{card.title}</span>
                      <span className="q-details-sub-subtext">{card.text}</span>
                    </div>
                    <div className="q-image-container">
                      <img src={card.image} alt="img" className="q-image" />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Quality;
