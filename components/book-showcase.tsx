"use client"

import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Share2, Star, CheckCircle } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const books = [
  {
    title: "The Path to Wellness",
    subtitle: "A Manifesto for Holistic Health and Vitality",
    author: "Helena da Fonseca",
    published: "2025",
    pages: "328",
    rating: 4.9,
    reviews: "8,547",
    categories: ["Health", "Wellness", "Bestseller"],
    description1:
      "In the fast-paced world of modern living, wellness isn't just a destination—it's a transformative journey. This is the story of resilience, vitality, and the relentless pursuit of holistic health in an age of constant change.",
    description2:
      "Drawing from years of experience in integrative medicine and helping thousands achieve optimal wellness, Dr. Pérola Humana delivers a powerful manifesto rooted in evidence-based practices while honoring ancient wisdom and natural healing traditions.",
  },
  {
    title: "Mindful Living",
    subtitle: "A Guide to Inner Peace and Balance",
    author: "Helena da Fonseca",
    published: "2024",
    pages: "256",
    rating: 4.8,
    reviews: "6,234",
    categories: ["Mindfulness", "Mental Health", "Self-Help"],
    description1:
      "Discover the transformative power of mindfulness in daily life. This comprehensive guide takes you on a journey to inner peace, teaching practical techniques for stress reduction, emotional balance, and present-moment awareness.",
    description2:
      "Through evidence-based practices and ancient meditation traditions, learn how to cultivate a mindful lifestyle that enhances well-being, improves relationships, and brings clarity to every aspect of your life.",
  },
  {
    title: "Nutrition Essentials",
    subtitle: "Fueling Your Body for Optimal Health",
    author: "Helena da Fonseca",
    published: "2024",
    pages: "298",
    rating: 4.7,
    reviews: "5,892",
    categories: ["Nutrition", "Health", "Lifestyle"],
    description1:
      "Unlock the secrets of proper nutrition and discover how food becomes medicine. This essential guide demystifies nutritional science and provides practical strategies for building a diet that supports your body's natural healing abilities.",
    description2:
      "From understanding macronutrients to creating personalized meal plans, learn how to make informed food choices that boost energy, strengthen immunity, and promote longevity through sustainable eating habits.",
  },
]

export default function BookShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [pageWidth, setPageWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalSlides = books.length

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(containerRef.current?.clientWidth || 0)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = totalSlides - 1
      if (nextIndex >= totalSlides) nextIndex = 0
      return nextIndex
    })
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const threshold = pageWidth / 3
    if (offset.x < -threshold || velocity.x < -0.5) {
      paginate(1)
    } else if (offset.x > threshold || velocity.x > 0.5) {
      paginate(-1)
    }
  }

  const currentBook = books[currentIndex]

  return (
    <section id="book" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="relative my-0">
          <div ref={containerRef} className="overflow">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: -pageWidth, right: pageWidth }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 40 }}
                onDragEnd={handleDragEnd}
                className="grid lg:grid-cols-2 items-center my-0 lg:gap-8"
              >
                {/* Book Cover - Left Side */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="flex justify-center py-3.5"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: -5 }}
                    transition={{ duration: 0.4 }}
                    className="relative group"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-500" />

                    {/* Book mockup with realistic 3D effect */}
                    <div className="relative w-72 h-[28rem] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 rounded-2xl shadow-2xl overflow-hidden border-4 border-slate-600/50 dark:border-slate-700/50">
                      {/* Book cover design with ornate pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-950 to-cyan-950 dark:from-emerald-950/80 dark:via-teal-950/80 dark:to-cyan-950/80 p-8 flex flex-col justify-between">
                        {/* Decorative border */}
                        <div className="absolute inset-4 border-4 border-amber-400/60 rounded-xl" />
                        <div className="absolute inset-6 border-2 border-amber-400/40 rounded-lg" />

                        {/* Title and content */}
                        <div className="relative z-10 text-center space-y-4 mt-12">
                          <h3 className="text-4xl font-bold text-amber-400 leading-tight text-balance">
                            {currentBook.title}
                          </h3>
                          <p className="text-amber-300/80 italic text-base">
                            {currentBook.subtitle.split(" ").join(" ")}
                          </p>
                        </div>

                        <div className="relative z-10 text-center space-y-2">
                          <p className="text-amber-400/90 text-sm italic">by</p>
                          <p className="text-amber-300 font-semibold text-xl italic">{currentBook.author}</p>
                        </div>
                      </div>

                      {/* Page effect on the right edge */}
                      <div className="absolute right-0 top-2 bottom-2 bg-white/90 shadow-inner w-2 leading-7 tracking-normal" />
                    </div>

                    {/* Shadow */}
                    <div className="absolute -bottom-6 left-8 right-8 h-10 bg-black/40 blur-2xl rounded-full" />
                  </motion.div>
                </motion.div>

                {/* Book Details - Right Side */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="space-y-6"
                >
                  {/* Category badges */}
                  

                  {/* Title */}
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-foreground">
                      {currentBook.title}
                    </h2>
                    <p className="text-xl sm:text-2xl mb-4 text-muted-foreground">{currentBook.subtitle}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <span>by {currentBook.author}</span>
                      <span>•</span>
                      <span>Published {currentBook.published}</span>
                      <span>•</span>
                      <span>{currentBook.pages} pages</span>
                    </div>
                  </div>
                  {/* Category badges */}
                  <div className="flex flex-wrap gap-2 italic">
                    {currentBook.categories.map((category) => (
                      <span
                        key={category}
                        className="px-4 py-1.5 bg-muted rounded-full text-sm font-medium text-foreground border border-border"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  {/* Description */}
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p className="text-foreground">{currentBook.description1}</p>
                    <p className="text-foreground">{currentBook.description2}</p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" variant="outline" className="shadow-md bg-transparent">
                      <ShoppingCart className="w-5 h-5 mr-2 text-sidebar-primary" />
                      Pre-Order Now
                    </Button>
                    <Button size="lg" variant="outline" className="shadow-md bg-transparent">
                      <Heart className="w-5 h-5 mr-2 text-destructive" />
                      Wishlist
                    </Button>
                    <Button size="lg" variant="outline" className="shadow-md bg-transparent">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Rating and availability */}
                  <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2 text-primary">{currentBook.rating}</div>
                      <div className="flex gap-1 mb-2 justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">{currentBook.reviews} reviews</div>
                    </div>

                    <div className="flex items-center gap-3 text-primary">
                      <CheckCircle className="w-6 h-6" />
                      <div>
                        <div className="font-semibold">Available</div>
                        <div className="text-sm text-muted-foreground">Pre-order now</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-16">
            {books.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-12 bg-gradient-to-r from-primary to-secondary"
                    : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to book ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
