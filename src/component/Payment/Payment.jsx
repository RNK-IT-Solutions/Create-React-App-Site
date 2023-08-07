// import React from "react";
// import "./Payment.css";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import lb1 from "../../assets/images/lb1.png";
// import lb2 from "../../assets/images/lb2.png";
// import lb3 from "../../assets/images/lb3.png";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// // import axios from "axios";

// const images = [lb1, lb2, lb3];

// const Payment = () => {
//   const { register, handleSubmit } = useForm();
//   const [role, setrole] = useState();

//   const settings = {
//     autoplay: true,
//     dots: true,
//     infinite: true,
//     lazyLoad: true,
//     speed: 300,
//     slidesToShow: 1,
//     // centerMode: true,
//     // centerPadding: 0,
//     // nextArrow: <NextArrow />,
//     // prevArrow: <PrevArrow />,
//     // beforeChange: (current, next) => setImageIndex(next),
//   };

//   const data = localStorage.getItem("data");
//   console.log(data);

//   const price = localStorage.getItem("Total_Price");
//   console.log(price);

//   const logindata = (data) => {
//     console.log(data);
//     // axios
//     //   .post("https://jk-production-46f9.up.railway.app/user/login", data)
//     //   .then((res) => {
//     //     // console.log(res);
//     //     setrole(data);
//     //     alert("successfully login");
//     //     navigat("/cart");
//     //     console.log(res.data.data[0]._id);
//     //     localStorage.setItem("_id", res.data.data[0]._id);
//     //   })
//     //   .catch((err) => {
//     //     console.log("err");
//     //     alert("err login");
//     //     setrole(data);
//     //   });
//   };
//   return (
//     <>
//       <div className="a2-section">
//         <nav className="a2-nav">
//           <div className="a2-logo">
//             <img src="./logo.png" alt="LOGO" className="a2-logo" />
//           </div>
//           <div className="navabar">
//             <div className="a2-nav-items">
//               <Link className="a2-nav-link" to="/">
//                 HOME
//               </Link>
//               <Link className="a2-nav-link" to="/mabout">
//                 ABOUT
//               </Link>
//               <Link className="a2-nav-link" to="/product">
//                 PRODUCT
//               </Link>
//               <Link className="a2-nav-link" to="/contact">
//                 CONTACT
//               </Link>
//             </div>
//           </div>
//         </nav>
//       </div>
//       <section className="s-container">
//         <div className="login">
//           <div className="l-wrapper">
//             <div className="login_page1">
//               <div className="l_page_content">
//                 <div className="welcome">
//                   <span>Payement Details</span>
//                 </div>
//                 <form
//                   action="submit"
//                   className="_form"
//                   onSubmit={handleSubmit(logindata)}>
//                   <div className="name">
//                     <label htmlFor="username" className="input_label">
//                       Full Name:
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Your User Name"
//                       className="input_tp"
//                       {...register("Full_Name")}
//                     />
//                   </div>
//                   <div className="password">
//                     <label htmlFor="password" className="input_label">
//                       Address:
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Your Password"
//                       className="input_tp"
//                       {...register("Street_address")}
//                     />
//                   </div>
//                   <div className="password">
//                     <label htmlFor="password" className="input_label">
//                       Town/City/State:
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Your Town/City/State"
//                       className="input_tp"
//                       {...register("Town_City_State")}
//                     />
//                   </div>
//                   <div className="password">
//                     <label htmlFor="phone no" className="input_label">
//                       Phone No:
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Your Phone Number"
//                       className="input_tp"
//                       {...register("Phone")}
//                     />
//                   </div>
//                   <div className="password">
//                     <label htmlFor="phone no" className="input_label">
//                       Pincode:
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Pincode"
//                       className="input_tp"
//                       {...register("Pin_code")}
//                     />
//                   </div>

//                   {/* // Backend part   */}

//                   {/* <div className="_form11">
//                     <div className="name">
//                       <label htmlFor="username" className="input_label">
//                         price:
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter Your User Name"
//                         className="input_tp"
//                         {...register(`${price}`)}
//                       />
//                     </div>
//                   </div> */}

