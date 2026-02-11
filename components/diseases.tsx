"use client"

import { motion, useMotionValue, useAnimationFrame, AnimatePresence, type PanInfo } from "framer-motion"
import { Heart, Brain, Bone, Eye, Stethoscope, ChevronUp, ChevronDown, Droplet, Search, X, Play, Pause, Sparkles, Activity, Shield, Zap, Apple, Activity as HypertensionIcon, Brain as AlzheimerIcon, Bone as ArthritisIcon, Scale as ObesityIcon, Syringe, } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import React from "react"

// --- Data ---
const diseases = [
  {
    icon: Heart,
    name: "Cardiovascular Disease",
    description: "Understanding heart health, prevention strategies, and early warning signs.",
    extendedDescription: "Cardiovascular diseases affect the heart and blood vessels. Prevention focuses on maintaining a healthy diet, regular exercise, stress management, and regular health screenings.",
    imageTag: "[Image of heart cardiovascular system]",
    color: "from-[#C8935F] to-[#E0A878]",
  },
  {
    icon: Brain,
    name: "Mental Health",
    description: "Exploring depression, anxiety, and stress-related conditions with care.",
    extendedDescription: "Mental health encompasses emotional, psychological, and social well-being. Self-care practices like mindfulness, regular exercise, and strong social connections play vital roles.",
    imageTag: "[Image of brain neural network]",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Droplet,
    name: "Diabetes",
    description: "Managing blood sugar levels through lifestyle changes and monitoring.",
    extendedDescription: "Diabetes management includes monitoring blood glucose levels, following a balanced diet, regular physical activity, and medication when needed to prevent complications.",
    imageTag: "[Image of blood glucose monitoring]",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Bone,
    name: "Osteoporosis",
    description: "Strengthening bones and preventing fractures through nutrition.",
    extendedDescription: "Osteoporosis causes weak bones. Prevention involves calcium and vitamin D supplementation, weight-bearing exercises, and avoiding smoking and excessive alcohol.",
    imageTag: "[Image of bone density]",
    color: "from-emerald-400 to-green-500",
  },
  {
    icon: Eye,
    name: "Vision Care",
    description: "Protecting eye health and managing conditions like glaucoma.",
    extendedDescription: "Regular eye exams can detect problems early. Protective measures include wearing UV-protective sunglasses, taking screen breaks, and eating a diet rich in omega-3s.",
    imageTag: "[Image of human eye anatomy]",
    color: "from-teal-400 to-emerald-500",
  },
  {
    icon: Stethoscope,
    name: "Respiratory Health",
    description: "Managing asthma, COPD, and breathing conditions.",
    extendedDescription: "Management includes avoiding triggers, breathing exercises, and pulmonary rehabilitation. Air quality significantly impacts respiratory health.",
    imageTag: "[Image of human lungs respiratory system]",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Activity,
    name: "Hypertension",
    description: "Controlling high blood pressure through diet and lifestyle.",
    extendedDescription: "Hypertension increases risk of heart disease. Management involves reducing salt intake, regular exercise, stress reduction, and monitoring blood pressure regularly.",
    imageTag: "[Image of blood pressure monitor]",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: AlzheimerIcon,
    name: "Alzheimer's Disease",
    description: "Understanding memory loss and cognitive decline prevention.",
    extendedDescription: "Alzheimer's affects brain function. Prevention strategies include mental stimulation, healthy diet, physical activity, and social engagement to maintain cognitive health.",
    imageTag: "[Image of brain with Alzheimer's effects]",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: ArthritisIcon,
    name: "Arthritis",
    description: "Managing joint pain and inflammation through exercise and diet.",
    extendedDescription: "Arthritis causes joint inflammation. Treatment includes anti-inflammatory foods, low-impact exercises, weight management, and sometimes medication for pain relief.",
    imageTag: "[Image of inflamed joints]",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: ObesityIcon,
    name: "Obesity",
    description: "Addressing weight management and related health risks.",
    extendedDescription: "Obesity increases risk of various diseases. Management focuses on balanced nutrition, regular physical activity, behavioral changes, and professional guidance when needed.",
    imageTag: "[Image of body mass index chart]",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Sparkles,
    name: "Infectious Diseases",
    description: "Preventing and managing viral and bacterial infections.",
    extendedDescription: "Infectious diseases spread through various means. Prevention includes vaccination, hygiene practices, healthy immune system support, and prompt medical attention.",
    imageTag: "[Image of virus particles]",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Shield,
    name: "Immune System Disorders",
    description: "Supporting immune health and managing autoimmune conditions.",
    extendedDescription: "Autoimmune disorders occur when the immune system attacks the body. Management includes stress reduction, anti-inflammatory diet, exercise, and medical treatments.",
    imageTag: "[Image of immune cells]",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Apple,
    name: "Nutritional Deficiencies",
    description: "Identifying and correcting vitamin and mineral imbalances.",
    extendedDescription: "Nutritional deficiencies can lead to various health issues. Prevention involves diverse diet, supplementation when necessary, and regular health check-ups.",
    imageTag: "[Image of vitamins and minerals]",
    color: "from-green-500 to-lime-500",
  },
  {
    icon: Zap,
    name: "Chronic Fatigue",
    description: "Managing persistent tiredness and energy levels.",
    extendedDescription: "Chronic fatigue affects daily life. Management includes sleep hygiene, balanced nutrition, gentle exercise, stress management, and ruling out underlying conditions.",
    imageTag: "[Image of exhausted person]",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Sparkles,
    name: "Lung Cancer",
    description: "Prevention and early detection of respiratory cancers.",
    extendedDescription: "Lung cancer is often linked to smoking. Prevention includes quitting tobacco, avoiding pollutants, healthy diet, and regular screenings for at-risk individuals.",
    imageTag: "[Image of lungs with cancer]",
    color: "from-gray-500 to-slate-500",
  },
  {
    icon: Syringe,
    name: "Vaccination-Preventable Diseases",
    description: "Importance of immunization for public health.",
    extendedDescription: "Vaccines prevent serious illnesses. Staying up-to-date with vaccinations protects individuals and communities through herd immunity.",
    imageTag: "[Image of vaccine administration]",
    color: "from-cyan-500 to-sky-500",
  },
]

