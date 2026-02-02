"use client"

import { motion } from "framer-motion"
import { Heart, Globe, BookOpen, Shield } from "lucide-react"

const pearlConcepts = [
  {
    icon: Heart,
    title: "Inner Development",
    description:
      "Pearls form from a small impurity that transforms into something valuable into a metaphor for self-discovery.",
  },
  {
    icon: Shield,
    title: "Resilience",
    description: "The formation of the pearl is a slow process, inspiring us to cultivate patience and persistence.",
  },
  {
    icon: BookOpen,
    title: "Self-Valuation",
    description: "Being rare and significant, the Pearl reinforces the idea of self-valuation and self-love.",
  },
  {
    icon: Globe,
    title: "Care and Nutrition",
    description:
      "The shell protects and nourishes the pearl, representing the importance of caring for oneself and others.",
  },
]

export default function About() {
  return (
    <section className="sm:py-24 lg:py-32 px-4 sm:px-6 bg-background py-1">
      <div className="container mx-auto max-w-6xl">
        {/* items-stretch (default) ensures both columns have equal height */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: The "Master" height */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent lg:text-4xl">
              Our History
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
              <p className="text-base">
                Helena da Fonseca has dedicated her life to the defense of the most vulnerable. Since 2007, her path has
                been marked by concrete actions of solidarity and a vocation of service to humanity. Determined to
                deepen her commitment, she founded the School of Ascension in 2007, promoting self-knowledge and
                personal development.
              </p>
              <p className="text-base">
                Her work extended to Portugal, Brazil, and Japan. Among many experiences, she recalls a moving visit to
                a school in Brazil where she encountered children living in extreme vulnerability. Since then, she
                oriented her work toward abandoned children, orphans, the elderly, and needy families.
              </p>
              <p className="text-sm">
                In addition to being a civil diplomat, Helena is a co-participant in 250 humanitarian projects
                internationally. Today, she feels the fulfillment of putting this mission into practice.
              </p>
            </div>

            {/* Stats - Pushed to bottom if needed, or just flow naturally */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-14 border-0 italic">
              {[
                { value: "2007", label: "Founded" },
                { value: "250+", label: "Projects" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-secondary/20 rounded-xl"
                >
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Constrained to match Left Column */}
          <div className="flex flex-col h-full">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-balance bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent lg:text-4xl">
              Why "Human Pearl"?
            </h3>
            
            {/* 1. flex-1: Fills remaining space defined by left column 
               2. justify-between: Spaces cards evenly 
               3. Removed fixed margins (my-1.5, gap-5) to allow auto-sizing 
            */}
            <div className="flex flex-col flex-1 justify-between h-full">
              {pearlConcepts.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 bg-card/80 backdrop-blur-sm border border-border hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center shrink-0">
                      <area.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{area.title}</h3>
                      <p className="text-sm text-muted-foreground leading-snug">{area.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
