import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  // Position coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring settings for lagging trail effect
  const springConfig = { damping: 30, stiffness: 280, mass: 0.5 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // 1. Detect if touch device (mobile/tablet) to hide custom cursor
    const checkTouchDevice = () => {
      const isTouch = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        navigator.msMaxTouchPoints > 0;
      setHidden(isTouch);
    };

    checkTouchDevice();

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // 2. Attach hover listeners for interactive items
    const updateHoverStates = () => {
      const selectors = 'a, button, input, textarea, select, [role="button"], .project-card, .skill-card, .timeline-content, .filter-btn';
      const hoverables = document.querySelectorAll(selectors);

      const addHover = () => setHovered(true);
      const removeHover = () => setHovered(false);

      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });

      return () => {
        hoverables.forEach((el) => {
          el.removeEventListener('mouseenter', addHover);
          el.removeEventListener('mouseleave', removeHover);
        });
      };
    };

    // Execute immediately and observe DOM updates to hook new components
    const cleanupHovers = updateHoverStates();
    
    // Observer to re-bind events when new elements appear
    const observer = new MutationObserver(updateHoverStates);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cleanupHovers();
      observer.disconnect();
    };
  }, [mouseX, mouseY, hidden]);

  if (hidden) return null;

  return (
    <>
      {/* Trailing Ring (Spring Motion) */}
      <motion.div
        className="fixed w-7 h-7 border border-emerald-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 bg-transparent mix-blend-screen"
        style={{
          x: trailX,
          y: trailY,
        }}
        animate={{
          scale: hovered ? 1.6 : 1.0,
          backgroundColor: hovered ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.0)',
          borderColor: hovered ? 'rgba(16, 185, 129, 0.8)' : 'rgba(16, 185, 129, 0.4)',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />

      {/* Inner Dot (Instant Follow) */}
      <motion.div
        className="fixed w-1.5 h-1.5 bg-emerald-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: hovered ? 0.5 : 1.0,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
      />
    </>
  );
}
