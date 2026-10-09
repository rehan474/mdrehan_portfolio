import { useEffect, useRef, useState } from "react";
import { skillGroups } from "../data/content";
import Reveal from "./Reveal";

function SkillBar({ name, level }) {
  const ref = useRef(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFilled(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="skill-row" ref={ref}>
      <div className="label">
        <b>{name}</b>
      </div>
      <div className="bar-track">
        <div
          className="bar-fill"
          style={{ width: filled ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="eyebrow">
        <span className="num">02</span> Skills
      </div>
      <Reveal as="h2" className="title">
        Tools for building useful web applications
      </Reveal>
      <Reveal as="p" className="lede">
        Vue.js and JavaScript for interfaces, REST APIs for integration, and SQL tools for data and reporting.
      </Reveal>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <Reveal as="div" className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            {group.skills.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </Reveal>
        ))}
      </div>
      <Reveal className="admin-note">
        <b>Business systems experience</b> — ERPNext/Frappe workflows, custom DocTypes,
        Metabase KPI dashboards, technical SEO, and Core Web Vitals.
      </Reveal>
    </section>
  );
}
