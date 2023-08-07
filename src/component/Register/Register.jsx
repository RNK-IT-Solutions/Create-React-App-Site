import React from "react";
import "./Register.css";
import Slider from "react-slick";
import { useForm, useFormState } from "react-hook-form";
import lb1 from "../../assets/images/lb1.png";
import lb2 from "../../assets/images/lb2.png";
import lb3 from "../../assets/images/lb3.png";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const images = [lb1, lb2, lb3];

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [role, setrole] = useState();

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

  const sub = (data) => {
    console.log(data);
    axios
      .post("https://jk-production-46f9.up.railway.app/user/add", data)
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
                <button className="login_btn">Login</button>
                <button className="register_btn">Register</button>
              </div>
              <div className="l-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                nemo earum deleniti!
              </div>
              <form
                action="submit"
                className="_form"
                onSubmit={handleSubmit(sub)}>
                <div className="name">
                  <label htmlFor="username" className="input_label">
                    User Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your User Name"
                    className="input_tp"
                    {...register("user_name")}
                  />
                </div>
                <div className="email">
                  <label htmlFor="emailaddress" className="input_label">
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Email Address"
                    className="input_tp"
                    {...register("user_email")}
                  />
                </div>
                {/* <div className="name">
                  <label htmlFor="username" className="input_label">
                    User Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your User Name"
                    className="input_tp"
                    {...register("user_email")}
                  />
                </div> */}
                <div className="password">
                  <label htmlFor="password" className="input_label">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="input_tp"
                    {...register("user_password")}
                  />
                </div>
                {/* <div className="l-subcontent">
                  <div className="check">
                    <input type="checkbox" className="ch" />
                    <span>Remember Me</span>
                  </div>
                  <a href="/register">Forget Password ?</a>
                </div> */}
                <div className="r-btn">
                  <button>Register</button>
                </div>
              </form>
            </div>
          </div>
          <div className="container">
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

export default Register;
