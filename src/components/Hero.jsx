import React from "react";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import myImage from "../assets/myImage.webp";
import { Link } from "react-router";
import { motion } from "framer-motion";
import AnimatedButton from "./sheared/AnimatedButton";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between xl:px-48">
      {/* Left Content */}
      <motion.div
        className="flex items-center py-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="left-content space-y-8 lg:space-y-12 lg:ml-18">
          <h1>
            <span className="block text-4xl lg:text-8xl">Hello! I'm</span>
            <span className="text-6xl lg:text-8xl">Bapan Modak</span>
          </h1>

          <p className="text-2xl text-secondary">MERN Stack Developer</p>

          <div className="w-[200px] lg:w-[230px]">
            <a
              href="/bapan-modak-resume.pdf"
              download="bapan-modak-resume.pdf"
              className=" w-full "
            >
              <AnimatedButton className="border w-full border-gray-700  py-2 px-8">
                <FaDownload /> Get Resume
              </AnimatedButton>
            </a>
          </div>

          <div className="flex gap-4 mt-8 *:opacity-70 *:hover:opacity-100">
            <AnimatedButton className="p-2">
              <Link to="https://github.com/bapanmodak">
                <FaGithub size={28} />
              </Link>
            </AnimatedButton>
            <AnimatedButton className="p-2">
              <Link to="https://www.facebook.com/bapanmodak.dev">
                <FaFacebook size={28} />
              </Link>
            </AnimatedButton>
            <AnimatedButton className="p-2">
              <Link to="https://x.com/bapanm23">
                <FaTwitter size={28} />
              </Link>
            </AnimatedButton>
            <AnimatedButton className="p-2">
              <Link to="https://www.linkedin.com/in/bapanmodak">
                <FaLinkedin size={28} />
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="right-content mt-12 md:mt-0 mx-auto lg:mx-0 xl:pt-12"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img src={myImage} alt="My Image" className="w-full lg:w-[600px]" />
      </motion.div>
    </div>
  );
};

export default Hero;
