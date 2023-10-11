import React from 'react';
import { FaGithub, FaFirefoxBrowser, FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const ProjectCard = ({ title, subtitle, from, to, techstack, skills, desc, demo, github }) => {

    return (
        <div className="m-2 p-8 bg-slate-600 bg-opactiy-10 ring-2 ring-gray-400 flex flex-col justify-around items-center text-center text-white rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-yellow-300 hover:bg-opacity-30">
            <div className="title mb-1 text-2xl font-bold">{title}</div>
            <div className="subtitle my-1 text-sm text-slate-300 italic">{from} — {to}</div>
            <div className="tech-stack my-1 grid grid-cols-4 gap-2 place-items-center">
                <BiLogoMongodb />
                <SiExpress />
                <FaReact />
                <FaNodeJs />
            </div>
            <div className="subtitle mt-1 text-base text-slate-300 italic">About this project</div>
            <div className="desc my-1 text-base">{desc}</div>
            <div className="skills flex items-center justify-center">
                <span className="text-base"></span>
            </div>
            <div className="btn-container w-full">
            <a href={demo && demo} target="_blank" rel="noreferrer" className="mx-2 my-2 p-2 w-full flex items-center justify-center text-slate-300 bg-blue-800 ring-2 ring-blue-600 rounded-md cursor-pointer text-lg transition-all duration-500 hover:bg-blue-900 hover:ring-slate-200 hover:text-white hover:scale-95"><span className="mx-1"><FaFirefoxBrowser /></span> View Demo</a>
            <a href={github && github} target="_blank" rel="noreferrer" className="mx-2 my-2 p-2 w-full flex items-center justify-center text-slate-300 bg-gray-800 ring-2 ring-gray-600 rounded-md cursor-pointer text-lg transition-all duration-500 hover:bg-black hover:ring-blue-200 hover:text-white hover:scale-95"><span className="mx-1"><FaGithub /></span> GitHub Repo</a>

            </div>
        </div>
    )
}


 function Projects() {

    const projects = [
        {
            title: "New Ways of Working (NW0W) implementation",
            subtitle: "NWoW",
            periodFrom: "September 2020",
            periodTo: "March 2023",
            //techstack: "",
            skills: "Business Agility, Leadership, Change management, Agile Project management, Facilitations, Design Thinking, Lean and Scrum, agile and scrum Coaching, Influence",
            desc: "The goal of this Initiative was to adopt Global New Ways of working implementations and change. I had a leadership role in the New Ways of Working at Vanguard. I lead the enterprise Vision, and strategy and cultivate a local roadmap for the regional context. Accelerated the organization's transformation timeline by 2 months, implementing the Ways of Working Strategy to elevate business maturity over an extended 2-year period.", 
            //demo: "",
            //github: "https://github.com/kadulkaryash71/university-prediction"
        },
        {
            title: "Lean Portfolio Governance",
            subtitle: "LPG",
            periodFrom: "September 2021",
            periodTo: "March 2023",
            techstack: "JIRA, Kanban, Weighted Prioritisation, Lean Canvas, Kano model",
            skills: "Business Agility, Leadership, Change management, Agile Project management, Facilitations, Lean Portfolio managment, Lean and Scrum, Leadership Coaching, Agile",
            desc: "The goal was to capture and visualise Time-to-Market for projects. Track the time taken to deliver new products or features from ideation to launch. Shorter timeframes indicate increased agility and efficient processes.Return on Investment (ROI): Evaluate the financial impact of your agile initiatives by comparing the costs incurred with the benefits gained, such as increased revenue or cost savings.",
            //demo: "",
            //github: "https://github.com/kadulkaryash71/university-prediction"
        },
        {
            title: "Measure what matters - Metrics",
            subtitle: "MWM",
            techstack: "",
            periodFrom: "March 2023",
            periodTo: "June 2023",
            desc: "Measuring the value delivered to customer and stream performance. NPS, ENPS, feature adoption rate, Cycle times, Throughput, Lead time, Defect rate, DORA metrics.",
            //demo: "https://g999lw-3000.csb.app/",
            //github: "https://github.com/kadulkaryash71/UniMate"
        },
    ]

    return (
        <div id="projects" className="my-4">
            <h2 className="my-6 text-3xl font-bold">Projects</h2>
            <div className="card-collection grid grid-cols-1 md:px-8 lg:grid-cols-3 gap-5">
                {projects.map((project, index) => 
                    <ProjectCard key={index} title={project.title} subtitle={project.subtitle} from={project.periodFrom} to={project.periodTo} desc={project.desc} demo={project.demo} github={project.github} />
                )}
            </div>
        </div>
    )
}

export default Projects