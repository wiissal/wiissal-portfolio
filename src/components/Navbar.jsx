"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-space-950/70 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-glow font-display text-lg font-bold">
            W
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-widest">WISSAL OUBOUJEMAA</span>
            <span className="block font-mono text-[11px] tracking-[0.2em] text-muted">FULL STACK & MOBILE</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 font-mono text-sm tracking-[0.2em] transition-colors ${
                    active ? "text-cyan-glow" : "text-muted hover:text-star"
                  }`}
                >
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-[0_0_8px_var(--color-cyan-glow)]" />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA button */}
        <Link
          href="/contact"
          className="hidden border border-violet-glow px-5 py-2.5 font-mono text-sm tracking-[0.2em] text-star transition hover:bg-violet-glow hover:shadow-[0_0_20px_var(--color-violet-glow)] md:inline-block"
        >
          CONNECT_
        </Link>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="text-star md:hidden" aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-6 border-t border-white/10 bg-space-950 px-6 py-6 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-mono text-sm tracking-[0.2em] ${
                  pathname === link.href ? "text-cyan-glow" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}