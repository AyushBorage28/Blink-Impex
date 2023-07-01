import { carouselimage1, carouselimage2, carouselimage3 } from "../assets";
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <Carousel infiniteLoop autoPlay interval={3000} stopOnHover={false} transitionTime={2000} showArrows={false} showIndicators={false} >
      <div>
        <img src={carouselimage1} />
      </div>
      <div>
        <img src={carouselimage2} />
      </div>
      <div>
        <img src={carouselimage3} />
      </div>
    </Carousel>
  );
};

export default Hero;
