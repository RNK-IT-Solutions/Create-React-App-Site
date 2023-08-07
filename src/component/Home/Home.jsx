import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import About from "../About/About";
import Quality from "../Quality/Quality";
import Video from "../Video/Video";
import Client from "../Client/Client";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Quality />
      <Video />
      <Client />
      <Footer />
    </>
  );
};

export default Home;
