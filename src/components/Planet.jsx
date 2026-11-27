"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Planet({
  label,
  href,
  image,
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
      animate={reduceMotion ? {} : { y: [0, -25, 0], x: [0, 8, 0] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <Link
        href={href}
        aria-label={label}
        className="group relative flex size-[calc(var(--size)*0.55)] items-center justify-center rounded-full transition-transform duration-500 hover:scale-110 md:size-[calc(var(--size)*0.75)] lg:size-[var(--size)]"
        style={{
          "--size": `${size}px`,
          background: image
            ? undefined
            : `radial-gradient(circle at 30% 30%, ${glow} 0%, ${color} 45%, #05030d 100%)`,
          boxShadow: `0 0 50px ${color}66`,
        }}
      >
        {/* planet texture */}
        {image && (
          <Image
            src={image}
            alt=""
            fill
            sizes={`${size}px`}
            className="rounded-full object-cover motion-safe:animate-[spin_60s_linear_infinite]"
          />
        )}

        {/* dark side shading */}
        <span className="absolute inset-0 rounded-full shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.6)]" />

        {/* hover ring */}
        <span className="absolute inset-0 rounded-full opacity-0 ring-2 ring-cyan-glow/60 transition-opacity duration-500 group-hover:opacity-100" />

        {/* label */}
        <span className="relative max-w-[85%] text-center font-display text-[8px] font-bold leading-tight tracking-[0.2em] text-star drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] md:text-xs lg:text-sm">
          {label}
        </span>
      </Link>
    </motion.div>
  );
}
