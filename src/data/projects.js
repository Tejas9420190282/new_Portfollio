// project.js

import videoConnectImg from "../assets/video-connect.png";
import forexTradingImg from "../assets/forexTradingImg.png";

export const PROJECTS = [
  {
    featured: true,
    title:
      "Forex Trading Platform — Secure Trading, Wallet & Risk Management System",
    description:
      "A secure enterprise-grade Forex trading platform developed for real-time trading operations, wallet management, KYC verification, automated compliance monitoring, risk detection, announcement management, and notification systems. Implemented scalable REST APIs, Socket.IO-based real-time updates, Redis caching, and multiple backend Cron Jobs to automate compliance, fraud detection, and account monitoring",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
      "Cron Jobs",
    ],
    live: "https://trade.hcfinvest.com/user/login", // Company Project
    image: forexTradingImg,
  },
  {
    featured: true,
    title:
      "VideoConnect — Real-Time Video, Audio Conferencing, screen sharing & Chatting Platform",
    description:
      "A full-stack video conferencing application inspired by Google Meet and Zoom, supporting real-time video/audio calls, screen sharing, live chat, participant management, meeting links, and WebRTC-powered communication using Socket.IO.",
    technologies: [
      "React.js",
      "Node.js",
      "Socket.IO",
      "WebRTC",
      "MySQL",
      "Tailwind CSS",
      "Render",
      "Netlify",
      "TiDB Cloud",
    ],
    github: "https://github.com/Tejas9420190282/Hosted_Zoom-Project",
    live: "https://video-conneect.netlify.app/",
    image: videoConnectImg,
  },

  {
    featured: false,
    title: "Airline Reservation System — Flight Booking & Management Platform",
    description:
      "A full-stack airline reservation system that enables users to search and book flights, complete secure online payments, and download ticket PDFs after successful booking. The platform includes dedicated Admin and User panels, allowing administrators to manage flights, schedules, and booking records while providing passengers with a seamless ticket booking experience.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "Razorpay",
      "JWT Authentication",
      "PDF Generation",
      "Netlify",
      "Render",
    ],
    github:
      "https://github.com/Tejas9420190282/Airline_Reservation_System_NodeJs",
  },
  {
    featured: false,
    title: "easyConstruction — Construction Materials & Service Marketplace",
    description:
      "A full-stack marketplace platform developed for the construction industry, enabling users to purchase construction materials and connect with skilled workers such as plumbers, painters, carpenters, and electricians. The application features secure authentication, product management, service listings, and a dedicated Admin dashboard for managing inventory, pricing, and customer operations.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "JWT Authentication",
      "REST APIs",
      "Netlify",
      "Render",
    ],
  },
  {
    featured: false,
    title:
      "Doctor's Appointment System — Online Doctor Booking & Management Platform",
    description:
      "A full-stack hospital appointment booking platform that enables patients to register, browse doctors, and schedule appointments online through a secure and responsive interface. The system features dedicated Admin and User dashboards for managing doctors, patients, appointments, and hospital operations, powered by REST APIs, JWT authentication, and MySQL for efficient healthcare management.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "JWT Authentication",
      "REST APIs",
      "Nodemailer",
      "GitHub",
      "Netlify",
      "Render",
    ],
    github:
      "https://github.com/Tejas9420190282/Hosted-Hospital-Appointment-System-MYSQL",
  },
  {
    featured: false,
    title: "Turf Finder — Online Sports Turf Booking & Management Platform",
    description:
      "A full-stack sports turf booking platform that allows users to search, book, and securely pay for sports turfs online. The application includes separate Admin and User dashboards, Razorpay payment integration, PDF pass generation, email-based password recovery, and complete booking management with secure authentication.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "Razorpay",
      "JWT Authentication",
      "Nodemailer",
      "Netlify",
      "Render",
    ],
    github:
      "https://github.com/Tejas9420190282/Host--Turf-Managment-System-Project---MYSQL2",
    live: "https://turf-finder-project.netlify.app/",
  },
];
