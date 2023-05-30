import React from "react";

const MainContent = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src=".\src\assets\main-content-image.jpeg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="title-font sm:text-2xl text-1xl mb-4 font-light text-gray-900" >Welcome to Blink Impex </h3>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Empowering
              <br className="hidden lg:inline-block" /> progress through cutting{" "}
              <br className="hidden lg:inline-block" /> edge technology
              solutions
            </h1>
            <p className="mb-8 leading-relaxed">
              {" "}
              Blink Impex is located in Morbi, Gujarat, India. We are
              specializing in manufacturing a wide range of porcelain tiles,
              slabs and sanitarywares.
            </p>
            <p className="mb-8 leading-relaxed">
              We at Blink Impex take immense pride in our dedicated team of
              creative designers who are constantly in tune with the latest
              trends of style and fashion. Their innovative ideas and keen eye
              for detail enable us to offer a wide range of aesthetically
              pleasing products that cater to diverse consumer preferences.
              </p>

           
            <div className="flex justify-center">
              <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default MainContent;