//                   {/* ///////    */}
//                   <div class="payment-method">
//                     <label htmlFor="methods" className="pay-text">
//                       Payment Methods:{" "}
//                     </label>
//                     <div className="payment-options">
//                       <div class="payment-option">
//                         <input
//                           type="checkbox"
//                           id="upi1"
//                           name="upi-option"
//                           value="upi1"
//                           {...register("Payment_method")}
//                         />
//                         <label for="upi1">Cash On Delivery</label>
//                       </div>
//                       {/* <div class="payment-option">
//                         <input
//                           type="radio"
//                           id="upi2"
//                           name="upi-option"
//                           value="upi2"
//                         />
//                         <label for="upi2">UPI</label>
//                       </div> */}
//                     </div>
//                   </div>

//                   {/* // for backend part    */}
//                   <div className="_form11">
//                     <div className="name">
//                       <label htmlFor="username" className="input_label">
//                         price:
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter Your User Name"
//                         className="input_tp"
//                         value={"pending"}
//                         {...register("Payment_progress")}
//                       />
//                     </div>
//                   </div>

//                   {/* // for backend part    */}
//                   {/* <div className="_form11">
//                     <div className="name">
//                       <label htmlFor="username" className="input_label">
//                         data:
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter Your User Name"
//                         className="input_tp"
//                         {...register(`${data}`)}
//                       />
//                     </div>
//                   </div> */}
//                   {/* ///////////// */}
//                   <div className="p-btn">
//                     <button type="submit">Pay Now</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="l_container">
//               <Slider {...settings}>
//                 {images.map((img, idx) => (
//                   <div className="slide">
//                     <img src={img} alt="img" />
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Payment;

import React from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import lb1 from "../../assets/images/lb1.png";
import lb2 from "../../assets/images/lb2.png";
import lb3 from "../../assets/images/lb3.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const images = [lb1, lb2, lb3];

