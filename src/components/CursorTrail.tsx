"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  born: number;
};

const TRAIL_LIFETIME = 2000;
const MAX_DOTS = 18;

export const CursorTrail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const frameRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const ring = ringRef.current;
    if (!container || !ring) return;

    const handleMove = (e: MouseEvent) => {
      dotsRef.current.push({ x: e.clientX, y: e.clientY, born: performance.now() });
      if (dotsRef.current.length > MAX_DOTS) dotsRef.current.shift();
      ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      ring.style.opacity = "1";
    };

    const handleLeave = () => {
      ring.style.opacity = "0";
    };

    const render = () => {
      const now = performance.now();
      dotsRef.current = dotsRef.current.filter((d) => now - d.born < TRAIL_LIFETIME);
      container.innerHTML = "";
      for (const d of dotsRef.current) {
        const age = now - d.born;
        const opacity = (1 - age / TRAIL_LIFETIME) * 0.5;
        const size = 4 + (1 - age / TRAIL_LIFETIME) * 3;
        const el = document.createElement("div");
        el.style.position = "fixed";
        el.style.left = `${d.x}px`;
        el.style.top = `${d.y}px`;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.borderRadius = "9999px";
        el.style.background = "#FF9900";
        el.style.opacity = `${opacity}`;
        el.style.pointerEvents = "none";
        el.style.transform = "translate(-50%, -50%)";
        el.style.zIndex = "9998";
        container.appendChild(el);
      }
      frameRef.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    frameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full border border-[#0078D4]/60 pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9998]" />
    </>
  );
};

export default CursorTrail;