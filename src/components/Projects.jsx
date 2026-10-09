import { useState } from "react";
import { projects } from "../data/content";
import Reveal from "./Reveal";

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <span className="modal-close" onClick={onClose}>
          ✕
        </span>
        <div className="m-tag">{project.tag}</div>
        <h3>{project.title}</h3>
        {project.image && <img className="project-screenshot" src={project.image} alt={`${project.title} website screenshot`} loading="lazy" width="1440" height="810" />}

        <h4>Overview</h4>
        <p>{project.overview}</p>

        {project.problem && (
          <>
            <h4>Problem</h4>
            <p>{project.problem}</p>
          </>
        )}

        {project.solution && (
          <>
            <h4>Solution</h4>
            <p>{project.solution}</p>
          </>
        )}

        {project.results && (
          <>
            <h4>Results</h4>
            <ul>
              {project.results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </>
        )}

        {project.features && (
          <>
            <h4>Features</h4>
            <ul>
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </>
        )}

        {project.interface && (
          <>
            <h4>Interface</h4>
            <p>{project.interface}</p>
          </>
        )}

        <h4>Technologies</h4>
        <p>{project.stack.join(", ")}</p>

        {(project.githubUrl || project.liveUrl) && (
          <div style={{ display: "flex", gap: 18, marginTop: 18 }}>
            {project.githubUrl && (
              <a className="m-link" href={project.githubUrl} target="_blank" rel="noreferrer">
                View on GitHub →
              </a>
            )}
            {project.liveUrl && (
              <a className="m-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                Live demo →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects">
      <div className="eyebrow">
        <span className="num">04</span> Projects
      </div>
      <Reveal as="h2" className="title">
        Selected work
      </Reveal>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => setActive(p)} />
        ))}
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  function handleMove(e) {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left,
      y = e.clientY - r.top;
    const rx = (y / r.height - 0.5) * -8,
      ry = (x / r.width - 0.5) * 8;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    card.style.setProperty("--mx", (x / r.width) * 100 + "%");
    card.style.setProperty("--my", (y / r.height) * 100 + "%");
  }
  function handleLeave(e) {
    e.currentTarget.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  }

  return (
    <Reveal
      as="div"
      className="proj-card"
      onClick={onOpen}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="proj-tag">{project.tag}</div>
      <h3>{project.title}</h3>
        {project.image && <img className="project-screenshot" src={project.image} alt={`${project.title} website screenshot`} loading="lazy" width="1440" height="810" />}
      <p>{project.summary}</p>
      <div className="proj-stack">
        {project.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <span className="proj-link">View case study →</span>
    </Reveal>
  );
}
