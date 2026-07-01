// Navbar.jsx

import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/navLinks";
import { Menu, X } from "lucide-react";
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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10,15,30,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(100,255,218,0.08)" : "none",
        padding: "0 2rem",
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => scrollTo("#hero")}
          style={{
            fontFamily: "'Fira Code',monospace",
            color: "#64ffda",
            fontSize: "1.2rem",
            fontWeight: 600,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          &lt;TS /&gt;
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                fontFamily: "'Fira Code',monospace",
                fontSize: "0.8rem",
                color: "#8892b0",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#64ffda")}
              onMouseLeave={(e) => (e.target.style.color = "#8892b0")}
            >
              <span style={{ color: "#64ffda" }}>0{i + 1}. </span>
              {link.label}
            </button>
          ))}

          <a
            href={resume}
            download="Tejas_Shimpi_Resume.pdf"
            style={{
              fontFamily: "'Fira Code',monospace",
              fontSize: "0.8rem",
              color: "#64ffda",
              border: "1px solid #64ffda",
              padding: "0.5rem 1rem",
              borderRadius: 4,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(100,255,218,0.08)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            color: "#64ffda",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div
          style={{
            background: "#112240",
            borderTop: "1px solid rgba(100,255,218,0.1)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => {
                scrollTo(link.href);
                setOpen(false);
              }}
              style={{
                fontFamily: "'Fira Code',monospace",
                fontSize: "0.9rem",
                color: "#ccd6f6",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ color: "#64ffda" }}>0{i + 1}. </span>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
