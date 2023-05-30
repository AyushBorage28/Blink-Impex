import { Carousel } from "flowbite-react";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-56 md:h-screen ">
      <Carousel slideInterval={5000}>
        <div className="carousel-item">
          <img
            alt="..."
            src=".\src\assets\home-carousal-1.jpg"
            className="carousel-image"
          />
          <h1 className="carousel-text">
            Unleash your Design Potential with Porcelain Tiles
          </h1>
        </div>
        <div className="carousel-item">
          <img
            alt="..."
            src=".\src\assets\home-carousal-2.jpg"
            className="carousel-image"
          />
          <h1 className="carousel-text">
            Elevate your Space with Elegant and Durable Porcelain Tiles
          </h1>
        </div>
        <div className="carousel-item">
          <img
            alt="..."
            src=".\src\assets\home-carousal-3.jpg"
            className="carousel-image"
          />
          <h1 className="carousel-text">
            Perfect Blend of <br /> Style and Resilience
          </h1>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
