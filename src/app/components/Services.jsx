"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Repeat2, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const checkpoints = [
  {
    icon: Globe,
    label: "5 languages",
    desc: "Arabic, French, English, Spanish, Italian",
  },
  {
    icon: Repeat2,
    label: "Flexible & remote-ready",
    desc: "Freelance, remote, or team collaboration",
  },
  {
    icon: Rocket,
    label: "Full product lifecycle",
    desc: "From idea and design to deployment",
  },
];
const stack = [
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Zustand",
  "Docker",
  "Git",
  "Figma",
  "JWT",
  "Sequelize",
  "Tailwind",
  "Expo",
];

const services = [
  {
    id: 1,
    tag: "Service 01",
    title: "Fullstack Web & Mobile Development",
    description:
      "I build complete applications from frontend to backend — responsive web apps with React/Next.js and cross-platform mobile apps with React Native, connected to robust Node.js APIs.",
    points: [
      "React & Next.js web apps",
      "React Native mobile apps",
      "REST API integration",
      "Auth, booking & real-time features",
    ],
    images: [
      "services-design1.jpg",
      "services-design.jpg",
      "services-mobile-2.jpg",
      "services-mobile-1.jpg",
    ],

    reverse: false,
  },
  {
    id: 2,
    tag: "Service 02",
    title: "Backend & API Development",
    description:
      "I design and build scalable REST APIs with Node.js and Express, using PostgreSQL for data management, JWT for secure authentication, and clean MVC architecture.",
    points: [
      "REST API design & development",
      "JWT & Bcrypt authentication",
      "PostgreSQL & Sequelize ORM",
      "Clean, documented & maintainable code",
    ],
    images: ["services-backend.jpg"],
    reverse: true,
  },
  {
    id: 3,
    tag: "Service 03",
    title: "UI/UX Design & Prototyping",
    description:
      "Before writing a single line of code, I design the full user experience in Figma — wireframes, prototypes, and interactive flows that guide the development process.",
    points: [
      "Wireframes & user flows",
      "Interactive Figma prototypes",
      "Mobile-first design",
      "Design to code handoff",
    ],
    images: ["services-figma2.jpg", "services-design.jpg"],
    reverse: false,
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const serviceRefs = useRef([]);
  const service2Ref = useRef(null);
  const service3Ref = useRef(null);
  const stackRef = useRef(null);
const collageRefs = useRef([]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // intro block
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: introRef.current, start: "top 85%" },
        },
      );

      // service blocks
      serviceRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          },
        );
      });

      // stack pills
      gsap.fromTo(
        ".stack-pill",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.05,
          scrollTrigger: { trigger: stackRef.current, start: "top 85%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        backgroundColor: "#fff8f0",
        padding: "100px 0",
        scrollMarginTop: "80px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 80,
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
            Services & Technologies
          </span>
        </div>

        {/* Intro block */}
        <div
          ref={introRef}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
            marginBottom: 120,
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 800,
                color: "#4b2e2b",
                fontFamily: "var(--font-playfair)",
                margin: "0 0 24px",
                lineHeight: 1.1,
              }}
            >
              Building digital products that work.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(75,46,43,0.65)",
                fontFamily: "sans-serif",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Im Wissal, a fullstack and mobile developer based in Morocco. I
              work with startups and individuals to turn ideas into real,
              production-ready applications ,from design to deployment.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {checkpoints.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  padding: "20px 24px",
                  borderRadius: 16,
                  border: "1px solid rgba(192,133,82,0.2)",
                  backgroundColor: "rgba(192,133,82,0.04)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: "rgba(192,133,82,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <c.icon size={20} color="#c08552" strokeWidth={2} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#4b2e2b",
                      fontFamily: "sans-serif",
                      marginBottom: 4,
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(75,46,43,0.55)",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {c.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services blocks */}
        {services.map((service, i) => (
          <div
            key={service.id}
            ref={(el) => (serviceRefs.current[i] = el)}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
              marginBottom: 120,
              direction: service.reverse ? "rtl" : "ltr",
            }}
          >
          {/* Images */}
<div style={{ direction: "ltr", position: "relative", height: 420 }}>
  {service.id === 1 ? (
    <>
      <div
        ref={(el) => (collageRefs.current[0] = el)}
        onMouseEnter={() => gsap.to(collageRefs.current[0], { scale: 1.12, zIndex: 10, duration: 0.4, ease: "power2.out" })}
        onMouseLeave={() => gsap.to(collageRefs.current[0], { scale: 1, zIndex: 1, duration: 0.5, ease: "power2.out" })}
        style={{ position: "absolute", left: 0, top: 0, width: "52%", height: "78%", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 40px rgba(75,46,43,0.15)", backgroundColor: "#f5f5f5", zIndex: 1, cursor: "pointer" }}>
        <Image src={`/images/${service.images[0]}`} alt={service.title} fill style={{ objectFit: "contain", objectPosition: "center" }} />
      </div>
      <div
        ref={(el) => (collageRefs.current[1] = el)}
        onMouseEnter={() => gsap.to(collageRefs.current[1], { scale: 1.12, zIndex: 10, duration: 0.4, ease: "power2.out" })}
        onMouseLeave={() => gsap.to(collageRefs.current[1], { scale: 1, zIndex: 1, duration: 0.5, ease: "power2.out" })}
        style={{ position: "absolute", right: 0, top: 10, width: "44%", height: "70%", borderRadius: 14, overflow: "hidden", boxShadow: "0 20px 40px rgba(75,46,43,0.12)", backgroundColor: "#f5f5f5", zIndex: 1, cursor: "pointer" }}>
        <Image src={`/images/${service.images[1]}`} alt={service.title} fill style={{ objectFit: "contain", objectPosition: "center" }} />
      </div>
      <div
        ref={(el) => (collageRefs.current[2] = el)}
        onMouseEnter={() => gsap.to(collageRefs.current[2], { scale: 1.12, zIndex: 10, duration: 0.4, ease: "power2.out" })}
        onMouseLeave={() => gsap.to(collageRefs.current[2], { scale: 1, zIndex: 2, duration: 0.5, ease: "power2.out" })}
        style={{ position: "absolute", left: "10%", bottom: 0, width: "42%", height: "52%", borderRadius: 12, overflow: "hidden", border: "3px solid #fff8f0", boxShadow: "0 12px 30px rgba(75,46,43,0.15)", backgroundColor: "#f5f5f5", zIndex: 2, cursor: "pointer" }}>
        <Image src={`/images/${service.images[2]}`} alt={service.title} fill style={{ objectFit: "contain", objectPosition: "center" }} />
      </div>
      <div
        ref={(el) => (collageRefs.current[3] = el)}
        onMouseEnter={() => gsap.to(collageRefs.current[3], { scale: 1.12, zIndex: 10, duration: 0.4, ease: "power2.out" })}
        onMouseLeave={() => gsap.to(collageRefs.current[3], { scale: 1, zIndex: 2, duration: 0.5, ease: "power2.out" })}
        style={{ position: "absolute", right: "2%", bottom: 0, width: "34%", height: "46%", borderRadius: 10, overflow: "hidden", border: "3px solid #fff8f0", boxShadow: "0 12px 30px rgba(75,46,43,0.12)", backgroundColor: "#f5f5f5", zIndex: 2, cursor: "pointer" }}>
        <Image src={`/images/${service.images[3]}`} alt={service.title} fill style={{ objectFit: "contain", objectPosition: "center" }} />
      </div>
    </>
  ) : service.id === 2 ? (
    <div
      style={{ position: "relative", width: "100%", height: "100%", borderRadius: 20, boxShadow: "0 20px 60px rgba(75,46,43,0.15)", backgroundColor: "#1e1e2e", cursor: "pointer" }}
      onMouseEnter={() => gsap.to(service2Ref.current, { scale: 1.30, duration: 0.4, ease: "power2.out" })}
      onMouseLeave={() => gsap.to(service2Ref.current, { scale: 1, duration: 0.5, ease: "power2.out" })}>
      <div ref={service2Ref} style={{ position: "relative", width: "100%", height: "100%", borderRadius: 20, overflow: "hidden" }}>
        <Image src={`/images/${service.images[0]}`} alt={service.title} fill style={{ objectFit: "contain", objectPosition: "center" }} />
      </div>
    </div>
  ) : (
    <div
      style={{ position: "relative", width: "100%", height: "100%", borderRadius: 20, boxShadow: "0 20px 60px rgba(75,46,43,0.15)", backgroundColor: "#f5f5f5", cursor: "pointer" }}
      onMouseEnter={() => gsap.to(service3Ref.current, { scale: 1.30, duration: 0.4, ease: "power2.out" })}
      onMouseLeave={() => gsap.to(service3Ref.current, { scale: 1, duration: 0.5, ease: "power2.out" })}>
      <div ref={service3Ref} style={{ position: "relative", width: "100%", height: "100%", borderRadius: 20, overflow: "hidden" }}>
        <Image src={`/images/${service.images[0]}`} alt={service.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
      </div>
    </div>
  )}
</div>
            {/* Text */}
            <div style={{ direction: "ltr" }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#c08552",
                  fontFamily: "sans-serif",
                }}
              >
                {service.tag}
              </span>
              <h3
                style={{
                  fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 800,
                  color: "#4b2e2b",
                  fontFamily: "var(--font-playfair)",
                  margin: "12px 0 20px",
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(75,46,43,0.65)",
                  fontFamily: "sans-serif",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                {service.description}
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {service.points.map((point, j) => (
                  <div
                    key={j}
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        backgroundColor: "#c08552",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="#fff8f0"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#4b2e2b",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Tech stack */}
        <div
          ref={stackRef}
          style={{
            borderTop: "1px solid rgba(192,133,82,0.2)",
            paddingTop: 80,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 40,
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
              Tech Stack
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {stack.map((tech) => (
              <span
                key={tech}
                className="stack-pill"
                style={{
                  padding: "10px 22px",
                  borderRadius: 50,
                  border: "1.5px solid rgba(75,46,43,0.15)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#4b2e2b",
                  fontFamily: "sans-serif",
                  backgroundColor: "rgba(192,133,82,0.06)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#4b2e2b";
                  e.currentTarget.style.color = "#fff8f0";
                  e.currentTarget.style.borderColor = "#4b2e2b";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(192,133,82,0.06)";
                  e.currentTarget.style.color = "#4b2e2b";
                  e.currentTarget.style.borderColor = "rgba(75,46,43,0.15)";
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
