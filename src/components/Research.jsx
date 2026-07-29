import { research, patents } from "../data/content";
import Reveal from "./Reveal";

export default function Research() {
  return (
    <section id="research">
      <div className="eyebrow">
        <span className="num">05</span> Research &amp; IP
      </div>
      <Reveal as="h2" className="title">
        Publications &amp; patents
      </Reveal>
      <Reveal as="p" className="lede">
        Research contributions in generative image synthesis and applied computer vision.
      </Reveal>
      <div className="card-grid">
        {research.map((r) => {
          const Tag = r.url ? "a" : "div";
          const linkProps = r.url ? { href: r.url, target: "_blank", rel: "noreferrer" } : {};
          return (
            <Reveal
              as={Tag}
              className={`badge-card ${r.url ? "linked" : ""}`}
              key={r.marker}
              {...linkProps}
            >
              <div className="badge-icon">{r.marker}</div>
              <span className="status">{r.status}</span>
              <h4>{r.title}</h4>
              <p>{r.venue}</p>
              {r.url && <span className="read-link">Read the paper →</span>}
            </Reveal>
          );
        })}
        {patents.map((p) => (
          <Reveal
            as="div"
            className={`badge-card ${p.title.includes("needed") ? "missing" : ""}`}
            key={p.marker}
          >
            <div className="badge-icon">{p.marker}</div>
            <span className="status">Indian Patent</span>
            <h4>{p.title}</h4>
            <p>{p.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
