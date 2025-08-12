import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const skillsData = [
    { id: 1, name: "HTML", image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
    { id: 2, name: "CSS", image: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" },
    { id: 3, name: "JavaScript", image: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
    { id: 4, name: "React", image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { id: 5, name: "Tailwind CSS", image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { id: 6, name: "MongoDB", image: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
    { id: 7, name: "Express.js", image: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
    { id: 8, name: "Node.js", image: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
];

const Skills = () => {
    return (
        <motion.div
            className="w-full overflow-x-hidden lg:px-48 py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                autoFill={true}
                className="py-4"
            >
                {skillsData.map((skill) => (
                    <div
                        key={skill.id}
                        className="mx-4 md:mx-8 flex flex-col items-center justify-center p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out border border-secondary h-[100px] md:h-[150px] lg:h-[200px] w-[100px] md:w-[150px] lg:w-[200px]"
                    >
                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px] mb-4 object-contain"
                        />
                        <p className="text-sm lg:text-lg text-center font-semibold text-white align-text-bottom pb-2">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </Marquee>
        </motion.div>
    );
};

export default Skills;
