"use client"

import { motion } from "framer-motion"

export default function DeviceShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Health Tracking Made Simple</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your wellness journey across all your devices with seamless synchronization
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-end justify-center max-w-7xl mx-auto">
          {/* Phone Frame */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-72 mx-auto"
            >
              {/* Phone Frame */}
              <div className="relative bg-card rounded-[3rem] p-3 shadow-2xl border-[12px] border-foreground/5">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-card rounded-b-3xl z-10" />
                {/* Screen */}
                <div className="relative w-full aspect-[9/19.5] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-[2.5rem] overflow-hidden">
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/videos/mobile-health-app.mp4" type="video/mp4" />
                  </video>
                  {/* Floating animation overlay */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Tablet Frame */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-96 mx-auto"
            >
              {/* Tablet Frame */}
              <div className="relative bg-card rounded-[2.5rem] p-4 shadow-2xl border-[14px] border-foreground/5">
                {/* Screen */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 rounded-[2rem] overflow-hidden">
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/videos/tablet-health-analytics.mp4" type="video/mp4" />
                  </video>
                  {/* Floating animation overlay */}
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent pointer-events-none"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Laptop Screen */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-[500px] mx-auto"
            >
              {/* Laptop Screen */}
              <div className="relative bg-card rounded-t-2xl p-3 shadow-2xl border-t-[12px] border-x-[12px] border-foreground/5">
                <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 rounded-t-xl overflow-hidden">
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/videos/laptop-health-dashboard.mp4" type="video/mp4" />
                  </video>
                  {/* Floating animation overlay */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none"
                  />
                </div>
              </div>
              {/* Laptop Base */}
              <div className="relative h-3 bg-card border-[12px] border-t-0 border-foreground/5 rounded-b-xl" />
              <div className="w-32 h-2 bg-foreground/10 rounded-b-lg mx-auto shadow-lg" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
