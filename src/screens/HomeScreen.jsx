import React, { useState, useEffect } from "react";
import Hero from "../components/Hero.jsx";
import Collection from "../components/Collection.jsx";
import Statistics from "../components/Statistics.jsx";
import ContactUs from "../components/ContactUs.jsx";
import MainContent from "../components/MainContent.jsx";

const HomeScreen = () => {
  // const [isContentLoaded, setIsContentLoaded] = useState(false);

  // useEffect(() => {
  //   // Simulating data loading delay
  //   setTimeout(() => {
  //     setIsContentLoaded(true);
  //   }, 3000);
  // }, []);

  return (
    <>
      <div className='relative z-20 bg-primary'>
        <Hero />
      </div>    
          <MainContent />
          <Collection />
          <Statistics />
          <ContactUs />
    </>
  );
};

export default HomeScreen;
