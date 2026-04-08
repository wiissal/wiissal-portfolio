'use client'

import { useRef } from 'react'

const projects = [
  {
    id: 1,
    title: 'Take-a-Chef',
    category: 'Fullstack App',
    description: 'Mobile platform connecting clients with private chefs for personalized dining experiences. JWT auth, real-time booking, chef discovery and review system.',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Zustand'],
    github: 'https://github.com/wiissal/take-a-chef',
    image: '/images/take-a-chef.jpg',
  },
  {
    id: 2,
    title: 'Grande Soirée Gnawa',
    category: 'Fullstack App',
    description: 'Mobile app for Gnawa music festival event booking in Agadir. Event discovery, ticket booking and cultural experience management.',
    tags: ['React Native', 'Node.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/wiissal/grande-soiree-gnawa',
    image: '/images/gnawa.jpg',
  },
  {
    id: 3,
    title: 'Elghousni Order Management',
    category: 'Frontend',
    description: 'React admin panel for a Moroccan olive oil cooperative. Manages orders, products and delivery status with real-time filtering.',
    tags: ['React', 'Zustand', 'CSS3', 'React Router'],
    github: 'https://github.com/wiissal/elghousni-order-management',
    image: '/images/elghousni.jpg',
  },
  {
    id: 4,
    title: 'Beni Mellal Tourism',
    category: 'Frontend',
    description: 'Tourism discovery platform for Beni Mellal region showcasing local attractions, culture and travel experiences.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/medool421/beni-mellal-tourism',
    image: '/images/beni-mellal.jpg',
  },
  {
    id: 5,
    title: 'CinéTanger',
    category: 'Mobile App',
    description: 'Cinema booking app for Tanger with EAS Build, Sentry monitoring, Turborepo monorepo and GitHub Actions CI/CD.',
    tags: ['React Native', 'Expo', 'Turborepo', 'Sentry'],
    github: 'https://github.com/wiissal/CineTanger-app',
    image: '/images/cinetanger.jpg',
  },
]

export default function Projects() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="projects" style={{ backgroundColor: '#fff8f0', padding: '100px 0' }}>

      {/* Header */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', marginBottom: 60 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 2, backgroundColor: '#c08552' }} />
              <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#c08552', fontFamily: 'sans-serif' }}>
                My Work
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#4b2e2b', fontFamily: 'var(--font-playfair)', margin: 0, lineHeight: 1.1 }}>
              Featured Projects
            </h2>
          </div>

          {/* Scroll arrows */}
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={() => scroll('left')}
              style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid #4b2e2b', backgroundColor: 'transparent', color: '#4b2e2b', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {'<'}
            </button>
            <button
              onClick={() => scroll('right')}
              style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid #4b2e2b', backgroundColor: '#4b2e2b', color: '#fff8f0', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {'>'}
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingLeft: 40, paddingRight: 40, scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 20 }}>

        {/* Project cards */}
        {projects.map((project) => (
          <div
            key={project.id}
            style={{ minWidth: 340, height: 480, borderRadius: 20, overflow: 'hidden', position: 'relative', flexShrink: 0, cursor: 'pointer', backgroundColor: '#2a1a18' }}>

            {/* Background image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
              />
            )}

            {/* Gradient overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(75,46,43,0.98) 40%, rgba(75,46,43,0.2) 100%)' }} />

            {/* Top row */}
            <div style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ backgroundColor: 'rgba(255,248,240,0.15)', backdropFilter: 'blur(8px)', color: '#fff8f0', padding: '6px 14px', borderRadius: 20, fontSize: 11, fontWeight: 600, letterSpacing: 1, fontFamily: 'sans-serif', textTransform: 'uppercase', border: '1px solid rgba(255,248,240,0.2)' }}>
                {project.category}
              </span>
              
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: 'rgba(255,248,240,0.15)', backdropFilter: 'blur(8px)', color: '#fff8f0', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 16, border: '1px solid rgba(255,248,240,0.2)' }}>
                ↗
              </a>
            </div>

            {/* Bottom content */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24 }}>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff8f0', fontFamily: 'var(--font-playfair)', margin: '0 0 10px' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,248,240,0.7)', fontFamily: 'sans-serif', lineHeight: 1.6, margin: '0 0 16px' }}>
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: 11, fontWeight: 600, color: '#c08552', backgroundColor: 'rgba(192,133,82,0.15)', padding: '4px 10px', borderRadius: 20, fontFamily: 'sans-serif', border: '1px solid rgba(192,133,82,0.3)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* View All card */}
        <div style={{ minWidth: 300, height: 480, borderRadius: 20, flexShrink: 0, backgroundColor: '#4b2e2b', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, border: '2px solid rgba(192,133,82,0.3)', padding: 32 }}>
          <div style={{ width: 72, height: 72, borderRadius: 16, backgroundColor: 'rgba(192,133,82,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, border: '1px solid rgba(192,133,82,0.3)' }}>
            🐙
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff8f0', fontFamily: 'var(--font-playfair)', margin: '0 0 12px' }}>
              View All Projects
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,248,240,0.6)', fontFamily: 'sans-serif', lineHeight: 1.6, margin: '0 0 24px' }}>
              Explore more of my work and open-source contributions on GitHub
            </p>
            
              href="https://github.com/wiissal"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', backgroundColor: '#c08552', color: '#fff8f0', borderRadius: 50, fontSize: 13, fontWeight: 600, textDecoration: 'none', fontFamily: 'sans-serif', letterSpacing: 1 }}>
              Visit GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}