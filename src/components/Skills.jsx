// Skills.jsx

import useInView from "../hooks/useInView";
import SectionHeading from "./SectionHeading";
import Section from "./Section";
import { SKILLS } from "../data/skills";
import { Code2 } from "lucide-react";

export default function Skills() {
  const { ref, inView } = useInView();
  return (
    <Section id="skills" style={{ background: "#070d1a" }}>
      <SectionHeading number="04" title="Skills & Technologies" />
      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "1.5rem",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease",
        }}
      >
        {SKILLS.map((cat) => (
          <div
            key={cat.category}
            style={{
              background: "#112240",
              border: "1px solid rgba(100,255,218,0.08)",
              borderRadius: 6,
              padding: "1.5rem",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(100,255,218,0.25)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(100,255,218,0.08)")
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <Code2 size={16} style={{ color: "#64ffda" }} />
              <h3
                style={{
                  fontFamily: "'Fira Code',monospace",
                  color: "#64ffda",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                {cat.category}
              </h3>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {cat.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: "'Fira Code',monospace",
                    fontSize: "0.775rem",
                    color: "#8892b0",
                    background: "rgba(136,146,176,0.06)",
                    border: "1px solid rgba(136,146,176,0.12)",
                    padding: "0.25rem 0.6rem",
                    borderRadius: 3,
                    transition: "all 0.15s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#64ffda";
                    e.currentTarget.style.borderColor =
                      "rgba(100,255,218,0.25)";
                    e.currentTarget.style.background = "rgba(100,255,218,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#8892b0";
                    e.currentTarget.style.borderColor =
                      "rgba(136,146,176,0.12)";
                    e.currentTarget.style.background = "rgba(136,146,176,0.06)";
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
