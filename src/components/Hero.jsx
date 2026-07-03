// Hero.jsx
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useTypewriter from "../hooks/useTypewriter";
import scrollTo from "../utils/scrollTo";

export default function Hero() {
  const typed = useTypewriter(
    ["Full Stack Developer.", "React Specialist.", "Backend Developer."],
    80,
    1800,
  );

  const buttons = [
    {
      label: "View My Work",
      icon: <ArrowRight size={16} />,
      action: () => scrollTo("#projects"),
      primary: true,
    },
    {
      label: "Get In Touch",
      icon: null,
      action: () => scrollTo("#contact"),
      primary: false,
    },
  ];

  const socials = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/Tejas9420190282",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/tejas-shimpi-459235206",
    },
  ];

  return (
    <section
      id="hero" 
      className="relative flex min-h-screen items-center bg-[#0a0f1e] px-8"
    >
      {/* Grid Background */}
      <div />

      <div className="relative z-10 mx-auto w-full max-w-6xl pt-24">
        <p className="mb-5 font-mono text-base text-[#64ffda]">
          Hi, my name is
        </p>

        <h1 className="mb-2 text-[clamp(2.5rem,7vw,5rem)] font-bold leading-tight text-[#ccd6f6]">
          Tejas Shimpi.
        </h1>

        <h2 className="mb-6 min-h-[3.5rem] text-[clamp(1.5rem,4vw,3rem)] font-semibold leading-tight text-[#8892b0]">
          I build things as a{" "}
          <span className="font-mono text-[#64ffda]">
            {typed}
            <span className="animate-pulse">|</span>
          </span>
        </h2>

        <p className="mb-10 max-w-xl text-lg leading-8 text-[#8892b0]">
          I'm an IT professional with{" "}
          <span className="font-semibold text-[#ccd6f6]">
            1+ year of experience
          </span>{" "}
          building production-grade web applications. Currently working at{" "}
          <span className="text-[#64ffda]">
            Heddge Capitals Wealth Management Private Limited
          </span>
          , focused on scalable frontend architectures and clean API design.
        </p>

        <div className="mb-12 flex flex-wrap gap-4">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={btn.action}
              className={`flex items-center gap-2 rounded border px-7 py-3 font-mono text-sm transition duration-200
                ${
                  btn.primary
                    ? "border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
                    : "border-[#8892b04d] text-[#64ffda] hover:bg-[#64ffda]/10"
                }`}
            >
              {btn.label}
              {btn.icon}
            </button>
          ))}
        </div>

        <div className="flex gap-5">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] transition duration-200 hover:-translate-y-1 hover:text-[#64ffda]"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
