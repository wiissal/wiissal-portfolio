"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    let stars = [];
    let width = 0;
    let height = 0;
    let animationId = null;
    let resizeTimer;

    function createStars() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = width < 768 ? 9000 : 6000; // fewer stars on phones
      const count = Math.floor((width * height) / density);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random(),
        speed: Math.random() * 0.015 + 0.003,
      }));
    }

    function render() {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.1) star.speed *= -1;

        // cheap glow for big stars (instead of shadowBlur)
        if (star.radius > 2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(46, 196, 241, ${star.alpha * 0.15})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 230, 245, ${star.alpha})`;
        ctx.fill();
      }
    }

    function frame() {
      render();
      animationId = requestAnimationFrame(frame);
    }

    function start() {
      if (!reduceMotion && animationId === null) animationId = requestAnimationFrame(frame);
    }

    function stop() {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }

    function handleVisibility() {
      if (document.hidden) stop();
      else start();
    }

    function handleResize() {
      // phones fire resize while scrolling (address bar): only rebuild when the width changes
      if (window.innerWidth === width) return;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        createStars();
        render();
      }, 200);
    }

    createStars();
    render();
    start();

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stop();
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* nebula glows: smaller + lighter blur on phones */}
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-violet-glow/20 blur-[60px] md:-left-40 md:h-[500px] md:w-[500px] md:blur-[120px]" />
      <div className="absolute -right-20 top-10 hidden h-[400px] w-[400px] rounded-full bg-nebula/15 blur-[120px] md:block" />
      <div className="absolute bottom-0 left-1/4 h-64 w-80 rounded-full bg-cyan-glow/10 blur-[60px] md:left-1/3 md:h-[400px] md:w-[600px] md:blur-[140px]" />
    </div>
  );
}