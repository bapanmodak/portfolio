import React from "react";
import aboutImage from "../assets/myImage2.webp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 bg-[#2a2c39] lg:px-12 xl:px-48 lg:py-20">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:hidden xl:block flex-1"
      >
        <img src={aboutImage} alt="about" className="w-full rounded-xl" />
      </motion.div>

      {/* Right Side (Content) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-white max-w-2xl px-4 lg:max-w-full"
      >
        <h1 className="text-2xl w-full md:text-3xl lg:text-4xl font-extrabold mb-10">
          I'm Bapan Modak, MERN Stack Developer
        </h1>

        <p className="text-secondary">
          I’m Bapan Modak, a dedicated student and aspiring MERN Stack Developer
          who is continuously learning and growing in the world of web
          development. I specialize in building modern, responsive web
          applications and visually engaging user interfaces that align with the
          latest design and development trends.
          <br />
          <br />
          With a growing foundation in MongoDB, Express.js, React, and Node.js,
          I enjoy turning ideas into functional and user-friendly digital
          products. My focus is on writing clean code and crafting intuitive
          designs that deliver seamless user experiences.
          <br />
          <br />
          As I continue to learn and build real-world projects, I strive to
          improve with every step. I’m detail-oriented, eager to take on
          challenges, and committed to evolving as a developer who can create
          impactful web solutions.
        </p>

        <hr className="text-secondary my-8" />

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-3">
            <h6>Name : Bapan Modak</h6>
            <h6>Age : 23</h6>
            <h6>From : Coochbehar, West Bengal, India</h6>
          </div>

          <div className="space-y-3 pb-12 lg:pb-0">
            <h6>
              Email :{" "}
              <a
                href="mailto:bapanmodak.dev@gmail.com"
                className="text-blue-500 hover:underline"
              >
                bapanmodak.dev@gmail.com
              </a>
            </h6>
            <h6>
              Phone :{" "}
              <a
                href="tel:+918001811143"
                className="text-blue-500 hover:underline"
              >
                +91 80018 11143
              </a>
            </h6>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
