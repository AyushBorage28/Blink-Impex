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

  const handleDropdownToggle = () => {
    setToggle(!toggle);
  };

  const handleDropdownClose = () => {
    setToggle(false);
  };

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
            className=" w-14 md:w-24 object-contain"
            style={{ padding: "0", margin: "0", lineHeight: "0" }}
          />
        </Link>

        <ul
          className={`list-none hidden justify-center sm:flex flex-row gap-10 ${
            isMobile ? "" : "flex-grow justify-center"
          }`}
        >
          {navLinks.map((nav) =>
            nav.dropdown ? (
              <li
                key={nav.id}
                className={`relative ${
                  location.pathname === nav.id
                    ? "text-yellow-800"
                    : "text-white"
                }`}
                onMouseEnter={isMobile ? null : handleDropdownToggle}
                onMouseLeave={isMobile ? null : handleDropdownClose}
              >
                <Link to={nav.id} className="text-3 font-medium cursor-pointer">
                  {nav.title}
                </Link>
                {!isMobile && toggle && (
                  <ul className="absolute top-full left-0 w-44 py-2 bg-primary shadow-lg rounded-lg">
                    {nav.dropdown.map((dropdownItem) => (
                      <li
                        key={dropdownItem.id}
                        className="px-4 py-2 hover:bg-yellow-800"
                      >
                        <Link to={dropdownItem.id}>{dropdownItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li
                key={nav.id}
                className={`${
                  location.pathname === nav.id
                    ? "text-yellow-800"
                    : "text-white"
                } hover:text-yellow-800 text-3 font-medium cursor-pointer`}
              >
                <Link to={nav.id}>{nav.title}</Link>
              </li>
            )
          )}
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
            } p-6 bg-gray-900 absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium hover:text-yellow-800 cursor-pointer text-[16px] ${
                    location.pathname === nav.id
                      ? "text-white"
                      : "text-black-100"
                  }`}
                >
                  <div
                    onClick={() => {
                      if (isMobile && nav.dropdown) {
                        setActive(active === nav.id ? "" : nav.id);
                        handleDropdownToggle();
                      }
                    }}
                    className="flex items-center"
                  >
                    <span>{nav.title}</span>
                    {nav.dropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          active === nav.id ? "rotate-180" : ""
                        } h-4 w-4 ml-2 transition-transform duration-300 transform`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                  {nav.dropdown && (
                    <ul
                      className={`ml-4 mt-2 ${
                        active === nav.id
                          ? "max-h-[200px] opacity-100"
                          : "max-h-0 opacity-0"
                      } transition-all duration-300 overflow-hidden`}
                    >
                      {nav.dropdown.map((dropdownItem) => (
                        <li
                          key={dropdownItem.id}
                          className="hover:text-yellow-800 cursor-pointer"
                          onClick={handleDropdownClose}
                        >
                          <Link to={dropdownItem.id}>{dropdownItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
