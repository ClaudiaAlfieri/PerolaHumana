"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Play, Pause } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const quotes = [
  "The world would be better if everyone understood this: If you can help others, help; if you cannot, at least do them no harm.",
  "Do not love for admiration, for one day you will be disappointed.",
  "Do not love for beauty, for one day it ends.",
  "Just love, for time can never end a love without explanation.",
  "Do you want to do something to promote peace? Start with your family.",
  "The hands that help are holier than the lips that pray.",
  "Sometimes we feel that what we do is just a drop in the ocean, but if that drop were missing, the ocean would be smaller.",
  "Poverty was not created by God, but by me and you when we do not share what we have.",
  "The universe only gives you what you think, feel, and say you are worthy of receiving.",
]

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const toggleAudio = () => {
    if (!audioRef.current) {
      // Assuming '/music/sample.mp3' exists in your public folder
      audioRef.current = new Audio("/music/sample.mp3")
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false)
      })
      audioRef.current.addEventListener("error", (e) => {
        console.log("[v0] Audio loading error - file may not exist")
        setIsPlaying(false)
      })
    }

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch((error) => {
        console.log("[v0] Audio playback error:", error)
        setIsPlaying(false)
      })
      setIsPlaying(true)
    }
  }

  return (
    <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:pt-24 my-0 mt-10 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium pb-2"
            >
              <Sparkles className="w-4 h-4" />
              <span className="italic">Wellness Journey</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance"
            >
              A healthier life starts here
            </motion.h1>

            {/* FIX: Removed fixed height (h-24/sm:h-16), overflow-hidden, and absolute positioning
                to allow text to wrap and prevent clipping. Added min-height for stable layout. */}
            <div className="min-h-[6rem] sm:min-h-[4rem] flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentQuote}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  // Cleaned up unused class properties.
                  className="text-muted-foreground leading-relaxed text-pretty italic text-lg"
                >
                  "{quotes[currentQuote]}"
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent w-full sm:w-auto shadow-md hover:shadow-lg"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent w-full sm:w-auto shadow-md hover:shadow-lg"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-background shadow-xl">
              <img
                src="/peaceful-yoga-meditation-wellness-nature.jpg"
                alt="Wellness and health"
                className="w-full h-full object-cover my-0 py-0"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 flex items-center gap-3"
            >
              <motion.button
                onClick={toggleAudio}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-card border-2 border-border shadow-xl overflow-hidden group transition-all duration-300 flex-shrink-0 ${
                  isPlaying ? "animate-pulse" : ""
                }`}
                style={{
                  boxShadow: isPlaying ? "0 0 30px rgba(16, 185, 129, 0.4)" : undefined,
                }}
                aria-label={isPlaying ? "Stop music" : "Play music"}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`text-5xl sm:text-6xl transition-transform duration-500 ${
                      isPlaying ? "animate-spin" : ""
                    }`}
                    style={{ animationDuration: "3s" }}
                  >
                    💿
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  {isPlaying ? (
                    <Pause
                      className="w-7 h-7 sm:w-9 sm:h-9 text-foreground/40 group-hover:text-foreground/70 transition-colors duration-300"
                      style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
                    />
                  ) : (
                    <Play
                      className="w-7 h-7 sm:w-9 sm:h-9 text-foreground/40 group-hover:text-foreground/70 transition-colors duration-300"
                      style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
                    />
                  )}
                </div>
              </motion.button>

              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg"
                >
                  <p className="text-xs sm:text-sm text-foreground whitespace-nowrap">
                    Now playing: <span className="italic text-muted-foreground">sample.mp3</span>
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
