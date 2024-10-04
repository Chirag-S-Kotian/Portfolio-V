import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Chirag S Kotian",
  initials: "CK",
  url: "https://chirag-blockchian.vercel.app",
  location: "Udupi ,KARNATAKA - IN",
  locationLink: "https://www.google.com/maps/place/Udupi",
  description:
    "Full Stack Blockchain Developer and Smart Contract Dev. I love building things and helping people. Very active on Twitter.",
  summary:
    "I am Full Stack Blockchain Dev, I am a Self thought Developer,who is learning Full stack web devlopement from 1-2 years from my college days, now i am dedicating my time and concentration towards learning Blockchain Development.I am a recent Graduate in Bachelor of Computer Application [B.C.A], now planning to Complete My Post-Graduation Master of Computer Application [M.C.A](/#education), my development journey was very good because of great and updated Content from Youtube,Thank You.",
  avatarUrl: "/me1.jpeg",
  skills: [
    "HTML",
    "CSS",
    "TailwindCSS",
    "Javascript",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Express.js",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Django",
    "Flask",
    "Prisma",
    "GitHub",
    "Php",
    "Solidity",
    "Rust",
    "Hardhat",
    "Web3.js",
    "ethers.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: Icons.globe, label: "Projects" },
  ],
  contact: {
    email: "ckotian117@gmail.com",
    tel: "+91-7676573108",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Chirag-S-Kotian",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/Chirag-S-Kotian",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/Chirag_S_kotian",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  education: [
    {
      school: "PoornaPrajna Institute of Management,Udupi",
      href: "https://github.com/Chirag-S-Kotian",
      degree: "Master's Degree of Computer Application (M.C.A)",
      logoUrl: "/clg1.jpeg",
      start: "2024",
      end: "2026",
    },
    {
      school: "ShreeDevi College of Information Science,Mangalore",
      href: "https://www.linkedin.com/in/Chirag-S-Kotian",
      degree: "Bachelor's Degree of Computer Application (B.C.A)",
      logoUrl: "/clg3.jpeg",
      start: "2021",
      end: "2024",
    },
    {
      school: "Hindu P.U College,Shirva",
      href: "https://twitter.com/Chirag_S_kotian",
      degree: "12th P.U.C in Science",
      logoUrl: "/clg4.jpeg",
      start: "2019",
      end: "2021",
    },
    {
      school: "Hindu Junior college,Shirva",
      href: "https://www.linkedin.com/in/Chirag-S-Kotian",
      degree: "10th S.S.L.C",
      logoUrl: "/clg2.jpeg",
      start: "2016",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "The Baratie",
      href: "https://baratie.netlify.app",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "The Baratie is a recipe discovery platform using an external food API to display recipes as interactive cards.",
      technologies: [
        "HTML",
        "Javascript",
        "JQuery",
        "Food API",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://baratie.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/P1.mp4",
    },
    {
      title: "Flex Chat",
      href: "https://github.com/Chirag-S-Kotian/flex-chat.git",
      dates: "Feb 2024 - March 2024",
      active: true,
      description:
        "A real-time chat application that enables instant messaging between users, featuring seamless communication and user-friendly interface.",
      technologies: [
        "React",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Vite",
        "Socket.IO",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Chirag-S-Kotian/flex-chat.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/P4.mp4",
    },
    {
      title: "Elbaf",
      href: "https://github.com/Chirag-S-Kotian/food-store-app.git",
      dates: "April 2024 - June 2024",
      active: true,
      description:
        "Elbaf Food Restaurant’s frontend website features a visually appealing design with an intuitive user interface, showcasing menus, chef bios, and customer reviews.",
      technologies: [
        "React",
        "Javascript",
        "Vite",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Chirag-S-Kotian/food-store-app.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/P3.mp4",
    },
    {
      title: "Personal Blog",
      href: "https://github.com/Chirag-S-Kotian/ck-tweet.git",
      dates: "April 2024 - July 2024",
      active: true,
      description:
        "A personal blogging platform built with Django, offering customizable templates, user authentication, and seamless content management.",
      technologies: [
        "Python",
        "HTML",
        "CSS",
        "Django",
        "SQL",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Chirag-S-Kotian/ck-tweet.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/P2.mp4",
    },
  ],
} as const;
