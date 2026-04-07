import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
    </main>
  )
}