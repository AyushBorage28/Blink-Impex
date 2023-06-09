import React from 'react'
import backgroundImage from "../assets/contact-bg.jpg";
import mobileBackgroundImage from "../assets/contact-bg-mobile.jpg";
import BackgroundImage from "../components/BackgroundImage";

const PackingDetails = () => {
  return (
    <BackgroundImage
    backgroundImage={backgroundImage}
    mobileBackgroundImage={mobileBackgroundImage}
  ></BackgroundImage>
  )
}

export default PackingDetails