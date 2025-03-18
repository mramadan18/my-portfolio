import { RiComputerLine } from "react-icons/ri";
import { Bs0CircleFill } from "react-icons/bs";
import { BiLogoJavascript } from "react-icons/bi";
import { MdScreenshotMonitor } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { AiOutlineCode } from "react-icons/ai";
import { FaArrowsTurnRight } from "react-icons/fa6";
import { IProject, IService, ISkill } from "./type";

export const services: IService[] = [
  {
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b>, <b>React</b> and <b>Next.js</b>",
    Icon: RiComputerLine,
  },
  {
    title: "Responsive Design",
    about:
      "You make websites and applications responsive, so they adapt and look great on various devices and screen sizes, including desktops, tablets, and smartphones.",
    Icon: MdScreenshotMonitor,
  },
  {
    title: "JavaScript Development",
    about:
      "You use JavaScript to add interactivity to web pages. This can involve creating animations, handling user input, and making web applications dynamic.",
    Icon: BiLogoJavascript,
  },
  {
    title: "Performance Optimization",
    about:
      "You optimize web pages for speed and performance by minimizing loading times, optimizing images, and implementing techniques like lazy loading and code splitting.",
    Icon: CgPerformance,
  },
  {
    title: "Clean Code",
    about:
      "Writing clean, maintainable code that adheres to industry standards and best practices.",
    Icon: AiOutlineCode,
  },
  {
    title: "Convert designs to HTML CSS code",
    about:
      "I excel at converting designs into <b>HTML</b>, <b>CSS</b> and <b>JS</b> code, bringing creative visions to life on the web with precision and responsiveness.",
    Icon: FaArrowsTurnRight,
  },
];

export const languages: ISkill[] = [
  {
    name: "HTML, CSS",
    Icon: Bs0CircleFill,
  },
  {
    name: "JS, ES6, jQuery",
    Icon: Bs0CircleFill,
  },
  {
    name: "Bootstrap, Tailwindcss, materialui",
    Icon: Bs0CircleFill,
  },
  {
    name: "Sass, Pugjs",
    Icon: Bs0CircleFill,
  },
  {
    name: "React, NextJs",
    Icon: Bs0CircleFill,
  },
  {
    name: "ElectronJS (Desktop App), TypeScript",
    Icon: Bs0CircleFill,
  },
  {
    name: "Redux, RTKQuery, Toolkit",
    Icon: Bs0CircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Figma",
    Icon: Bs0CircleFill,
  },
  {
    name: "Postman",
    Icon: Bs0CircleFill,
  },
  {
    name: "Git & Github",
    Icon: Bs0CircleFill,
  },
  {
    name: "Json Server",
    Icon: Bs0CircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "I-News",
    description:
      "a real project with NextJS for an Iraqi channel used HTML, CSS, React, Nextjs, Bootstrap",
    image_path: "/images/i-news.png",
    deployed_url: "https://www.i-news.tv",
    github_url: "https://github.com/mramadan18/inews",
    category: ["nextjs"],
    key_techs: ["HTML", "CSS", "Bootstrap", "React", "Nextjs"],
  },
  {
    id: 2,
    name: "Erazone",
    description:
      "An educational platform that serves teachers and students, allowing teachers to create an account and upload their courses, assignments, and exams. Students can create an account and enroll in courses, view assignments, and exams.",
    image_path: "/images/erazone.png",
    deployed_url: "https://www.erazone.org",
    github_url: "",
    category: ["nextjs"],
    key_techs: ["React", "Nextjs", "Redux", "Tailwindcss", "HeroUI"],
  },
  {
    id: 3,
    name: "Plaissir",
    description: "A flight booking site with a support chatbot.",
    image_path: "/images/plaissir.png",
    deployed_url: "https://www.plaissir.com/",
    github_url: "",
    category: ["nextjs"],
    key_techs: ["React", "Nextjs", "Tailwindcss", "HeroUI"],
  },
  {
    id: 4,
    name: "Well Medic",
    description:
      "a real project with NextJS to sell medicines to a pharmacy in Hurghada",
    image_path: "/images/well.png",
    deployed_url: "https://well-medic.com",
    github_url: "https://github.com/mramadan18/well-pharmacy",
    category: ["nextjs"],
    key_techs: ["HTML", "CSS", "Tailwindcss", "React", "Nextjs"],
  },
  {
    id: 5,
    name: "Quiz App",
    description:
      "a training project with HTML, CSS, JS I called the API to get questions",
    image_path: "/images/quiz-app.png",
    deployed_url: "https://mramadan18.github.io/Quiz-app",
    github_url: "https://github.com/mramadan18/Quiz-app",
    category: ["vanilla js"],
    key_techs: ["HTML", "CSS", "JavaScript", "Api"],
  },
  {
    id: 6,
    name: "WeShare",
    description:
      "a training project with HTML, CSS, JS is a social networking site",
    image_path: "/images/weShare.png",
    deployed_url: "https://mramadan18.github.io/weShare/",
    github_url: "https://github.com/mramadan18/weShare",
    category: ["vanilla js"],
    key_techs: ["HTML", "CSS", "JavaScript"],
  },
];
