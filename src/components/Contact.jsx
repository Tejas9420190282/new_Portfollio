// Contact.jsx

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Section from "./Section";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputStyle = {
    fontFamily: "'Fira Code',monospace",
    fontSize: "0.875rem",
    color: "#ccd6f6",
    background: "rgba(100,255,218,0.04)",
    border: "1px solid rgba(100,255,218,0.15)",
    borderRadius: 4,
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `*New Portfolio Contact*

👤 Name: ${form.name}

📧 Email: ${form.email}

💬 Message:
${form.message}`;

    const whatsappURL = `https://wa.me/9420190282?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <Section id="contact" style={{ background: "#070d1a" }}>
      <SectionHeading number="06" title="Get In Touch" />
      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "flex-start",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              color: "#8892b0",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
              fontSize: "1rem",
            }}
          >
            I&apos;m currently open to new opportunities — full-time roles or
            interesting freelance projects. Whether you have a question, a
            proposal, or just want to say hi, my inbox is always open.
          </p>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              {
                icon: <Mail size={16} />,
                label: "tejasshimpi877@gmail.com",
                href: "mailto:tejasshimpi877@gmail.com",
              },
              {
                icon: <FaGithub size={16} />,
                label: "github.com/tejas-shimpi",
                href: "https://github.com/Tejas9420190282",
              },
              {
                icon: <FaLinkedin size={16} />,
                label: "linkedin.com/in/tejas-shimpi",
                href: "https://www.linkedin.com/in/tejas-shimpi-459235206",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "'Fira Code',monospace",
                  fontSize: "0.82rem",
                  color: "#8892b0",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8892b0")}
              >
                <span style={{ color: "#64ffda" }}>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {sent ? (
          <div
            style={{
              background: "#112240",
              border: "1px solid rgba(100,255,218,0.2)",
              borderRadius: 6,
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Fira Code',monospace",
                color: "#64ffda",
                fontSize: "1.1rem",
              }}
            >
              Message sent!
            </p>
            <p
              style={{
                fontFamily: "'Inter',sans-serif",
                color: "#8892b0",
                marginTop: "0.5rem",
                fontSize: "0.9rem",
              }}
            >
              I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#64ffda")}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(100,255,218,0.15)")
              }
            />
            <input
              type="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#64ffda")}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(100,255,218,0.15)")
              }
            />
            <textarea
              placeholder="Your message..."
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => (e.target.style.borderColor = "#64ffda")}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(100,255,218,0.15)")
              }
            />
            <button
              type="submit"
              style={{
                fontFamily: "'Fira Code',monospace",
                fontSize: "0.875rem",
                color: "#64ffda",
                border: "1px solid #64ffda",
                background: "transparent",
                padding: "0.875rem",
                borderRadius: 4,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(100,255,218,0.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Send Message
            </button>
          </form>
        )}
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </Section>
  );
}
