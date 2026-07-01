// About.jsx

import useInView from "../hooks/useInView";
import SectionHeading from "./SectionHeading";
import Section from "./Section";
import { ChevronRight } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView();
  return (
    <Section id="about" style={{ background: "#0a0f1e" }}>
      <SectionHeading number="01" title="About Me" />
      <div
        ref={ref}
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "4rem",
          alignItems: "center",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease",
        }}
      >
        <div>
          {[
            "Hello! I'm Tejas, a software developer based in Pune, India. I enjoy creating things that live on the internet — whether that's websites, applications, or anything in between.",
            "My interest in web development started in college when I built my first CRUD app and got completely hooked. Since then, I've had the opportunity to work at Heddge Capitals Wealth Management Private Limited., contributing to enterprise products used by thousands every day.",
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Inter',sans-serif",
                color: "#8892b0",
                lineHeight: 1.8,
                marginBottom: "1rem",
                fontSize: "1rem",
              }}
            >
              {i === 1 ? (
                <>
                  My interest in web development started in college when I built
                  my first CRUD app and got completely hooked. Since then,
                  I&apos;ve had the opportunity to work at{" "}
                  <span style={{ color: "#64ffda" }}>
                    {" "}
                    Pawar Infotech & Heddge Capitals Wealth Management Private
                    Limited
                  </span>
                  , contributing to enterprise products used by thousands every
                  day.
                </>
              ) : (
                p
              )}
            </p>
          ))}
          <div
            style={{
              marginTop: "1.5rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.5rem 2rem",
            }}
          >
            {[
              "TailwindCSS",
              "JavaScript",
              "React",
              "Node.js",
              "Next.js",
              "MYSQL",
              "NOSQL",
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "'Fira Code',monospace",
                  fontSize: "0.85rem",
                  color: "#8892b0",
                }}
              >
                <ChevronRight
                  size={12}
                  style={{ color: "#64ffda", flexShrink: 0 }}
                />
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 280, height: 280 }}>
            <div
              style={{
                width: 260,
                height: 260,
                borderRadius: 8,
                position: "relative",
                zIndex: 1,
                background: "linear-gradient(135deg,#64ffda22,#7c3aed22)",
                border: "2px solid rgba(100,255,218,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#64ffda,#7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Fira Code',monospace",
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  color: "#0a0f1e",
                }}
              >
                TS
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -12,
                right: -12,
                width: 260,
                height: 260,
                borderRadius: 8,
                border: "2px solid #64ffda",
                zIndex: 0,
                opacity: 0.25,
              }}
            />
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </Section>
  );
}
