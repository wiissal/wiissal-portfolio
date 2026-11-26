import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
      <Footer />
    </>
  );
}