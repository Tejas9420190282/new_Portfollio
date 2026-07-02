// Navbar.jsx

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/navLinks";
import scrollTo from "../utils/scrollTo";
import resume from "../assets/TejasShimpi_Experiance_CV_Pune.pdf";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-[#0a0f1e]/90 backdrop-blur-md border-b border-cyan-400/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1100px] mx-auto h-[72px] flex items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="font-mono text-[#64ffda] text-xl font-semibold cursor-pointer"
        >
          &lt;TS /&gt;
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-mono text-sm text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
            >
              <span className="text-[#64ffda]">0{i + 1}.</span> {link.label}
            </button>
          ))}

          <a
            href={resume}
            download="Tejas_Shimpi_Resume.pdf"
            className="font-mono text-sm text-[#64ffda]
            border border-[#64ffda]
            rounded
            px-4 py-2
            hover:bg-[#64ffda]/10
            transition-all duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#64ffda]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#112240] border-t border-cyan-400/10 px-8 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => {
                scrollTo(link.href);
                setOpen(false);
              }}
              className="text-left font-mono text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
            >
              <span className="text-[#64ffda]">0{i + 1}.</span> {link.label}
            </button>
          ))}

          <a
            href={resume}
            download="Tejas_Shimpi_Resume.pdf"
            className="w-fit font-mono text-sm text-[#64ffda]
            border border-[#64ffda]
            rounded
            px-4 py-2
            hover:bg-[#64ffda]/10
            transition-all duration-200"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
