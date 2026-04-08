"use client";

import { useRef, useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Take-a-Chef",
    category: "Fullstack App",
    description:
      "Mobile platform connecting clients with private chefs for personalized dining experiences. JWT auth, real-time booking, chef discovery and review system.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Zustand"],
    github: "https://github.com/wiissal/take-a-chef",
    image: "/images/take-a-chef.jpg",
  },
  {
    id: 2,
    title: "Grande Soirée Gnawa",
    category: "Fullstack App",
    description:
      "Mobile app for Gnawa music festival event booking in Agadir. Event discovery, ticket booking and cultural experience management.",
    tags: ["React Native", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/wiissal/grande-soiree-gnawa",
    image: "/images/gnawa.jpg",
  },
  {
    id: 3,
    title: "Elghousni Order Management",
    category: "Frontend",
    description:
      "React admin panel for a Moroccan olive oil cooperative. Manages orders, products and delivery status with real-time filtering.",
    tags: ["React", "Zustand", "CSS3", "React Router"],
    github: "https://github.com/wiissal/elghousni-order-management",
    image: "/images/elghousni.jpg",
  },
  {
    id: 4,
    title: "Beni Mellal Tourism",
    category: "Frontend",
    description:
      "Tourism discovery platform for Beni Mellal region showcasing local attractions, culture and travel experiences.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/medool421/beni-mellal-tourism",
    image: "/images/beni-mellal.jpg",
  },
  {
    id: 5,
    title: "CinéTanger",
    category: "Mobile App",
    description:
      "Cinema booking app for Tanger with EAS Build, Sentry monitoring, Turborepo monorepo and GitHub Actions CI/CD.",
    tags: ["React Native", "Expo", "Turborepo", "Sentry"],
    github: "https://github.com/wiissal/CineTanger-app",
    image: "/images/cinetanger.jpg",
  },
];

const CARD_WIDTH = 320;
const GAP = 20;

