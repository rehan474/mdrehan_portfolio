import { certifications } from "../data/content";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="eyebrow">
        <span className="num">06</span> Certifications
      </div>
      <Reveal as="h2" className="title">
        Verified credentials
      </Reveal>
      <div className="card-grid">
        {certifications.map((c) => (
          <Reveal as="div" className="badge-card" key={c.title}>
            <div className="badge-icon">{c.icon}</div>
            <h4>{c.title}</h4>
            <p>{c.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
