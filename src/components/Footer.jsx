import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="text-gray-400  body-font">
      <div className="bg-gray-900 bg-opacity-75">
        <div className="container px-5 pb-5 md:pb-0 mx-auto flex items-center sm:flex-row flex-col">
          <a
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
            href="/"
          >
            <img
              src={logo}
              alt="logo"
              className=" w-16 object-contain"
              style={{ padding: "0", margin: "0", lineHeight: "0" }}
            />
          </a>
          <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
            © 2023 BlinkImpex —
            <a
              href="https://instagram.com/blinkimpex?igshid=ZDc4ODBmNjlmNQ=="
              className="text-gray-500 ml-1 hover:text-yellow-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              @BlinkImpex
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="text-gray-400 hover:text-yellow-800"
              href="https://youtube.com/@BlinkImpex"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                id="youtube"
              >
                <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-400 hover:text-yellow-800"
              href="https://instagram.com/blinkimpex?igshid=ZDc4ODBmNjlmNQ=="
              target="_blank"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              className="text-gray-400 ml-2 hover:text-yellow-800"
              href="https://www.facebook.com/Blink-Impex-106627409119105/"
              target="_blank"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>

            <a
              className="ml-2 text-gray-400 hover:text-yellow-800"
              href="https://www.linkedin.com/company/blink-impex/"
              target="_blank"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
