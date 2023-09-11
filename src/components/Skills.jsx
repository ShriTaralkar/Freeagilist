import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaFlask, FaDatabase, FaJava } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiTensorflow, SiCplusplus } from "react-icons/si";
import { BsDatabaseFillGear } from "react-icons/bs";



const OneSkill = ({ icon, iconName, styles }) => {
    return (
        <div className={`p-1 hidden md:flex justify-center border-white cursor-pointer text-sm transition-all duration-75 hover:border-2 hover:scale-110 `+ styles}>
            <span className="icon text-lg mb-1">{icon}</span>
            <span className="name w-full text-center capitalize">{iconName}</span>
        </div>
    )
}

function Skills() {

    const skillsCol = [
        {
            icon: <FaReact />,
            name: "Organisation transformation",
            styles: "hover:border-b-blue-800 hover:text-blue-400"
        },
        {
            icon: <FaNodeJs />,
            name: "Strategic planning",
            styles: "hover:border-b-green-800 hover:text-green-400"
        },
        {
            icon: <SiExpress />,
            name: "Leadership and group coaching",
            styles: "hover:border-b-slate-800 hover:text-slate-400"
        },
        {
            icon: <BiLogoMongodb />,
            name: "Lean Portfolio & Project management",
            styles: "hover:border-b-green-800 hover:text-green-400"
        },
        {
            icon: <FaDatabase />,
            name: "Senior Stakeholder management",
            styles: "hover:border-b-blue-800 hover:text-blue-400"
        },
        {
            icon: <FaFlask />,
            name: "Team Designs & Operating model",
            styles: "hover:border-b-yellow-800 hover:text-yellow-400"
        },
        {
            icon: <FaPython />,
            name: "Flow Framework",
            styles: "hover:border-b-blue-800 hover:text-blue-400"
        },
        {
            icon: <SiCplusplus />,
            name: "Lean Design Thinking",
            styles: "hover:border-b-slate-800 hover:text-slate-400"
        },
        {
            icon: <SiCplusplus />,
            name: "Agile Design Thinking",
            styles: "hover:border-b-slate-800 hover:text-slate-400"
        },
        {
            icon: <SiCplusplus />,
            name: "Scrum Design Thinking",
            styles: "hover:border-b-slate-800 hover:text-slate-400"
        },
        {
            icon: <SiCplusplus />,
            name: "Kanban Design Thinking",
            styles: "hover:border-b-slate-800 hover:text-slate-400"
        },
        {
            icon: <FaJava />,
            name: "Continuous Integration & Continuous Delivery",
            styles: "hover:border-b-orange-800 hover:text-orange-400"
        },
        {
            icon: <SiTensorflow />,
            name: "Advanced Business Analysis",
            styles: "hover:border-b-yellow-800 hover:text-yellow-400"
        },
        {
            icon: <BsDatabaseFillGear />,
            name: "Change management",
            styles: "hover:border-b-blue-800 hover:text-blue-400"
        },
    ]

    return (
        <div id="skills" className="my-10">
            {/* <h2 className=" text-4xl font-bold">Skills</h2> */}
            <div className="card-collection my-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-3">
                {skillsCol.map((item, index) => <OneSkill key={index} icon={item.icon} iconName={item.name} styles={item.styles} />)}
            </div>
        </div>
    )
}

export default Skills