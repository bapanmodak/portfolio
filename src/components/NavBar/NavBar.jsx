import React, { useState } from 'react';

import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { FaAnglesRight } from 'react-icons/fa6';
import './navbar.css'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/projects"}>Project</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li><NavLink to={"/skills"}>Skills</NavLink></li>
    </>

    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-[#252734] flex justify-between items-center  
    animate-slide-down transition-all duration-500 px-4 lg:px-48 h-[100px]'>

            <div className="">
                {/* Logo */}
                <div className=" gap-2 items-center hidden lg:flex">
                    <img src={logo}
                        alt="Logo"
                        className='w-12 h-12'
                    />
                    <h1 className="text-2xl lg:text-4xl">𝓑𝓐𝓟𝓐𝓝</h1>
                </div>
                {/* Responsive menu bar */}
                <div className="">
                    <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white relative z-50">
                        {isOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}

                        {/* Overlay menu */}
                        <div
                            className={`fixed top-16 left-0 w-full bg-[#2a2c39] z-40 overflow-hidden transition-all duration-500 ease-in-out 
                                ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
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
                <ul className="flex gap-12 text-lg">
                    {links}
                </ul>
            </nav>

            {/*  */}
            <div className="">
                <Link to='/contact' className='px-4 lg:px-12 py-1 lg:py-3 text-sm lg:text-base rounded-3xl border border-secondary flex gap-2 lg:gap-4 items-center hover:bg-[#2a2c39] transition-all'>
                    Hire Me <FaAnglesRight /></Link>
            </div>

        </div>
    );
};

export default NavBar;
