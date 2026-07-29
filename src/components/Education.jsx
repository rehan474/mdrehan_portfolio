import { education } from "../data/content";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education">
      <div className="eyebrow">
        <span className="num">07</span> Education
      </div>
      <Reveal as="h2" className="title">
        Academic history
      </Reveal>
      <div className="timeline">
        {education.map((e) => (
          <Reveal as="div" className="tl-item open static" key={e.degree}>
            <div className="tl-dot" />
            <div className="tl-head">
              <div>
                <h3>{e.degree}</h3>
                <div className="tl-org">{e.org}</div>
              </div>
              <div className="tl-dur">{e.duration}</div>
            </div>
            <div className="tl-body" style={{ maxHeight: 80 }}>
              <div className="tl-body-inner">{e.detail}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
