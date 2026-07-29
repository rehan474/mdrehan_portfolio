import { useState } from "react";
import { profile } from "../data/content";
import Reveal from "./Reveal";

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
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.1 3.1 0 0 0-.9-2.4c3-.3 6-1.5 6-6.6a5.1 5.1 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.1-.4-3.6 1.3a12.3 12.3 0 0 0-6.6 0C6.1.7 5 1.1 5 1.1a4.8 4.8 0 0 0-.1 3.5 5.1 5.1 0 0 0-1.4 3.6c0 5 3 6.3 6 6.6a3.1 3.1 0 0 0-.9 2.4V21" />
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

// Real form submission, no server of your own required:
// this posts to Formspree, which forwards the message straight to your inbox.
// Setup (2 minutes, free): https://formspree.io → create a form → it gives you
// an endpoint like https://formspree.io/f/xxxxxxxx → put it in .env as
// VITE_FORMSPREE_ENDPOINT (see .env.example). Until that's set, it falls back
// to opening the visitor's email client instead, so the form never breaks.
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

function validate(f) {
  const errs = {};
  if (!f.name.trim()) errs.name = "Please enter your name.";
  if (!f.email.trim()) errs.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) errs.email = "That email doesn't look right.";
  if (!f.msg.trim()) errs.msg = "Please add a message.";
  return errs;
}

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [errors, setErrors] = useState({});

  function updateField(key, value) {
    setForm({ ...form, [key]: value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`${form.msg}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setForm({ name: "", email: "", msg: "" });
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.msg }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", msg: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact">
      <div className="eyebrow">
        <span className="num">09</span> Contact
      </div>
      <Reveal as="h2" className="title">
        Let's build something
      </Reveal>
      <Reveal as="p" className="lede">
        Open to frontend, AI/ML and cloud-adjacent roles — in Saudi Arabia and internationally.
      </Reveal>
      <div className="contact-grid">
        <Reveal>
          <div className="contact-info-item">
            <div className="ic">
              <MailIcon />
            </div>
            <div>
              <div className="lbl">Email</div>
              <div className="val">{profile.email}</div>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="ic">
              <PhoneIcon />
            </div>
            <div>
              <div className="lbl">Phone</div>
              <div className="val">{profile.phone}</div>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="ic">
              <LinkedInIcon />
            </div>
            <div>
              <div className="lbl">LinkedIn</div>
              <a className="val" href={profile.linkedin} target="_blank" rel="noreferrer">
                {profile.linkedin.replace("https://www.", "")}
              </a>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="ic">
              <GitHubIcon />
            </div>
            <div>
              <div className="lbl">GitHub</div>
              <a className="val" href={profile.github} target="_blank" rel="noreferrer">
                {profile.github.replace("https://", "")}
              </a>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="ic">
              <PinIcon />
            </div>
            <div>
              <div className="lbl">Location</div>
              <div className="val">{profile.location}</div>
            </div>
          </div>
        </Reveal>

        <Reveal as="form" className="form-card" onSubmit={handleSubmit} noValidate>
          <div className={`field ${errors.name ? "invalid" : ""}`}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
            {errors.name && <div className="field-error">{errors.name}</div>}
          </div>
          <div className={`field ${errors.email ? "invalid" : ""}`}>
            <label>Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
            {errors.email && <div className="field-error">{errors.email}</div>}
          </div>
          <div className={`field ${errors.msg ? "invalid" : ""}`}>
            <label>Message</label>
            <textarea
              placeholder="Tell me about the role or project..."
              value={form.msg}
              onChange={(e) => updateField("msg", e.target.value)}
            />
            {errors.msg && <div className="field-error">{errors.msg}</div>}
          </div>
          <button
            type="submit"
            className="btn primary"
            style={{ width: "100%", justifyContent: "center" }}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {status === "sent" && (
            <div className="form-success show">
              ✓ Message sent — thanks, I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="form-success show" style={{ color: "#ff8080" }}>
              ✕ Something went wrong — please email {profile.email} directly instead.
            </div>
          )}
          <div className="form-note">
            Prefer to reach out directly?{" "}
            <a href={`mailto:${profile.email}`} style={{ color: "var(--cyan)" }}>
              {profile.email}
            </a>{" "}
            or call/WhatsApp <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} style={{ color: "var(--cyan)" }}>{profile.phone}</a>.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
