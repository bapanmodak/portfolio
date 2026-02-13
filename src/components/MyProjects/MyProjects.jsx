import React from "react";
import lawyer from "../../assets/my-projects/project-1.jpg";
import jobs from "../../assets/my-projects/project-2.jpg";
import roommates from "../../assets/my-projects/project-3.jpg";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

const MyProjects = () => {
  return (
    <div id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* card 1 */}
        <div className="border rounded-xl overflow-hidden border-green-500   shadow-lg shadow-green-400/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
          <div className="">
            <img
              src={lawyer}
              alt="Lawyer Service Project"
              className="h-[250px] w-full object-cover"
            />
          </div>
          <div className="p-4 space-y-2">
            <h2 className="text-2xl font-semibold text-white">
              Lawyer Service
            </h2>
            <p className="text-gray-400">
              A dynamic web application that allows users to browse profiles of
              top-rated lawyers and book appointments directly.
            </p>
            <Link to="#">
              <button className="text-green-400 flex gap-2 items-center hover:underline">
                Preview <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>

        {/* card 2 */}
        <div className="border rounded-xl overflow-hidden border-green-500   shadow-lg shadow-green-400/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
          <div className="">
            <img
              src={jobs}
              alt="Job Finding Project"
              className="h-[250px] w-full object-cover"
            />
          </div>
          <div className="p-4 space-y-2">
            <h2 className="text-2xl font-semibold text-white">Find Jobs</h2>
            <p className="text-gray-400">
              Users will be able to see job vacancies in the company of their
              choice and apply.
            </p>
            <Link to="#">
              <button className="text-green-400 flex gap-2 items-center hover:underline">
                Preview <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>

        {/* card 3 */}
        <div className="border rounded-xl overflow-hidden border-green-500   shadow-lg shadow-green-400/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
          <div className="">
            <img
              src={roommates}
              alt="Roommate Finder Project"
              className="h-[250px] w-full object-cover"
            />
          </div>
          <div className="p-4 space-y-2">
            <h2 className="text-2xl font-semibold text-white">
              Find Roommates
            </h2>
            <p className="text-gray-400">
              Users can post for this in Roommate and view other people's posts
              and contact them.
            </p>
            <Link to="#">
              <button className="text-green-400 flex gap-2 items-center hover:underline">
                Preview <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