const remedies = [
  "FASTING",
  "LOVING",
  "GRATITUDE",
  "REAL FOOD",
  "EATING AT THE RIGHT TIME",
  "POSITIVE THINKING",
  "FORGIVING",
  "LAUGHING",
  "DANCING",
  "GETTING SUN",
  "MEDITATION",
  "PHYSICAL EXERCISE",
]

// Custom hook to handle audio exclusivity
function useExclusiveAudio(audioSrc: string) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio instance
    const audio = new Audio(audioSrc)
    audio.loop = true
    audioRef.current = audio

    // Listener for custom event from other components
    const handleGlobalPause = (e: CustomEvent) => {
      // If the event wasn't triggered by us, pause playback
      if (e.detail?.source !== audioSrc) {
        audio.pause()
        setIsPlaying(false)
      }
    }

    window.addEventListener("audio:play", handleGlobalPause as EventListener)

    return () => {
      audio.pause()
      window.removeEventListener("audio:play", handleGlobalPause as EventListener)
    }
  }, [audioSrc])

  const toggleAudio = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      // Dispatch event to stop others before playing
      const event = new CustomEvent("audio:play", { detail: { source: audioSrc } })
      window.dispatchEvent(event)

      audioRef.current.play().catch((err) => console.log("Audio play failed", err))
      setIsPlaying(true)
    }
  }

  return { isPlaying, toggleAudio }
}

