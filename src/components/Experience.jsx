// Experience.jsx

import { useState } from "react";
import { EXPERIENCES } from "../data/experience";
import SectionHeading from "./SectionHeading";
import Section from "./Section";
import { ChevronRight } from "lucide-react";

export default function Experience() {
  const [active, setActive] = useState(0);

  console.log("Active:", active);
  const exp = EXPERIENCES[active];
  console.log("Current Company:", exp.company);

  console.log("Experience Length:", EXPERIENCES.length);

  return (
    <Section id="experience" style={{ background: "#070d1a" }}>
      <SectionHeading number="02" title="Work Experience" />
      <div className="experience-container">
        <div
          className="experience-sidebar"
          style={{
            display: "flex",
            flexDirection: "column",
            borderLeft: "2px solid rgba(100,255,218,0.1)",
          }}
        >
          {EXPERIENCES.map((e, i) => (
            <button
              key={i}
              onClick={() => {
                console.log("Clicked:", i);
                setActive(i);
              }}
              className="experience-company"
              style={{
                fontFamily: "'Fira Code',monospace",
                fontSize: "0.85rem",
                padding: "0.75rem 1.25rem",
                textAlign: "left",
                background: "none",
                border: "none",
                borderLeft: `2px solid ${i === active ? "#64ffda" : "transparent"}`,
                marginLeft: -2,
                color: i === active ? "#64ffda" : "#8892b0",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {i + 1}. {e.company}
            </button>
          ))}
        </div>
        <div
          className="experience-content"
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <h3
            style={{
              fontFamily: "'Inter',sans-serif",
              color: "#ccd6f6",
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: 4,
            }}
          >
            {exp.title}{" "}
            <span style={{ color: "#64ffda" }}>@ {exp.company}</span>
          </h3>
          <p
            style={{
              fontFamily: "'Fira Code',monospace",
              fontSize: "0.8rem",
              color: "#8892b0",
              marginBottom: "1.25rem",
            }}
          >
            {exp.period} · {exp.location}
          </p>
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              color: "#8892b0",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
              fontSize: "0.95rem",
            }}
          >
            {exp.description}
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 1.5rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            {exp.responsibilities.map((r, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "0.9rem",
                  color: "#8892b0",
                  lineHeight: 1.6,
                }}
              >
                <ChevronRight
                  size={14}
                  style={{ color: "#64ffda", flexShrink: 0, marginTop: 4 }}
                />
                {r}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {exp.technologies.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'Fira Code',monospace",
                  fontSize: "0.75rem",
                  color: "#64ffda",
                  background: "rgba(100,255,218,0.08)",
                  border: "1px solid rgba(100,255,218,0.15)",
                  padding: "0.2rem 0.6rem",
                  borderRadius: 3,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
.experience-container{
    display:flex;
    gap:2.5rem;
}

.experience-sidebar{
    min-width:220px;
}

.experience-company{
    white-space:normal;
    word-break:break-word;
}

.experience-content{
    flex:1;
    min-width:0;
}

@media (max-width:768px){

    .experience-container{
        flex-direction:column;
        gap:2rem;
    }

    .experience-sidebar{
        width:100%;
        min-width:100%;
        border-left:none !important;
        border-bottom:2px solid rgba(100,255,218,.15);
        padding-bottom:1rem;
    }

    .experience-content{
        width:100%;
    }

    .experience-company{
        width:100%;
        text-align:left;
        padding:1rem;
    }

}
`}</style>
    </Section>
  );
}
