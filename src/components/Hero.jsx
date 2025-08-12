import React from 'react';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import myImage from '../assets/myImage.png';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between xl:px-48'>
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
                        <span className='block text-4xl lg:text-8xl'>Hello! I'm</span>
                        <span className='text-6xl lg:text-8xl'>Bapan Modak</span>
                    </h1>

                    <p className="text-2xl text-secondary">MERN Stack Developer</p>

                    <a
                        href="/bapan-modak-resume.pdf"
                        download="bapan-modak-resume.pdf"
                        className="flex gap-2 w-[200px] lg:w-[230px] lg:gap-4 items-center px-8 lg:px-12 py-3 lg:py-6 cursor-pointer border-gray-600 rounded-full border transition"
                    >
                        <FaDownload /> Get Resume
                    </a>

                    <div className="flex gap-8">
                        <Link to='https://github.com/bapanmodak'><FaGithub size={28} /></Link>
                        <Link to='https://www.facebook.com/profile.php?id=61577290363410'><FaFacebook size={28} /></Link>
                        <Link to='https://x.com/bapanm23'><FaTwitter size={28} /></Link>
                        <Link to='https://www.linkedin.com/in/bapanmodak'><FaLinkedin size={28} /></Link>
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
                <img
                    src={myImage}
                    alt="My Image"
                    className='w-full lg:w-[600px]'
                />
            </motion.div>
        </div>
    );
};

export default Hero;
