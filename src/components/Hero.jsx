"use client";
import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Planet from "./Planet";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};
// combines mouse movement (depth) and scroll progress into x/y offsets
function useParallax(mouseX, mouseY, scroll, mouseDepth, scrollDepth) {
  const x = useTransform(mouseX, (v) => v * mouseDepth);
  const y = useTransform([mouseY, scroll], ([m, s]) => m * mouseDepth + s * scrollDepth);
  return { x, y };
}
export default function Hero() {
  const reduceMotion = useReducedMotion();

  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 18 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const m = reduceMotion ? 0 : 1; // turn everything off for reduced motion
    // each planet: its own mouse depth (negative = opposite direction) and scroll speed
  const pFull = useParallax(smoothX, smoothY, scrollYProgress, 110 * m, -420 * m);
  const pMobile = useParallax(smoothX, smoothY, scrollYProgress, -70 * m, -300 * m);
  const pUiux = useParallax(smoothX, smoothY, scrollYProgress, 55 * m, -200 * m);
  const pBackend = useParallax(smoothX, smoothY, scrollYProgress, -95 * m, -360 * m);

  const astro = useParallax(smoothX, smoothY, scrollYProgress, 30 * m, 120 * m);
  const ground = useParallax(smoothX, smoothY, scrollYProgress, 14 * m, 220 * m);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, reduceMotion ? 1 : 0]);

  function handlePointerMove(e) {
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  }
    return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative min-h-screen overflow-hidden"
    >
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

      {/* far planets: big, move the most */}
        <motion.div style={pFull} className="pointer-events-none absolute inset-0">
        <Planet
          label="FULL STACK"
          href="/projects"
          image="/planets/planet-fullstack.webp"
          size={190}
          color="#7b3fe4"
          className="left-[3%] top-[14%] lg:left-[6%] lg:top-[22%]"
        />
        </motion.div>
          <motion.div style={pBackend} className="pointer-events-none absolute inset-0">
        <Planet
          label="BACKEND & API"
          href="/projects"
          image="/planets/planet-backend.webp"
          size={200}
          color="#c2703d"
          className="right-[3%] top-[30%] lg:right-[6%] lg:top-[36%]"
          delay={0.5}
        />
        </motion.div>
      {/* near planets */}
      <motion.div style={pMobile} className="pointer-events-none absolute inset-0">
        <Planet
          label="MOBILE"
          href="/projects"
          image="/planets/planet-mobile.webp"
          size={130}
          color="#2ec4f1"
          className="right-[8%] top-[13%] lg:left-[25%] lg:right-auto lg:top-[16%]"
          delay={1}
        />
        </motion.div>
        <motion.div style={pUiux} className="pointer-events-none absolute inset-0">
        <Planet
          label="UI / UX"
          href="/projects"
          image="/planets/planet-uiux.webp"
          size={120}
          color="#f59e0b"
          className="left-[6%] top-[36%] lg:left-auto lg:right-[25%] lg:top-[18%]"
          delay={2}
        />
      </motion.div>

      {/* planet surface (before the astronaut so he stands in front) */}
      <motion.div style={ground} className="pointer-events-none absolute inset-0">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[42%] [mask-image:linear-gradient(to_bottom,transparent,black_15%)] md:h-[45%]"
        >
          <Image
            src="/hero/planet-surface.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
      </motion.div>

      {/* astronaut */}
      <motion.div style={astro} className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute bottom-[39%] left-1/2 -translate-x-1/2 md:bottom-[36%]">
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -8, 0], rotate: [-1.5, 1.5, -1.5] }}
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
      </motion.div>

      {/* name written on the ground: fades out on scroll */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute inset-x-0 bottom-[7%] z-20 px-6 text-center"
      >
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
          Full-stack &amp; mobile developer building fast, clean web and mobile apps.
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
      </motion.div>
    </section>
  );
}