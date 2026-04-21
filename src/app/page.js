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
      <Preloader/>
      <Navbar onHireClick={() => setHireOpen(true)} />
      <Hero />
      <Projects />
      <Services />
      <Contact />
      <HireMe isOpen={hireOpen} onClose={() => setHireOpen(false)} />
      <Footer />
    </>
  );
}