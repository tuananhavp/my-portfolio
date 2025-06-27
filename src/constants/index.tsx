import { Project } from "@/components/ProjectCard";
import { BiMouseAlt, BiPaperclip, BiReceipt } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { PiWebcamLight } from "react-icons/pi";
import { RiCss3Fill, RiHtml5Fill, RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiTypescript } from "react-icons/si";

export const Header_Navigation = [
  { name: "Home", href: "home", icon: <RiHtml5Fill /> },
  { name: "About", href: "about", icon: <RiReactjsFill /> },
  { name: "Skills", href: "skill", icon: <RiCss3Fill /> },
  { name: "Projects", href: "project", icon: <RiNextjsFill /> },
];

export const Icon_Navigation = [
  { name: "Contact", href: "mailto:tuananhavp@gmail.com", icon: <MdOutlineEmail /> },
  { name: "GitHub", href: "https://github.com/tuananhavp", icon: <FaGithub /> },
  { name: "Facebook", href: "https://facebook.com/anh2xx", icon: <FaFacebook /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/tuấn-anh-60aaa7350", icon: <FaLinkedin /> },
];
export const About_Info = [
  {
    title: "Responsibilities",
    description: "Developing and maintaining web applications using ReactJS and Next.js.",
    icon: <PiWebcamLight />,
  },
  {
    title: "Skills",
    description: "JavaScript, TypeScript, ReactJS, Next.js, HTML, CSS, Git, RESTful APIs.",
    icon: <BiMouseAlt />,
  },
  {
    title: "Education",
    description: "Bachelor's degree in Computer Science from XYZ University.",
    icon: <BiReceipt />,
  },
  {
    title: "Experience",
    description: "Experience in front-end development with a focus on ReactJS",
    icon: <BiPaperclip />,
  },
];

export const Skills = [
  { name: "HTML5", icon: <RiHtml5Fill /> },
  { name: "CSS3", icon: <RiCss3Fill /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "ReactJS", icon: <RiReactjsFill /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
];

export const Projects_List: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/jinstore.jpg",
    link: "https://ecommerce-project-nine-ashen.vercel.app/",
    github: "https://github.com/tuananhavp/ecommerce-project",
    technologies: ["React", "Next.js", "Firebase", "Tailwind CSS", "Zustand", "React Hook Form", "Zod"],
  },
];
