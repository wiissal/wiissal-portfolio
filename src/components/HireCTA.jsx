"use client";

import Link from "next/link";
import { useHire } from "./HireProvider";

export default function HireCTA() {
  const { openHire } = useHire();

  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-violet-glow/30 via-space-800/70 to-cyan-glow/20 px-8 py-16 text-center md:py-20">
        {/* decorative glow */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-glow/30 blur-3xl" />

        <p className="relative font-mono text-xs tracking-[0.3em] text-cyan-glow">NEXT_MISSION</p>
        <h2 className="relative mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-bold tracking-widest md:text-4xl">
          READY TO BUILD SOMETHING TOGETHER?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-muted">
          I&apos;m available for freelance projects and full-time roles. Tell me what you&apos;re building.
        </p>

        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={openHire}
            className="rounded-xl bg-violet-glow px-8 py-3.5 font-medium transition hover:shadow-[0_0_30px_var(--color-violet-glow)]"
          >
            Hire Me
          </button>
          <Link
            href="/contact"
            className="rounded-xl border border-white/20 bg-space-950/40 px-8 py-3.5 font-medium transition hover:border-cyan-glow hover:text-cyan-glow"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}