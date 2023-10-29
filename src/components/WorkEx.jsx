import React from 'react';
import Vanguard from "../assets/icons/vanguard.jpeg";
import ZenEx from "../assets/icons/zenex.jpeg";
import Telstra from "../assets/icons/telstra.jpeg";
import ANZ from "../assets/icons/anz.jpeg";
import AGL from "../assets/icons/agl.jpeg";
import Medibank from "../assets/icons/medibank.jpeg";
import MYOB from "../assets/icons/myob.jpeg";
import HP from "../assets/icons/hp.jpeg";
import Tieto from "../assets/icons/tietoevry.jpeg";
import CMS from "../assets/icons/cms.jpeg";

import { FaIndustry, FaEnvelopeOpen } from "react-icons/fa";

const WorkEx = () => {

    const ActiveBadge = () => {
        return (
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-100 ml-3">Active</span>
        )
    }

    return (
        <div id="experience" className="md:w-3/4">
            <h2 className="text-3xl font-bold">Experience</h2>
            <ol className="relative border-l mx-5 my-2 py-3 border-gray-200 dark:border-gray-700">
                {workTimelineEl.map((item, index) =>
                    <li key={index} className="mb-10 ml-9 md:w-5/6">
                        {item.active && <span className={`animate-ping absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white dark:ring-gray-900 ${item.active ? 'dark:bg-green-500' : 'dark:bg-blue-900'}`} />}

                        <span className={`absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white dark:ring-gray-900 ${item.active ? 'dark:bg-green-500' : 'dark:bg-blue-900'}`}>
                            {item.companyLogo
                                ? <img className="w-9 h-9 rounded-full text-blue-800 dark:text-blue-300" src={item.companyLogo} alt="" />
                                : <FaIndustry />
                            }
                        </span>
                        <h3 className="flex items-center w-fit mb-1 text-xl font-semibold text-gray-900 dark:text-white transition-all ease-linear duration-300">{item.company} {item.active && <ActiveBadge />}</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 transition-all duration-300 hover:text-gray-300">{item.periodFrom} —  {item.periodTo}</time>
                        <p className="mb-1 text-lg font-normal text-gray-500 text-justify transition-all duration-300 hover:text-gray-100 dark:text-gray-400">{item.role}</p>
                        <p className="mb-4 text-base font-normal text-gray-500 text-justify transition-all duration-300 hover:text-gray-100 dark:text-gray-400">{item.desc}</p>
                        {item.enableButton && 
                            <a href={item.buttonLink} target="_blank" rel="noreferrer" alt="" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                <span className="mr-2 5"><FaEnvelopeOpen /></span>
                                {item.buttonText}
                            </a>
                        }
                    </li>
                )}
            </ol>

        </div>
    )
}

