import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import About from "./screens/About.jsx";
import TechnicalArea from "./screens/TechnicalArea.jsx";
import Catalogue from "./screens/Catalogue.jsx";
import Exports from "./screens/Exports.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import LogoLoader from "./components/LogoLoader.jsx";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulating data loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {isLoading ? (
        <LogoLoader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/about" element={<About />} />
            <Route path="/technicalArea" element={<TechnicalArea />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/exports" element={<Exports />} />
            <Route path="/contactUs" element={<ContactScreen />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
