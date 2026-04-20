"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const perks = [
  "Clean, documented & maintainable code",
  "Regular updates & transparent communication",
  "From design to deployment — fully handled",
  "Post-delivery support included",
];

export default function HireMe() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", type: "", budget: "", timeline: "", description: "" });
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
    setForm({ name: "", email: "", type: "", budget: "", timeline: "", description: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 12,
    border: "1.5px solid rgba(255,248,240,0.15)",
    backgroundColor: "rgba(255,248,240,0.06)",
    fontSize: 14,
    color: "#fff8f0",
    fontFamily: "sans-serif",
    outline: "none",
    transition: "border-color 0.3s ease",
    boxSizing: "border-box",
  };

  const selectStyle = {
    ...inputStyle,
    cursor: "pointer",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23c08552' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 16px center",
  };

  const labelStyle = {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "rgba(255,248,240,0.6)",
    fontFamily: "sans-serif",
    display: "block",
    marginBottom: 8,
  };

  return (
    <section ref={sectionRef} id="hire-me" style={{ backgroundColor: "#4b2e2b", padding: "100px 0", scrollMarginTop: "80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 80 }}>
          <div style={{ width: 40, height: 2, backgroundColor: "#c08552" }} />
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#c08552", fontFamily: "sans-serif" }}>
            Hire Me
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Left */}
          <div ref={leftRef}>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 800, color: "#fff8f0", fontFamily: "var(--font-playfair)", margin: "0 0 24px", lineHeight: 1.1 }}>
              Ready to start a project?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,248,240,0.6)", fontFamily: "sans-serif", lineHeight: 1.75, marginBottom: 48 }}>
              Tell me about your project and I will get back to you within 24 hours with a proposal tailored to your needs.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {perks.map((perk, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, backgroundColor: "rgba(192,133,82,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#c08552" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,248,240,0.8)", fontFamily: "sans-serif" }}>{perk}</span>
                </div>
              ))}
            </div>

            {/* Available badge */}
            <div style={{ marginTop: 48, display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 20px", borderRadius: 50, border: "1px solid rgba(192,133,82,0.3)", backgroundColor: "rgba(192,133,82,0.1)" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#4ade80", boxShadow: "0 0 8px #4ade80" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,248,240,0.8)", fontFamily: "sans-serif" }}>Available for new projects</span>
            </div>
          </div>

          {/* Right — Form */}
          <div ref={rightRef} style={{ backgroundColor: "rgba(255,248,240,0.04)", borderRadius: 24, border: "1px solid rgba(255,248,240,0.08)", padding: "40px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: "rgba(192,133,82,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4L19 7" stroke="#c08552" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff8f0", fontFamily: "var(--font-playfair)", marginBottom: 10 }}>Request received!</h3>
                <p style={{ fontSize: 14, color: "rgba(255,248,240,0.6)", fontFamily: "sans-serif" }}>I will review your project and get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: 24, padding: "10px 24px", borderRadius: 50, border: "2px solid rgba(255,248,240,0.3)", backgroundColor: "transparent", color: "#fff8f0", fontSize: 12, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer" }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input type="text" required placeholder="Your name" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={(e) => e.target.style.borderColor = "#c08552"}
                      onBlur={(e) => e.target.style.borderColor = "rgba(255,248,240,0.15)"}
                      style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input type="email" required placeholder="your@email.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={(e) => e.target.style.borderColor = "#c08552"}
                      onBlur={(e) => e.target.style.borderColor = "rgba(255,248,240,0.15)"}
                      style={inputStyle} />
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Project Type</label>
                  <select required value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    onFocus={(e) => e.target.style.borderColor = "#c08552"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,248,240,0.15)"}
                    style={selectStyle}>
                    <option value="" disabled style={{ backgroundColor: "#4b2e2b" }}>Select project type</option>
                    <option value="web" style={{ backgroundColor: "#4b2e2b" }}>Web Application</option>
                    <option value="mobile" style={{ backgroundColor: "#4b2e2b" }}>Mobile Application</option>
                    <option value="api" style={{ backgroundColor: "#4b2e2b" }}>Backend & API</option>
                    <option value="design" style={{ backgroundColor: "#4b2e2b" }}>UI/UX Design</option>
                    <option value="fullstack" style={{ backgroundColor: "#4b2e2b" }}>Full Project (Design + Dev)</option>
                    <option value="other" style={{ backgroundColor: "#4b2e2b" }}>Other</option>
                  </select>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                  <div>
                    <label style={labelStyle}>Budget</label>
                    <select required value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      onFocus={(e) => e.target.style.borderColor = "#c08552"}
                      onBlur={(e) => e.target.style.borderColor = "rgba(255,248,240,0.15)"}
                      style={selectStyle}>
                      <option value="" disabled style={{ backgroundColor: "#4b2e2b" }}>Select budget</option>
                      <option value="small" style={{ backgroundColor: "#4b2e2b" }}>Less than $500</option>
                      <option value="medium" style={{ backgroundColor: "#4b2e2b" }}>$500 — $1,000</option>
                      <option value="large" style={{ backgroundColor: "#4b2e2b" }}>$1,000 — $3,000</option>
                      <option value="xlarge" style={{ backgroundColor: "#4b2e2b" }}>$3,000+</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Timeline</label>
                    <select required value={form.timeline}
                      onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      onFocus={(e) => e.target.style.borderColor = "#c08552"}
                      onBlur={(e) => e.target.style.borderColor = "rgba(255,248,240,0.15)"}
                      style={selectStyle}>
                      <option value="" disabled style={{ backgroundColor: "#4b2e2b" }}>Select timeline</option>
                      <option value="asap" style={{ backgroundColor: "#4b2e2b" }}>ASAP</option>
                      <option value="1month" style={{ backgroundColor: "#4b2e2b" }}>Within 1 month</option>
                      <option value="3months" style={{ backgroundColor: "#4b2e2b" }}>2 — 3 months</option>
                      <option value="flexible" style={{ backgroundColor: "#4b2e2b" }}>Flexible</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>Project Description</label>
                  <textarea required placeholder="Describe your project, goals, and any specific requirements..." rows={5} value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    onFocus={(e) => e.target.style.borderColor = "#c08552"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,248,240,0.15)"}
                    style={{ ...inputStyle, resize: "none" }} />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  onMouseEnter={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "#c08552"; }}
                  onMouseLeave={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "#fff8f0"; }}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "16px 32px", borderRadius: 50, border: "none", backgroundColor: sending ? "rgba(255,248,240,0.3)" : "#fff8f0", color: sending ? "#fff8f0" : "#4b2e2b", fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 1.5, textTransform: "uppercase", cursor: sending ? "not-allowed" : "pointer", transition: "all 0.3s ease" }}>
                  {sending ? "Sending..." : (<>Send Project Brief <Send size={16} strokeWidth={2} /></>)}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}