"use client"

import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function Marquee() {
  const [isDragging, setIsDragging] = useState(false)
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)
  const velocity = useRef(0)
  const lastTime = useRef(0)
  const [unitWidth, setUnitWidth] = useState(0)
  const [numCopies, setNumCopies] = useState(4) // Start with default

  // Measure effective unit width (left-to-left) and calculate copies
  useEffect(() => {
    const updateMeasurements = () => {
      if (itemRef.current && secondRef.current && containerRef.current) {
        const rect1 = itemRef.current.getBoundingClientRect()
        const rect2 = secondRef.current.getBoundingClientRect()
        const uw = rect2.left - rect1.left
        setUnitWidth(uw)
        if (uw > 0) {
          const screenWidth = containerRef.current.clientWidth
          const minCopies = Math.ceil(screenWidth / uw) * 2 + 2 // Double screen + buffer for infinite feel
          setNumCopies(Math.max(minCopies, 8)) // At least 8 for smoothness
        }
      }
    }

    updateMeasurements()
    window.addEventListener("resize", updateMeasurements)
    return () => window.removeEventListener("resize", updateMeasurements)
  }, [])

  useAnimationFrame((t, delta) => {
    if (!delta || !unitWidth) return

    const dt = delta / 1000 // seconds
    let currentX = x.get()

    if (isDragging) {
      lastTime.current = t
      return
    }

    // Apply momentum with friction
    if (Math.abs(velocity.current) > 0.5) {
      currentX += velocity.current * dt
      x.set(currentX)
      velocity.current *= 0.95 // Match original friction for gradual stop
    } else {
      // Auto-scroll when at rest
      velocity.current = 0
      currentX -= 50 * dt // Original speed: 50 px/s
      x.set(currentX)
    }

    // Infinite loop only to the left (negative x)
    if (currentX <= -unitWidth) {
      // Handle fast velocities by adding multiples
      const shifts = Math.floor(Math.abs(currentX) / unitWidth)
      x.set(currentX + shifts * unitWidth)
    }

    // Bound on the right: can't go beyond 0
    currentX = x.get() // Re-get after possible reset
    if (currentX > 0) {
      x.set(0)
      if (velocity.current > 0) velocity.current = 0 // Stop positive momentum
    }
  })

  const handleDragStart = () => {
    setIsDragging(true)
    velocity.current = 0 // Reset velocity on start
    lastTime.current = performance.now()
  }

  const handleDragEnd = (e: any, info: any) => {
    setIsDragging(false)
    velocity.current = info.velocity.x // Use Framer's built-in velocity for accurate momentum
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-background py-16"
    >
      {/* Edge gradients for fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        ref={contentRef}
        className="flex whitespace-nowrap cursor-grab active:cursor-grabbing select-none"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -unitWidth * (numCopies - Math.ceil((containerRef.current?.clientWidth || 0) / unitWidth)) , right: 0 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 40 }} // Tighter bounce
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {[...Array(numCopies)].map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? itemRef : i === 1 ? secondRef : null}
            className="flex items-center mx-4 shrink-0"
          >
            <span
              className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "1px rgb(156 163 175)",
              }}
            >
              Pérola Humana
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
