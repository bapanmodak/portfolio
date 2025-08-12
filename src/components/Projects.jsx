import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import roommatesImage from '../assets/projectsImage/roommates.jpg';
import foodsImage from '../assets/projectsImage/foods.jpg';
import velocityClubImage from '../assets/projectsImage/velocityClub.png';
import findJobsImage from '../assets/projectsImage/findJobs.png';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="w-full lg:px-48 py-18">
            <Slider {...settings} className="space-x-6">
                {/* Each Project */}
                {[{
                    img: velocityClubImage,
                    title: "Velocity Club",
                    desc: "It is an e-commerce website where users can book any type of courses according to their specified time. Stripe payment system, user member and admin dashboard and the entire website is responsive.",
                    link: 'https://velocity-club-client.surge.sh'
                },
                {
                    img: roommatesImage,
                    title: "Roommate Finder",
                    desc: "This is a roommate finder web page. User can choose roommate of his choice and can post for roommates with all his details. Authentication system is done with Firebase. Entire web page is responsive.",
                    link: 'find.roommates.surge.sh'
                },
                // {
                //     img: lawyersImage,
                //     title: "Lawyer Service Provider",
                //     desc: "This website is mainly a lawyer provider. All the high level lawyers of this country have their profiles here. User can take the services of any lawyer by paying his booking fee. The entire website is responsive.",
                // },
                {
                    img: foodsImage,
                    title: "Food Expired Tracker System",
                    desc: "Food Expiration Tracker is a website that tracks the expiration date of food. Once you post a specific food item with its details, the website handles the rest. It will notify the owner when the expiration date is reached.",
                    link: 'food-expired-tracker.surge.sh'
                },
                {
                    img: findJobsImage,
                    title: "Find Your Job",
                    desc: "Find Your Job is a user-friendly job portal where users can log in and explore various companies. They can view job listings and apply directly based on their preferences and qualifications. The platform simplifies job hunting with an intuitive and efficient application process.",
                    link: 'https://bapan-your-jobs.surge.sh'
                }
                ].map((project, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className=""
                    >
                        <div className="border-gray-500 border rounded md:mr-6 pb-6">
                            <img src={project.img} alt="" className="h-[250px] lg:h-[400px] w-full" />
                            <div className="space-y-4 pt-6 px-6">
                                <h2 className="text-2xl">{project.title}</h2>
                                <p>{project.desc}</p>
                                <div className="*:border *:border-gray-500 *:inline-block *:px-2 *:py-1 *:rounded *:mr-4 space-y-4">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Tailwind</p>
                                    <p>DaisyUi</p>
                                    <p>Javascript</p>
                                    <p>React</p>
                                    <p>Node js</p>
                                    <p>Express js</p>
                                    <p>MongoDB</p>
                                </div>
                                <Link to={project.link} className='px-6 py-1 rounded border border-secondary'>Preview<FaArrowRight className='inline-block ml-2' /></Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </div>
    );
};

export default Projects;
