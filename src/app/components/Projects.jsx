"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

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
  {
    id: 6,
    title: "CAN 2026 API",
    category: "Backend API",
    description:
      "REST API for Africa Cup of Nations 2026 tournament management. Full CRUD for teams, players and matches with JWT auth, Bcrypt, Sequelize ORM and PostgreSQL.",
    tags: ["Node.js", "Express", "PostgreSQL", "Sequelize", "JWT"],
    github: "https://github.com/marouaneakrich/CAF-API-Management",
    image: "/images/can-api.jpg",
  },
];

const CARD_WIDTH = 320;
const GAP = 24;

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
        { threshold: 0.1 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const index = Math.round(el.scrollLeft / (CARD_WIDTH + GAP));
      setCurrent(Math.min(index, total - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [total]);

  const handleMouseMove = (e, i) => {
    const card = cardRefs.current[i];
    if (!card || i !== current) return;
    const r = card.getBoundingClientRect();
    const xN = (e.clientX - r.left) / r.width - 0.5;
    const yN = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(card, {
      rotateY: xN * 14,
      rotateX: -yN * 10,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.4,
    });
  };

  const handleMouseLeave = (i) => {
    setHoveredId(null);
    gsap.to(cardRefs.current[i], {
      rotateY: 0,
      rotateX: 0,
      duration: 0.9,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <>
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .projects-track::-webkit-scrollbar { display: none; }
      `}</style>

      <section
        id="projects"
        style={{
          backgroundColor: "#fff8f0",
          padding: "100px 0",
          scrollMarginTop: "80px",
        }}
      >
        {/* Header */}
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

            {/* Counter + progress */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 8,
              }}
            >
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 15,
                  color: "#4b2e2b",
                  letterSpacing: 2,
                }}
              >
                <span style={{ fontWeight: 800, fontSize: 20 }}>
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span style={{ color: "#c08552", margin: "0 4px" }}>/</span>
                <span style={{ opacity: 0.4 }}>
                  {String(total).padStart(2, "0")}
                </span>
              </div>
              <div
                style={{
                  width: 100,
                  height: 2,
                  backgroundColor: "rgba(75,46,43,0.12)",
                  borderRadius: 2,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: 2,
                    backgroundColor: "#c08552",
                    width: `${((current + 1) / total) * 100}%`,
                    transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 40px",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 12,
              color: "rgba(75,46,43,0.35)",
              fontFamily: "sans-serif",
              letterSpacing: 1,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>{"⟵"}</span> scroll to explore <span>{"⟶"}</span>
          </span>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="projects-track"
          style={{
            display: "flex",
            gap: GAP,
            overflowX: "auto",
            paddingLeft: 40,
            paddingRight: 40,
            paddingBottom: 32,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            alignItems: "center",
          }}
        >
          {projects.map((project, i) => {
            const isActive = current === i;
            const isHovered = hoveredId === project.id;
            return (
              <div
                key={project.id}
                ref={(el) => (cardRefs.current[i] = el)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => handleMouseLeave(i)}
                onMouseMove={(e) => handleMouseMove(e, i)}
                style={{
                  minWidth: CARD_WIDTH,
                  height: isActive ? 440 : 380,
                  borderRadius: 22,
                  overflow: "hidden",
                  position: "relative",
                  flexShrink: 0,
                  cursor: isActive ? "grab" : "pointer",
                  backgroundColor: "#1a0e0c",
                  scrollSnapAlign: "start",
                  opacity: visible[i] ? 1 : 0,
                  animation: visible[i]
                    ? "cardIn 0.6s cubic-bezier(0.22,1,0.36,1) both"
                    : "none",
                  transform: isActive
                    ? "translateY(0) scale(1)"
                    : "translateY(16px) scale(0.92)",
                  transition:
                    "transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease, height 0.5s cubic-bezier(0.22,1,0.36,1), filter 0.5s ease",
                  boxShadow: isActive
                    ? "0 40px 80px rgba(75,46,43,0.4), 0 0 0 1px rgba(192,133,82,0.4)"
                    : "0 4px 20px rgba(75,46,43,0.08)",
                  filter: isActive ? "none" : "brightness(0.55) saturate(0.65)",
                  transformStyle: "preserve-3d",
                }}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      opacity: isHovered ? 0.95 : isActive ? 0.85 : 0.65,
                      transition: "opacity 0.5s ease, transform 0.6s ease",
                      transform: isHovered ? "scale(1.06)" : "scale(1)",
                    }}
                  />
                )}

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(20,8,6,0.98) 28%, rgba(20,8,6,0.25) 65%, rgba(20,8,6,0.0) 100%)",
                    transition: "background 0.4s ease",
                  }}
                />

                {/* Hover center CTA */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: isHovered && isActive ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    zIndex: 10,
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 26px",
                      backgroundColor: "#c08552",
                      color: "#fff8f0",
                      borderRadius: 50,
                      fontSize: 11,
                      fontWeight: 700,
                      textDecoration: "none",
                      fontFamily: "sans-serif",
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
                    }}
                  >
                    View on GitHub {"↗"}
                  </a>
                </div>

                {/* Active top accent */}
                {isActive && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background:
                        "linear-gradient(to right, #c08552, rgba(192,133,82,0.1))",
                      borderRadius: "22px 22px 0 0",
                    }}
                  />
                )}

                {/* Top row */}
                <div
                  style={{
                    position: "absolute",
                    top: 18,
                    left: 18,
                    right: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "rgba(192,133,82,0.2)",
                      color: "#c08552",
                      padding: "5px 13px",
                      borderRadius: 20,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: 1.5,
                      fontFamily: "sans-serif",
                      textTransform: "uppercase",
                      border: "1px solid rgba(192,133,82,0.4)",
                    }}
                  >
                    {project.category}
                  </span>
                  {isActive && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "rgba(255,248,240,0.12)",
                        color: "#fff8f0",
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        fontSize: 16,
                        border: "1px solid rgba(255,248,240,0.15)",
                        transition: "background 0.3s ease",
                      }}
                    >
                      {"↗"}
                    </a>
                  )}
                </div>

                {/* Bottom content */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "24px 22px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: isActive ? 26 : 20,
                      fontWeight: 800,
                      color: "#fff8f0",
                      fontFamily: "var(--font-playfair)",
                      margin: "0 0 8px",
                      lineHeight: 1.2,
                      transition: "font-size 0.4s ease",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 12.5,
                      color: "rgba(255,248,240,0.65)",
                      fontFamily: "sans-serif",
                      lineHeight: 1.6,
                      margin: "0 0 14px",
                      maxHeight: isActive ? 80 : 0,
                      overflow: "hidden",
                      opacity: isActive ? 1 : 0,
                      transition:
                        "max-height 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
                    }}
                  >
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          color: "rgba(255,248,240,0.7)",
                          backgroundColor: "rgba(255,248,240,0.07)",
                          padding: "4px 10px",
                          borderRadius: 20,
                          fontFamily: "sans-serif",
                          border: "1px solid rgba(255,248,240,0.12)",
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

          {/* View All card */}
          <div
            style={{
              minWidth: 260,
              height: 380,
              borderRadius: 22,
              flexShrink: 0,
              backgroundColor: "#1a0e0c",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              border: "1px solid rgba(192,133,82,0.2)",
              padding: 32,
              scrollSnapAlign: "start",
              transform: "translateY(16px) scale(0.92)",
              filter: "brightness(0.75)",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                backgroundColor: "rgba(192,133,82,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                border: "1px solid rgba(192,133,82,0.2)",
              }}
            >
              🐙
            </div>
            <div style={{ textAlign: "center" }}>
              <h3
                style={{
                  fontSize: 20,
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
                  fontSize: 12,
                  color: "rgba(255,248,240,0.4)",
                  fontFamily: "sans-serif",
                  lineHeight: 1.6,
                  margin: "0 0 22px",
                }}
              >
                Explore more of my work on GitHub
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
                  fontSize: 11,
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                }}
              >
                Visit GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div
          style={{
            maxWidth: 1200,
            margin: "16px auto 0",
            padding: "0 40px",
            display: "flex",
            gap: 8,
          }}
        >
          {projects.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor:
                  i === current ? "#c08552" : "rgba(75,46,43,0.18)",
                transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                cursor: "default",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
