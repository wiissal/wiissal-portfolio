"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Take-a-Chef",
    category: "Fullstack",
    description:
      "Mobile platform connecting clients with private chefs for personalized dining experiences. JWT auth, real-time booking, chef discovery and review system.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Zustand"],
    github: "https://github.com/wiissal/take-a-chef",
    image: "/images/take-a-chef.jpg",
  },
  {
    id: 2,
    title: "Grande Soirée Gnawa",
    category: "Fullstack ",
    description:
      "Mobile app for Gnawa music festival event booking in Agadir. Event discovery, ticket booking and cultural experience management.",
    tags: ["React Native", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/wiissal/grande-soiree-gnawa",
    image: "/images/grande-soiree-gnawa.jpg",
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
    github: "https://github.com/medood421/beni-mellal-tourism",
    image: "/images/beni-mellal.jpg",
  },
  {
    id: 5,
    title: "CinéTanger",
    category: "Mobile",
    description:
      "Cinema booking app for Tanger with EAS Build, Sentry monitoring, Turborepo monorepo and GitHub Actions CI/CD.",
    tags: ["React Native", "Expo", "Turborepo", "Sentry"],
    github: "https://github.com/wiissal/cinetanger-app",
    image: "/images/cinetanger.jpg",
  },
  {
    id: 6,
    title: "CAN 2026 API",
    category: "Backend " ,
    description:
      "REST API for Africa Cup of Nations 2026 tournament management. Full CRUD for teams, players and matches with JWT auth, Bcrypt, Sequelize ORM and PostgreSQL.",
    tags: ["Node.js", "Express", "PostgreSQL", "Sequelize", "JWT"],
    github: "https://github.com/marouaneakrich/CAF-API-Management",
    image: "/images/can-api.jpg",
  },
];
const filters = ["All", "Fullstack", "Frontend", "Mobile", "Backend"];

export default function Projects() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filtered, setFiltered] = useState(projects);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // heading line animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        },
      );

      // staggered card entrance
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: cardRefs.current[0], start: "top 85%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (id, i) => {
    setHoveredId(id);
    gsap.to(cardRefs.current[i], {
      y: -8,
      duration: 0.35,
      ease: "power2.out",
      boxShadow: "0 24px 48px rgba(75,46,43,0.2)",
    });
  };

  const handleMouseLeave = (i) => {
    setHoveredId(null);
    gsap.to(cardRefs.current[i], {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      boxShadow: "0 4px 20px rgba(75,46,43,0.08)",
    });
  };
  const handleFilter = (filter) => {
    setActiveFilter(filter);
    const next =
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter);
    const cards = cardRefs.current.filter(Boolean);
    gsap.to(cards, {
      opacity: 0,
      y: 20,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setFiltered(next);
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
            stagger: 0.08,
          },
        );
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{
        backgroundColor: "#fff8f0",
        padding: "100px 0",
        scrollMarginTop: "80px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div ref={headingRef} style={{ marginBottom: 60 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div style={{ width: 40, height: 2, backgroundColor: "#c08552" }} />
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
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
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
            <a
              href="https://github.com/wiissal"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#4b2e2b";
                e.currentTarget.style.color = "#fff8f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#4b2e2b";
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 28px",
                border: "2px solid #4b2e2b",
                color: "#4b2e2b",
                backgroundColor: "transparent",
                borderRadius: 50,
                fontSize: 12,
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "sans-serif",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                transition: "all 0.3s ease",
              }}
            >
              View All on GitHub
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 40,
          }}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => handleFilter(filter)}
                style={{
                  padding: "8px 22px",
                  borderRadius: 50,
                  border: isActive
                    ? "2px solid #c08552"
                    : "2px solid rgba(75,46,43,0.2)",
                  backgroundColor: isActive ? "#c08552" : "transparent",
                  color: isActive ? "#fff8f0" : "rgba(75,46,43,0.6)",
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "sans-serif",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {filtered.map((project, i) => {
            const isHovered = hoveredId === project.id;
            return (
              <div
                key={project.id}
                ref={(el) => (cardRefs.current[i] = el)}
                onMouseEnter={() => handleMouseEnter(project.id, i)}
                onMouseLeave={() => handleMouseLeave(i)}
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "#1a0e0c",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(75,46,43,0.08)",
                  height: 380,
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
                      opacity: isHovered ? 0.95 : 0.82,
                      transition: "opacity 0.4s ease, transform 0.5s ease",
                      transform: isHovered ? "scale(1.04)" : "scale(1)",
                    }}
                  />
                )}

                {/* Gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(20,8,6,0.97) 30%, rgba(20,8,6,0.2) 70%, rgba(20,8,6,0.0) 100%)",
                  }}
                />

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
                      backgroundColor: "rgba(20,8,6,0.75)",
                      color: "#c08552",
                      padding: "5px 13px",
                      borderRadius: 20,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: 1.5,
                      fontFamily: "sans-serif",
                      textTransform: "uppercase",
                      border: "1px solid rgba(192,133,82,0.5)",
                      backdropFilter: "blur(6px)",
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
                        ? "#4b2e2b"
                        : "rgba(255,248,240,0.12)",
                      color: "#fff8f0",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      border: "1px solid rgba(255,248,240,0.15)",
                      transition: "background 0.3s ease",
                    }}
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
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
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#fff8f0",
                      fontFamily: "var(--font-playfair)",
                      margin: "0 0 8px",
                      lineHeight: 1.2,
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
        </div>
      </div>
    </section>
  );
}
