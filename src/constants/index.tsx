import { BiMouseAlt, BiPaperclip, BiReceipt } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { PiWebcamLight } from "react-icons/pi";
import { RiCss3Fill, RiHtml5Fill, RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiTypescript } from "react-icons/si";

export const Header_Navigation = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export const Footer_Navigation = [
  { name: "Contact", href: "/contact", icon: <MdOutlineEmail /> },
  { name: "GitHub", href: "github.com/tuananhavp", icon: <FaGithub /> },
  { name: "Facebook", href: "facebook.com/anh2xx", icon: <FaFacebook /> },
  { name: "LinkedIn", href: "linkedin.com/in/tuananhavp", icon: <FaLinkedin /> },
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
