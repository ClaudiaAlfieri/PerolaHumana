"use client"

import { motion } from "framer-motion"

export function Benefits() {
  return (
    <section id="about" className="py-20 lg:py-32 px-4 border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-secondary">
              <img
                src="/healthy-food-nutrition-colorful-vegetables-fruits.jpg"
                alt="Healthy nutrition"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Nourish your body, elevate your life
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that true wellness comes from understanding your unique needs. Our expert team creates
              personalized nutrition and lifestyle plans that work with your body, not against it.
            </p>

            <div className="space-y-4 pt-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Personalized Approach</h4>
                  <p className="text-muted-foreground">
                    Tailored wellness plans based on your unique health profile and goals.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expert Guidance</h4>
                  <p className="text-muted-foreground">
                    Access to certified nutritionists, trainers, and wellness coaches.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Sustainable Results</h4>
                  <p className="text-muted-foreground">
                    Build lasting habits that support long-term health and vitality.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
