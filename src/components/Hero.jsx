import { Carousel } from "@material-tailwind/react";
import { carouselimage1, carouselimage2, carouselimage3 } from "../assets";
import React from "react";

const Hero = () => {
  return (
    <Carousel
      transition={{ duration: 2 }}
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
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