const Payment = () => {
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

  // ... (existing code)

  const datas = JSON.parse(localStorage.getItem("data"));
  console.log(datas);

  const price = localStorage.getItem("Total_Price");
  console.log(price);

  const userid = localStorage.getItem("_id");
  console.log(userid);

  const [orderDataTime, setOrderDataTime] = useState(""); // Step 1: Create state variable

  const logindata = (data) => {
    console.log(data);

    // Get the current date and time
    const currentDate = new Date();
    const currentDateTime = currentDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    // Set the order_data_time field to the current date and time
    data.order_data_time = currentDateTime;

    // Make the Axios POST request
    axios
      .post("https://jk-production-46f9.up.railway.app/final/add", data)
      .then((res) => {
        console.log(res);
        setrole(data);
        alert("successfully add Billing detail");
      })
      .catch((err) => {
        console.log("err", err);
        alert("err add Billing detail");
      });
  };
  return (
    <>
      <div className="a2-section">
        <nav className="a2-nav">
          <div className="a2-logo">
            <img src="./logo.png" alt="LOGO" className="a2-logo" />
          </div>
          <div className="navabar">
            <div className="a2-nav-items">
              <Link className="a2-nav-link" to="/">
                HOME
              </Link>
              <Link className="a2-nav-link" to="/mabout">
                ABOUT
              </Link>
              <Link className="a2-nav-link" to="/product">
                PRODUCT
              </Link>
              <Link className="a2-nav-link" to="/contact">
                CONTACT
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <section className="s-container">
        <div className="login">
          <div className="l-wrapper">
            <div className="login_page1">
              <div className="l_page_content">
                <div className="welcome">
                  <span>Payement Details</span>
                </div>
                <form
                  action="submit"
                  className="_form"
                  onSubmit={handleSubmit(logindata)}>
                  <div className="name">
                    <label htmlFor="username" className="input_label">
                      Full Name:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your User Name"
                      className="input_tp"
                      {...register("Full_Name")}
                    />
                  </div>
                  <div className="password">
                    <label htmlFor="password" className="input_label">
                      Address:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Password"
                      className="input_tp"
                      {...register("Street_address")}
                    />
                  </div>
                  <div className="password">
                    <label htmlFor="password" className="input_label">
                      Town/City/State:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Town/City/State"
                      className="input_tp"
                      {...register("Town_City_State")}
                    />
                  </div>
                  <div className="password">
                    <label htmlFor="phone no" className="input_label">
                      Phone No:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Phone Number"
                      className="input_tp"
                      {...register("Phone")}
                    />
                  </div>
                  <div className="password">
                    <label htmlFor="phone no" className="input_label">
                      Pincode:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Pincode"
                      className="input_tp"
                      {...register("Pin_code")}
                    />
                  </div>

                  {/* {/ // Backend part   /} */}

                  <div className="_form11">
                    <div className="name">
                      <label htmlFor="username" className="input_label">
                        price:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your User Name"
                        className="input_tp"
                        value={price} // Update here to use the correct price value
                        {...register("Total_Price")} // Use a unique name, for example, "Price"
                      />
                    </div>
                  </div>

                  {/* {/ ///////     /} */}
                  <div class="payment-method">
                    <label htmlFor="methods" className="pay-text">
                      Payment Methods:{" "}
                    </label>
                    <div className="payment-options">
                      <div class="payment-option">
                        <input
                          type="checkbox"
                          id="upi1"
                          name="upi-option"
                          value="COD"
                          {...register("Payment_method")}
                        />
                        <label for="upi1">Cash On Delivery</label>
                      </div>
                      {/* <div class="payment-option">
                        <input
                          type="radio"
                          id="upi2"
                          name="upi-option"
                          value="upi2"
                        />
                        <label for="upi2">UPI</label>
                      </div> */}
                    </div>
                  </div>

                  {/* {/ // for backend part     /} */}
                  <div className="_form11">
                    <div className="name">
                      <label htmlFor="username" className="input_label">
                        Payment_progress:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your User Name"
                        className="input_tp"
                        value={"Pending"}
                        {...register("Payment_progress")}
                      />
                    </div>
                  </div>

                  {/* {/ // for backend part    /} */}
                  <div className="_form11">
                    <div className="name">
                      <label htmlFor="username" className="input_label">
                        data:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your User Name"
                        className="input_tp"
                        value={JSON.stringify(datas)} // Convert datas to JSON string
                        {...register("data")}
                      />
                    </div>
                  </div>

                  {/* {/ ////// /} */}
                  <div className="_form11">
                    <div className="name">
                      <label htmlFor="username" className="input_label">
                        user_id:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your User Name"
                        className="input_tp"
                        value={userid} // Update here to use the correct price value
                        {...register("user_id")} // Use a unique name, for example, "Price"
                      />
                    </div>
                  </div>

                  {/* {/ ////// /} */}
                  <div className="_form11">
                    <div className="name">
                      <label htmlFor="username" className="input_label">
                        delivery_status:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your User Name"
                        className="input_tp"
                        value={"Pending"} // Update here to use the correct price value
                        {...register("delivery_status")} // Use a unique name, for example, "Price"
                      />
                    </div>
                  </div>

                  {/* {/ ////// /} */}
                  <div className="_form11">
                    <div className="name">
                      <label htmlFor="username" className="input_label">
                        order_data_time:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your User Name"
                        className="input_tp"
                        value={orderDataTime} // Update here to use the correct price value
                        {...register("order_data_time")} // Use a unique name, for example, "Price"
                      />
                    </div>
                  </div>

                  {/* //  {/ ////// /} */}
                  <div className="_form11">
                    <div className="name">
                      <label htmlFor="username" className="input_label">
                        deliver_data_time:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your User Name"
                        className="input_tp"
                        value={""} // Update here to use the correct price value
                        {...register("deliver_data_time")} // Use a unique name, for example, "Price"
                      />
                    </div>
                  </div>

                  {/* {/ ///////////// /} */}
                  <div className="p-btn">
                    <button type="submit">Pay Now</button>
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
      </section>
    </>
  );
};

export default Payment;
