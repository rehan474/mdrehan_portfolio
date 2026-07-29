import { useState } from "react";
import { faq } from "../data/content";
import Reveal from "./Reveal";

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal as="div" className={`faq-item ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="faq-q">
        {item.q}
        <span className="chev">▾</span>
      </div>
      <div className="faq-a">
        <p>{item.a}</p>
      </div>
    </Reveal>
  );
}

export default function FAQ() {
  return (
    <section id="faq">
      <div className="eyebrow">
        <span className="num">08</span> FAQ
      </div>
      <Reveal as="h2" className="title">
        Frequently asked
      </Reveal>
      <div className="faq-list">
        {faq.map((f) => (
          <FaqItem item={f} key={f.q} />
        ))}
      </div>
    </section>
  );
}
