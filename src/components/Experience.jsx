import { useState } from "react";
import { experience } from "../data/content";
import Reveal from "./Reveal";

function TimelineItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal as="div" className={`tl-item ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="tl-dot" />
      <div className="tl-head">
        <div>
          <h3>{item.title}</h3>
          <div className="tl-org">{item.org}</div>
        </div>
        <div className="tl-dur">{item.duration}</div>
      </div>
      <span className="tl-toggle">
        View details <span className="chev">▾</span>
      </span>
      <div className="tl-body">
        <div className="tl-body-inner">
          <ul>
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="eyebrow">
        <span className="num">03</span> Experience
      </div>
      <Reveal as="h2" className="title">
        Professional journey
      </Reveal>
      <div className="timeline">
        {experience.map((item) => (
          <TimelineItem item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}
