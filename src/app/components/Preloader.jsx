'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const [phase, setPhase] = useState(1)

  useEffect(() => {
    // phase 2 — show name after circle appears
    const t1 = setTimeout(() => setPhase(2), 1200)
    // phase 3 — collapse and leave
    const t2 = setTimeout(() => setPhase(3), 3200)
    // hide completely
    const t3 = setTimeout(() => setIsVisible(false), 4000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  const name = "Wissal Ouboujemaa"

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#0a0a0a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >

          {/* Expanding circle behind everything */}
          <motion.div
            initial={{ scale: 0, borderRadius: '50%' }}
            animate={
              phase === 3
                ? { scale: 0, borderRadius: '50%' }
                : { scale: 18, borderRadius: '50%' }
            }
            transition={{
              duration: phase === 3 ? 0.6 : 1,
              ease: phase === 3 ? [0.76, 0, 0.24, 1] : [0.16, 1, 0.3, 1],
            }}
            style={{
              position: 'absolute',
              width: 80,
              height: 80,
              backgroundColor: '#ffffff',
            }}
          />

          {/* W SVG — draws itself */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: 'relative', zIndex: 2 }}
          >
            <motion.svg
              width="100"
              height="70"
              viewBox="0 0 120 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M5 5 L25 75 L45 30 L60 60 L75 30 L95 75 L115 5"
                stroke="#111"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: phase >= 1 ? 1 : 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </motion.svg>
          </motion.div>

          {/* Name types itself letter by letter */}
          {phase >= 2 && (
            <motion.div
              style={{
                position: 'absolute',
                bottom: '38%',
                display: 'flex',
                gap: 3,
                zIndex: 2,
              }}
            >
              {name.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.2,
                  }}
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    color: '#111',
                    fontFamily: 'sans-serif',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Progress bar at bottom */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: 2,
              backgroundColor: '#111',
              zIndex: 2,
            }}
            initial={{ width: '0%' }}
            animate={{ width: phase >= 3 ? '100%' : '70%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  )
}