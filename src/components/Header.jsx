import { useEffect, useState } from "react";

const LINKS = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Research", "#research"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <div className="logo">
          <span className="dot" />
          MD Rehan<span style={{ color: "var(--mute)", fontWeight: 400 }}>.dev</span>
        </div>
        <nav>
          <ul>
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="nav-cta">
          Hire Me
        </a>
        <div
          className={`hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-nav">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMobileOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
