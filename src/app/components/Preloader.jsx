'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const [phase, setPhase] = useState(1)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(2), 3500) // circles explode
    const t2 = setTimeout(() => setPhase(3), 4500) // name appears
    const t3 = setTimeout(() => setIsVisible(false), 7500) // fade out
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  const circles = [
    { size: 90,  x: '15%', y: '25%', floatY: -20, delay: 0    },
    { size: 130, x: '78%', y: '18%', floatY: 15,  delay: 0.2  },
    { size: 65,  x: '60%', y: '72%', floatY: -15, delay: 0.4  },
    { size: 110, x: '12%', y: '68%', floatY: 20,  delay: 0.1  },
    { size: 55,  x: '88%', y: '58%', floatY: -10, delay: 0.3  },
    { size: 80,  x: '42%', y: '12%', floatY: 12,  delay: 0.5  },
    { size: 45,  x: '70%', y: '42%', floatY: -18, delay: 0.15 },
  ]

  const firstName = "Wissal"
  const lastName = "Ouboujemaa"

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
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

          {/* Floating then exploding circles */}
          {circles.map((circle, i) => (
            <motion.div
              key={i}
              // Phase 1 — pop in then float
              initial={{ scale: 0, opacity: 0 }}
              animate={
                phase === 1
                  ? {
                      scale: 1,
                      opacity: 1,
                      y: [0, circle.floatY, 0],
                    }
                  : {
                      scale: 0,
                      opacity: 0,
                      x: (i % 2 === 0 ? -1 : 1) * 600,
                      y: (i % 3 === 0 ? -1 : 1) * 400,
                    }
              }
              transition={
                phase === 1
                  ? {
                      scale: { delay: circle.delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                      opacity: { delay: circle.delay, duration: 0.4 },
                      y: {
                        delay: circle.delay + 0.5,
                        duration: 2 + i * 0.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        repeatType: 'reverse',
                      },
                    }
                  : {
                      duration: 0.6,
                      delay: i * 0.04,
                      ease: [0.76, 0, 0.24, 1],
                    }
              }
              style={{
                position: 'absolute',
                left: circle.x,
                top: circle.y,
                width: circle.size,
                height: circle.size,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}

          {/* Name appears after circles explode */}
          {phase >= 3 && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              zIndex: 2,
            }}>

              {/* First name */}
              <div style={{ display: 'flex' }}>
                {firstName.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.07,
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      fontSize: 52,
                      fontWeight: 800,
                      color: '#ffffff',
                      fontFamily: 'sans-serif',
                      letterSpacing: 4,
                      lineHeight: 1,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Last name */}
              <div style={{ display: 'flex' }}>
                {lastName.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.06,
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      fontSize: 52,
                      fontWeight: 800,
                      color: '#ffffff',
                      fontFamily: 'sans-serif',
                      letterSpacing: 4,
                      lineHeight: 1,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.4)',
                  fontFamily: 'sans-serif',
                  letterSpacing: 6,
                  textTransform: 'uppercase',
                  marginTop: 8,
                }}
              >
                Fullstack & Mobile Developer
              </motion.p>

            </div>
          )}

          {/* Progress bar */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: 2,
              backgroundColor: '#ffffff',
            }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 7, ease: 'easeInOut' }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  )
}