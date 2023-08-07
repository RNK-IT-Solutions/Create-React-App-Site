import React from "react";
import "./Besan.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { BsCurrencyRupee } from "react-icons/bs";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

const Besan = () => {
  const [area, setearea] = useState();
  const [visible, setVisible] = useState(false);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="sub1-arrow sub1-nexts" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="sub1-arrow sub1-prevs" onClick={onClick}>
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

  const [product, setproduct] = useState();

  useEffect(() => {
    productdata();
  }, []);

  const productdata = () => {
    axios("https://jk-production-46f9.up.railway.app/product/find")
      .then((res) => {
        console.log(res.data.product1_data);
        setproduct(res.data.product1_data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var navigat = useNavigate();
  const userid = (iid) => {
    // var id = localStorage.getItem("_id");
    // console.log(id);
    // const data = { userId: id, sub_long_id: iid, quantity: 1 };
    // console.log(data);
    localStorage.setItem("_Productid", iid);

    if (localStorage.getItem("_id")) {
      navigat("/pdetails");
    } else {
      navigat("/login");
    }
    // axios
    //   .post("https://jk-production-46f9.up.railway.app/cart/add", data)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="sub1">
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
          HOME <BsArrowRight /> PRODUCT <BsArrowRight /> BESAN
        </div>
        <div className="sub1_img">
          <img src="./dal.png" alt="DAL" className="sub1-img" />
        </div>
      </div>

      {/* <div className="sub1_container">
        <div className="sub1-bar">
          <div className="sub1_filter">
            <FiMenu style={{ width: "1rem", height: ".9rem" }} />
            <p className="sub1-filter-text">Show Filter</p>
          </div>
          <div className="sub1_sorting">
            <p className="sub1-sorting-text">Default Sorting</p>
            <BsChevronDown
              style={{ width: "1.5625rem", height: " 1.5625rem" }}
            />
          </div>
        </div>
      </div> */}
      <div className="sub1_container">
        <div className="sub1-bar">
          <OutsideClickHandler
            onOutsideClick={() => {
              setVisible(false);
            }}>
            <select
              className="sub1_filter"
              aria-label="Default select example"
              onChange={(e) => {
                setearea(e.target.value);
                console.log(e.target.value);
              }}>
              <option value="Standard">Standard</option>
              <option value="High">High</option>
            </select>
          </OutsideClickHandler>
        </div>
      </div>
      <div className="sub1-carousel-container">
        <Slider {...settings}>
          {product
            ?.filter((ca) => {
              if (area === "High") {
                return ca.product_id === 4 && ca.product_qty_type === "High";
              } else if (area === "Standard") {
                return (
                  ca.product_id === 4 && ca.product_qty_type === "Standard"
                );
              } else {
                return (
                  ca.product_id === 4 && ca.product_qty_type === "Standard"
                );
              }
            })
            .map((card, idx) => {
              return (
                <div className="sub1-slide" key={idx}>
                  <div
                    className="sub1-bg-color img-30 "
                    style={{ backgroundColor: card.product_web_color }}>
                    <img
                      src={card.product_web_image}
                      alt="img"
                      className="sub1-img"
                    />
                  </div>
                  <div className="sub1-cart-content">
                    <p className="sub1-name">{card.product_name}</p>
                    <p className="sub1-subtext">{card.product_description}</p>
                    <div className="sub1-price">
                      <p>
                        <BsCurrencyRupee size={18} className="sub1-symbole" />
                        {card.product_price}
                      </p>
                    </div>
                    <button
                      className="sub1-order-btn"
                      onClick={() => userid(card._id)}>
                      <span className="sub1-btn-text">Order Now</span>
                    </button>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default Besan;
