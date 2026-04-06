'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : '#ffffff',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
        borderBottom: '1px solid #f0f0f0',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 40px',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
        >
          <div style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            backgroundColor: '#111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: 20 }}>W</span>
          </div>
          <span style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px' }}>
            wissal.
          </span>
        </motion.a>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
          {[
            { label: 'Home',     href: '#home' },
            { label: 'Services & Technologies', href: '#services' },
            { label: 'Projects', href: '#projects' },
        
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ y: -2 }}
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: '#555',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#111'}
              onMouseLeave={e => e.target.style.color = '#555'}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Hire Me */}
        <motion.a
          href="#contact"
          whileHover={{ backgroundColor: '#111', color: '#fff' }}
          whileTap={{ scale: 0.95 }}
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: 'uppercase',
            border: '2px solid #111',
            color: '#111',
            padding: '12px 28px',
            borderRadius: 50,
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
        >
          Hire Me
        </motion.a>

      </div>
    </motion.nav>
  )
}