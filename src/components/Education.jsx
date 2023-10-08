import React from 'react';

import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";


const Education = () => {

    const timelineEl = [
        {
            periodFrom: "January 2003",
            periodTo: "June 2006",
            institute: "Tilak Maharashtra Vidyapeeth",
            active: true,
            location: "Pune, India",
            degree: "Bachelors of Computer Application (BCA. Information Technology and Software Engineering)",
            //desc: "For more such updates about me, subscribe to my newsletter at the bottom of this page!",
            //enableButton: true,
            //buttonText: "View Offer Letter",
            //buttonLink: "https://drive.google.com/file/d/14wlkfB9ckeRVKYvEkF9rgndEOy1wmJBW/view?usp=drive_link"
        },
        {
            periodFrom: "Feb 2011",
            periodTo: "Jan 2013",
            institute: "Swinburne University of Technology",
            active: false,
            location: "Melbourne, Australia",
            degree: "Master of Business Administration (MBA. International Business Strategy, Innovation, and IT)",
            //desc: "The course here has empowered me by turning me into an abundant resource of raw talent. Right from the basics like Math & Probability to Probabilistic Theories of AI, from Computer Architecture & Organisation to Cloud Computing, as well as from Principles of Communication to Ethical Hacking & Forensics. It unfolded so well step-by-step that I would often lose myself into the nitty-gritties of any one subject really easily. VIT really helped me find myself as an IT engineer and an orator.",
            //enableButton: true,
            //buttonText: "Photo Gallery & Mememtos",
        },
  
    ];

    const ActiveBadge = () => {
        return (
            <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-green-900 text-green-100 ml-3">Active</span>
        )
    }

    return (
        <div id="education" className="md:w-3/4">
            <h2 className="text-3xl font-bold">Academic Journey</h2>
            <ol className="relative mx-5 my-2 py-3 border-l border-gray-700">
                {timelineEl.map((item, index) =>
                    <li key={index} className="mb-10 ml-4 md:w-5/6">
                        {item.active && <div className="animate-ping bg-green-700 absolute w-3 h-3 rounded-full mt-2.5 -left-1.5 border border-green-800"></div>}
                        <div className="absolute w-3 h-3 rounded-full mt-2.5 -left-1.5 borderborder-gray-900 bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-nonetext-gray-500">{item.periodFrom} — {item.periodTo}</time>
                        <span className="flex items-center my-2 transition duration-300 hover:text-white">
                            <span className="icon-wrapper text-gray-500"><FaUniversity /></span>
                            <h3 className="ml-2 text-xl flex items-center font-semibold text-white">{item.institute} {item.active && <ActiveBadge />}</h3>
                        </span>
                        <span className="flex items-center my-1 transition duration-300 hover:text-white">
                            <span className="icon-wrapper text-gray-500"><HiLocationMarker /></span>
                            <p className="ml-2 text-base font-normal text-gray-400 transition duration-300 hover:text-white">{item.location}</p>
                        </span>
                        <span className="flex items-center my-1 transition duration-300 hover:text-white">
                            <span className="icon-wrapper text-gray-500"><FaGraduationCap /></span>
                            <p className="ml-2 text-base font-normal text-gray-400 transition duration-300 hover:text-white">{item.degree}</p>
                        </span>
                        <span className="flex items-start mt-1 mb-4 transition duration-300 hover:text-white">
                            <span className="icon-wrapper mt-1.5 text-gray-500"><CgNotes /></span>
                            <p className="ml-2 text-base font-normal text-justify text-gray-400 transition duration-300 hover:text-white">{item.desc}</p>
                        </span>

                        {item.enableButton &&
                            <a href={item.buttonLink} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg transition duration-300  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700">{item.buttonText} <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg></a>}
                    </li>
                )}
            </ol>
        </div>
    )
}

export default Education