import { profile, stats } from "../data/content";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function About() {
  return (
    <section id="about">
      <div className="eyebrow">
        <span className="num">01</span> About
      </div>
      <Reveal as="h2" className="title">
        From admin precision to AI research
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-body">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="about-tags">
            {profile.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal className="stat-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <Counter target={s.count} suffix={s.suffix} />
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
