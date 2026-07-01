//Section.jsx

export default function Section({ id, children, style }) {
  return (
    <section id={id} style={{ padding: "6rem 2rem", ...style }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>{children}</div>
    </section>
  );
}