const workTimelineEl = [
    {
        periodFrom: "September 2020",
        periodTo: "October 2023",
        company: "Vanguard",
        companyLogo: Vanguard,
        active: true,
        location: "Melbourne, Victoria",
        role: " WoW Practice Lead",
        desc: "Overseeing the Ways of Working, managing Communities of Practices with team leadership and Scrum coaches, ensuring the technology is providing exceptional digital customer experience with timely feature delivery. Also responsible for identifying trends and developing strategies to improve overall organisation’s delivery performance.",
        enableButton: true,
        buttonText: "View Outcomes achieved",
        buttonIcon: "",
        buttonLink: "/#"
    },
    {
        periodFrom: "April 2020",
        periodTo: "September 2020",
        company: "Zen Ex Machina, ATO",
        companyLogo: ZenEx,
        active: false,
        location: "Melbourne, Victoria",
        role: "Enterprise Agile Coach",
        desc: "I led embedding agile practices in CCS division, enhancing the contact centre customer experience, optimizing resources, and elevating customer interactions.",
        enableButton: true,
        buttonText: "View Outcomes achieved",
        buttonIcon: "",
        buttonLink: "/#"
    },
    {
        periodFrom: "August 2018",
        periodTo: "January 2020",
        company: "Telstra",
        companyLogo: Telstra,
        active: false,
        location: "Melbourne, Victoria",
        role: "Group Coach",
        desc: "Working with a customer-centric Service Mission at the time. I oversaw a multi-located feature teams model employing agile practices. By introducing relevant metrics, teams delivered business value and superior customer outcomes. I played a key role in designing team structures that led to a desired 'cultural shift' and mindset. This involved targeted training for leaders and team members, cultivating new habits for enhanced performance and outcomes.",
        enableButton: true,
        buttonText: "View Outcomes achieved",
        buttonIcon: "",
        buttonLink: "https://drive.google.com/file/d/1SUBo4RlB2Cbn4psrl9WNV8JBLwEWo1VV/view?usp=sharing"
    },
    {
        periodFrom: "May 2017",
        periodTo: "August 2018",
        company: "ANZ",
        companyLogo: ANZ,
        active: false,
        location: "Melbourne, Victoria",
        role: "Tribe Coach",
        desc: "I introduced and implemented the program cadence in the Payments division, encompassing inception workshops, training, team design, and major planning, leading to multiple high-performing teams. I guided pragmatic planning events and squad formations, aligning work with strategic Domain portfolio themes. I contributed to practice communities and trained trainers for transitions in India.",
        enableButton: false,
        buttonText: "View Outcomes achieved",
        buttonIcon: "",
        buttonLink: ""
    },
    {
        periodFrom: "July 2015",
        periodTo: "May 2017",
        company: "AGL",
        companyLogo: AGL,
        active: false,
        location: "Melbourne, Victoria",
        role: "Team Delivery Coach",
        desc: "I led teams advancing digital experiences, including workshops to fast-track new group integration during Forming and Storming.",
        enableButton: false,
        buttonText: "View Outcomes achieved",
        buttonIcon: "",
        buttonLink: ""
    },
    {
        periodFrom: "February 2015",
        periodTo: "May 2015",
        company: "Medibank",
        companyLogo: Medibank,
        active: false,
        location: "Melbourne, Victoria",
        role: "Iteration Manager",
        desc: "Working closely with the PMO to execute the Program of work within delivery teams. Collaboration: Encourage and develop cross-functional digital delivery teams. Coaching: Sprint management, Scrum ceremonies, Blocker management.",
        enableButton: false,
        buttonText: "View Outcomes achieved",
        buttonIcon: "",
        buttonLink: ""
    },
    {
        periodFrom: "August 2010",
        periodTo: "February 2015",
        company: "MYOB",
        companyLogo: MYOB,
        active: false,
        location: "Melbourne, Victoria",
        role: "Delivery Lead",
        desc: "I led a motivated multi-region team for an innovative platform development across Australia and Malaysia.",
        enableButton: false,
        buttonText: "View Outcomes achieved",
        buttonIcon: "",
        buttonLink: ""
    },
    {
        periodFrom: "February 2010",
        periodTo: "August 2010",
        company: "HP",
        companyLogo: HP,
        active: false,
        location: "Melbourne, Victoria",
        role: "Delivery Manager Release",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quo hic doloremque sit temporibus autem, ipsam nesciunt explicabo quos corporis.",
        enableButton: false,
        buttonText: "View Outcomes achieved",
        buttonIcon: "",
        buttonLink: ""
    },
    {
        periodFrom: "November 2006",
        periodTo: "December 2009",
        company: "Tieto, Healthcare & Welfare",
        companyLogo: Tieto,
        active: false,
        location: "Pune, India & Sweden",
        role: "DevOps Engineer",
        desc: "I was responsible for managing server/IT Infrastructure & virtual test environment for the application software developed across Units, onsite/offsite.",
        enableButton: false,
        buttonText: "View Outcomes achieved",
        buttonIcon: "",
        buttonLink: ""
    },
    {
        periodFrom: "December 2001",
        periodTo: "October 2009",
        company: "CMS Computers Ltd",
        companyLogo: CMS,
        active: false,
        location: "Mumbai, India",
        role: "Service Delivery Manager",
        desc: "As a Service Delivery manager, effectively managed more than 30 corporate customers, as well as was responsible for people management of about 30 direct reports in the IT service management.",
        enableButton: false,
        buttonText: "View Outcomes achieved",
        buttonIcon: "",
        buttonLink: ""
    },
    {
        periodFrom: "December 1998",
        periodTo: "December 2001",
        company: "Nexus Computers Pvt Ltd",
        companyLogo: "",
        active: false,
        location: "Mumbai, India",
        role: "Senior Network Engineer",
        desc: "I was responsible to manage the Network Infrastructure for the ION Exchange India Pvt Ltd co. along with the NT and Microsoft Servers Administration",
        enableButton: false,
        buttonText: "View Outcomes achieved",
        buttonIcon: "",
        buttonLink: ""
    },
]


export default WorkEx;