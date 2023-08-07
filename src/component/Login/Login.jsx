import React from "react";
import "./Login.css";
import Slider from "react-slick";
import lb1 from "../../assets/images/lb1.png";
import lb2 from "../../assets/images/lb2.png";
import lb3 from "../../assets/images/lb3.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const images = [lb1, lb2, lb3];

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [role, setrole] = useState();

  var navigat = useNavigate();

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    // centerMode: true,
    // centerPadding: 0,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    // beforeChange: (current, next) => setImageIndex(next),
  };

  const logindata = (data) => {
    console.log(data);
    axios
      .post("https://jk-production-46f9.up.railway.app/user/login", data)
      .then((res) => {
        console.log(res.data.message);
        setrole(data);
        // alert(res.data.message);
        toast.success(`🦄 ${res.data.message} `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigat("/pdetails");
        console.log(res.data.data[0]._id);
        localStorage.setItem("_id", res.data.data[0]._id);
      })
      .catch((res) => {
        console.log(res.response.data.message);
        // alert(res.response.data.message);
        toast.error(`🦄 ${res.response.data.message} `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setrole(data);
      });
  };

  const reg = () => {
    navigat("/register");
  };

  const loger = () => {
    console.log("heyy");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="login">
        <div className="l-logo">
          <img src="./logo.png" alt="logo" className="logo" />
        </div>
        <div className="l-wrapper">
          <div className="login_page">
            <div className="l_page_content">
              <div className="welcome">
                <span>Welcome</span>
              </div>
              <div className="btns">
                <button className="login_btn" onClick={loger}>
                  Login
                </button>
                <button className="register_btn" onClick={reg}>
                  Register
                </button>
              </div>
              <div className="l-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                nemo earum deleniti!
              </div>
              <form
                action="submit"
                className="_form"
                onSubmit={handleSubmit(logindata)}>
                <div className="name">
                  <label htmlFor="username" className="input_label">
                    User Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your User Name"
                    className="input_tp"
                    {...register("user_email")}
                  />
                </div>
                <div className="password">
                  <label htmlFor="password" className="input_label">
                    Password
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Password"
                    className="input_tp"
                    {...register("user_password")}
                  />
                </div>
                <div className="l-subcontent">
                  <div className="check">
                    <input type="checkbox" className="ch" />
                    <span>Remember Me</span>
                  </div>
                  <a href="/register">Forget Password ?</a>
                </div>
                <div className="l-btn">
                  <button>Login</button>
                  <span>or continue with</span>
                </div>
              </form>
            </div>
          </div>
          <div className="l_container">
            <Slider {...settings}>
              {images.map((img, idx) => (
                <div className="slide">
                  <img src={img} alt="img" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
