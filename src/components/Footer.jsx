import Image from "next/image"
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/10 bg-space-950/60 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[2fr_1fr_1fr]">
        {/* brand */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/logo.webp" alt="" width={32} height={32} className="h-8 w-8" />
            <span className="font-display text-sm font-bold tracking-widest">
              WISSAL OUBOUJEMAA
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted">
            Full-stack &amp; mobile developer building fast, accessible web and
            mobile apps.
          </p>
        </div>

        {/* navigation */}
        <nav aria-label="Footer">
          <p className="font-mono text-xs tracking-[0.2em] text-cyan-glow">
            NAVIGATE
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition hover:text-star"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* connect */}
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-cyan-glow">
            CONNECT
          </p>
          <SocialLinks className="mt-4" />
          <p className="mt-4 text-xs text-muted/70">
            Morocco · Remote worldwide
          </p>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {year} All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  );
}
