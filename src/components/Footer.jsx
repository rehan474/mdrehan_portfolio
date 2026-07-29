import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="logo" style={{ marginBottom: 14 }}>
            <span className="dot" />
            MD Rehan<span style={{ color: "var(--mute)", fontWeight: 400 }}>.dev</span>
          </div>
          <p style={{ color: "var(--mute)", fontSize: 13.5, maxWidth: 280, lineHeight: 1.7 }}>
            Frontend developer &amp; AI/ML researcher based in {profile.location}. Open to relocation.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h5>Explore</h5>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <button id="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑
        </button>
      </div>
    </footer>
  );
}
