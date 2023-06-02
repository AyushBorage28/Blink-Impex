import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import Collection from "./components/Collection.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-20 bg-primary">
        <Header />
        <Hero/>
      </div>
      <MainContent/>
      <Collection/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
