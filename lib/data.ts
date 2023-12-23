import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import pomoTask from "@/public/pomoTask.jpg";
import speechRecognition from "@/public/speechRecognition.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer Intern at SalesUp",
    location: "Kolkata, India",
    description:
      "As a full-stack developer at SalesUP during my summer internship, I played a key role in API development, UI design, and website optimization using technologies like Linux, Docker, Node.js, Next.js, Tailwind CSS, and WordPress. Engaging with a dynamic team, I gained valuable experience in backend development and API architecture, fostering creativity and problem-solving. The diverse projects enhanced my web development perspective, contributing significantly to my professional growth.",
    icon: React.createElement(LuGraduationCap),
    date: "1st June 2023 - 31st June 2023",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "PomoTask",
    description:
      "I have build PomoDoro Clock with Task management application with Secure Authentication using Next-Auth.Here user can track their task and time spent on each task. User can also add and delete their task.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: pomoTask,
  },
  {
    title: "Speech Recognitioner",
    description:
      "A web appto recognize speech and convert it to text in real time. That text can be copied to clipboard and can be used in any other application.",
    tags: ["React", "NodeJs", "Tailwind", "Netlify"],
    imageUrl: speechRecognition,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "C/C++",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "React",
  "Git",
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Java",
  "Framer Motion",
  "Shadcn",
] as const;
