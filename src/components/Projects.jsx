// Projects.jsx

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

      <p className="mb-12 text-[0.95rem] leading-7 text-[#8892b0] font-['Inter']">
        A selection of things I&apos;ve built. View more on{" "}
        <a
          href="https://github.com/Tejas9420190282"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#64ffda] no-underline transition-colors duration-200 hover:text-cyan-300"
        >
          GitHub
        </a>
        .
      </p>

      {/* Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {featured.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Other Projects */}
      <h3 className="mb-6 text-center font-['Fira_Code'] text-base text-[#ccd6f6]">
        Other Noteworthy Projects
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {others.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}