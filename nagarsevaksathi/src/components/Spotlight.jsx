import { useState, useEffect } from 'react';

export default function Spotlight({ active }) {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [active]);

  if (!active) return null;

  return (
    <div
      className="spotlight-overlay"
      style={{
        background: `radial-gradient(circle 180px at ${pos.x}px ${pos.y}px, transparent 0%, rgba(0, 0, 0, 0.88) 100%)`
      }}
      aria-hidden="true"
    />
  );
}
