import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import About from "./screens/About.jsx";
import TechnicalArea from "./screens/TechnicalArea.jsx";
import Catalogue from "./screens/Catalogue.jsx";
import Products from "./screens/Products.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/technicalArea" element={<TechnicalArea />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactUs" element={<ContactScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
