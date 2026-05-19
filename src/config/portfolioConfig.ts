import type { Project, StackGroup, ContactInfo, Stat } from "../types";

export const personalInfo = {
  name: "Evan Boodoosingh",
  initials: "EB",
  role: "Software Engineer",
  tagline:
    "I build fast, scalable, full-stack web applications — and I bring a decade of real-world business leadership to every problem I solve.",
  availableForWork: true,
  resumeUrl: "/resume.pdf",
};

export const bio = {
  paragraphs: [
    "I am a Full-Stack Software Engineer who builds with a focus on operational scale and system reliability. My engineering philosophy is shaped by years spent architecting regional distribution logistics and scaling retail operations from 3 to 20+ locations. That background taught me how to think in complex systems and deliver under high pressure—traits I now bring to the codebase to ensure every application I develop is performant, maintainable, and built to solve actual user needs. Currently, I specialize in React, TypeScript, and Node.js, delivering technical solutions that bridge the gap between high-level design and scalable backend architecture. Whether I am engineering custom caching layers to handle third-party API constraints for my platform, Queued, or developing high-performance web applications for freelance clients, I prioritize technical integrity and user experience. I don't just write code; I build infrastructure that works, and I am looking for a team where I can apply my unique blend of technical skill and operational leadership to drive immediate impact.",
  ],
};

export const stats: Stat[] = [
  { value: "740+", label: "Training Hours" },
  { value: "7", label: "Projects Shipped" },
  { value: "20+", label: "Businesses Scaled" },
];

export const projects: Project[] = [
  {
    id: "queued",
    name: "Queued — Social Anime Platform",
    description:
      "Full-stack social platform with friend-suggestion algorithm and in-memory API caching.",
   tags: ["React 19", "TypeScript", "Node.js", "MongoDB", "Vercel"],
    tagColor: "pink",
    videoUrl: "https://www.loom.com/embed/1623021f60f04d9a8c6852cbaadd6744",
    liveUrl: "https://qd-two.vercel.app",
    githubUrl: "https://github.com/Evan-Boodoosingh/qd",
    category: "fullstack",
  },
    {
  id: "ash-tatts",
  name: "Ash Tatts Miami",
  description:
    "Full-stack tattoo artist portfolio with headless CMS, live Instagram feed, serverless email API, and custom Sanity Studio for client content management.",
  tags: ["React", "TypeScript", "Vite", "Sanity", "Tailwind", "Vercel"],
  tagColor: "orange",
 videoUrl: "https://www.loom.com/embed/923c1ae47c8e4779ba20a7c22ed7e749",
  liveUrl: "https://ashtattsmiami.vercel.app/",
  githubUrl: "https://github.com/Evan-Boodoosingh/ash-tatts",
  category: "fullstack",
},
  {
    id: "wtwr",
    name: "What To Wear",
    description:
      "Weather-based clothing recommendation app with JWT auth and GCP deployment.",
   tags: ["React", "Node.js", "Express", "MongoDB", "GCP", "Nginx"],
    tagColor: "blue",
    videoUrl: "https://www.loom.com/embed/99eab244e924443a9f59934b2480be95",
    githubUrl: "https://github.com/Evan-Boodoosingh/se_project_react",
    category: "fullstack",
  },
  {
    id: "bhpm",
    name: "Beacon Hill Property Mgmt",
    description:
      "High-performance SPA with scroll-triggered animations and lead generation form.",
    tags: ["React", "TypeScript", "Vite"],
    tagColor: "purple",
    videoUrl: "https://www.loom.com/embed/e7f2db20a099483da4792bf94739472f",
    liveUrl: "https://evan-boodoosingh.github.io/bhpm/",
    githubUrl: "https://github.com/Evan-Boodoosingh/bhpm",
    category: "frontend",
  },

  {
    id: "lost-pets",
    name: "FindMyDog",
    description:
      "Animated lost pet finder with vibrant UI and interactive search features.",
    tags: ["JavaScript", "CSS3", "HTML5"],
    tagColor: "green",
    videoUrl: "https://www.loom.com/embed/2089399a18e440c88aa3bb6dffd7c53f",
    liveUrl: "https://evan-boodoosingh.github.io/lost-dog/",
    githubUrl: "https://github.com/Evan-Boodoosingh/lost-dog",
    category: "frontend",
  },
  {
    id: "herik",
    name: "One Piece Birthday Site",
    description:
      "One Piece tribute birthday site with custom animations and themed UI.",
    tags: ["JavaScript", "CSS3", "HTML5"],
    tagColor: "orange",
    videoUrl: "https://www.loom.com/embed/ee9bb11e2d3b45dd84eec3d18a82bd6a",
        liveUrl: "https://evan-boodoosingh.github.io/herik-birthday/",
    githubUrl: "https://github.com/Evan-Boodoosingh/herik-birthday",
    category: "frontend",
  },
  //   {
  //     id: "triple-peaks",
  //     name: "Triple Peaks Coffee Shop",
  //     description:
  //       "Coffee shop landing page with interactive forms and BEM methodology.",
  //     tags: ["JavaScript", "HTML5", "CSS3"],
  //     tagColor: "blue",
  //     githubUrl: "#",
  //     category: "frontend",
  //   },
];

export const stack: StackGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript ES6+" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "SQL" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React 18" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Context API" },
      { name: "Responsive Design" },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Prisma ORM" },
      { name: "RESTful APIs" },
      { name: "GraphQL" },
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      { name: "AWS CDK" },
      { name: "GCP" },
      { name: "Nginx" },
      { name: "Git & GitHub" },
      { name: "CI/CD" },
      { name: "Figma" },
    ],
  },
];

export const contactInfo: ContactInfo = {
  email: "boodoosinghevan@gmail.com",
  phone: "(863) 251-3329",
  location: "Polk County, FL",
  linkedin: "linkedin.com/in/evan-boodoosingh",
  github: "github.com/Evan-Boodoosingh",
};

export const socials = {
  github: "https://github.com/Evan-Boodoosingh",
  linkedin: "https://linkedin.com/in/evan-boodoosingh",
  email: "mailto:boodoosinghevan@gmail.com",
};
