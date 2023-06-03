import React from 'react'
import backgroundImage from "../assets/product-bg.jpg";
import mobileBackgroundImage from "../assets/about-bg-mobile.jpg";
import BackgroundImage from "../components/BackgroundImage";


const Products = () => {
  return (
    <>
    <BackgroundImage
      backgroundImage={backgroundImage}
      mobileBackgroundImage={mobileBackgroundImage}
      backgroundPosition="right center"
      mobileBackgroundPosition="center center"
    ></BackgroundImage>
  </>
  )
}

export default Products