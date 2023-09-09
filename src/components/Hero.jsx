import ReactTyped from "react-typed";
import Skills from "./Skills";
import HeroImage from "../assets/images/Shri.jpg";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {

    const roles = [
        "a Full-stack Web Developer", 
        "a data analyst", 
        "a freelance coach", 
        "a negotiator", 
        "a leader"
    ];

    return (
        <div className="hero-container my-10 md:flex flex-grow-1 justify-center items-center w-full md:justify-between">
            <div className="left px-10 py-5 md:w-7/12 ring-yellow-300 md:ring-dashed md:ring-4 rounded-lg">
                <h1 className="my-3 text-4xl font-bold space-x-2">
                    I am <span className="font-display text-blue-300 rounded-lg cursor-pointer transition-all duration-300 ring-blue-200 hover:px-2 hover:text-white hover:ring-2">
                        Shri Taralkar
                    </span>,<span className="italic font-thin">Life Coach</span>
                </h1>
                <h3 className="my-3 flex text-2xl capitalize font-bold italic">
                    <span className="text-yellow-500"><ReactTyped strings={roles} typeSpeed={50} loop /></span>
                </h3>
                <p className="my-3 w-lg text-justify min-w-fit text-slate-400 hover:text-slate-100 cursor-pointer transition-colors duration-300">
                    {/* modify content here */}

                    Shri is a result-driven Agile Coach and IT professional with 25+ years of experience optimizing organizational practices, fostering innovation, and driving sustainable change. Proven mentorship of leaders, agile teams, and enduring success across departments.

                    {/* modify content here */}
                </p>
                <div className="my-3 location flex items-center text-white text-opacity-50 cursor-pointer">
                    <span className="location-icon mr-2">
                        <FaLocationArrow />
                    </span>
                    <p className="location-text transition-all duration-300 hover:text-white">
                        {/* subject to change */}
                        
                        Victoria, Australia

                        {/* subject to change */}
                    </p>
                </div>
                <a href="#contact" className="block my-3 w-fit px-3 py-2 ring-2 hover:ring-slate-200 rounded-xl hover:bg-gradient-to-l hover:from-cyan-950 hover:to-slate-900 hover:ring-2 transition-all duration-300">Contact Me</a>
                <Skills />
            </div>
            <div className="right p-10 md:w-5/12">
                <img className="img w-full rounded-xl" src={HeroImage} alt="" />
            </div>
        </div>

    )
}

export default Hero;