import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import About from "../components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <About />
      <Footer />
    </>
  );
}