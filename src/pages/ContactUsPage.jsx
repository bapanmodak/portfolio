import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import ContactUs from '../components/ContactUs';

const ContactUsPage = () => {
    return (
        <div>
            <div className="">
                <motion.div
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="lg:mt-[100px] lg:py-22 space-y-4 lg:space-y-12"
                >
                    <h1 className="text-5xl font-bold text-center mt-28 lg:mt-0">Contact Me</h1>

                    <div className="w-fit mx-auto flex justify-center items-center gap-6 px-6 lg:px-12 py-2 lg:py-6  rounded-full bg-[#2a2c39] mb-12 lg:mb-0">
                        <Link to='/' className="text-secondary">Home</Link>
                        <span>||</span>
                        <h6>Contact Me</h6>
                    </div>
                </motion.div>

                <div className="">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl text-center pt-6 lg:pt-12 bg-[#2a2c39]">If you have any porject or need help. Contact me</h1>
                </div>

                <ContactUs />
            </div>
        </div>
    );
};

export default ContactUsPage;