import React from "react";
import "./Video.css";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <section className="s-video">
      <ReactPlayer
        url={require("../../assets/images/")}
        width="100vw"
        height="33rem"
        playing={true}
        muted={true} // Mute the video to satisfy browser policies
        loop={true} // Set to 'true' if you want the video to loop
        controls // Display video controls
        className="video-player"></ReactPlayer>
    </section>
  );
};

export default Video;
