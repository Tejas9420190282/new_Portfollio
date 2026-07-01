// Education.jsx

import SectionHeading from "./SectionHeading";
import Section from "./Section";
import { Briefcase, GraduationCap } from "lucide-react";
import { EDUCATION } from "../data/education";
import { CERTIFICATIONS } from "../data/certifications";

export default function Education() {
  return (
    <Section id="education" style={{ background: "#0a0f1e" }}>
      <SectionHeading number="05" title="Education" />
      <div
        className="edu-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
      >
        <div>
          <h3
            style={{
              fontFamily: "'Fira Code',monospace",
              color: "#64ffda",
              fontSize: "0.85rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <GraduationCap size={16} /> Degree
          </h3>
          {EDUCATION.map((e, i) => (
            <div
              key={i}
              style={{
                background: "#112240",
                border: "1px solid rgba(100,255,218,0.1)",
                borderRadius: 6,
                padding: "1.5rem",
              }}
            >
              <h4
                style={{
                  fontFamily: "'Inter',sans-serif",
                  color: "#ccd6f6",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: 6,
                }}
              >
                {e.degree}
              </h4>
              <p
                style={{
                  fontFamily: "'Fira Code',monospace",
                  color: "#64ffda",
                  fontSize: "0.8rem",
                  marginBottom: 4,
                }}
              >
                {e.institution}
              </p>
              <p
                style={{
                  fontFamily: "'Fira Code',monospace",
                  color: "#8892b0",
                  fontSize: "0.78rem",
                  marginBottom: "1rem",
                }}
              >
                {e.period} · {e.grade}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {e.highlights.map((h) => (
                  <span
                    key={h}
                    style={{
                      fontFamily: "'Fira Code',monospace",
                      fontSize: "0.72rem",
                      color: "#8892b0",
                      background: "rgba(136,146,176,0.06)",
                      border: "1px solid rgba(136,146,176,0.12)",
                      padding: "0.2rem 0.55rem",
                      borderRadius: 3,
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <div>
          <h3
            style={{
              fontFamily: "'Fira Code',monospace",
              color: "#64ffda",
              fontSize: "0.85rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Briefcase size={16} /> Certifications
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {CERTIFICATIONS.map((c, i) => (
              <div
                key={i}
                style={{
                  background: "#112240",
                  border: "1px solid rgba(100,255,218,0.1)",
                  borderRadius: 6,
                  padding: "1rem 1.25rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(100,255,218,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(100,255,218,0.1)")
                }
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      color: "#ccd6f6",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      marginBottom: 2,
                    }}
                  >
                    {c.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Fira Code',monospace",
                      color: "#8892b0",
                      fontSize: "0.75rem",
                    }}
                  >
                    {c.issuer}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "'Fira Code',monospace",
                    color: "#64ffda",
                    fontSize: "0.78rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {c.year}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <style>{`@media(max-width:768px){.edu-grid{grid-template-columns:1fr!important}}`}</style>
    </Section>
  );
}
