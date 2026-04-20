"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Send, X } from "lucide-react";

const perks = [
  "Clean, documented & maintainable code",
  "Regular updates & transparent communication",
  "From design to deployment — fully handled",
  "Post-delivery support included",
];

export default function HireMe({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", type: "", budget: "", timeline: "", description: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(panelRef.current, { x: "100%" }, { x: "0%", duration: 0.5, ease: "power3.out" });
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(panelRef.current, { x: "100%", duration: 0.4, ease: "power3.in" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in",
      onComplete: onClose });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", type: "", budget: "", timeline: "", description: "" });
  };

  if (!isOpen) return null;

  const inputStyle = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 10,
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
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "rgba(255,248,240,0.5)",
    fontFamily: "sans-serif",
    display: "block",
    marginBottom: 8,
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000 }}>
      {/* Overlay */}
      <div ref={overlayRef} onClick={handleClose} style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }} />

      {/* Panel */}
      <div ref={panelRef} style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "100%", maxWidth: 560, backgroundColor: "#4b2e2b", overflowY: "auto", padding: "40px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 28, height: 2, backgroundColor: "#c08552" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#c08552", fontFamily: "sans-serif" }}>
                Hire Me
              </span>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff8f0", fontFamily: "var(--font-playfair)", margin: 0, lineHeight: 1.2 }}>
              Lets start a project.
            </h2>
          </div>
          <button onClick={handleClose} style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(255,248,240,0.15)", backgroundColor: "rgba(255,248,240,0.06)", color: "#fff8f0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <X size={18} />
          </button>
        </div>

        {/* Available badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 50, border: "1px solid rgba(192,133,82,0.3)", backgroundColor: "rgba(192,133,82,0.08)", marginBottom: 32 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,248,240,0.7)", fontFamily: "sans-serif" }}>Available for new projects</span>
        </div>

        {/* Perks */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
          {perks.map((perk, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, backgroundColor: "rgba(192,133,82,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#c08552" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ fontSize: 13, color: "rgba(255,248,240,0.7)", fontFamily: "sans-serif" }}>{perk}</span>
            </div>
          ))}
        </div>

        <div style={{ width: "100%", height: 1, backgroundColor: "rgba(255,248,240,0.08)", marginBottom: 32 }} />

        {/* Form */}
        {sent ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", backgroundColor: "rgba(192,133,82,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l4 4L19 7" stroke="#c08552" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff8f0", fontFamily: "var(--font-playfair)", marginBottom: 8 }}>Request received!</h3>
            <p style={{ fontSize: 13, color: "rgba(255,248,240,0.6)", fontFamily: "sans-serif", marginBottom: 24 }}>I will review your project and get back to you within 24 hours.</p>
            <button onClick={() => setSent(false)} style={{ padding: "10px 24px", borderRadius: 50, border: "1.5px solid rgba(255,248,240,0.2)", backgroundColor: "transparent", color: "#fff8f0", fontSize: 12, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer" }}>
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
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
            <div>
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
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
            <div>
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
              onMouseEnter={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "#c08552"; e.currentTarget.style.color = "#fff8f0"; }}
              onMouseLeave={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "#fff8f0"; e.currentTarget.style.color = "#4b2e2b"; }}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "16px 32px", borderRadius: 50, border: "none", backgroundColor: sending ? "rgba(255,248,240,0.2)" : "#fff8f0", color: sending ? "#fff8f0" : "#4b2e2b", fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 1.5, textTransform: "uppercase", cursor: sending ? "not-allowed" : "pointer", transition: "all 0.3s ease" }}>
              {sending ? "Sending..." : (<>Send Project Brief <Send size={16} strokeWidth={2} /></>)}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}