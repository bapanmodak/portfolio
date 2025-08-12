import React from 'react';
import Projects from '../components/Projects';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
    return (

        <div className="">
            <div className="">
                <motion.div
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="lg:mt-[100px] lg:py-22 space-y-4 lg:space-y-12"
                >
                    <h1 className="text-5xl font-bold text-center mt-28 lg:mt-0">My Projects</h1>

                    <div className="w-fit mx-auto flex justify-center items-center gap-6  px-6 lg:px-12 py-2 lg:py-6  rounded-full bg-[#2a2c39] mb-12 lg:mb-0">
                        <Link to='/' className="text-secondary">Home</Link>
                        <span>||</span>
                        <h6>My Projects</h6>
                    </div>
                </motion.div>

            </div>
            <div className="bg-[#2a2c39]">
                <h1 className="text-3xl lg:text-5xl text-center pt-8 lg:pt-12 ">See our top projects</h1>
                <p className="text-center mt-4 lg:mt-8">Swipe left or right to see all projects</p>
                <Projects />
            </div>
        </div>
    );
};

export default ProjectsPage;