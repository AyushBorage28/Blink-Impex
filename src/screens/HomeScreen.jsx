import React from "react";
import Hero from "../components/Hero.jsx";
import Collection from "../components/Collection.jsx";
import Statistics from "../components/Statistics.jsx";
import ContactUs from "../components/ContactUs.jsx";
import MainContent from "../components/MainContent.jsx";

const HomeScreen = () => {

  return (
    <>
      <Hero />
      <MainContent />
      <Collection />
      <Statistics />
      <ContactUs />
    </>
  );
};

export default HomeScreen;
