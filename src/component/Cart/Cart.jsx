import React from "react";
import "./Cart.css";
// import { FaLongArrowAltRight } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

// import { useForm } from "react-hook-form";

const Cart = () => {
  var navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    cartdata();
  }, []);

  const cartdata = () => {
    const user = localStorage.getItem("_id");
    const data = { userId: user };
    console.log(data);

    axios
      .post("https://jk-production-46f9.up.railway.app/cart/cart", data)
      .then((res) => {
        console.log(res.data.products);
        setCart(res.data.products);

        // Initialize the quantity state
        const quantityData = {};
        res.data.products.forEach((product) => {
          quantityData[product._id] = 0;
        });
        setQuantity(quantityData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removes = (ids) => {
    const user = localStorage.getItem("_id");
    const id = ids;
    const data = { userId: user, sub_long_id: id };
    console.log(data);
    console.log(ids);
    axios
      .post("https://jk-production-46f9.up.railway.app/cart/remove", data)
      .then((res) => {
        console.log(res);
        cartdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const buy = () => {
    const updatedCartData = cart.map((item) => ({
      productName: item.product_name,
      productPrice: item.product_price,
      quantity: quantity[item._id],
    }));
    const totalprice2 = `${totalPrice}`;
    console.log(totalprice2);
    const rrr = localStorage.setItem("Total_Price", totalprice2);
    localStorage.setItem("data", JSON.stringify(updatedCartData));
    navigate("/payment");
  };

  return (
    <section className="c-section">
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
            <span className="mc-title">Your Cart</span>
          </div>
        </div>
        {cart?.map((carts) => {
          return (
            <div className="cart_container">
              <div className="remove" onClick={() => removes(carts._id)}>
                <AiFillCloseCircle size={30} />
              </div>
              <div className="cart">
                <div className="product_img">
                  <img src={`${carts.product_web_image}`} alt="" />
                </div>
                <div className="product_description">
                  <div className="cart_title">{carts.product_name}</div>
                  <div className="cart_subtitle">
                    {carts.product_description} ({carts.product_quality})
                  </div>
                  <div className="cart_description">
                    <ul className="_desc">
                      <li>{carts.product_detail1}</li>
                      <li>{carts.product_detail2}</li>
                      <li>{carts.product_detail3}</li>
                      <li>{carts.product_detail4}</li>
                    </ul>
                  </div>
                  <div className="cart_p">
                    <div className="qua">
                      <div className="text">QTY:</div>
                      <div className="quantity">
                        <button
                          className="minus"
                          onClick={() => {
                            if (quantity[carts._id] > 0) {
                              setQuantity((prevQuantity) => ({
                                ...prevQuantity,
                                [carts._id]: prevQuantity[carts._id] - 1,
                              }));
                              setTotalPrice(
                                (prevTotal) =>
                                  prevTotal - parseInt(carts.product_price)
                              );
                            }
                          }}>
                          -
                        </button>
                        <span className="num">{quantity[carts._id]}</span>
                        <button
                          className="plus"
                          onClick={() => {
                            setQuantity((prevQuantity) => ({
                              ...prevQuantity,
                              [carts._id]: prevQuantity[carts._id] + 1,
                            }));
                            setTotalPrice(
                              (prevTotal) =>
                                prevTotal + parseInt(carts.product_price)
                            );
                          }}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="cart_price">
                      <span>₹ {carts.product_price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <section className="total">
          <div className="border">
            <div className="c-total">
              <span>Total</span>
            </div>
            <div className="c-total-price">
              <span>₹ {totalPrice}</span>
            </div>
          </div>
        </section>
        <div className="pay_container">
          <button className="buy_btn" onClick={() => buy()}>
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