export default function Diseases() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [currentRemedyIndex, setCurrentRemedyIndex] = useState(0)
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const [visibleDiseases, setVisibleDiseases] = useState<typeof diseases>(diseases)

  // Use the custom hook for the meditation track
  const { isPlaying, toggleAudio } = useExclusiveAudio("/music/sample.mp3")

  useEffect(() => {
    if (!searchQuery.trim()) {
      setVisibleDiseases(diseases)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = diseases.filter((disease) => {
      const cardElement = cardRefs.current.get(disease.name)
      if (!cardElement) return false
      const displayedText = cardElement.textContent?.toLowerCase() || ""
      return displayedText.includes(query)
    })

    setVisibleDiseases(filtered)
  }, [searchQuery])

  // Auto-cycle natural remedies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRemedyIndex((i) => (i + 1) % remedies.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const toggleExpand = (name: string) => {
    setExpandedCard((prev) => (prev === name ? null : name))
  }

  const setCardRef = (name: string, element: HTMLDivElement | null) => {
    if (element) {
      cardRefs.current.set(name, element)
    } else {
      cardRefs.current.delete(name)
    }
  }

  return (
    <section id="diseases" className="py-20 sm:py-24 lg:py-32  bg-gradient-to-b from-secondary/10 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 pb-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">
            DOENÇAS
          </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] rounded-full mx-auto" />
          <h3 className="text-1xl sm:text-1xl lg:text-2xl mb-2 mt-4 pb-1 bg-clip-text text-black">ACONSELHO REMÉDIOS QUE NÃO ENCONTRA NA FARMÁCIA</h3>
          <h5 className="text-1xl sm:text-1xl lg:text-2xl mb-2 mt-4 pb-1 bg-clip-text text-black">CONSUMIR COM FREQUÊNCIA!</h5>
          
          <div className="text-muted-foreground leading-relaxed space-y-4 mb-12 mt-5">
            <p>
              O acesso ao inconsciente exige clareza, observação e consciência. O meu objetivo não é
              complicar nem prometer soluções milagrosas, mas simplificar — ajudar cada pessoa a
              reconhecer e reorganizar padrões internos que influenciam emoções, comportamentos e estados
              físicos.
              O corpo humano é um sistema complexo, regulado por sinais elétricos, químicos e
              neurológicos. Apesar dos avanços da medicina, a interação entre mente, emoções e corpo ainda
              não é totalmente compreendida. A ciência moderna, incluindo a física quântica, mostrou que a
              realidade não é fixa nem isolada: tudo funciona através de interação, informação e relação.
              A física quântica não afirma que pensamentos curam doenças, mas demonstra que o observador
              influencia os sistemas e que nenhum processo ocorre de forma independente. Em termos
              humanos, isso traduz-se no impacto real da perceção, da atenção e dos estados emocionais sobre
              o funcionamento interno.
              Grande parte dos nossos comportamentos resulta de condicionamentos inconscientes adquiridos
              desde a infância. Abordagens como a Programação Neurolinguística mostram que esses padrões
              podem ser identificados e reorganizados, promovendo maior autorregulação emocional.

              O meu trabalho consiste em ajudar a ultrapassar crenças limitantes, explorar planos
              inconscientes de forma consciente e restaurar coerência interna entre mente, emoções e corpo. A
              transformação não depende apenas do intelecto, mas da perceção do próprio sistema interior.
              </p>
              <strong> Quando existe autorreflexão honesta e reconciliação interna, o organismo responde com
              mais equilíbrio, resiliência e clareza emociona</strong>
             l
            
          </div>
        </div>

        {/* ========================================= */}
        {/* PHILOSOPHY & COMPACT WELLNESS BAR & SEARCH*/}
        {/* ========================================= */}
        <div className="max-w-6xl mx-auto space-y-8 mb-20">
          {/* Philosophy Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              onPointerEnter={() => setExpandedCard("philosophy")}
              onPointerLeave={() => setExpandedCard(null)}
              className="rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 shadow-lg transition-all overflow-hidden"
            >
              {/* Header - Always Visible & Clickable */}
              <button
                onClick={() =>
                  setExpandedCard(expandedCard === "philosophy" ? null : "philosophy")
                }
                className="w-full text-left p-6 sm:p-8 flex items-center justify-between hover:bg-card/90 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C8935F] to-[#E0A878] flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold">PERDÃO O QUE É?</h4>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedCard === "philosophy" ? (
                    <ChevronUp className="w-5 h-5 text-[#C8935F] dark:text-[#C8935F]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#C8935F] dark:text-[#C8935F]" />
                  )}
                </div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedCard === "philosophy" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border/50 overflow-hidden"
                  >
                    <div className="p-6 sm:p-8 space-y-4 text-muted-foreground">
                      <div className="leading-relaxed">
                                             
                       Perdoar verdadeiramente é uma questão de inteligência! É um processo interno que dissolve
                      ressentimentos, mágoas e dores que prendem a mente e o coração a situações do passado, é a
                      forma de provar a si mesmo que as suas emoções negativas estão sob o seu controle e que
                      conhece o seu próprio potencial para conquistar novos caminhos e realidades. Perdoar é um
                      ato de amor-próprio. É uma escolha consciente de deixar o passado no passado e viver
                      plenamente o presente. Então, perdoe, não pelo outro, mas por si, liberte-se de fardos! Perdoe!                     
                      </div>  
                       <strong className="block font-semibold text-foreground mb-2">
                         Quem não perdoa abandona a si mesmo.
                      </strong>                                       
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* New Structure: Search Bar and Compact Wellness Bar Side-by-Side */}
          <div className="max-w-4xl flex flex-col sm:flex-row gap-4 items-start relative z-20 mx-auto">
            {/* Search Bar - Now occupies half the width */}
            <div className="w-full sm:w-1/2 relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search diseases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-card shadow-sm focus:ring-2 focus:ring-[#C8935F]/20 focus:border-[#C8935F] outline-none transition-all pb-3 h-14"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* New Compact Wellness Bar - Now occupies the other half */}
            <div className="w-full relative h-16 sm:w-9/12">
              <div className="rounded-full bg-card/80 backdrop-blur-md border border-border/60 shadow-lg p-2 flex items-center justify-between pr-3 gap-4">
                {/* Left Side: Remedy Ticker */}
                <div className="flex items-center gap-4 pl-4 overflow-hidden flex-1">
                  <div className="flex items-center gap-2 text-[#C8935F] dark:text-[#C8935F] font-medium whitespace-nowrap">
                    <Sparkles className="w-4 h-4" />
                    <span className="hidden sm:inline text-base">Prescription:</span>
                  </div>
                  <div className="h-8 relative overflow-hidden flex-1">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentRemedyIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <span className="font-bold text-foreground text-sm tracking-wide italic mx-0 sm:text-lg">
                          {remedies[currentRemedyIndex]}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right Side: Compact Media Player */}
                <motion.button
                  onClick={toggleAudio}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background border border-border shadow-sm flex items-center justify-center overflow-hidden group transition-all duration-300 flex-shrink-0 ${
                    isPlaying ? "ring-2 ring-[#C8935F]/50" : "hover:border-[#C8935F]/50"
                  }`}
                >
                  {/* Spinning Disk Effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`text-xl sm:text-2xl transition-transform duration-[3000ms] ease-linear ${
                        isPlaying ? "animate-spin" : ""
                      }`}
                    >
                      💿
                    </span>
                  </div>

                  {/* Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors rounded-full">
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-white drop-shadow-md" fill="currentColor" />
                    ) : (
                      <Play className="w-4 h-4 text-white drop-shadow-md ml-0.5" fill="currentColor" />
                    )}
                  </div>
                </motion.button>
              </div>

              {/* Playing Status Indicator - Positioned relative to its new parent (the Wellness Bar container) */}
              <AnimatePresence>
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-[#C8935F] dark:text-[#C8935F] flex items-center gap-1.5 whitespace-nowrap italic"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8935F] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8935F]"></span>
                    </span>
                    Guided Meditation Active
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CONDITIONAL RENDERING */}
          {searchQuery ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {visibleDiseases.length > 0 ? (
                visibleDiseases.map((disease) => (
                  <DiseaseCard
                    key={disease.name}
                    disease={disease}
                    isExpanded={expandedCard === disease.name}
                    onToggle={() => toggleExpand(disease.name)}
                    ref={(el) => setCardRef(disease.name, el)}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                  No diseases found matching "{searchQuery}"
                </div>
              )}
            </div>
          ) : (
            <MarqueeView expandedCard={expandedCard} onToggle={toggleExpand} setCardRef={setCardRef} />
          )}
        </div>
      </div>
    </section>
  )
}

// --- Sub-components ---
function MarqueeView({
  expandedCard,
  onToggle,
  setCardRef,
}: {
  expandedCard: string | null
  onToggle: (name: string) => void
  setCardRef: (name: string, element: HTMLDivElement | null) => void
}) {
  const [isDragging, setIsDragging] = useState(false)
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const velocity = useRef(0)
  const lastTime = useRef(0)
  const [contentWidth, setContentWidth] = useState(0)
  const marqueeItems = [...diseases, ...diseases, ...diseases]

  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        // Calculate the width of one set of diseases for wrapping
        const total = containerRef.current.scrollWidth
        setContentWidth(total / 3)
      }
    }

    // Delay calculation slightly to ensure layout is settled
    const timer = setTimeout(calculateWidth, 100)
    window.addEventListener("resize", calculateWidth)

    return () => {
      window.removeEventListener("resize", calculateWidth)
      clearTimeout(timer)
    }
  }, [])

  useAnimationFrame((t, delta) => {
    if (!delta || !contentWidth) return
    const dt = delta / 1000
    let currentX = x.get()

    if (isDragging) {
      lastTime.current = t
      return
    }

    if (Math.abs(velocity.current) > 10) {
      // Decelerate after flicking
      currentX += velocity.current * dt
      x.set(currentX)
      velocity.current *= 0.95
    } else {
      // Auto-scroll if not expanded
      if (!expandedCard) {
        velocity.current = 0
        currentX -= 20 * dt // Constant scroll speed
        x.set(currentX)
      }
    }

    // Infinite loop logic
    if (currentX <= -contentWidth) {
      x.set(0)
    }
    // Prevent scrolling too far right on mobile without dragging
    if (currentX > 0) {
      x.set(-contentWidth)
    }
  })

  const handleDragStart = () => {
    setIsDragging(true)
    velocity.current = 0
  }

  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false)
    velocity.current = info.velocity.x
  }

  return (
    <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing">
      <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <motion.div
        ref={containerRef}
        className="flex gap-6 px-4 w-max py-0 mt-5"
        style={{ x }}
        drag="x"
        dragElastic={0.1}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {marqueeItems.map((disease, idx) => (
          <div key={`${disease.name}-${idx}`} className="w-[300px] sm:w-[350px] flex-shrink-0">
            <DiseaseCard
              disease={disease}
              isExpanded={expandedCard === disease.name}
              onToggle={() => onToggle(disease.name)}
              ref={(el) => setCardRef(disease.name, el)}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const DiseaseCard = React.forwardRef<
  HTMLDivElement,
  {
    disease: (typeof diseases)[0]
    isExpanded: boolean
    onToggle: () => void
  }
>(({ disease, isExpanded, onToggle }, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      transition={{ layout: { duration: 0.3 } }}
      className={`h-full bg-card rounded-2xl border p-6 sm:p-8 flex flex-col transition-all duration-300 ${
        isExpanded ? "border-[#C8935F]/50 shadow-[#C8935F]/10 shadow-xl scale-[1.02]" : "border-border hover:border-[#C8935F]/30 hover:shadow-lg"
      }`}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${disease.color} flex items-center justify-center mb-4 shadow-md shrink-0`}>
        <disease.icon className="w-6 h-6 text-white" />
      </div>
      <motion.h3 layout="position" className="text-xl font-semibold mb-3">
        {disease.name}
      </motion.h3>
      <motion.p layout="position" className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
        {disease.description}
      </motion.p>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2 border-t border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                {disease.extendedDescription}
              </p>
              {/* Image rendered here for context awareness */}
              <div className="hidden">{disease.imageTag}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-auto pt-2">
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggle()
          }}
          className="flex items-center gap-2 text-sm font-medium text-[#C8935F] dark:text-[#C8935F] hover:text-[#B8844E] dark:hover:text-[#F0B888] transition-colors group"
        >
          <span>{isExpanded ? "Read Less" : "Read More"}</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          ) : (
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          )}
        </button>
      </div>
    </motion.div>
  )
})

DiseaseCard.displayName = "DiseaseCard"