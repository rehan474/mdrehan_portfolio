import { useEffect, useRef, useState } from "react";
import { profile } from "../data/content";
import ParticleBackground from "./ParticleBackground";

function useTypedRoles(roles) {
  const [text, setText] = useState("");
  useEffect(() => {
    let ri = 0,
      ci = 0,
      deleting = false,
      timer;
    function loop() {
      const word = roles[ri];
      if (!deleting) {
        ci++;
        setText(word.slice(0, ci));
        if (ci === word.length) {
          deleting = true;
          timer = setTimeout(loop, 1400);
          return;
        }
      } else {
        ci--;
        setText(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % roles.length;
        }
      }
      timer = setTimeout(loop, deleting ? 35 : 65);
    }
    loop();
    return () => clearTimeout(timer);
  }, [roles]);
  return text;
}

export default function Hero() {
  const heroRef = useRef(null);
  const typed = useTypedRoles(profile.roles);

  return (
    <section id="hero" ref={heroRef}>
      <ParticleBackground containerRef={heroRef} />
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">
            <span className="pulse" />
            {profile.location.toUpperCase()} · {profile.locationNote.toUpperCase()}
          </div>
          <h1 className="hero-name">
            {profile.name.split(" ")[0]}
            <br />
            {profile.name.split(" ").slice(1).join(" ")}
          </h1>
          <div className="role-line">
            <span>{typed}</span>
            <span className="cursor" />
          </div>
          <p className="hero-sub">{profile.heroSub}</p>
          <div className="hero-actions">
            <a href={profile.resumeFile} download className="btn primary">
              ↓ Download Résumé
            </a>
            <a href="#contact" className="btn ghost">
              Get in Touch
            </a>
            <a href="#projects" className="btn ghost">
              View Projects
            </a>
          </div>
          <div className="hero-meta">
            <div className="meta-item">
              <MailIcon /> {profile.email}
            </div>
            <div className="meta-item">
              <PhoneIcon /> {profile.phone}
            </div>
            <div className="meta-item">
              <PinIcon /> {profile.location} · {profile.nationality}
            </div>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="photo-ring">
            {/* Swap in a real headshot: <img src="/profile-photo.jpg" alt={profile.name} /> */}
            <div className="avatar-mono">
              {profile.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </div>
          </div>
          <div className="photo-caption">Vue.js · JavaScript · REST APIs</div>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
      <path d="M22 6l-10 7L2 6" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
      <path d="M12 22s8-4.5 8-11.8A8 8 0 0 0 4 10.2C4 17.5 12 22 12 22z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
