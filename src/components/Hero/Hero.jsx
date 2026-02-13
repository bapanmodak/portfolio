import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./hero.css";

import profilePhoto from "../../assets/background2.png";

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-black text-white">
      {/* ============== Mobile View ============== */}
      <div
        className="md:hidden min-h-screen flex justify-center items-center text-center relative bg-cover bg-center bg-no-repeat grayscale mt-24"
        style={{ backgroundImage: `url(${profilePhoto})` }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Text Content */}
        <div className="z-10 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase">
            BAPAN MODAK
          </h1>
          <h2 className="text-lg sm:text-xl mt-2">
            I AM A{" "}
            <span className="text-green-400 font-semibold">
              <Typewriter
                words={["JUNIOR MERN STACK DEVELOPER"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </div>
      </div>

      {/* ============== Desktop & Tablet View ============== */}
      <div className="hidden md:flex min-h-[90vh] justify-between items-center container mx-auto px-8 gap-10 pt-36">
        {/* Left Column: Text */}
        <div className="flex-1 justify-center items-center lg:ml-44 lg:mt-48">
          <h1 className="text-6xl font-bold uppercase">BAPAN MODAK</h1>
          <h1 className="text-xl mt-4">
            I AM A{" "}
            <span className="text-green-400 font-semibold">
              <Typewriter
                words={[
                  "JUNIOR MERN STACK DEVELOPER",
                  "FRONT-END WEB DEVELOPER",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 flex justify-end items-center">
          <img
            src={profilePhoto}
            alt="Bapan Modak"
            className="grayscale max-h-[75vh] rounded-lg shadow-bottom-large"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
