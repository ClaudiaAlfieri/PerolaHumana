"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Yoga Instructor",
    content:
      "This program transformed my approach to wellness. The personalized guidance helped me achieve balance in both body and mind.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Software Engineer",
    content:
      "Finally found a wellness program that fits my busy lifestyle. The results have been incredible and sustainable.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Entrepreneur",
    content: "The holistic approach made all the difference. I feel more energized and focused than ever before.",
    rating: 5,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-20 lg:py-32 px-4 bg-secondary/30 border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Trusted by thousands</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join our community of people who have transformed their lives through wellness.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.2, delay: index * 0.15 }}
              whileHover={{ scale: 1.03}}
            >
              <Card className="p-8 border-border h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
