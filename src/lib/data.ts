import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const experiencesData = [
    {
        title: "Frontend Developer",
        description: "Collaborated with a cross-functional team involving 6 individuals and utilized Agile methodologies to ensure successful project completion",
        icon: React.createElement(CgWorkAlt),
        date: "April - May 2023",

    },
    {
        title: "Student at Hackbright Coding Bootcamp",
        description: "This new chapter has been an eye-opener, teaching me more about myself than I ever knew. Plus, I've got to say, I'm loving the coding community. It's not just about solving real-world problems, it's a place where people without many privileges get a chance to shine, too.",
        icon: React.createElement(LuGraduationCap),
        date: "2023",

    },

    {
        title: "Elementary School Homeroom Teacher",
        description: "During my three-year tenure as an elementary school teacher,I became a well-rounded individual.I was proactive in adapting my lesson plans according to teaching outcomes and was committed to differentiation to meet diverse learning needs. I also successfully built a strong rapport with my students and their parents, which further enriched my teaching experience.",
        icon: React.createElement(CgWorkAlt),
        date: "2019-2023",

    },
    {
        title: "Masters of Elementary Education and Teaching",
        description: "Obtained my California multiple subject teaching credential",
        icon: React.createElement(LuGraduationCap),
        date: "2017-2019",

    },
    {
        title: "Singapore Airlines Flight Attendant",
        description: "My first job was a three-year stint as a flight attendant with Singapore Airlines. This experience allowed me to travel to over 20 countries and instilled in me a keen attention to detail, as well as a customer-first mindset.",
        icon: React.createElement(CgWorkAlt),
        date: "2012-2015",

    },
] as const

