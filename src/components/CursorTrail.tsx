"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  id: number;
  born: number;
};

const TRAIL_LIFETIME = 2000;

export const CursorTrail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const idRef = useRef(0);
  const frameRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (e: MouseEvent) => {
      dotsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        id: idRef.current++,
        born: performance.now(),
      });
      if (dotsRef.current.length > 40) {
        dotsRef.current.shift();
      }
    };

    const render = () => {
      const now = performance.now();
      dotsRef.current = dotsRef.current.filter(
        (d) => now - d.born < TRAIL_LIFETIME,
      );
      container.innerHTML = "";
      for (const d of dotsRef.current) {
        const age = now - d.born;
        const opacity = 1 - age / TRAIL_LIFETIME;
        const size = 6 + (1 - opacity) * 6;
        const el = document.createElement("div");
        el.style.position = "fixed";
        el.style.left = `${d.x}px`;
        el.style.top = `${d.y}px`;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.borderRadius = "9999px";
        el.style.background = "white";
        el.style.opacity = `${opacity}`;
        el.style.pointerEvents = "none";
        el.style.transform = "translate(-50%, -50%)";
        el.style.zIndex = "9999";
        el.style.boxShadow = "0 0 6px rgba(255,255,255,0.6)";
        container.appendChild(el);
      }
      frameRef.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMove);
    frameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
};

export default CursorTrail;