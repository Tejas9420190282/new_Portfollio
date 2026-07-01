// Hero.jsx

import { ArrowRight, Mail } from "lucide-react";
import useTypewriter from "../hooks/useTypewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import scrollTo from "../utils/scrollTo";

export default function Hero() {
  const typed = useTypewriter(
    ["Full Stack Developer.", "React Specialist.", "Backend Developer."],
    80,
    1800,
  );

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg,#0a0f1e 0%,#0d1b33 60%,#0a0f1e 100%)",
      }}
    >
      {/* grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(100,255,218,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(100,255,218,0.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          paddingTop: 96,
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "'Fira Code',monospace",
            color: "#64ffda",
            fontSize: "1rem",
            marginBottom: "1.25rem",
          }}
        >
          Hi, my name is
        </p>
        <h1
          style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: "clamp(2.5rem,7vw,5rem)",
            fontWeight: 700,
            color: "#ccd6f6",
            lineHeight: 1.1,
            marginBottom: "0.5rem",
          }}
        >
          Tejas Shimpi.
        </h1>
        <h2
          style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: "clamp(1.5rem,4vw,3rem)",
            fontWeight: 600,
            color: "#8892b0",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
            minHeight: "3.5rem",
          }}
        >
          I build things as a{" "}
          <span
            style={{ color: "#64ffda", fontFamily: "'Fira Code',monospace" }}
          >
            {typed}
            <span style={{ animation: "blink 1s step-end infinite" }}>|</span>
          </span>
        </h2>
        <p
          style={{
            fontFamily: "'Inter',sans-serif",
            color: "#8892b0",
            fontSize: "1.1rem",
            maxWidth: 560,
            lineHeight: 1.75,
            marginBottom: "2.5rem",
          }}
        >
          I&apos;m an IT professional with{" "}
          <strong style={{ color: "#ccd6f6" }}>1+ year of experience</strong>{" "}
          building production-grade web applications. Currently working at{" "}
          <span style={{ color: "#64ffda" }}>
            Heddge Capitals Wealth Management Private Limited.
          </span>
          , focused on scalable frontend architectures and clean API design.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {[
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
          ].map((btn, i) => (
            <button
              key={i}
              onClick={btn.action}
              style={{
                fontFamily: "'Fira Code',monospace",
                fontSize: "0.875rem",
                color: "#64ffda",
                border: btn.primary
                  ? "1px solid #64ffda"
                  : "1px solid rgba(136,146,176,0.3)",
                padding: "0.875rem 1.75rem",
                borderRadius: 4,
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(100,255,218,0.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {btn.label} {btn.icon}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1.25rem" }}>
          {[
            {
              icon: <FaGithub size={20} />,
              href: "https://github.com/Tejas9420190282",
            },
            {
              icon: <FaLinkedin size={20} />,
              href: "https://www.linkedin.com/in/tejas-shimpi-459235206",
            },
            {
              icon: <Mail size={20} />,
              href: "mailto:tejasshimpi877@gmail.com",
            },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#8892b0", transition: "color 0.2s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#64ffda";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8892b0";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
