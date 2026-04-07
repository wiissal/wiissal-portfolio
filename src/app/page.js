import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import Projects from './components/Projects'
export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <Projects />
      
    </main>
  )
}