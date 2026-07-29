import { useEffect, useState } from "react";
import { profile } from "../data/content";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 18;
      if (p >= 100) {
        p = 100;
        clearInterval(iv);
        setTimeout(() => setHidden(true), 250);
      }
      setProgress(p);
    }, 140);
    return () => clearInterval(iv);
  }, []);

  return (
    <div id="loader" className={hidden ? "hide" : ""}>
      <div className="loader-mark">{profile.name.toUpperCase()}</div>
      <div className="loader-bar">
        <div className="loader-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="loader-pct">{Math.floor(progress)}%</div>
    </div>
  );
}
