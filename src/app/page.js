"use client";

import { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";

export default function Home() {
  const [hireOpen, setHireOpen] = useState(false);

  return (
    <>
      <Preloader />
      <Navbar onHireClick={() => setHireOpen(true)} />
      <div className="bg-space-900 px-10 py-16">
        <p className="font-mono text-sm tracking-[0.3em] text-cyan-glow">
          MISSION_LOG
        </p>
        <h1 className="font-display text-5xl font-bold tracking-widest text-star">
          HELLO, I'M WISSAL
        </h1>
        <p className="mt-4 text-muted">Full-stack & mobile developer.</p>
      </div>
      <Hero />
      <Projects />
      <Services />
      <Contact />
      <HireMe isOpen={hireOpen} onClose={() => setHireOpen(false)} />
      <Footer />
    </>
  );
}
