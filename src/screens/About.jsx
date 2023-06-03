import React from "react";
import backgroundImage from "../assets/about-bg.jpg";
import mobileBackgroundImage from "../assets/about-bg-mobile.jpg";
import BackgroundImage from "../components/BackgroundImage";

const About = () => {
  return (
    <>
      <BackgroundImage
        backgroundImage={backgroundImage}
        mobileBackgroundImage={mobileBackgroundImage}
        backgroundPosition="center center"
        mobileBackgroundPosition="center center"
      ></BackgroundImage>
    </>
  );
};

export default About;
