import React from "react";
import infra1 from "../assets/infra-1.jpg";
import infra2 from "../assets/infra-2.jpg";
import infra3 from "../assets/infra-3.jpg";
import infra4 from "../assets/infra-4.jpg";
import infra5 from "../assets/infra-5.jpg";
import infra6 from "../assets/infra-6.jpg";

const Infrastructure = () => {
  const imageStyles = {
    transition: "transform 0.3s",
    border: "none",
  };

  const handleHover = (event) => {
    event.target.style.transform = "scale(1.04)";
    event.target.style.border = "2.5px solid #F59E0B";
  };

  const handleHoverEnd = (event) => {
    event.target.style.transform = "scale(1)";
    event.target.style.border = "none";
  };

  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl text-yellow-800 font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
              INFRASTRUCTURE
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Blink Impex, based in Morbi, Gujarat, India, specializes in the
              meticulous manufacturing of porcelain tiles, slabs, and sanitary
              wares. Our team of talented designers incorporates the latest
              style trends into their creations, while our dedicated technicians
              deliver innovative, technology-driven products at unbelievable
              prices.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:opacity-80 "
                  src={infra2}
                  style={imageStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:opacity-80"
                  src={infra1}
                  style={imageStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:opacity-80 "
                  src={infra5}
                  style={imageStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:opacity-80"
                  src={infra3}
                  style={imageStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:opacity-80"
                  src={infra6}
                  style={imageStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:opacity-80"
                  src={infra4}
                  style={imageStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              SUPER MODERN{" "}
              <span style={{ color: "#f2b400" }}>MANUFACTURING FACILITIES</span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We take pride in our world-className production facilities,
              equipped with advanced machinery, and boasting India's largest
              manufacturing plant for tiles. Our wide range of tile sizes
              includes popular dimensions such as 600x600 mm, 600x1200 mm,
              800x1600 mm, 1200x1200 mm, 1200x2400 mm, and 800x2400 mm. Quality
              is our top priority, and our state-of-the-art setup ensures the
              production of exceptional products.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font">
        <div className="container px-5 pb-24 pt-16 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
              PRODUCTION SIZES{" "}
              <span style={{ color: "#f2b400" }}> FOR ALL SIZES</span>
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  Capacity: 25000 sq. mtrs. Per day
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  Feeding System: Multicharged modular{" "}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  Kiln: 3 nos. of longest kilns of length 220 mtrs. from SACMI
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  Polishing Line: Biggest line with 48 heads from KEDA
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  Press: PH 5000 tons - 4 nos. from SACMI
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  Polishing machine with Nano facility
                </span>
              </div>
            </div>
            <div className="p-2   w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                  TGV (Track Guided Vehicle) Robotic equipment for automatic
                  polishing machine with nano facility control of storage &
                  movement of tiles
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font">
        <div className="container px-5 pb-24 pt-16 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
              <span style={{ color: "#f2b400" }}>CERTIFICATES</span>
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Coming Soon...
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Infrastructure;
