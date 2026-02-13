import React, { useState } from "react";

import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { FaAnglesRight } from "react-icons/fa6";
import "./navbar.css";
import AnimatedButton from "../sheared/AnimatedButton";
import { map } from "motion/react-client";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const links = (
  //   <>
  //     <li>
  //       <NavLink to={"/"}>Home</NavLink>
  //     </li>

  //     <li>
  //       <NavLink to={"/about"}>About</NavLink>
  //     </li>

  //     <li>
  //       <NavLink to={"/projects"}>Project</NavLink>
  //     </li>
  //     <li>
  //       <NavLink to={"/contact"}>Contact</NavLink>
  //     </li>
  //     <li>
  //       <NavLink to={"/skills"}>Skills</NavLink>
  //     </li>
  //   </>
  // );
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Project", path: "/projects" },
    { title: "Contact", path: "/contact" },
    { title: "Skills", path: "/skills" },
  ];

  const links = navLinks.map((link) => (
    <li key={link.path}>
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          isActive
            ? "text-primary font-bold border-b-2"
            : "text-gray-500 hover:text-primary"
        }
      >
        {link.title}
      </NavLink>
    </li>
  ));
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 bg-[#252734] flex justify-between items-center  
    animate-slide-down transition-all duration-500 px-4 lg:px-12 xl:px-48 h-[100px]"
    >
      <div className="">
        {/* Logo */}
        <div className=" gap-2 items-center hidden lg:flex">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          {/* <h1 className="text-2xl lg:text-4xl">𝓑𝓐𝓟𝓐𝓝</h1> */}
        </div>
        {/* Responsive menu bar */}
        <div className="">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white relative z-50"
          >
            {isOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}

            {/* Overlay menu */}
            <div
              className={`fixed top-16 left-0 w-full bg-[#2a2c39] z-40 overflow-hidden transition-all duration-500 ease-in-out 
                                ${
                                  isOpen
                                    ? "max-h-screen opacity-100"
                                    : "max-h-0 opacity-0 pointer-events-none"
                                }`}
            >
              <ul className="space-y-4 text-xl font-semibold *:hover:bg-gray-400 *:pl-6 *:rounded *:mx-2 *:py-2 py-4">
                {links}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* NavBar */}

      <nav className="navbar hidden text-gray-400 xl:flex">
        <ul className="flex gap-8 text-lg">
          {links.map((link, index) => (
            <div className="py-12">
              <AnimatedButton className="px-2 py-1" key={index}>
                {link}
              </AnimatedButton>
            </div>
          ))}
        </ul>
      </nav>

      {/*  */}
      <div className="">
        <Link to="/contact" className="rounded-2xl">
          <AnimatedButton className="border border-gray-700  py-2 px-8 ">
            Hire Me <FaAnglesRight />
          </AnimatedButton>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
