"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Planet({
  label,
  href,
  size = 160,
  color = "#7b3fe4",
  glow = "#2ec4f1",
  className = "",
  delay = 0,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={reduceMotion ? {} : { y: [0, -14, 0] }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <Link
        href={href}
        aria-label={label}
        className="group relative flex items-center justify-center rounded-full transition-transform duration-500 hover:scale-110"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 30% 30%, ${glow} 0%, ${color} 45%, #05030d 100%)`,
          boxShadow: `0 0 40px ${color}66, inset -20px -20px 50px rgba(0,0,0,0.6)`,
        }}
      >
        <span className="absolute inset-0 rounded-full opacity-0 ring-2 ring-cyan-glow/60 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="relative font-display text-xs font-bold tracking-[0.25em] text-star drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:text-sm">
          {label}
        </span>
      </Link>
    </motion.div>
  );
}