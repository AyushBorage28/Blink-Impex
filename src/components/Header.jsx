import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768; // Adjust the breakpoint as per your needs
      setIsMobile(isMobileDevice);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Call the resize handler initially

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-0 fixed top-0 z-50 ${
        scrolled || isMobile ? "bg-primary I shadow-md" : "bg-transparent"
      }`}
      style={{
        boxShadow:
          scrolled || isMobile ? "0 1px 4px rgba(242, 180, 0, 0.5)" : "none",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className=" w-14 md:w-20 object-contain"
            style={{ padding: "0", margin: "0", lineHeight: "0" }}
          />
        </Link>

        <ul className="list-none hidden justify-center sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-yellow-800" : "text-white"
              } hover:text-yellow-800 text-[17px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a
                href={
                  nav.id == "blogs"
                    ? "https://medium.com/@ayushborage28"
                    : `#${nav.id}`
                }
                target={nav.id == "blogs" ? "_blank" : "_self"}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[20px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-blue-gray-400 absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-black-100"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
