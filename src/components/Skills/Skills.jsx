import React from "react";
import Marquee from "react-fast-marquee";

// স্কিল ডেটা, এখানে আপনি আপনার প্রয়োজন মতো আরও স্কিল যোগ করতে পারেন
const skillsData = [
    { id: 1, name: "HTML", image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
    { id: 2, name: "CSS", image: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" },
    { id: 3, name: "JavaScript", image: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
    { id: 4, name: "React", image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { id: 5, name: "Tailwind CSS", image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { id: 6, name: "MongoDB", image: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
    { id: 7, name: "Express.js", image: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
    { id: 8, name: "Node.js", image: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" }, // একটি অতিরিক্ত স্কিল যোগ করা হলো
];

const Skills = () => {
    return (
        <div id="skills" className="">
            <div className="">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">My Skills</h2>
                <div className="w-full">
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
                                className="md:mx-8 flex flex-col items-center justify-center p-6  rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                style={{ minWidth: "200px", height: "200px" }}
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-[100px] h-[100px] mb-4 object-contain"
                                />
                                <p className="text-lg font-semibold text-white">{skill.name}</p>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Skills;