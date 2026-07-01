// Projects.jsx

import { PROJECTS } from "../data/projects";
import SectionHeading from "./SectionHeading";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);
  return (
    <Section id="projects" style={{ background: "#0a0f1e" }}>
      <SectionHeading number="03" title="Projects I've Built" />
      <p
        style={{
          fontFamily: "'Inter',sans-serif",
          color: "#8892b0",
          marginBottom: "3rem",
          fontSize: "0.95rem",
        }}
      >
        A selection of things I&apos;ve built. View more on{" "}
        <a
          href="https://github.com/Tejas9420190282"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#64ffda", textDecoration: "none" }}
        >
          GitHub
        </a>
        .
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "1.5rem",
          marginBottom: "4rem",
        }}
      >
        {featured.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
      <h3
        style={{
          fontFamily: "'Fira Code',monospace",
          color: "#ccd6f6",
          fontSize: "1rem",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Other Noteworthy Projects
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: "1rem",
        }}
      >
        {others.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </Section>
  );
}
