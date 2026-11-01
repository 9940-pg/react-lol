import { useState, useEffect } from 'react';

export default function LaserPointer({ active }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        setPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    const handleClick = (e) => {
      const clickX = e.clientX || (e.touches && e.touches[0]?.clientX) || pos.x;
      const clickY = e.clientY || (e.touches && e.touches[0]?.clientY) || pos.y;
      
      const newRipple = {
        id: Date.now() + Math.random(),
        x: clickX,
        y: clickY
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 700);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('click', handleClick);
    };
  }, [active, pos.x, pos.y]);

  if (!active) return null;

  return (
    <>
      {/* Click ripples */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className="laser-click-ripple"
          style={{
            left: `${r.x}px`,
            top: `${r.y}px`
          }}
          aria-hidden="true"
        />
      ))}

      {/* Main laser beam dot */}
      <div
        className="laser-pointer-dot"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`
        }}
        aria-hidden="true"
      >
        <div className="laser-core" />
        <div className="laser-pulse-ring" />
      </div>

      {/* Discreet status badge */}
      <div className="laser-active-indicator" role="status" aria-live="polite">
        <span className="laser-indicator-dot" />
        <span>लेझर पॉइंटर चालू (Pointer ON — Press P or L)</span>
      </div>
    </>
  );
}
