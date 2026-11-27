"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Planet from "./Planet";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* badge */}
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 right-8 z-20 hidden items-center gap-2 whitespace-nowrap rounded-full border border-cyan-glow/30 bg-space-950/50 px-4 py-1.5 font-mono text-xs tracking-[0.2em] text-cyan-glow backdrop-blur-sm md:flex"
      >
        AVAILABLE FOR NEW MISSIONS
      </motion.p>

      {/* planets */}
      <Planet
        label="FULL STACK"
        href="/projects"
        image="/planets/planet-fullstack.webp"
        size={190}
        color="#7b3fe4"
        className="left-[3%] top-[14%] lg:left-[6%] lg:top-[22%]"
      />
      <Planet
        label="MOBILE"
        href="/projects"
        image="/planets/planet-mobile.webp"
        size={130}
        color="#2ec4f1"
        className="right-[8%] top-[13%] lg:left-[25%] lg:right-auto lg:top-[16%]"
        delay={1}
      />
      <Planet
        label="UI / UX"
        href="/projects"
        image="/planets/planet-uiux.webp"
        size={120}
        color="#f59e0b"
        className="left-[6%] top-[36%] lg:left-auto lg:right-[25%] lg:top-[18%]"
        delay={2}
      />
      <Planet
        label="BACKEND & API"
        href="/projects"
        image="/planets/planet-backend.webp"
        size={200}
        color="#c2703d"
        className="right-[3%] top-[30%] lg:right-[6%] lg:top-[36%]"
        delay={0.5}
      />
      {/* astronaut: outer div positionsinner motion.div animates */}
      <div className="absolute bottom-[39%] left-1/2 z-10 -translate-x-1/2 md:bottom-[33%]">
        <motion.div
          animate={
            reduceMotion ? {} : { y: [0, -8, 0], rotate: [-1.5, 1.5, -1.5] }
          }
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/hero/astronaut.webp"
            alt="Astronaut standing on a planet"
            width={340}
            height={885}
            priority
            className="h-[24vh] w-auto drop-shadow-[0_0_30px_rgba(123,63,228,0.45)] md:h-[38vh]"
          />
        </motion.div>
      </div>

      {/* planet ground */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[40%] left-1/2 h-[80%] w-[170%] -translate-x-1/2 rounded-[50%] bg-linear-to-b from-violet-glow/80 via-space-800 to-space-950 shadow-[0_-20px_80px_rgba(123,63,228,0.55)] md:-bottom-[45%]"
      />

      {/* name written on the ground */}
      <div className="absolute inset-x-0 bottom-[7%] z-20 px-6 text-center">
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display text-3xl font-black tracking-[0.15em] md:text-5xl lg:text-6xl"
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
          className="mx-auto mt-4 max-w-2xl text-balance tracking-wide text-star/80"
        >
          Full-stack &amp; mobile developer building fast, clean web and mobile
          apps.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-8 flex justify-center gap-3"
        >
          <Link
            href="/projects"
            className="rounded-xl bg-violet-glow px-5 py-3 font-mono text-xs tracking-[0.15em] transition hover:shadow-[0_0_30px_var(--color-violet-glow)] md:px-8 md:py-3.5 md:text-sm md:tracking-[0.2em]"
          >
            EXPLORE_WORK
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-star/30 bg-space-950/40 px-5 py-3 font-mono text-xs tracking-[0.15em] backdrop-blur-sm transition hover:border-cyan-glow hover:text-cyan-glow md:px-8 md:py-3.5 md:text-sm md:tracking-[0.2em]"
          >
            INITIATE_CONTACT
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
