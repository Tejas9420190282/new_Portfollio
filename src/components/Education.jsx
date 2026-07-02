// Education.jsx

import SectionHeading from "./SectionHeading";
import Section from "./Section";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "../data/education";
// import { Briefcase } from "lucide-react";
// import { CERTIFICATIONS } from "../data/certifications";

export default function Education() {
  return (
    <Section id="education" style={{ background: "#0a0f1e" }}>
      <SectionHeading number="05" title="Education" />

      <div>
        {/* Education */}
        <div>
          <h3 className="flex items-center gap-2 mb-6 font-mono text-sm text-[#64ffda]">
            <GraduationCap size={16} />
            Degree
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {EDUCATION.map((e, i) => (
              <div
                key={i}
                className="bg-[#112240] border  border-[#64ffda1a] rounded-md p-6 hover:border-[#64ffda55] transition-colors duration-300"
              >
                <h4 className="text-[#ccd6f6] text-base font-semibold font-sans mb-1">
                  {e.degree}
                </h4>

                <p className="text-[#64ffda] text-sm font-mono mb-1">
                  {e.institution}
                </p>

                <p className="text-[#8892b0] text-xs font-mono mb-4">
                  {e.period} • {e.grade}
                </p>

                <div className="flex flex-wrap gap-2">
                  {e.highlights.map((h) => (
                    <span
                      key={h}
                      className="font-mono text-[11px] text-[#8892b0] bg-[#8892b010] border border-[#8892b020] px-2 py-1 rounded"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      {/*
        <div>
          <h3 className="flex items-center gap-2 mb-6 font-mono text-sm text-[#64ffda]">
            <Briefcase size={16} />
            Certifications
          </h3>

          <div className="flex flex-col gap-3">
            {CERTIFICATIONS.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 bg-[#112240] border border-[#64ffda1a] rounded-md px-5 py-4 hover:border-[#64ffda55] transition-colors duration-300"
              >
                <div>
                  <p className="text-[#ccd6f6] text-sm font-medium">
                    {c.name}
                  </p>

                  <p className="text-[#8892b0] text-xs font-mono">
                    {c.issuer}
                  </p>
                </div>

                <span className="text-[#64ffda] text-xs font-mono whitespace-nowrap">
                  {c.year}
                </span>
              </div>
            ))}
          </div>
        </div>
        */}
    </Section>
  );
}
