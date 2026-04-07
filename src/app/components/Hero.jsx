"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff8f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 40px",
        paddingTop: 80,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 2, backgroundColor: "#c08552" }} />
          <span
            style={{
              marginTop: 10,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#c08552",
              fontFamily: "sans-serif",
            }}
          >
            Design & Code
          </span>
        </div>

        {/* Line 1 */}
        <div style={{ display: "flex", gap: "0.3em" }}>
          <span
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 800,
              color: "#4b2e2b",
              lineHeight: 1.05,
              fontFamily: "var(--font-playfair)",
            }}
          >
            Solutions
          </span>
          <span
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 800,
              color: "#4b2e2b",
              lineHeight: 1.05,
              fontFamily: "var(--font-playfair)",
            }}
          >
            for
          </span>
        </div>

        {/* Line 2 */}
        <div style={{ display: "flex", gap: "0.3em" }}>
          <span
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 800,
              color: "#c08552",
              lineHeight: 1.05,
              fontFamily: "var(--font-playfair)",
            }}
          >
            your
          </span>
          <span
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 800,
              color: "#c08552",
              lineHeight: 1.05,
              fontFamily: "var(--font-playfair)",
            }}
          >
            business.
          </span>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 18,
            color: "#8c5a3c",
            fontFamily: "sans-serif",
            maxWidth: 520,
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Wissal Ouboujemaa , I am a Fullstack & Mobile Developer based in Morocco 🇲🇦
          building clean, performant web and mobile apps that create real
          impact in your businesses and your daily lives.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "16px 36px",
              backgroundColor: "#4b2e2b",
              color: "#fff8f0",
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 1,
              textDecoration: "none",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
            }}
          >
            See My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "16px 36px",
              backgroundColor: "transparent",
              color: "#4b2e2b",
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 1,
              textDecoration: "none",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
              border: "2px solid #4b2e2b",
            }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: 40,
            paddingTop: 40,
            borderTop: "1px solid rgba(192,133,82,0.2)",
          }}
        >
          {[
            { number: "5+", label: "Projects Completed" },
            { number: "5", label: "Languages Spoken" },
            { number: "3+", label: "Technologies Mastered" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: "#4b2e2b",
                  fontFamily: "var(--font-playfair)",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "#8c5a3c",
                  fontFamily: "sans-serif",
                  marginTop: 6,
                  letterSpacing: 1,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
