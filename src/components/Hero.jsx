"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Planet from "./Planet";

//Every elements fades and  slides up
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* planets (desktop only for now) */}
      <Planet
        label="FULL STACK"
        href="/projects"
        image="/planets/planet-fullstack.webp"
        size={190}
        color="#7b3fe4"
        className="left-[6%] top-[20%] hidden lg:block"
      />
      <Planet
        label="MOBILE"
        href="/projects"
        image="/planets/planet-mobile.webp"
        size={130}
        color="#2ec4f1"
        className="left-[24%] top-[12%] hidden lg:block"
        delay={1}
      />
      <Planet
        label="UI / UX"
        href="/projects"
        image="/planets/planet-uiux.webp"
        size={120}
        color="#f59e0b"
        className="right-[24%] top-[14%] hidden lg:block"
        delay={2}
      />
      <Planet
        label="BACKEND & API"
        href="/projects"
        image="/planets/planet-backend.webp"
        size={200}
        color="#c2703d"
        className="right-[6%] top-[48%] hidden lg:block"
        delay={0.5}
      />
      {/* content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-glow/30 bg-cyan-glow/5 px-4 py-1.5 font-mono text-xs tracking-[0.2em] text-cyan-glow"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          AVAILABLE FOR NEW MISSIONS AND COLLABORATIONS
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 font-display text-4xl font-black tracking-[0.15em] md:text-6xl"
        >
          HELLO, I&apos;M{" "}
          <span className="bg-linear-to-r from-violet-glow via-cyan-glow to-nebula bg-clip-text text-transparent">
            WISSAL
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mt-6 max-w-xl text-lg text-muted"
        >
          Full-stack &amp; mobile developer building fast, clean web and mobile
          apps with React, React Native and Node.js.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="bg-violet-glow px-8 py-4 font-mono text-sm tracking-[0.2em] transition hover:shadow-[0_0_30px_var(--color-violet-glow)]"
          >
            EXPLORE-WORK
          </Link>
          <Link
            href="/contact"
            className="border border-star/30 px-8 py-4 font-mono text-sm tracking-[0.2em] transition hover:border-cyan-glow hover:text-cyan-glow"
          >
            INITIATE-CONTACT
          </Link>
        </motion.div>
      </div>

      {/* curved planet surface at the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[60%] left-1/2 h-[80%] w-[160%] -translate-x-1/2 rounded-[50%] bg-linear-to-b from-violet-glow/70 via-space-800 to-space-950 shadow-[0_-20px_80px_rgba(123,63,228,0.5)]"
      />
    </section>
  );
}
