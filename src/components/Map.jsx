import React from "react";

const Map = () => {
  return (
    <section className="text-gray-400 pt-24 bg-gray-900 body-font relative">
      <div class="md:mt-14 mt-4 relative sm:flex items-center justify-center">
        <img
          src="https://i.ibb.co/KjrPCyW/map.png"
          alt="world map image"
          class="w-full xl:h-full h-96 object-cover object-fill sm:block hidden"
        />
        <img
          src="https://i.ibb.co/SXKj9Mf/map-bg.png"
          alt="mobile-image"
          class="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
        />

        <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
          <p class="text-3xl font-semibold text-gray-800">3K+</p>
          <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
            Containers exported each Year
          </p>
        </div>
        <div class="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
          <p class="text-3xl font-semibold text-gray-800">500+</p>
          <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
          Tile Designs
            
          </p>
        </div>
        <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
          <p class="text-3xl font-semibold text-gray-800">25+</p>
          <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
          Exporting Countries
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;
