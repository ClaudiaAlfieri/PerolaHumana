"use client"

import { Heart, Handshake, Globe, Users, Stethoscope, Shield, ChevronDown, LucideIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

// Define the data structure for clean code and easy updates
interface MissionItem {
  id: number
  icon: LucideIcon
  title: string
  description?: string
  subHeading?: string
  status?: string
}

const missionItems: MissionItem[] = [
  {
    id: 1,
    icon: Globe,
    title: "The Awakening of Consciousness",
    description:
      "Our objective is to awaken human consciousness in all its dimensions emotional, mental, spiritual, and social. We seek to raise awareness and appeal to the attention of the most 'unconscious,' and, above all, to offer love, dedication, and presence.",
  },
  {
    id: 2,
    icon: Heart,
    title: "The Value of Simple Gestures",
    description:
      "We believe that simple gestures, such as love, joy, and affection, have no cost, but possess incalculable value. It is deeply comforting to know that each of us can contribute to more smiles, more hope, and more humanity.",
  },
  {
    id: 3,
    icon: Handshake,
    title: "Transforming Lives with Attention",
    description:
      "Sponsoring children, offering time, paying a visit, or surprising someone with a kind word represents true treasure for those who feel forgotten. Whether it's a child or an elderly person, this kind of attention can change a life.",
  },
  {
    id: 4,
    icon: Users,
    title: "PROJETO: ROSA",
    subHeading: "Free Day Center for Seniors",
    status: "More information coming soon",
  },
  {
    id: 5,
    icon: Stethoscope,
    title: "SAÚDE",
    subHeading: "Revolutionary Health Treatment",
    status: "More information coming soon",
  },
  {
    id: 6,
    icon: Shield,
    title: "PROJETO: ORQUÍDEAS BRANCAS",
    subHeading: "Support for Domestic Violence Victims",
    status: "More information coming soon",
  },
]

export default function MissionSection() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null)

  return (
    <section id="mission" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Our Mission & <span className="text-primary">Core Values</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Awakening human consciousness in all its dimensions, offering love and presence to the most vulnerable.
          </p>
        </motion.div>

        {/* The Grid Layout (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {missionItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
              viewport={{ once: true, amount: 0.1 }}
              onHoverStart={() => setExpandedSection(item.id)}
              onHoverEnd={() => setExpandedSection(null)}
              className={`
                relative group p-6 rounded-2xl cursor-pointer overflow-hidden border border-border
                bg-card hover:bg-gradient-to-br hover:from-card hover:to-muted/50
                hover:border-primary/30 hover:shadow-xl transition-all duration-500
              `}
            >
              <div className="flex flex-col h-full relative z-10">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      expandedSection === item.id ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Subheading (for projects) */}
                {item.subHeading && (
                  <p className="text-sm font-medium text-foreground/80 mb-1">{item.subHeading}</p>
                )}

                {/* Hidden Content Area */}
                <AnimatePresence>
                  {expandedSection === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.description ? (
                          <p>{item.description}</p>
                        ) : (
                          <p className="italic text-primary/80">{item.status}</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
