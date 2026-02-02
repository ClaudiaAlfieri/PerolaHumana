"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Phone, PhoneCall, Mic, Volume2, Sparkles, HeartPulse } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VoiceSection() {
  const voiceSectionRef = useRef<HTMLDivElement>(null)
  const [isCallActive, setIsCallActive] = useState(false)

  const { scrollYProgress } = useScroll({
    target: voiceSectionRef,
    offset: ["start end", "end start"],
  })

  const largePhoneY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const smallPhoneY = useTransform(scrollYProgress, [0, 1], [80, -80])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCallActive((prev) => !prev)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={voiceSectionRef}
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-background to-muted/30 border-t border-border"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Phone Mockups */}
          <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center">
            {/* Large Phone (Left) */}
            <motion.div
              style={{ y: largePhoneY }}
              className="absolute left-0 z-20"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-[240px] lg:w-[280px]">
                {/* Phone Frame */}
                <div className="relative bg-card rounded-[3rem] p-3 shadow-2xl border-[14px] border-foreground/10">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-card rounded-b-3xl z-10" />

                  {/* Screen */}
                  <div className="relative w-full aspect-[9/19.5] bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-[2.5rem] overflow-hidden">
                    {/* Call Interface */}
                    <div className="absolute inset-0 flex flex-col items-center justify-between p-6">
                      {/* Top Section */}
                      <div className="text-center mt-8">
                        <motion.div
                          animate={isCallActive ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 mx-auto mb-4 flex items-center justify-center shadow-lg"
                        >
                          <Phone className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Dr. Sarah Johnson</h3>
                        <p className="text-xs text-muted-foreground">
                          {isCallActive ? "Connected - 02:34" : "Calling..."}
                        </p>
                      </div>

                      {/* Audio Wave Animation */}
                      {isCallActive && (
                        <div className="flex items-center gap-1 h-12">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{
                                height: ["16px", "32px", "48px", "32px", "16px"],
                              }}
                              transition={{
                                duration: 1,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.1,
                                ease: "easeInOut",
                              }}
                              className="w-1.5 bg-gradient-to-t from-emerald-400 to-teal-500 rounded-full"
                            />
                          ))}
                        </div>
                      )}

                      {/* Bottom Controls */}
                      <div className="flex gap-4 mb-6">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shadow-md"
                        >
                          <Volume2 className="w-5 h-5 text-foreground" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shadow-md"
                        >
                          <Mic className="w-5 h-5 text-foreground" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center shadow-md"
                        >
                          <PhoneCall className="w-5 h-5 text-destructive-foreground" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small Phone (Right) */}
            <motion.div
              style={{ y: smallPhoneY }}
              className="absolute right-0 z-10"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative w-[200px] lg:w-[240px]">
                {/* Phone Frame */}
                <div className="relative bg-card rounded-[2.5rem] p-3 shadow-xl border-[12px] border-foreground/10">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-card rounded-b-2xl z-10" />

                  {/* Screen */}
                  <div className="relative w-full aspect-[9/19.5] bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-emerald-500/20 rounded-[2rem] overflow-hidden">
                    {/* Health Stats */}
                    <div className="absolute inset-0 flex flex-col p-5 pt-8">
                      <h4 className="text-base font-semibold text-foreground mb-3">Today's Health</h4>

                      <div className="space-y-3">
                        <div className="bg-card/50 backdrop-blur-sm rounded-xl p-3 border border-border shadow-sm">
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-xs text-muted-foreground">Heart Rate</span>
                            <span className="text-sm font-bold text-emerald-500">72 bpm</span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "72%" }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-gradient-to-r from-emerald-400 to-teal-500"
                            />
                          </div>
                        </div>

                        <div className="bg-card/50 backdrop-blur-sm rounded-xl p-3 border border-border shadow-sm">
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-xs text-muted-foreground">Steps</span>
                            <span className="text-sm font-bold text-cyan-500">8,432</span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "84%" }}
                              transition={{ duration: 1, delay: 0.7 }}
                              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                            />
                          </div>
                        </div>

                        <div className="bg-card/50 backdrop-blur-sm rounded-xl p-3 border border-border shadow-sm">
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-xs text-muted-foreground">Sleep</span>
                            <span className="text-sm font-bold text-blue-500">7.5 hrs</span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "94%" }}
                              transition={{ duration: 1, delay: 0.9 }}
                              className="h-full bg-gradient-to-r from-blue-400 to-indigo-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-[300px] h-[300px] rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-3xl"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Real-Time Health Support at Your Fingertips
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                Experience seamless healthcare with our voice-enabled monitoring system. Connect instantly with
                certified healthcare professionals and track your vital health metrics in real-time.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Instant Voice Calls</h4>
                  <p className="text-muted-foreground">
                    Connect with healthcare professionals through high-quality voice calls anytime, anywhere. Get
                    immediate medical advice when you need it most.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <HeartPulse className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Live Health Tracking</h4>
                  <p className="text-muted-foreground">
                    Monitor your heart rate, steps, sleep patterns, and more in real-time. Stay informed about your
                    health with comprehensive analytics.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">AI-Powered Insights</h4>
                  <p className="text-muted-foreground">
                    Receive personalized health recommendations powered by advanced AI technology that learns from your
                    patterns and behaviors.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-4 pt-4"
            >
              <Button size="lg" className="shadow-lg">
                Start Monitoring
              </Button>
              <Button size="lg" variant="outline" className="shadow-md bg-transparent">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
