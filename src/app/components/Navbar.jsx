'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ onHireClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('resize', handleResize); }
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services & Technologies', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          backgroundColor: scrolled ? 'rgba(255,248,240,0.95)' : '#fff8f0',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 1px 20px rgba(75,46,43,0.08)' : 'none',
          borderBottom: '1px solid rgba(192,133,82,0.2)',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 80,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <motion.a href="#" whileHover={{ scale: 1.03 }} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: '#4b2e2b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff8f0', fontWeight: 800, fontSize: 20 }}>W</span>
            </div>
            <span style={{ fontSize: 22, fontWeight: 700, color: '#4b2e2b', letterSpacing: '-0.5px' }}>wissal.</span>
          </motion.a>

          {/* Desktop nav links */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
              {links.map((item) => (
                <motion.a key={item.label} href={item.href} whileHover={{ y: -2 }}
                  style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: '#8c5a3c', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#4b2e2b'}
                  onMouseLeave={e => e.target.style.color = '#8c5a3c'}>
                  {item.label}
                </motion.a>
              ))}
            </div>
          )}

          {/* Desktop Hire Me + Mobile hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {!isMobile && (
              <motion.button onClick={onHireClick} whileHover={{ backgroundColor: '#4b2e2b', color: '#fff8f0' }} whileTap={{ scale: 0.95 }}
                style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', border: '2px solid #4b2e2b', color: '#4b2e2b', padding: '12px 28px', borderRadius: 50, backgroundColor: 'transparent', cursor: 'pointer', transition: 'all 0.2s' }}>
                Hire Me
              </motion.button>
            )}

            {isMobile && (
              <button onClick={() => setMenuOpen(!menuOpen)}
                style={{ width: 44, height: 44, borderRadius: 10, border: '1.5px solid rgba(75,46,43,0.2)', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, cursor: 'pointer', padding: 0 }}>
                <span style={{ width: 20, height: 2, backgroundColor: '#4b2e2b', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                <span style={{ width: 20, height: 2, backgroundColor: '#4b2e2b', borderRadius: 2, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
                <span style={{ width: 20, height: 2, backgroundColor: '#4b2e2b', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
              </button>
            )}
          </div>

        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{ position: 'fixed', top: 80, left: 0, right: 0, zIndex: 49, backgroundColor: '#fff8f0', borderBottom: '1px solid rgba(192,133,82,0.2)', padding: '24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {links.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                style={{ fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: '#4b2e2b', textDecoration: 'none' }}>
                {item.label}
              </a>
            ))}
            <button onClick={() => { setMenuOpen(false); onHireClick(); }}
              style={{ alignSelf: 'flex-start', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', border: '2px solid #4b2e2b', color: '#4b2e2b', padding: '12px 28px', borderRadius: 50, backgroundColor: 'transparent', cursor: 'pointer' }}>
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}