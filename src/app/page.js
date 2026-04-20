import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Contact />
      
    </main>
  )
}