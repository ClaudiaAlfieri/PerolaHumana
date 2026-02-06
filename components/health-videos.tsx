"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function HealthVideos() {
  return (
    <section id="health-videos" className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">
              Saúde
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] rounded-full mx-auto mb-4" />
          </div>
          <p className="text-slate-400">Conteúdo exclusivo em breve</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1, 2].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-video bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8935F]/5 to-[#E0A878]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mb-4 relative z-10 shadow-xl border border-slate-700 group-hover:scale-110 group-hover:border-[#C8935F]/50 transition-all duration-300">
                <Play className="w-8 h-8 text-[#C8935F] ml-1" />
              </div>
              <p className="text-slate-500 font-medium z-10">Video {item} Em breve</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}