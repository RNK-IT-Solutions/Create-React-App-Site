import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { BsTwitter } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import axios from "axios";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const logindata = (data) => {
    console.log(data);
    axios
      .post("https://jk-production-46f9.up.railway.app/contact/add", data)
      .then((res) => {
        console.log(res);
        // setrole(data);
        alert("successfully send");
      })
      .catch((err) => {
        console.log("err");
        alert("err send");
      });
  };
  return (
    <section s-contact>
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
          HOME <BsArrowRight /> CONTACT US
        </div>
        <div className="sub1_img">
          <img src="./dal.png" alt="DAL" className="sub1-img" />
        </div>
      </div>

      {/* <section className="ss-contact">
        <div className="s2-contact">
          <div className="contact-details">
            <div className="contact-title">Contact Us</div>
            <ul className="contact-list">
              <li className="contact-list-item">
                <HiLocationMarker size={20} />
                <span>91, Ram Nagar, Ram Mandir, Delhi</span>
              </li>
              <li className="contact-list-item">
                <IoCall size={20} />
                <span> 0255000XXXX, 0251600XXXX</span>
              </li>
              <li className="contact-list-item">
                <HiMail size={20} />
                <span> demounknown@gmail.com</span>
              </li>
            </ul>
            <div className="contact-social">
              <a href="#">
                <FaFacebook size={20} />
              </a>
              <a href="#">
                {" "}
                <BiLogoInstagramAlt size={20} />
              </a>
              <a href="#">
                {" "}
                <BsTwitter size={20} />
              </a>
            </div>
          </div>

          <form
            action="submit"
            className="form12"
            onSubmit={handleSubmit(logindata)}>
            <div className="input-field">
              <input
                type="text"
                placeholder="Your Name"
                {...register("name")}
              />
              <input
                type="text"
                placeholder="Your Email"
                {...register("email")}
              />
              <textarea
                class="inptFld"
                rows=""
                cols=""
                placeholder="Your Message..."
                {...register("message")}
                required></textarea>
            </div>

            <div class="s-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section> */}
      <section className="ss-contact">
        <div className="c-main">
          <div className="col">
            <div className="phone">
              <IoCall size={25} />
              <span>Phone No.</span>
            </div>
            <span>6356000503/9876543210</span>
          </div>
          <div className="col-2">
            <div className="phone-2">
              <HiLocationMarker size={25} />
              <span className="col-s-1">Location</span>
            </div>
            <span className="col-s-2">
              JkSwara A-State, Vavdi Gopalpura road, Rajpipda, Nandod, Narmada
              393145
            </span>
          </div>
          <div className="social_icons-c">
            <FaFacebook size={25} />
            <BiLogoInstagramAlt size={25} />
            <BsTwitter size={25} />
            <BiLogoGmail size={25} />
          </div>
        </div>
        <div className="c-main2">
          <img src={require("../../assets/images/pnp2.png")} alt="" />
          <div className="co-title">Contact Us</div>
          <form
            action="submit"
            className="form12"
            onSubmit={handleSubmit(logindata)}>
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter Your Name"
                {...register("name")}
              />
              <input
                type="text"
                placeholder="Enter Your Email"
                {...register("email")}
              />
              <textarea
                class="inptFld"
                rows=""
                cols=""
                placeholder="Message..."
                {...register("message")}
                required></textarea>
            </div>

            <div class="s-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
