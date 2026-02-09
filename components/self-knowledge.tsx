"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Quote, Sparkles, Brain, Zap, Sun } from "lucide-react"

const quotes = [
  {
    text: "O UNIVERSO SÓ TE DÁ AQUILO QUE PENSAS, SENTES E DIZES SER DIGNO DE RECEBER",
    author: "Helena da Fonseca",
  },
  {
    text: "I am several, there are multitudes in me. At the table of my soul, many sit and I am all of them; there is an old man, a child, a sage, a fool. You will never know with whom you are sitting or how long you will remain with each one of me, but I promise that if we sit at the table, in this sacred ritual, I will hand you at least one of the many that I am and run the risk of us being together on the same plane. From the start, avoid illusions; I also have a bad, wicked side that I try to keep locked up and that, when released, shames me. I am not a saint nor an example, unfortunately. Among so many, one day, I discover myself and one day I will be myself definitively, as has already been said: 'Dare to conquer yourself!'",
    author: "Nietzsche",
  },
]

export default function SelfKnowledge() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section id="self-knowledge" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Autoconhecimento</h2>
          </motion.div>

        {/* Quotes Carousel */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <Quote className="absolute top-8 left-8 w-8 h-8 text-emerald-500/30" />
            <div className="space-y-12">
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <p className="text-lg text-slate-300 italic mb-4 leading-relaxed md:text-lg">"{quote.text}"</p>
                  <p className="text-emerald-400 font-medium">— {quote.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Who Am I */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who Am I After All?</h3>
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Your body is not a physical body, but a mass of energy. Your body is low-frequency energy and
                  manifests as matter. You are made of millions of atoms and energy is electromagnetic waves.
                </p>
                <p>
                  You are energy and you are made of organs, organs are made of tissues, tissues are made of cells,
                  cells are made of molecules, molecules are made of atoms. When you understand that you are not a
                  physical body, but an energy (soul) that is part of the divine, that the body is an energetic mass
                  that vibrates according to your mind, that you have the power to vibrate whatever you want and that
                  automatically your body vibrates in the same tuning, then you will understand that you only live the
                  reality that you yourself "possess inside you".
                </p>
                <p>
                  All healing only begins when you face your shadows and wounds with love. When you realize that you are
                  not your pain, you are not your problems and difficulties. Break all energetic blockages and walls you
                  built to protect yourself. That is a version forged by wounds, pains, anger, shame, and fears, and you
                  will see that after all, you were never in pieces, after all, you had only forgotten who you were.
                  Claim your light, activate your personal power; you only become you when you incorporate your new
                  Self!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Awakening of Consciousness</h3>
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  The awakening of consciousness is a path of no return. It does not happen all at once, nor from one
                  moment to another, and goes far beyond this life; it is a continuous process of tuning in with your
                  essence and with higher planes. The more you awaken, the more you realize that the reality sold to you
                  is just a reflection of the system's programming.
                </p>
                <p>
                  The first sign of awakening is to question—question imposed structures, programmed beliefs, and
                  patterns that keep you imprisoned. Everything you learned inside the matrix was designed to keep you
                  asleep, repeating cycles without consciousness, but when we manage to see beyond the "veil," something
                  inside you activates the connection with your true being.
                </p>
                <p>
                  Subtly, that feeling of emptiness or dissatisfaction begins; you start to notice signs, "coincidences"
                  (coincidences do not exist), synchronicities, that stronger intuition guiding you to what is right—and
                  that is just the awakening of consciousness.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Rebirth & Apocalypse */}
          <div className="space-y-8" style={{ marginTop: "3rem" }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Rebirth</h3>
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Imagine that everything you believed until now was only a small part of what really exists. The
                  awakening of consciousness (or spiritual awakening) is like opening a door to a new universe, and when
                  you walk through that door, nothing ever goes back to being as it was before.
                </p>
                <p>
                  You begin to question the stories, the patterns, the beliefs you carry; you realize that after all,
                  you are not your pain, but that pain is a response to what has already passed, and then you heal your
                  heart.
                </p>
                <p className="italic text-emerald-400 border-l-2 border-emerald-500 pl-4">
                  Forget what you were told you were or how you had to be; you have to be reborn from your ashes like
                  the Phoenix, to reconnect with the source, which is the only Father and Mother from whom you proceed,
                  and reinvent yourself knowing that you are part of a whole in this process. Therefore, never forget:
                  "Your vibration attracts your reality and only you are responsible for it; good or bad luck does not
                  exist because everything obeys a divine order and everything is interconnected."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Apocalypse: What Is It?</h3>
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Many are confusing the much-talked-about biblical apocalypse with the planetary awakening. The Bible,
                  a codified and manipulated book, was used to trap human consciousness in dogmas and fears, in a
                  spiritual matrix that keeps people trapped waiting for a savior.
                </p>
                <p>
                  "Jesus" never preached blind worship or intermediaries, but rather the expansion of consciousness and
                  unconditional love. The much-talked-about "return of Christ" is just the awakening of the human
                  being's consciousness, which is only an internal event that aligns with the new reality, and never is
                  or will be an external event.
                </p>
                <p className="font-medium text-white">
                  Whoever raises their vibration will tune into this new era of light and consciousness and align with
                  the new reality, with the new vibration of the planet, and never the apocalypse!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
