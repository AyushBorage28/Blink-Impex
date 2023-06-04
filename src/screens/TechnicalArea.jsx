import React from 'react'
import backgroundImage from "../assets/catalogue-bg.jpg";
import mobileBackgroundImage from "../assets/catalogue-bg-mobile.jpg";
import BackgroundImage from "../components/BackgroundImage";
const TechnicalArea = () => {
  return (
    <BackgroundImage
        backgroundImage={backgroundImage}
        mobileBackgroundImage={mobileBackgroundImage}
        backgroundPosition="center center"
        mobileBackgroundPosition="center top"
      ></BackgroundImage>
  )
}

export default TechnicalArea