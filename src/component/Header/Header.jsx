import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const data = [
  {
    url: require("../../assets/images/banner_1.png"),
  },
  {
    url: require("../../assets/images/banner_2.png"),
  },
  {
    url: require("../../assets/images/banner_3.png"),
  },
];

// const BackgroundSlider = () => {
//   return (
//     <div className="container-style">
//       <div style={bgImgStyle}></div>
//     </div>
//   );
// };

const Header = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImgStyle = {
    backgroundImage: `url(${data[currentState].url})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat no-repeat",
    backgroundSize: "cover",
    // height: "45rem",
    // width: "100%",
  };

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };

  return (
    <>
      <div className="container-style" style={bgImgStyle}>
        <div className="nav-container">
          <div className="navabar">
            <div className="nav-items">
              <a href="/" className="nav-link">
                HOME
              </a>
              <Link className="nav-link" to="/mabout">
                ABOUT
              </Link>
              <Link className="nav-link" to="/product">
                PRODUCT
              </Link>
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </div>
          </div>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        </div>
        <div className="carousel-boult">
          {data.map((d, currentState) => (
            <span
              key={currentState}
              onClick={() => goToNext(currentState)}></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
