// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Prijesh Pradhan",
  title: "Computer Engineering Undergraduate",
  school: "Kantipur Engineering College",
  location: "Kathmandu, Nepal",
  intro:
    "I study Computer Engineering with a strong interest in emerging technologies, Artificial Intelligence and Machine Learning, and Internet Freedom.",
  about: [
    "I'm a Computer Engineering undergraduate at Kantipur Engineering College, expected to graduate in 2028. I'm interested in emerging technologies, AI/ML, and Internet Freedom, and I enjoy building projects and joining tech communities and events.",
  ],
};

export const contact = {
  email: "Prijeshpradhan@gmail.com",
  github: "https://github.com/prijesshh",
  linkedin: "https://www.linkedin.com/in/prijeshpradhan/",
};

export const education = [
  {
    degree: "Bachelor of Computer Engineering",
    school: "Kantipur Engineering College",
    note: "Expected to graduate in 2028",
  },
  {
    degree: "Intermediate (+2), Science Stream",
    school: "Hetauda School of Management & Social Sciences",
    note: "2024. GPA 3.72/4.00",
  },
];

export const skills = [
  { group: "Programming", items: ["Python", "C", "C++"] },
  { group: "Tools", items: ["Git & GitHub"] },
  { group: "Computer science", items: ["Data Structures & Algorithms"] },
  { group: "Hardware", items: ["Arduino", "Raspberry Pi"] },
  { group: "Other", items: ["Leadership & Coordination"] },
];

// `href` is only set where a matching repository exists.
export const projects = [
  {
    name: "3D Atomic Simulator",
    tech: "C++, graphics.h",
    year: "2025",
    kind: "Team project",
    description:
      "3D engine that visualizes atomic structures with real-time physics simulation.",
    href: "https://github.com/prijesshh/3D-Atomic-Simulator",
  },
  {
    name: "File Zipper",
    tech: "Python",
    year: "2026",
    kind: "Team project",
    description: "File compression tool using Huffman coding, with a Flask web interface.",
    // Forked repository, so this links to the GitHub profile instead.
    href: "https://github.com/prijesshh",
  },
  {
    name: "WellnessHub",
    tech: "C++",
    year: "2025",
    kind: "Team project",
    description:
      "Tracks weight, BMI, water, sleep, blood pressure and steps, with PIN login, saved history and health goals.",
    href: "https://github.com/prijesshh/WellnessHub",
  },
  {
    name: "Smart Budget Tracker",
    tech: "C",
    year: "2025",
    kind: "Team project",
    description:
      "Personal finance tracker with deposits, withdrawals, history and summary, secured by PIN with a saved balance.",
    href: "https://github.com/prijesshh/budget_tracker",
  },
  {
    name: "Lumen Harp",
    tech: "Python, IoT, Sensor Integration",
    year: "TechSprint 2026",
    kind: "Hackathon team project",
    description:
      "Rapid prototype for monitoring the progress of neurodivergent children, using IoT sensors and real-time data visualization.",
  },
  {
    name: "Engram",
    tech: "Python, Multi-Agent Architecture",
    year: "HACK-A-LITE 2026",
    kind: "Hackathon team project",
    description:
      "Agentic co-founder platform showing multi-agent orchestration and autonomous task management. Won the Model Demonstration Award.",
  },
];

export const experience = [
  {
    role: "Executive Member",
    org: "KEC Computer Club",
    period: "2026 to present",
    description:
      "Contributed to organizing technology-related events and activities for students, promoting technical learning, collaboration, and student engagement.",
  },
  {
    role: "Community Member",
    org: "Notion@KEC",
    period: "February 2026 to present",
    description: "Facilitated technical knowledge-sharing sessions within the campus community.",
  },
  {
    role: "General Member",
    org: "Rotaract Club of Charumati",
    period: "August 2025 to July 2026",
    description:
      "Took part in community initiatives, including menstrual health awareness for schoolchildren and the installation of pad vending machines in schools. Contributed to community skill development by teaching knitting to women aged 30 and above.",
  },
];

export const achievements = [
  {
    title: "Model Demonstration Award",
    detail: "HACK-A-LITE 2026, for Engram, recognized for innovative architecture and execution.",
  },
];

export const events = [
  { name: "APRIGF", place: "Kathmandu, Nepal", date: "2026", role: "Attendee" },
  { name: "YIGF", place: "Kathmandu, Nepal", date: "2026", role: "Attendee" },
  {
    name: "APIGA Nepal 2025: Internet Governance & ICANN Policy Focus",
    date: "December 2025",
  },
  { name: "Ubucon Asia 2025, Ubuntu Nepal & GNOME Nepal", date: "August 2025" },
  {
    name: "7-Day Arduino Workshop, Thapathali Campus Electronics Club",
    date: "July to August 2025",
  },
  {
    name: "Proteus: PCB Design & Fabrication Workshop, Pulchowk Campus Electrical Club",
    date: "June 2025",
  },
  {
    name: "Camera Sika: Scriptwriting, Shooting & Directing, Into Film, British Council Nepal",
    date: "2019",
  },
];

export const courses = [
  {
    name: "Mastering Data Structures & Algorithms using C",
    detail: "Abdul Bari, Udemy",
  },
];
