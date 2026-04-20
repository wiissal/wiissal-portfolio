"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, GitBranch, Link, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const contacts = [
    { icon: Mail, label: "Email", value: "wissal@example.com", href: "mailto:wissal@example.com" },
    { icon: GitBranch, label: "GitHub", value: "github.com/wiissal", href: "https://github.com/wiissal" },
    { icon: Link, label: "LinkedIn", value: "linkedin.com/in/wissal", href: "https://linkedin.com/in/wissal-ouboujemaa-76079535b" },
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
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <style>{`
        @keyframes float0 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes float1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        .contact-icon-0 { animation: float0 3s ease-in-out infinite; }
        .contact-icon-1 { animation: float1 3s ease-in-out infinite 0.4s; }
        .contact-icon-2 { animation: float2 3s ease-in-out infinite 0.8s; }
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
          <div ref={leftRef} style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "#4b2e2b", fontFamily: "var(--font-playfair)", margin: "0 0 20px", lineHeight: 1.1 }}>
              Lets build something together.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(75,46,43,0.6)", fontFamily: "sans-serif", lineHeight: 1.75, maxWidth: 600, margin: 0 }}>
              Have a project in mind or just want to say hello? Im always open to new opportunities and collaborations. Drop me a message and I will get back to you.
            </p>
          </div>

          {/* Contact cards */}
          <div ref={rightRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
            {contacts.map((c, i) => (
              <a
                key={i}
  href={c.href}
  target="_blank"
  rel="noopener noreferrer"
  className={`contact-icon-${i}`}
  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(192,133,82,0.5)"; e.currentTarget.style.backgroundColor = "rgba(192,133,82,0.08)"; e.currentTarget.style.animationPlayState = "paused"; e.currentTarget.style.transform = "translateY(-8px) scale(1.04)"; }}
  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(75,46,43,0.1)"; e.currentTarget.style.backgroundColor = "rgba(192,133,82,0.03)"; e.currentTarget.style.animationPlayState = "running"; e.currentTarget.style.transform = ""; }}
  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, padding: "32px 24px", borderRadius: 16, border: "1px solid rgba(75,46,43,0.1)", backgroundColor: "rgba(192,133,82,0.03)", textDecoration: "none", transition: "border-color 0.3s ease, background-color 0.3s ease" }}>
  <div style={{ width: 52, height: 52, borderRadius: 14, backgroundColor: "rgba(192,133,82,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <c.icon size={22} color="#c08552" strokeWidth={2} />
  </div>
  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#4b2e2b", fontFamily: "sans-serif" }}>{c.label}</div>
</a>
            ))}
          </div>

          {/* Full width form */}
          <div style={{ backgroundColor: "rgba(192,133,82,0.04)", borderRadius: 24, border: "1px solid rgba(192,133,82,0.15)", padding: "48px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: "rgba(192,133,82,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4L19 7" stroke="#c08552" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#4b2e2b", fontFamily: "var(--font-playfair)", marginBottom: 10 }}>Message sent!</h3>
                <p style={{ fontSize: 14, color: "rgba(75,46,43,0.6)", fontFamily: "sans-serif" }}>I`'`ll get back to you as soon as possible.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: 24, padding: "10px 24px", borderRadius: 50, border: "2px solid #4b2e2b", backgroundColor: "transparent", color: "#4b2e2b", fontSize: 12, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer" }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#4b2e2b", fontFamily: "sans-serif", display: "block", marginBottom: 8 }}>Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={(e) => e.target.style.borderColor = "#c08552"}
                      onBlur={(e) => e.target.style.borderColor = "rgba(75,46,43,0.15)"}
                      style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#4b2e2b", fontFamily: "sans-serif", display: "block", marginBottom: 8 }}>Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={(e) => e.target.style.borderColor = "#c08552"}
                      onBlur={(e) => e.target.style.borderColor = "rgba(75,46,43,0.15)"}
                      style={inputStyle} />
                  </div>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#4b2e2b", fontFamily: "sans-serif", display: "block", marginBottom: 8 }}>Message</label>
                  <textarea
                    required
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => e.target.style.borderColor = "#c08552"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(75,46,43,0.15)"}
                    style={{ ...inputStyle, resize: "none" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button
                    type="submit"
                    disabled={sending}
                    onMouseEnter={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "#c08552"; }}
                    onMouseLeave={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "#4b2e2b"; }}
                    style={{ display: "flex", alignItems: "center", gap: 10, padding: "16px 40px", borderRadius: 50, border: "none", backgroundColor: sending ? "rgba(75,46,43,0.4)" : "#4b2e2b", color: "#fff8f0", fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 1.5, textTransform: "uppercase", cursor: sending ? "not-allowed" : "pointer", transition: "all 0.3s ease" }}>
                    {sending ? "Sending..." : (
                      <>
                        Send Message
                        <Send size={16} strokeWidth={2} />
                      </>
                    )}
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