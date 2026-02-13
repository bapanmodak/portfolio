import React, { useRef } from "react";
import ProfileImage from "../../assets/my-image-2.png";
import { motion, useInView } from "framer-motion";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router"; // ✅ Corrected import

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  const imageVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const textVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconsVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      id="about"
      ref={ref}
      className="text-white min-h-screen flex items-center overflow-hidden py-16"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section */}
          <motion.div
            className="lg:w-1/3 w-full max-w-sm"
            variants={imageVariant}
          >
            <img
              src={ProfileImage}
              alt="Bapan Modak"
              className="object-cover rounded-lg"
            />
          </motion.div>

          {/* Text Section */}
          <div className="lg:w-2/3 flex flex-col justify-center">
            <motion.h2
              className="text-3xl font-semibold mb-6 text-center lg:text-left"
              variants={textVariant}
            >
              I'm Bapan Modak, Junior Mern Stack Developer
            </motion.h2>

            <motion.p className="text-gray-300 mb-4" variants={textVariant}>
              I’m Bapan Modak, a dedicated student and aspiring MERN Stack
              Developer...
            </motion.p>
            <motion.p className="text-gray-300 mb-4" variants={textVariant}>
              With a growing foundation in MongoDB, Express.js, React, and
              Node.js...
            </motion.p>
            <motion.p className="text-gray-300" variants={textVariant}>
              As I continue to learn and build real-world projects...
            </motion.p>

            <hr className="my-6 border-gray-700" />

            <div className="flex flex-col md:flex-row md:gap-8 text-gray-300">
              <motion.div className="flex-1 space-y-2" variants={textVariant}>
                <p>
                  <strong>Name:</strong> Bapan Modak
                </p>
                <p>
                  <strong>Age:</strong> 23
                </p>
                <p>
                  <strong>From:</strong> Coochbehar, West Bengal, India
                </p>
              </motion.div>
              <motion.div
                className="flex-1 space-y-2 mt-4 md:mt-0"
                variants={textVariant}
              >
                <p>
                  <strong>Email:</strong>{" "}
                  <span className="text-[#2dc653]">bapanm2317@gmail.com</span>
                </p>
                <p>
                  <strong>Phone:</strong> 8001811143
                </p>
              </motion.div>
            </div>
            <motion.div
              className="mt-8 flex gap-4 text-[#2dc653] *:p-3 *:border-2 *:border-[#2dc653] *:rounded-full *:cursor-pointer *:transition-all *:duration-300 *:hover:text-black *:hover:bg-[#2dc653] flex-row justify-center lg:justify-start"
              variants={iconsVariant}
            >
              <Link to={"https://github.com/Bapan2317"}>
                <FaGithub />
              </Link>
              <Link to={"https://x.com/bapanm23?t=DfDNC8d0OIrLVBRNvNWTyA&s=09"}>
                <FaXTwitter />
              </Link>
              <Link to={"https://www.facebook.com/bapan.modak.965"}>
                <FaFacebookF />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
