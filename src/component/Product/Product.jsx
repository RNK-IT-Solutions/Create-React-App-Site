import React, { useEffect } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [mainproduct, setmainproduct] = useState();

  useEffect(() => {
    mainproductdata();
  }, []);

  const mainproductdata = () => {
    axios("https://jk-production-46f9.up.railway.app/mainimage/find")
      .then((res) => {
        console.log(res.data.Main_product_data);
        setmainproduct(res.data.Main_product_data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var navgit = useNavigate();

  const subproductnav = (nav) => {
    console.log(nav);
    if (nav === "TOOR DAL") {
      navgit("/Toordal");
    } else if (nav === "BESAN") {
      navgit("/Besan");
    } else if (nav === "CHANA DAL") {
      navgit("/Chanadal");
    } else if (nav === "MUNG DAL") {
      navgit("/Mungdal");
    }
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
          HOME <BsArrowRight /> PRODUCT
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
      <div className="product-container">
        <div className="pr-container">
          {mainproduct?.map((card, idx) => {
            return (
              <div className="sub1-slide" key={idx}>
                <div
                  className="sub1-bg-color img-29 "
                  style={{ backgroundColor: card.product_color }}>
                  <img
                    src={card.product_image}
                    alt="img"
                    className="product-img"
                    onClick={() => subproductnav(card.product_titel)}
                  />
                </div>
                <div className="sub1-cart-content">
                  <p className="product-name">{card.product_titel}</p>
                  <p className="product-subtext">{card.product_description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
