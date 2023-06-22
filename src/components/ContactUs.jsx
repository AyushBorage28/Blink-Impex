import React from "react";
import worldMap from "../assets/world-map.png";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <section className="text-gray-400 body-font relative">
      <div className="flex flex-col text-center w-full pt-24 mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-0 text-white">
          {t("CONTACT")} <span className="text-yellow-800">{t("US")}</span>
        </h1>
      </div>
      <div className="container px-5 py-24 pt-0 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative">
          <img className="p-0" src={worldMap} alt="" />

          <div className="bg-gray-900 absolute flex flex-wrap py-6 rounded shadow-md items-center justify-center">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                {t("ADDRESS")}
              </h2>
              <p className="mt-1">
                SHOP NO-10, Chitrakoot 4 GIDC B/H sanala road, Morbi 363641
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                {t("EMAIL")}
              </h2>
              <a className="text-yellow-800 leading-relaxed">
                export@blinkimpex.com
                <br />
                blinkimpex@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                {t("PHONE")}
              </h2>
              <p className="leading-relaxed">+91 63539 43201</p>
              <p className="leading-relaxed">+91 88495 57832</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            {t("Reach out to us")}
          </h2>
          <p className="leading-relaxed mb-5">
            {t("Anything you want to ask? Jot it down below")}
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            {t("Name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            {t("Email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              {t("Message")}
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-800 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-yellow-800 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-900 rounded text-lg">
          {t("Submit")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
