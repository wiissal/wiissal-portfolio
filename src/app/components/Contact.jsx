"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const contacts = [
    {
      href: "mailto:wissal@example.com",
      label: "Email",
      svg: <Mail size={22} color="#c08552" strokeWidth={2} />,
    },
    {
      href: "https://github.com/wiissal",
      label: "GitHub",
      svg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#c08552">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      href: "https://linkedin.com/in/wissal-ouboujemaa-76079535b",
      label: "LinkedIn",
      svg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#c08552">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 12,
    border: "1.5px solid rgba(75,46,43,0.15)",
    backgroundColor: "rgba(192,133,82,0.04)",
    fontSize: 14,
    color: "#4b2e2b",
    fontFamily: "sans-serif",
    outline: "none",
    transition: "border-color 0.3s ease",
    boxSizing: "border-box",
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(rightRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <style>{`
        @keyframes float0 { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-10px);} }
        @keyframes float1 { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-10px);} }
        @keyframes float2 { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-10px);} }
        .ci-0{animation:float0 3s ease-in-out infinite;}
        .ci-1{animation:float1 3s ease-in-out infinite 0.5s;}
        .ci-2{animation:float2 3s ease-in-out infinite 1s;}
        .ci-0:hover,.ci-1:hover,.ci-2:hover{animation-play-state:paused;}
      `}</style>

      <section ref={sectionRef} id="contact" style={{ backgroundColor: "#fff8f0", padding: "100px 0", scrollMarginTop: "80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 60 }}>
            <div style={{ width: 40, height: 2, backgroundColor: "#c08552" }} />
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#c08552", fontFamily: "sans-serif" }}>
              Contact
            </span>
          </div>

          {/* Heading */}
          <div ref={leftRef} style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "#4b2e2b", fontFamily: "var(--font-playfair)", margin: "0 0 20px", lineHeight: 1.1 }}>
              Lets build something together.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(75,46,43,0.6)", fontFamily: "sans-serif", lineHeight: 1.75, maxWidth: 500, margin: "0 auto" }}>
              Have a project in mind or just want to say hello? Drop me a message and I will get back to you.
            </p>
          </div>

          {/* Floating icon buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 64 }}>
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`ci-${i}`}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#4b2e2b"; e.currentTarget.style.borderColor = "#4b2e2b"; e.currentTarget.style.transform = "translateY(-6px) scale(1.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(192,133,82,0.08)"; e.currentTarget.style.borderColor = "rgba(75,46,43,0.12)"; e.currentTarget.style.transform = ""; }}
                style={{ width: 60, height: 60, borderRadius: 18, backgroundColor: "rgba(192,133,82,0.08)", border: "1.5px solid rgba(75,46,43,0.12)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease", cursor: "pointer" }}>
                {c.svg}
              </a>
            ))}
          </div>

          {/* Form */}
          <div ref={rightRef} style={{ backgroundColor: "rgba(192,133,82,0.04)", borderRadius: 24, border: "1px solid rgba(192,133,82,0.15)", padding: "48px", maxWidth: 800, margin: "0 auto" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: "rgba(192,133,82,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4L19 7" stroke="#c08552" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#4b2e2b", fontFamily: "var(--font-playfair)", marginBottom: 10 }}>Message sent!</h3>
                <p style={{ fontSize: 14, color: "rgba(75,46,43,0.6)", fontFamily: "sans-serif" }}>I will get back to you as soon as possible.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: 24, padding: "10px 24px", borderRadius: 50, border: "2px solid #4b2e2b", backgroundColor: "transparent", color: "#4b2e2b", fontSize: 12, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer" }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#4b2e2b", fontFamily: "sans-serif", display: "block", marginBottom: 8 }}>Full Name</label>
                    <input type="text" required placeholder="Your name" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={(e) => e.target.style.borderColor = "#c08552"}
                      onBlur={(e) => e.target.style.borderColor = "rgba(75,46,43,0.15)"}
                      style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#4b2e2b", fontFamily: "sans-serif", display: "block", marginBottom: 8 }}>Email</label>
                    <input type="email" required placeholder="your@email.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={(e) => e.target.style.borderColor = "#c08552"}
                      onBlur={(e) => e.target.style.borderColor = "rgba(75,46,43,0.15)"}
                      style={inputStyle} />
                  </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#4b2e2b", fontFamily: "sans-serif", display: "block", marginBottom: 8 }}>Subject</label>
                  <input type="text" required placeholder="What's this about?" value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    onFocus={(e) => e.target.style.borderColor = "#c08552"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(75,46,43,0.15)"}
                    style={inputStyle} />
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#4b2e2b", fontFamily: "sans-serif", display: "block", marginBottom: 8 }}>Message</label>
                  <textarea required placeholder="Tell me about your project..." rows={6} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => e.target.style.borderColor = "#c08552"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(75,46,43,0.15)"}
                    style={{ ...inputStyle, resize: "none" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    type="submit"
                    disabled={sending}
                    onMouseEnter={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "#c08552"; }}
                    onMouseLeave={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "#4b2e2b"; }}
                    style={{ display: "flex", alignItems: "center", gap: 10, padding: "16px 48px", borderRadius: 50, border: "none", backgroundColor: sending ? "rgba(75,46,43,0.4)" : "#4b2e2b", color: "#fff8f0", fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 1.5, textTransform: "uppercase", cursor: sending ? "not-allowed" : "pointer", transition: "all 0.3s ease" }}>
                    {sending ? "Sending..." : (<>Send Message <Send size={16} strokeWidth={2} /></>)}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}