export default function Projects() {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [current, setCurrent] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);
  const [visible, setVisible] = useState({});
  const total = projects.length;

  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => setVisible((prev) => ({ ...prev, [i]: true })),
              i * 100,
            );
            obs.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const goTo = (index) => {
    const next = Math.max(0, Math.min(index, total - 1));
    setCurrent(next);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: next * (CARD_WIDTH + GAP),
        behavior: "smooth",
      });
    }
  };

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <>
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        id="projects"
        style={{
          backgroundColor: "#fff8f0",
          padding: "100px 0",
          scrollMarginTop: "80px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 40px",
            marginBottom: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{ width: 40, height: 2, backgroundColor: "#c08552" }}
                />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "#c08552",
                    fontFamily: "sans-serif",
                  }}
                >
                  My Work
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 800,
                  color: "#4b2e2b",
                  fontFamily: "var(--font-playfair)",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Featured Projects
              </h2>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 15,
                  color: "#4b2e2b",
                  letterSpacing: 2,
                  fontWeight: 500,
                  minWidth: 60,
                  textAlign: "center",
                }}
              >
                <span style={{ fontWeight: 800, fontSize: 18 }}>
                  {pad(current + 1)}
                </span>
                <span style={{ color: "#c08552", margin: "0 4px" }}>/</span>
                <span style={{ opacity: 0.5 }}>{pad(total)}</span>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={() => goTo(current - 1)}
                  disabled={current === 0}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "2px solid #4b2e2b",
                    backgroundColor: "transparent",
                    color: "#4b2e2b",
                    fontSize: 18,
                    cursor: current === 0 ? "not-allowed" : "pointer",
                    opacity: current === 0 ? 0.3 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.2s",
                  }}
                >
                  {"←"}
                </button>
                <button
                  onClick={() => goTo(current + 1)}
                  disabled={current === total - 1}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "2px solid #4b2e2b",
                    backgroundColor: "#4b2e2b",
                    color: "#fff8f0",
                    fontSize: 18,
                    cursor: current === total - 1 ? "not-allowed" : "pointer",
                    opacity: current === total - 1 ? 0.3 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.2s",
                  }}
                >
                  {"→"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: GAP,
            overflowX: "auto",
            paddingLeft: 40,
            paddingRight: 40,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingBottom: 20,
          }}
        >
          {projects.map((project, i) => {
            const isHovered = hoveredId === project.id;
            return (
              <div
                key={project.id}
                ref={(el) => (cardRefs.current[i] = el)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  minWidth: CARD_WIDTH,
                  height: 400,
                  borderRadius: 20,
                  overflow: "hidden",
                  position: "relative",
                  flexShrink: 0,
                  cursor: "pointer",
                  backgroundColor: "#2a1a18",
                  opacity: visible[i] ? 1 : 0,
                  animation: visible[i]
                    ? "cardIn 0.6s cubic-bezier(0.22,1,0.36,1) both"
                    : "none",
                  transform: isHovered
                    ? "translateY(-8px) scale(1.02)"
                    : "translateY(0) scale(1)",
                  transition:
                    "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
                  boxShadow: isHovered
                    ? "0 24px 48px rgba(75,46,43,0.3), 0 0 0 1px rgba(192,133,82,0.4)"
                    : "0 4px 20px rgba(75,46,43,0.12)",
                }}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: isHovered ? 0.75 : 0.55,
                      transition: "opacity 0.4s ease",
                    }}
                  />
                )}

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isHovered
                      ? "linear-gradient(to top, rgba(75,46,43,0.99) 45%, rgba(75,46,43,0.1) 100%)"
                      : "linear-gradient(to top, rgba(75,46,43,0.98) 40%, rgba(75,46,43,0.2) 100%)",
                    transition: "background 0.4s ease",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    right: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "rgba(255,248,240,0.15)",
                      color: "#fff8f0",
                      padding: "6px 14px",
                      borderRadius: 20,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                      textTransform: "uppercase",
                      border: "1px solid rgba(255,248,240,0.2)",
                    }}
                  >
                    {project.category}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: isHovered
                        ? "rgba(192,133,82,0.9)"
                        : "rgba(255,248,240,0.15)",
                      color: "#fff8f0",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      fontSize: 16,
                      border: "1px solid rgba(255,248,240,0.2)",
                      transition: "background 0.3s ease",
                    }}
                  >
                    {"↗"}
                  </a>
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 22,
                    transform: isHovered ? "translateY(0)" : "translateY(4px)",
                    transition: "transform 0.35s ease",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#fff8f0",
                      fontFamily: "var(--font-playfair)",
                      margin: "0 0 8px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 12.5,
                      color: "rgba(255,248,240,0.72)",
                      fontFamily: "sans-serif",
                      lineHeight: 1.6,
                      margin: "0 0 14px",
                    }}
                  >
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#c08552",
                          backgroundColor: "rgba(192,133,82,0.15)",
                          padding: "4px 10px",
                          borderRadius: 20,
                          fontFamily: "sans-serif",
                          border: "1px solid rgba(192,133,82,0.3)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <div
            style={{
              minWidth: 260,
              height: 400,
              borderRadius: 20,
              flexShrink: 0,
              backgroundColor: "#4b2e2b",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              border: "2px solid rgba(192,133,82,0.3)",
              padding: 32,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                backgroundColor: "rgba(192,133,82,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                border: "1px solid rgba(192,133,82,0.3)",
              }}
            >
              🐙
            </div>
            <div style={{ textAlign: "center" }}>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#fff8f0",
                  fontFamily: "var(--font-playfair)",
                  margin: "0 0 10px",
                }}
              >
                View All Projects
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,248,240,0.6)",
                  fontFamily: "sans-serif",
                  lineHeight: 1.6,
                  margin: "0 0 22px",
                }}
              >
                Explore more of my work and open-source contributions on GitHub
              </p>
              <a
                href="https://github.com/wiissal"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "11px 26px",
                  backgroundColor: "#c08552",
                  color: "#fff8f0",
                  borderRadius: 50,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                  letterSpacing: 1,
                }}
              >
                Visit GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
