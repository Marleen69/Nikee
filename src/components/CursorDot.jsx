import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorDot({ color = '#00eaff' }) {
  const [visible, setVisible] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const trailX = useSpring(x, { stiffness: 120, damping: 15, mass: 0.2 });
  const trailY = useSpring(y, { stiffness: 120, damping: 15, mass: 0.2 });

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (hasTouch) {
      setVisible(false);
      return;
    }

    const move = e => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const enter = () => setVisible(true);
    const leave = () => setVisible(false);
    const hoverEnter = () => setIsHover(true);
    const hoverLeave = () => setIsHover(false);

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseenter', enter);
    document.addEventListener('mouseleave', leave);

    const targets = Array.from(document.querySelectorAll('.hover-target'));
    targets.forEach(t => {
      t.addEventListener('mouseenter', hoverEnter);
      t.addEventListener('mouseleave', hoverLeave);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseenter', enter);
      document.removeEventListener('mouseleave', leave);
      targets.forEach(t => {
        t.removeEventListener('mouseenter', hoverEnter);
        t.removeEventListener('mouseleave', hoverLeave);
      });
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full mix-blend-screen"
        style={{ translateX: x, translateY: y, backgroundColor: color }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full mix-blend-screen"
        style={{
          translateX: trailX,
          translateY: trailY,
          backgroundColor: color,
          opacity: isHover ? 0.25 : 0.15,
          scale: isHover ? 1.5 : 1,
          filter: 'blur(10px)'
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      />
    </>
  );
}

