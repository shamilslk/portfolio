import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ value, suffix = '', duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;

    const end = parseInt(value, 10);
    if (isNaN(end) || end === 0) {
      setCount(value);
      return;
    }

    const totalMiliseconds = duration * 1000;
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(totalMiliseconds / frameRate);
    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      
      // Quadratic Ease Out: f(t) = t * (2 - t)
      const easedProgress = progress * (2 - progress);
      const nextCount = Math.round(end * easedProgress);

      if (currentFrame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(nextCount);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}
