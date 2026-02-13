import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { amount: 0.2, once: true });
  const isInView = useInView(ref, { amount: 0.2 });

  const itemVariants = {
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

  return (
    <div id="contact" className="px-4 md:px-8 py-20">
      <div ref={ref}>
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Contact Me
        </motion.h2>

        <form className="space-y-8">
          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b-2 border-green-500 p-2 focus:outline-none focus:border-green-300"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-b-2 border-green-500 p-2 focus:outline-none focus:border-green-300"
              />
            </motion.div>
          </div>

          {/* Subject Field */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border-b-2 border-green-500 p-2 focus:outline-none focus:border-green-300"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-transparent border-b-2 border-green-500 p-2 focus:outline-none focus:border-green-300 resize-none"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-200"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
