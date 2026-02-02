"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { AnimatePresence } from "framer-motion"

const timelineQuotes = [
  {
    title: "The Universe Only Gives You What You Think",
    content: "The universe only gives you what you think, feel, and say you are worthy of receiving.",
    year: "Universal Truth",
  },
  {
    title: "I Am Several, There Are Multitudes in Me",
    content: "I am several, there are multitudes in me. At the table of my soul sit many, and I am all of them. There is an old man, a child, a wise man, a fool. You will never know who you are sitting with or how long you will remain with each version of me, but I promise that if we sit at the table, in this sacred ritual, I will deliver to you at least one of so many that I am and I will take the risk of being with you on the same plane. From the beginning, avoid illusions; I also have a bad side that I try to keep locked away and that when it breaks loose shames me. I am neither saint nor example unfortunately, among so many, one day I discover myself and one day I will be myself definitively, as it has been said: 'Dare to conquer yourself!'",
    year: "Nietzsche",
  },
  {
    title: "Who Am I After All?",
    content: "Your body is not a physical body, but a mass of energy. You are made of millions of atoms, and energy manifests as electromagnetic waves. You are energy made of organs, organs are made of tissues, tissues are made of cells, cells are made of molecules, molecules are made of atoms. When you understand that you are not a physical body but an energy (soul) that is part of the divine, that your body is an energetic mass that vibrates according to your mind, that you have the power to vibrate whatever you wish and that automatically your body vibrates on the same frequency, then you will understand that you only live the reality that you yourself 'possess within you'. All healing only begins when you face your shadows and wounds with love. When you realize that you are not your pain, not your problems and difficulties. Break all the energetic blocks and walls you have built to protect yourself. This is a version forged by wounds, pain, anger, shame and fears, and you will see that you were never broken at all; you simply forgot who you were. Reclaim your light, activate your personal power. You only became yourself when you incorporate your new Self!",
    year: "Consciousness",
  },
  {
    title: "Awakening of Consciousness Is a Path With No Return",
    content: "The awakening of consciousness does not happen all at once, nor from one moment to the next, and goes far beyond this life. It is a continuous process of attunement with your essence and with higher planes. The more you awaken, the more you perceive that the reality sold to you is merely a reflection of the system's programming. The first sign of awakening is questioning—questioning the imposed structures, programmed beliefs, and patterns that keep you imprisoned. Everything you learned within the matrix was designed to keep you asleep, repeating cycles without consciousness. But when you manage to see beyond the 'veil,' something within you activates the connection with your true self, and subtly begins that sensation of emptiness or dissatisfaction. You begin to notice the signs, the 'coincidences' (coincidences do not exist), the synchronicities, that intuition stronger than ever guiding you toward what is right. This is merely the awakening of consciousness. Imagine that everything you believed until now was only a small part of what really exists. The awakening of consciousness (or spiritual awakening) is like opening a door to a new universe. When you cross that door, nothing is ever the same again. You begin to question the stories, the patterns, the beliefs you carry. You perceive that you are not the actor but that pain is a response to what has already passed. There you heal your heart. Forget what they told you that you were or how you should be. You must be reborn from your ashes like the Phoenix to reconnect with the source, which is the only Father and Mother from whom you come, and reinvent yourself knowing that you are part of a whole in this process.",
    year: "Awakening",
  },
  {
    title: "Apocalypse: What Is It After All?",
    content: "Many are confusing the much-talked-about biblical apocalypse with planetary awakening. Let us briefly discuss this confusion and the true transition that calls us to awaken from within outward. The Bible, a coded and manipulated book, was used to imprison human consciousness in dogmas and fears, in a spiritual matrix that keeps people trapped waiting for a savior. Its narrative was structured as predictive programming, inducing limiting beliefs that make people themselves manifest negative events through the collective unconscious. Even the knowledge of the so-called 'Jesus' (a name created by man) was distorted by the Roman empire. 'Jesus' never preached blind worship or intermediaries but rather the expansion of consciousness and unconditional love. The so-called 'return of Christ' is merely the awakening of human consciousness, which is only an internal event that aligns with the new reality and is never, nor will be, an external event. Whoever raises their vibration, attunes themselves to this new era of light and consciousness, and aligns with the new reality, with the new vibration of the planet, will never experience the apocalypse!",
    year: "Truth",
  },
]

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="timeline" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-foreground">
            The Journey of Self-Knowledge
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Wisdom through the ages on understanding yourself
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full opacity-60" />

          <div className="space-y-12">
            {timelineQuotes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background shadow-lg z-10 -translate-x-1/2"
                />

                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    onHoverStart={() => setExpandedIndex(index)}
                    onHoverEnd={() => setExpandedIndex(null)}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 p-6 transition-all duration-300 rounded-4xl cursor-pointer"
                  >
                    <div className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 flex items-center justify-between">
                      {item.year}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                        >
                          {item.content}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {timelineQuotes.map((item, index) => (
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="flex-shrink-0 w-80 snap-center bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-6 cursor-pointer hover:border-primary/50 transition-all"
              >
                <div className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 flex items-center justify-between">
                  {item.year}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <h3 className="text-base font-semibold mb-2 text-foreground">{item.title}</h3>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-muted-foreground leading-relaxed overflow-hidden"
                    >
                      {item.content}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
