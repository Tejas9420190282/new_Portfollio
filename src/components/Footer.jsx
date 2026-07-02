// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#070d1a] border-t border-[#64ffda]/10 py-8 px-8 text-center">
      <p className="font-mono text-[#8892b0] text-sm mb-2">
        Designed & Built by{" "}
        <span className="text-[#64ffda]">Tejas Shimpi</span>
      </p>

      <p className="font-mono text-xs text-[#8892b0] opacity-60">
        Built with React · Vite · Tailwind CSS
      </p>
    </footer>
  );
}