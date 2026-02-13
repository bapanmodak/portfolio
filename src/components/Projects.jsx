import React, { useState } from "react";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedButton from "./sheared/AnimatedButton";
import { Link } from "react-router";
import { link } from "motion/react-client";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      title: "Velocity Club",
      desc: "It is an e-commerce website where users can book any type of courses according to their specified time. Stripe payment system, user member and admin dashboard and the entire website is responsive.",
      link: "https://velocity-club-client.surge.sh",
      tags: [
        "React",
        "Node.js",
        "Stripe",
        "MongoDB",
        "Express",
        "Firebase",
        "Tailwind",
      ],
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      title: "Roommate Finder",
      desc: "This is a roommate finder web page. User can choose roommate of his choice and can post for roommates with all his details. Authentication system is done with Firebase. Entire web page is responsive.",
      link: "https://find.roommates.surge.sh",
      tags: ["React", "Firebase", "Tailwind"],
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800",
      title: "Food Expired Tracker System",
      desc: "Food Expiration Tracker is a website that tracks the expiration date of food. Once you post a specific food item with its details, the website handles the rest. It will notify the owner when the expiration date is reached.",
      link: "https://food-expired-tracker.surge.sh",
      tags: ["React", "Express.js", "MongoDB"],
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
      title: "Find Your Job",
      desc: "Find Your Job is a user-friendly job portal where users can log in and explore various companies. They can view job listings and apply directly based on their preferences and qualifications. The platform simplifies job hunting with an intuitive and efficient application process.",
      link: "https://bapan-your-jobs.surge.sh",
      tags: ["React", "Node.js", "API"],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#252734] py-20 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gray-500 opacity-5 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-gray-400 opacity-5 rounded-full blur-3xl bottom-20 right-10 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Explore my latest work and creative solutions
          </p>
        </div> */}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Animated border gradient */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded-2xl opacity-0 group-hover:opacity-40 blur transition duration-500`}
              ></div>

              {/* Card */}
              <div className="relative bg-[#1e1f2b] rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Image container with overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1f2b] via-transparent to-transparent opacity-60"></div>

                  {/* Hover overlay with link icon */}
                  <Link to={project.link}>
                    <div
                      className={`absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                        hoveredId === project.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="text-center">
                        <FaExternalLinkAlt className="text-white text-4xl mb-2 mx-auto animate-bounce" />
                        <p className="text-white font-semibold">View Project</p>
                      </div>
                    </div>
                  </Link>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-500/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:bg-gray-600/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="p-2 m-2">
                    <div className="">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <AnimatedButton className="w-full border-2 border-gray-700 rounded-3xl overflow-hidden">
                          <div className="relative w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 group/btn">
                            <span>View Project</span>

                            <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </div>
                        </AnimatedButton>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom corner accent */}
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gray-600/30 rounded-bl-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Projects;
