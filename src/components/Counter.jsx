import { useEffect, useRef, useState } from "react";

export default function Counter({ target, suffix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let cur = 0;
            const step = Math.max(1, Math.ceil(target / 40));
            const t = setInterval(() => {
              cur += step;
              if (cur >= target) {
                cur = target;
                clearInterval(t);
              }
              setValue(cur);
            }, 30);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <div className="stat-num" ref={ref}>
      {value}
      {suffix}
    </div>
  );
}
