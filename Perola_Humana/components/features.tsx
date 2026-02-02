"use client"

import { Heart, Sparkles, Handshake, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function MissionSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Our Mission and Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Awakening human consciousness in all its dimensions, offering love and presence to the most vulnerable.
          </p>
        </motion.div>

        {/* Layout in Two Columns (Text + Card) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Detailed Text (English Translation) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                <Globe className="w-6 h-6" /> The Awakening of Consciousness
              </h3>
              <p className="text-foreground leading-relaxed text-base">
                **Our objective is to awaken human consciousness in all its dimensions**—emotional, mental, spiritual, and social. We seek to raise awareness and appeal to the attention of the most "unconscious," and, above all, to offer **love, dedication, and presence** to those most in need, with special attention to vulnerable children and the elderly.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                <Heart className="w-6 h-6" /> The Incalculable Value of Simple Gestures
              </h3>
              <p className="text-foreground leading-relaxed text-base">
                We believe that simple gestures, such as **love, joy, and affection, have no cost, but possess incalculable value.** It is deeply comforting to know that each of us can contribute to more smiles, more hope, and more humanity.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                <Handshake className="w-6 h-6" /> Transforming Lives with Attention
              </h3>
              <p className="text-foreground leading-relaxed text-base">
                **Sponsoring children throughout the year** (and not just during the Christmas season), offering some of our time, paying a visit, surprising someone with a kind word, and saying, "I like you very much" or "I love you," are acts of generosity that represent true treasures for those who feel "forgotten." Whether it's a child or an elderly person, this kind of attention can change a life. We would like to help bring about a change in thoughts and feelings, uniting hands and hearts to make Portugal a better place.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Smaller and Centered Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex justify-center lg:justify-end pt-10 lg:pt-0"
          >
            {/* The card now has a max-width (max-w-md) to be smaller */}
            <div className="w-full max-w-md bg-card border border-border rounded-xl shadow-xl p-8 space-y-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-center text-foreground">Our Vision for Portugal</h4>
              <p className="text-center text-muted-foreground text-sm">
                Uniting hands and hearts to change thoughts and feelings, making our country a better and more humane place for all generations.
              </p>
              <div className="pt-4 border-t border-border">
                <ul className="space-y-3 text-sm text-center">
                  <li className="flex items-center justify-center gap-2 text-foreground/80">
                    <Heart className="w-4 h-4 text-red-500" />
                    Love, Dedication, and Presence
                  </li>
                  <li className="flex items-center justify-center gap-2 text-foreground/80">
                    <Handshake className="w-4 h-4 text-blue-500" />
                    Support for Children and the Elderly
                  </li>
                  <li className="flex items-center justify-center gap-2 text-foreground/80">
                    <Globe className="w-4 h-4 text-green-500" />
                    Holistic Consciousness (E, M, S, S)
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
