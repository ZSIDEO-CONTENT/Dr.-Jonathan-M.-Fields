import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  backgroundImage?: string
  speed?: number
}

export default function ParallaxSection({
  children,
  className = '',
  backgroundImage,
  speed = 0.5,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <section ref={ref} className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Background image with parallax scroll */}
      {backgroundImage && (
        <motion.div
          style={{ y }}
          className="absolute inset-0 -z-10 will-change-transform"
        >
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      )}

      {/* Foreground content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </div>
    </section>
  )
}
