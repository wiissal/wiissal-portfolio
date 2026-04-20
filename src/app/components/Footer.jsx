"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 95%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services & Technologies", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      label: "Email",
      href: "mailto:wissal@example.com",
      front: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com/wiissal",
      front: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/wissal-ouboujemaa-76079535b",
      front: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .footer-icon { perspective: 400px; }
        .footer-icon-inner { width: 44px; height: 44px; position: relative; transform-style: preserve-3d; transition: transform 0.5s cubic-bezier(0.22,1,0.36,1); }
        .footer-icon:hover .footer-icon-inner { transform: rotateY(180deg); }
        .footer-icon-front, .footer-icon-back { position: absolute; inset: 0; border-radius: 12px; display: flex; align-items: center; justify-content: center; backface-visibility: hidden; }
        .footer-icon-front { background: rgba(255,248,240,0.06); border: 1px solid rgba(255,248,240,0.1); color: rgba(255,248,240,0.6); }
        .footer-icon-back { background: #c08552; border: 1px solid #c08552; color: #fff8f0; transform: rotateY(180deg); }
      `}</style>

      <footer ref={footerRef} style={{ backgroundColor: "#2a1a18", padding: "80px 0 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

          {/* Main grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 80, marginBottom: 64 }}>

            {/* Col 1 — Logo + tagline */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: "#c08552", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff8f0", fontWeight: 800, fontSize: 20 }}>W</span>
                </div>
                <span style={{ fontSize: 22, fontWeight: 700, color: "#fff8f0", letterSpacing: "-0.5px" }}>wissal.</span>
              </div>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#fff8f0", fontFamily: "sans-serif", marginBottom: 12 }}>
                Building digital products that work.
              </p>
              <p style={{ fontSize: 13, color: "rgba(255,248,240,0.45)", fontFamily: "sans-serif", lineHeight: 1.7, margin: 0 }}>
                Fullstack & mobile developer based in Morocco, turning ideas into production-ready applications.
              </p>
            </div>

            {/* Col 2 — Important links */}
            <div>
              <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#c08552", fontFamily: "sans-serif", marginBottom: 24, margin: "0 0 24px" }}>
                Important Links
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#c08552"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,248,240,0.55)"}
                    style={{ fontSize: 14, color: "rgba(255,248,240,0.55)", textDecoration: "none", fontFamily: "sans-serif", transition: "color 0.2s ease" }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3 — Reach me */}
            <div>
              <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#c08552", fontFamily: "sans-serif", margin: "0 0 24px" }}>
                Reach Me
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c08552" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span style={{ fontSize: 13, color: "rgba(255,248,240,0.55)", fontFamily: "sans-serif" }}>Agadir, Morocco</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c08552" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:wissaloa1@gmail.com" style={{ fontSize: 13, color: "rgba(255,248,240,0.55)", fontFamily: "sans-serif", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#c08552"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,248,240,0.55)"}>
                    wissaloa1@gmail.com
                  </a>
                </div>
              </div>

              {/* Social icons with flip */}
              <div style={{ display: "flex", gap: 10 }}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-icon" style={{ textDecoration: "none" }}>
                    <div className="footer-icon-inner">
                      <div className="footer-icon-front">{s.front}</div>
                      <div className="footer-icon-back">{s.front}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(255,248,240,0.08)", padding: "24px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontSize: 13, color: "rgba(255,248,240,0.35)", fontFamily: "sans-serif", margin: 0, textAlign: "center" }}>
              © 2026 Made in 🇲🇦 by Wissal Ouboujemaa. All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}