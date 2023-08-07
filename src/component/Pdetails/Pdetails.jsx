import React from "react";
import "./Pdetails.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const Pdetails = () => {
  // var navigate = useNavigate();

  const [cart, setCart] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Event handler to increase quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Event handler to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    cartdata();
  }, []);

  const cartdata = () => {
    const idproduct = localStorage.getItem("_Productid");

    console.log(idproduct);

    axios
      .get(
        `https://jk-production-46f9.up.railway.app/product/find/${idproduct}`
      )
      .then((res) => {
        console.log(res.data.product_data);
        setCart(res.data.product_data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [mainproduct, setmainproduct] = useState();

  useEffect(() => {
    mainproductdata();
  }, []);

  const mainproductdata = () => {
    axios
      .get("https://jk-production-46f9.up.railway.app/mainimage/find")
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

  const nv = useNavigate();

  const addcart = (cartid) => {
    const cid = cartid;
    console.log(cid);
    const userid = localStorage.getItem("_id");
    console.log(userid);
    const data = { userId: userid, sub_long_id: cid, quantity: 1 };
    console.log(data);
    axios
      .post("https://jk-production-46f9.up.railway.app/cart/add", data)
      .then((res) => {
        console.log(res);
        alert("cart add successfully");
        nv("/cart");
      })
      .catch((err) => {
        console.log(err);
        alert("err add cart data");
      });
  };

  return (
    <section className="s-pdetails">
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
          HOME <BsArrowRight /> CART
        </div>
        <div className="sub1_img">
          <img src="./dal.png" alt="DAL" className="sub1-img" />
        </div>
      </div>
      <div className="m-cart">
        <div className="mc-t">
          <div className="c-title">
            <span className="mc-title">ORDER</span>
          </div>
        </div>
        <div className="cart_container">
          <div className="cart">
            <div className="product_img">
              <img
                src={`${cart.product_web_image}`}
                //   {`${carts.product_web_image}`}
                alt=""
              />
            </div>
            <div className="product_description">
              <div className="cart_title">
                {cart.product_name}
                {/* Toor Dal */}
              </div>
              <div className="cart_subtitle">
                {cart.product_description} ({cart.product_quality})
                {/* Premium Pulses (5kg) */}
              </div>
              <div className="cart_description">
                <ul className="_desc">
                  <li>
                    {/* Lorem, ipsum dolor. */}
                    {cart.product_detail1}
                  </li>
                  <li>
                    {/* Lorem, ipsum dolor. */}
                    {cart.product_detail2}
                  </li>
                  <li>
                    {/* Lorem, ipsum dolor. */}
                    {cart.product_detail3}
                  </li>
                  <li>
                    {/* Lorem, ipsum dolor. */}
                    {cart.product_detail4}
                  </li>
                </ul>
              </div>
              <div className="cart_p">
                <div className="qua">
                  <div className="text">QTY:</div>
                  <div className="quantity">
                    <button className="minus" onClick={decreaseQuantity}>
                      -
                    </button>
                    <span className="num">{quantity}</span>
                    <button className="plus" onClick={increaseQuantity}>
                      +
                    </button>
                  </div>
                </div>
                <div className="cart_price">
                  <span>
                    {/* ₹ 120 */}₹ {cart.product_price}
                  </span>
                </div>
              </div>
              <div className="add-btn">
                <button onClick={() => addcart(cart._id)}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s-product">
        <span>Similar Product</span>
      </div>
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
      <Footer />
    </section>
  );
};

export default Pdetails;
