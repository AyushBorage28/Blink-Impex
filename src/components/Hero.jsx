import { Carousel } from "@material-tailwind/react";
import { carouselimage1, carouselimage2, carouselimage3 } from "../assets";
import { useMediaQuery } from "@material-ui/core";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      transition={{ duration: 2 }}
      className={`rounded-none hero-carousel ${isMobile ? "mt-14" : ""}`}
      activeIndex={activeIndex}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      autoplay
    >
      <img
        src={carouselimage1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={carouselimage2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={carouselimage3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default Hero;
