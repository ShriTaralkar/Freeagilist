import React, { useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import Logo from "../assets/icons/shri-logo.png";

const Navbar = () => {

    const [theme, setTheme] = useState(true);
    const [isNavMenu, setNavMenu] = useState(false);

    return (
        <div className="navbar-container relative p-5 bg-gradient-to-l from-black via-gray-900 to-gray-700 flex justify-between items-center">
            <div className="logo-container container w-10 text-white">
                <img className="" src={Logo} alt="" />
            </div>
            <nav id="navbar" className="flex justify-center items-center">
                <ul className="nav-list hidden md:flex text-gray-200">
                    <li id="active-nav-item" className="nav-item p-2 transition-all duration-75 hover:scale-110 hover:font-bold"><a href="/#" className="nav-link">Home</a></li>
                    <li className="nav-item p-2 transition-all duration-75 hover:scale-110 hover:font-bold"><a href="#projects" className="nav-link">Projects</a></li>
                    <li className="nav-item p-2 transition-all duration-75 hover:scale-110 hover:font-bold"><a href="#experience" className="nav-link">Experience</a></li>
                    <li className="nav-item p-2 transition-all duration-75 hover:scale-110 hover:font-bold"><a href="#recommendations" className="nav-link">Recommendations</a></li>
                    <li className="nav-item p-2 transition-all duration-75 hover:scale-110 hover:font-bold"><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
                <div className="theme-button p-2">
                    {theme
                        ? <button onClick={() => setTheme(false)} className={`theme-button-light hover:scale-150 ease-in-out duration-300`}><MdDarkMode color='white' /></button>
                        : <button onClick={() => setTheme(true)} className="theme-button-dark hover:scale-150 ease-in-out duration-300"><MdLightMode color='white' /></button>
                    }
                </div>
                {isNavMenu &&
                    <div className="mob-nav">
                        <ul className={`${isNavMenu ? "w-full" : "w-0"} nav-list absolute top-0 left-0 flex flex-col h-screen justify-center items-center transition-all ease-linear duration-500 bg-gradient-to-b from-black via-slate-800 to-gray-800 text-gray-200`}>
                            <li id="active-nav-item" className="nav-item p-2"><a href="/#" className="nav-link">Home</a></li>
                            <li className="nav-item p-2"><a href="#projects" className="nav-link">Projects</a></li>
                            <li className="nav-item p-2"><a href="#experience" className="nav-link">Experience</a></li>
                            <li className="nav-item p-2"><a href="#recommendations" className="nav-link">Recommendations</a></li>
                            <li className="nav-item p-2"><a href="#contact" className="nav-link">Contact</a></li>
                        </ul>
                        <button onClick={() => setNavMenu(!isNavMenu)} className={`${isNavMenu ? "w-0" : "w-full"} nav-toggle absolute top-7 right-7 transition-all ease-in duration-500`}>
                            <AiOutlineClose color='white' />
                        </button>
                    </div>
                }

                <div className="nav-button block md:hidden">
                    <button onClick={() => setNavMenu(!isNavMenu)} className="nav-toggle ease-in duration-300">
                        <AiOutlineMenu color='white' />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;