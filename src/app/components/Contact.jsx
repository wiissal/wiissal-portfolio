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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
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

  return (
    <section ref={sectionRef} id="contact" style={{ backgroundColor: "#fff8f0", padding: "100px 0", scrollMarginTop: "80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 80 }}>
          <div style={{ width: 40, height: 2, backgroundColor: "#c08552" }} />
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#c08552", fontFamily: "sans-serif" }}>
            Contact
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Left */}
          <div ref={leftRef}>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "#4b2e2b", fontFamily: "var(--font-playfair)", margin: "0 0 24px", lineHeight: 1.1 }}>
              Lets build something together.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(75,46,43,0.6)", fontFamily: "sans-serif", lineHeight: 1.75, marginBottom: 48 }}>
              Have a project in mind or just want to say hello? Im always open to new opportunities and collaborations. Drop me a message and I will get back to you.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(192,133,82,0.5)"; e.currentTarget.style.backgroundColor = "rgba(192,133,82,0.08)"; e.currentTarget.style.transform = "translateX(6px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(75,46,43,0.1)"; e.currentTarget.style.backgroundColor = "rgba(192,133,82,0.03)"; e.currentTarget.style.transform = "translateX(0)"; }}
                  style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px", borderRadius: 14, border: "1px solid rgba(75,46,43,0.1)", backgroundColor: "rgba(192,133,82,0.03)", textDecoration: "none", transition: "all 0.3s ease" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: "rgba(192,133,82,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <c.icon size={20} color="#c08552" strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#c08552", fontFamily: "sans-serif", marginBottom: 3 }}>{c.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#4b2e2b", fontFamily: "sans-serif" }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div ref={rightRef} style={{ backgroundColor: "rgba(192,133,82,0.04)", borderRadius: 24, border: "1px solid rgba(192,133,82,0.15)", padding: "40px" }}>
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
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
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
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#4b2e2b", fontFamily: "sans-serif", display: "block", marginBottom: 8 }}>Message</label>
                  <textarea
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => e.target.style.borderColor = "#c08552"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(75,46,43,0.15)"}
                    style={{ ...inputStyle, resize: "none" }} />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "16px 32px", borderRadius: 50, border: "none", backgroundColor: sending ? "rgba(75,46,43,0.4)" : "#4b2e2b", color: "#fff8f0", fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 1.5, textTransform: "uppercase", cursor: sending ? "not-allowed" : "pointer", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "#c08552"; }}
                  onMouseLeave={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "#4b2e2b"; }}>
                  {sending ? "Sending..." : (
                    <>
                      Send Message
                      <Send size={16} strokeWidth={2} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}