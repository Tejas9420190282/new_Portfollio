//SectionHeading.jsx

export default function SectionHeading({ number, title }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "3rem",
      }}
    >
      <span
        style={{
          fontFamily: "'Fira Code',monospace",
          color: "#64ffda",
          fontSize: "1.1rem",
        }}
      >
        {number}.
      </span>
      <h2
        style={{
          fontFamily: "'Inter',sans-serif",
          color: "#ccd6f6",
          fontSize: "clamp(1.5rem,3vw,2rem)",
          fontWeight: 700,
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          flex: 1,
          height: 1,
          background: "rgba(100,255,218,0.12)",
          marginLeft: "1rem",
        }}
      />
    </div>
  );
}
