// ProjectCard.jsx

import { ExternalLink, Terminal } from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#112240",
        border: `1px solid ${hovered ? "rgba(100,255,218,0.3)" : "rgba(100,255,218,0.1)"}`,
        borderRadius: 6,
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.4)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {project.image && (
        <div style={{ height: 180, overflow: "hidden", background: "#0a0f1e" }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: hovered ? 0.9 : 0.5,
              transition: "opacity 0.3s",
            }}
          />
        </div>
      )}
      <div
        style={{
          padding: "1.5rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "0.75rem",
          }}
        >
          <Terminal size={20} style={{ color: "#64ffda" }} />
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#8892b0", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8892b0")}
              >
                <FaGithub size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#8892b0", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8892b0")}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        <h3
          style={{
            fontFamily: "'Inter',sans-serif",
            color: "#ccd6f6",
            fontSize: "1.05rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter',sans-serif",
            color: "#8892b0",
            fontSize: "0.875rem",
            lineHeight: 1.65,
            flex: 1,
            marginBottom: "1.25rem",
          }}
        >
          {project.description}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "auto",
          }}
        >
          {project.technologies.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'Fira Code',monospace",
                fontSize: "0.72rem",
                color: "#64ffda",
                opacity: 0.8,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
