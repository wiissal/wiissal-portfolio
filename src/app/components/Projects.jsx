'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Take-a-Chef',
    category: 'Mobile App',
    description: 'Full-stack mobile platform connecting clients with private chefs for personalized dining experiences. Features JWT auth, real-time booking system, chef discovery, and review system.',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Zustand', 'Expo'],
    github: 'https://github.com/wiissal/take-a-chef',
    image: '/images/take-a-chef.jpg',
  },
  {
    id: 2,
    title: 'Grande Soirée Gnawa',
    category: 'Mobile App',
    description: 'Full-stack mobile app for Gnawa music festival event booking in Agadir. Features event discovery, ticket booking, and cultural experience management.',
    tags: ['React Native', 'Node.js', 'Figma'],
    github: 'https://github.com/wiissal/grande-soiree-gnawa',
    image: null,
  },
  {
    id: 3,
    title: 'Elghousni Order Management',
    category: 'Web App',
    description: 'React admin panel for a Moroccan olive oil cooperative near Tanger. Manages orders, products, and delivery status with real-time filtering and status tracking.',
    tags: ['React', 'Zustand', 'CSS3', 'React Router'],
    github: 'https://github.com/wiissal/elghousni-order-management',
    image: null,
  },
  {
    id: 4,
    title: 'Beni Mellal Tourism',
    category: 'Web App',
    description: 'Tourism discovery platform for Beni Mellal region, showcasing local attractions, culture, and travel experiences.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/medool421/beni-mellal-tourism',
    image: null,
  },
  {
    id: 5,
    title: 'CinéTanger',
    category: 'Mobile App',
    description: 'Cinema booking app for Tanger built with React Native. Features EAS Build, Sentry monitoring, pnpm/Turborepo monorepo, and GitHub Actions CI/CD.',
    tags: ['React Native', 'Expo', 'Turborepo', 'Sentry'],
    github: 'https://github.com/wiissal/CineTanger-app',
    image: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ backgroundColor: '#fff8f0', padding: '100px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 60 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 40, height: 2, backgroundColor: '#c08552' }} />
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#c08552', fontFamily: 'sans-serif' }}>My Work</span>
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#4b2e2b', fontFamily: 'var(--font-playfair)', margin: 0, lineHeight: 1.1 }}>
            Featured Projects
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(192,133,82,0.2)', display: 'flex', flexDirection: 'column' }}>

              {/* Image */}
              <div style={{ height: 200, backgroundColor: '#f2e8da', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                {project.image
                  ? <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : <span style={{ fontSize: 48, opacity: 0.3 }}>🫒</span>}
                <div style={{ position: 'absolute', top: 12, left: 12, backgroundColor: '#4b2e2b', color: '#fff8f0', padding: '4px 12px', borderRadius: 20, fontSize: 11, fontWeight: 600, letterSpacing: 1, fontFamily: 'sans-serif', textTransform: 'uppercase' }}>
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#4b2e2b', fontFamily: 'var(--font-playfair)', margin: 0 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: 14, color: '#8c5a3c', fontFamily: 'sans-serif', lineHeight: 1.6, margin: 0, flex: 1 }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 11, fontWeight: 600, color: '#c08552', backgroundColor: 'rgba(192,133,82,0.1)', padding: '4px 10px', borderRadius: 20, fontFamily: 'sans-serif' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: '#4b2e2b', textDecoration: 'none', fontFamily: 'sans-serif', marginTop: 4, borderTop: '1px solid rgba(192,133,82,0.2)', paddingTop: 12 }}>
                  View on GitHub {'->'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}