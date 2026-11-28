"use client";

import { useEffect, useRef } from "react";

const COLORS = ["232, 230, 245", "46, 196, 241", "123, 63, 228"]; // star, cyan, violet
const MAX_PARTICLES = 120;

export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasMouse || reduceMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let particles = [];
    let rafId = null;
    let lastSpawn = 0;

    function resize() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn(x, y) {
      for (let i = 0; i < 3; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6 + 0.25, // drift slightly down
          size: Math.random() * 2.4 + 0.8,
          life: 1,
          decay: Math.random() * 0.02 + 0.015,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
      if (particles.length > MAX_PARTICLES) particles.splice(0, particles.length - MAX_PARTICLES);
    }

    function frame() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        if (p.life <= 0) continue;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life + 0.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.life})`;
        ctx.fill();
      }
      particles = particles.filter((p) => p.life > 0);
      // keep looping only while sparkles are alive
      rafId = particles.length > 0 ? requestAnimationFrame(frame) : null;
    }

    function handleMove(e) {
      const now = performance.now();
      if (now - lastSpawn < 16) return; // at most ~60 spawns per second
      lastSpawn = now;
      spawn(e.clientX, e.clientY);
      if (rafId === null) rafId = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handleMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full"
    />
  );
}