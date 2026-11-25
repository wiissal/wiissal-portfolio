"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname, href) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-space-950/60 px-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md md:px-6">
        {/* logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-glow font-display text-base font-bold">
            W
          </span>
          <span className="font-display text-sm font-bold tracking-widest">WISSAL</span>
        </Link>

        {/* desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`py-2 text-sm transition-colors ${active ? "text-cyan-glow" : "text-muted hover:text-star"}`}
                >
                  {link.label}
                </Link>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-cyan-glow"
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* hire me (desktop) */}
        <Link
          href="/contact"
          className="hidden rounded-xl bg-violet-glow px-5 py-2.5 text-sm font-medium transition hover:shadow-[0_0_24px_var(--color-violet-glow)] md:inline-block"
        >
          Hire Me
        </Link>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-xl p-2 text-star md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-space-950/90 p-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-sm ${active ? "bg-white/5 text-cyan-glow" : "text-muted"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-xl bg-violet-glow px-4 py-3 text-center text-sm font-medium"
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
}