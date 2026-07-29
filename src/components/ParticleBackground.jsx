import { useEffect, useRef } from "react";

// Cyber-grid style particle network: nodes drift, connect within range,
// and gently repel from the mouse. Renders behind the hero content.
export default function ParticleBackground({ containerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const mouse = { x: null, y: null };
    let W, H, particles, rafId;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function initParticles() {
      particles = [];
      const count = Math.min(70, Math.floor(W / 18));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
        });
      }
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        if (mouse.x !== null) {
          const dx = p.x - mouse.x,
            dy = p.y - mouse.y,
            d = Math.hypot(dx, dy);
          if (d < 120) {
            p.x += (dx / d) * 0.6;
            p.y += (dy / d) * 0.6;
          }
        }
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x,
            dy = particles[i].y - particles[j].y,
            d = Math.hypot(dx, dy);
          if (d < 140) {
            ctx.strokeStyle = `rgba(80,150,255,${0.16 * (1 - d / 140)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(140,190,255,.85)";
        ctx.fill();
      });
      rafId = requestAnimationFrame(tick);
    }

    resize();
    initParticles();
    tick();

    const onResize = () => {
      resize();
      initParticles();
    };
    const onMouseMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };

    window.addEventListener("resize", onResize);
    const target = containerRef?.current || canvas.parentElement;
    target?.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      target?.removeEventListener("mousemove", onMouseMove);
    };
  }, [containerRef]);

  return <canvas id="hero-canvas" ref={canvasRef} />;
}
