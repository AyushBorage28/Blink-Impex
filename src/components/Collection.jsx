import React, { useState } from "react";
import collectionItems from "../constants";

const Collection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const renderAdditionalInfo = (index, title) => {
    if (hoveredIndex !== index) {
      return (
        <div className="absolute inset-x-0 bg-gray-900 bg-opacity-70 py-2 px-4">
          <h2 className="text-white tracking-widest text-md font-semibold">
            {title}
          </h2>
        </div>
      );
    }
  };

  return (
    <section className="text-gray-400  body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            OUR <span style={{ color: "#f2b400" }}>COLLECTIONS</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Discover our handcrafted collection of exquisite ceramics, blending
            artistry with functionality. From modern designs to traditional
            motifs, elevate your home decor and find unique treasures that speak
            to your Soul
          </p>
        </div>
        <div className="flex flex-wrap m-3">
          {collectionItems.map((item, index) => (
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="flex relative"
                style={{ width: "100%", height: "300px" }}
              >
                <img
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.imageSrc}
                />

                <div className="absolute inset-0 flex items-end justify-center">
                  {renderAdditionalInfo(index, item.title)}
                </div>

                <div className="px-8 py-10 relative z-10 w-full border-2 border-yellow-800 bg-gray-900 opacity-0 hover:opacity-90">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-800 mb-1">
                    {item.title}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {item.description}
                  </h1>
                  <ul className="leading-relaxed size-list">
                    {item.sizes.map((size, sizeIndex) => (
                      <li key={sizeIndex}>
                        <a href="">{size}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
