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
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
          inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        {SKILLS.map((cat) => (
          <div
            key={cat.category}
            className="bg-[#112240] border border-[#64ffda14] rounded-md p-6 transition-all duration-200 hover:border-[#64ffda40]"
          >
            {/* Category Heading */}
            <div className="flex items-center gap-2 mb-4">
              <Code2 size={16} className="text-[#64ffda]" />

              <h3 className="font-mono text-sm font-semibold text-[#64ffda]">
                {cat.category}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="
                    font-mono
                    text-xs
                    text-[#8892b0]
                    bg-[rgba(136,146,176,0.06)]
                    border
                    border-[rgba(136,146,176,0.12)]
                    rounded
                    px-2.5
                    py-1
                    transition-all
                    duration-150
                    cursor-default
                    hover:text-[#64ffda]
                    hover:border-[rgba(100,255,218,0.25)]
                    hover:bg-[rgba(100,255,218,0.06)]
                  "
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