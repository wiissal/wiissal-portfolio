'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        backgroundColor: '#fff8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 40px',
        paddingTop: 80,
      }}
    >
      <div style={{
        maxWidth: 1200,
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
      }}>

        {/* Small label like Zakaria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <div style={{
            width: 40,
            height: 2,
            backgroundColor: '#c08552',
          }} />
          <span style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#c08552',
            fontFamily: 'sans-serif',
          }}>
            Design & Code
          </span>
        </motion.div>

        {/* Main heading */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontWeight: 800,
              color: '#4b2e2b',
              lineHeight: 1.05,
              fontFamily: 'var(--font-playfair)',
              margin: 0,
            }}
          >
            Solutions for
          </motion.h1>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontWeight: 800,
              color: '#c08552',
              lineHeight: 1.05,
              fontFamily: 'var(--font-playfair)',
              margin: 0,
            }}
          >
            your business.
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontSize: 18,
            color: '#8c5a3c',
            fontFamily: 'sans-serif',
            maxWidth: 520,
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Fullstack & Mobile Developer based in Morocco 🇲🇦 — building clean,
          performant web and mobile apps that create real impact for your business and your daily life .
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ display: 'flex', gap: 16, marginTop: 8 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 36px',
              backgroundColor: '#4b2e2b',
              color: '#fff8f0',
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 1,
              textDecoration: 'none',
              fontFamily: 'sans-serif',
              textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}
          >
            See My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 36px',
              backgroundColor: 'transparent',
              color: '#4b2e2b',
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 1,
              textDecoration: 'none',
              fontFamily: 'sans-serif',
              textTransform: 'uppercase',
              border: '2px solid #4b2e2b',
              transition: 'all 0.2s',
            }}
          >
            Hire Me
          </motion.a>
        </motion.div>

        {/* Stats row like Zakaria */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: 48,
            marginTop: 40,
            paddingTop: 40,
            borderTop: '1px solid rgba(192,133,82,0.2)',
          }}
        >
          {[
            { number: '5+', label: 'Projects Completed' },
            { number: '5',  label: 'Languages Spoken' },
            { number: '3+', label: 'Technologies Mastered' },
          ].map((stat) => (
            <div key={stat.label}>
              <p style={{
                fontSize: 36,
                fontWeight: 800,
                color: '#4b2e2b',
                fontFamily: 'var(--font-playfair)',
                margin: 0,
                lineHeight: 1,
              }}>
                {stat.number}
              </p>
              <p style={{
                fontSize: 13,
                color: '#8c5a3c',
                fontFamily: 'sans-serif',
                marginTop: 6,
                letterSpacing: 1,
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}