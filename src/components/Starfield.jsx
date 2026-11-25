"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let stars = [];
    let animationId;

    function createStars() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.floor((canvas.width * canvas.height) / 6000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random(),
        speed: Math.random() * 0.015 + 0.003,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.1) star.speed *= -1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 230, 245, ${star.alpha})`;
        ctx.shadowBlur = star.radius > 2 ? 8 : 0;
        ctx.shadowColor = "rgba(46, 196, 241, 0.8)";
        ctx.fill();
      }
      if (!reduceMotion) animationId = requestAnimationFrame(draw);
    }

    createStars();
    draw();
    window.addEventListener("resize", createStars);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", createStars);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* nebula glows */}
      <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-glow/20 blur-[120px]" />
      <div className="absolute -right-32 top-10 h-[400px] w-[400px] rounded-full bg-nebula/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[600px] rounded-full bg-cyan-glow/10 blur-[140px]" />
    </div>
  );
}
