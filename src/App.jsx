import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Header />
        <Hero/>
      </div>
      <MainContent/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
