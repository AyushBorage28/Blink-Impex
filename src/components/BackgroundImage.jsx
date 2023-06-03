import React, { useEffect, useState } from "react";

const BackgroundImage = ({
  backgroundImage,
  mobileBackgroundImage,
  backgroundPosition = "center top", // Default position
  mobileBackgroundPosition = "center bottom", // Default position
  children,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  const detectMobile = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    detectMobile();
    window.addEventListener("resize", detectMobile);
    return () => window.removeEventListener("resize", detectMobile);
  }, []);

  return (
    <div
      className={`responsive-container ${isMobile ? "mobile" : ""}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: isMobile
          ? mobileBackgroundPosition
          : backgroundPosition,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: isMobile ? "35vh" : "57vh",
        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      {isMobile && (
        <div
          style={{
            backgroundImage: `url(${mobileBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: mobileBackgroundPosition,
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        ></div>
      )}

      {children}
    </div>
  );
};

export default BackgroundImage;
