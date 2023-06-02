import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import Collection from "./components/Collection.jsx";
import Statistics from "./components/Statistics.jsx";
import ContactUs from "./components/ContactUs.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-20 bg-primary">
        <Header />
        <Hero/>
      </div>
      <MainContent/>
      <Collection/>
      <Statistics/>
      <ContactUs/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
