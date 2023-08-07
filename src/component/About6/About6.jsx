import React from "react";
import "./About6.css";
import { useState } from "react";
import Slider from "react-slick";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Footer from "../Footer/Footer";

const data1 = [
  {
    image: require("../../assets/images/sf.png"),
    name: "Kaushik Vaghela",
    position: "Director & Founder",
  },
  {
    image: require("../../assets/images/Mask_group.png"),
    name: "Kaushik Vaghela",
    position: "Director & Founder",
  },
];
const data2 = [
  {
    image: require("../../assets/images/yash.png"),
    image2: require("../../assets/images/Frame.png"),
    image3: require("../../assets/images/f1.png"),
    name: "Yash Modi",
    profile: "Flutter Developer",
  },
  {
    image: require("../../assets/images/gaurav.png"),
    image2: require("../../assets/images/Frame.png"),
    image3: require("../../assets/images/f1.png"),
    name: "Gaurav Prajapati",
    profile: "Flutter Developer",
  },
  {
    image: require("../../assets/images/parth.png"),
    image2: require("../../assets/images/Frame.png"),
    image3: require("../../assets/images/f1.png"),
    name: "Parth Patel",
    profile: "MERN Stack Developer",
  },
  {
    image: require("../../assets/images/mine.png"),
    image2: require("../../assets/images/Frame.png"),
    image3: require("../../assets/images/f1.png"),
    name: "Indrajit Parmar",
    profile: "Web Developer",
  },
  {
    image: require("../../assets/images/vishal.png"),
    image2: require("../../assets/images/Frame.png"),
    image3: require("../../assets/images/f1.png"),
    name: "Vishal Gour",
    profile: "Java Developer",
  },
  {
    image: require("../../assets/images/tripda.png"),
    image2: require("../../assets/images/Frame.png"),
    image3: require("../../assets/images/f1.png"),
    name: "Tripada kalena",
    profile: "Web Developer",
  },
  {
    image: require("../../assets/images/priya.png"),
    image2: require("../../assets/images/Frame.png"),
    image3: require("../../assets/images/f1.png"),
    name: "Priya Prajapati",
    profile: "Graphics Designer",
  },
  {
    image: require("../../assets/images/muskan.png"),
    image2: require("../../assets/images/Frame.png"),
    image3: require("../../assets/images/f1.png"),
    name: "Muskan Sen",
    profile: "UI/UX Designer",
  },
  {
    image: require("../../assets/images/sahil.png"),
    image2: require("../../assets/images/Frame.png"),
    image3: require("../../assets/images/f1.png"),
    name: "Sahil Khan",
    profile: "UI/UX Designer",
  },
  {
    image: require("../../assets/images/nidhi.png"),
    image2: require("../../assets/images/Frame.png"),
    image3: require("../../assets/images/f1.png"),
    name: "Nidhi Pajwani",
    profile: "BDE",
  },
  {
    image: require("../../assets/images/prakash.png"),
    image2: require("../../assets/images/Frame.png"),
    image3: require("../../assets/images/f1.png"),
    name: "Prakash Parmar",
    profile: "BDE",
  },
];
const About6 = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow-a6 next-a6" onClick={onClick}>
        <img src={require("../../assets/images/next.png")} alt="" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow-a6 prev-a6" onClick={onClick}>
        <img src={require("../../assets/images/next.png")} alt="" />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    autoplay: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  const settings2 = {
    autoplay: true,
    // dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="a6-section">
      <div className="a6-header">Our Team</div>
      <div className="a6-subheader">Our Dedicated & Proficient Team</div>
      <div className="a6-flex">
        <div className="head-slider">
          <div className="container23">
            <Slider {...settings}>
              {data1.map((card, idx) => (
                <div className="f-name">
                  <div className="slide23" key={idx}>
                    <img src={card.image} alt="img" />
                  </div>
                  <div className="head-info">{card.name}</div>
                  <div className="head-subinfo">{card.position}</div>
                </div>
              ))}
            </Slider>
          </div>
          {/* <div className="head">
            <img src="profile1.png" alt="empty" className="profile1" />
          </div> */}
        </div>
        <div className="a6-about">
          <div className="team-slider">
            {/* <div className="head-info">Kaushik Vaghela</div> */}

            <div className="about-head">
              Our company was founded by Kaushik Vaghela and with a proven track
              record of success, whose expertise and passion have been
              instrumental in shaping our brand's values and driving our
              commitment to excellence.
            </div>
          </div>
          <div className="container45">
            <Slider {...settings2}>
              {data2.map((card, idx) => (
                <div className="slide45" key={idx}>
                  <div className="profiles">
                    <img
                      src={card.image2}
                      alt="img"
                      className="bottom_img_01"
                    />
                    <img src={card.image3} alt="img" className="img_11" />
                    <img src={card.image3} alt="img" className="img_22" />
                    <div className="team-profile">
                      <img
                        src={card.image}
                        alt="empty"
                        className="profile_img_11"
                      />
                      <div className="profile-info-12">
                        <div className="name">{card.name}</div>
                        <div className="position">{card.profile}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About6;

{
  /* <div className="team-profile">
              <img src="profile2.png" alt="empty" className="profileimg" />
              <div className="profile-info">
                <div className="name">Jane Cooper</div>
                <div className="position">Web Designer</div>
              </div>
            </div>
            <div className="team-profile">
              <img src="profile2.png" alt="empty" className="profileimg" />
              <div className="profile-info">
                <div className="name">Jane Cooper</div>
                <div className="position">Web Designer</div>
              </div>
            </div>
            <div className="team-profile">
              <img src="profile2.png" alt="empty" className="profileimg" />
              <div className="profile-info">
                <div className="name">Jane Cooper</div>
                <div className="position">Web Designer</div>
              </div>
            </div> */
}
