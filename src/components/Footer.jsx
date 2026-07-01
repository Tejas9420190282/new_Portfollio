// Footer.jsx

export default function Footer() {
  return (
    <footer
      style={{
        background: "#070d1a",
        borderTop: "1px solid rgba(100,255,218,0.06)",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'Fira Code',monospace",
          color: "#8892b0",
          fontSize: "0.8rem",
          marginBottom: "0.5rem",
        }}
      >
        Designed & Built by{" "}
        <span style={{ color: "#64ffda" }}>Tejas Shimpi</span>
      </p>
      <p
        style={{
          fontFamily: "'Fira Code',monospace",
          color: "#8892b0",
          fontSize: "0.72rem",
          opacity: 0.6,
        }}
      >
        Built with React · Vite · Tailwind CSS
      </p>
    </footer>
  );
}
