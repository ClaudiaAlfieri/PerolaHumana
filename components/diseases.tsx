"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Heart, ChevronUp, ChevronDown, Play, Pause, Sparkles } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import DiseasesAlphabetGrid from './ui/DiseasesAlphabetGrid'

// Custom hook to handle audio exclusivity with controls
function useExclusiveAudio(audioSrc: string) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(audioSrc)
    audio.loop = true
    audioRef.current = audio

    // Update time and progress
    const updateTime = () => {
      setCurrentTime(audio.currentTime)
      setDuration(audio.duration || 0)
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateTime)

    const handleGlobalPause = (e: CustomEvent) => {
      if (e.detail?.source !== audioSrc) {
        audio.pause()
        setIsPlaying(false)
      }
    }

    window.addEventListener("audio:play", handleGlobalPause as EventListener)

    return () => {
      audio.pause()
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateTime)
      window.removeEventListener("audio:play", handleGlobalPause as EventListener)
    }
  }, [audioSrc])

  const toggleAudio = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      const event = new CustomEvent("audio:play", { detail: { source: audioSrc } })
      window.dispatchEvent(event)
      audioRef.current.play().catch((err) => console.log("Audio play failed", err))
      setIsPlaying(true)
    }
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    setProgress(value)
    if (audioRef.current && duration) {
      audioRef.current.currentTime = (value / 100) * duration
    }
  }

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return { isPlaying, toggleAudio, currentTime, duration, progress, handleProgressChange, formatTime }
}

export default function Diseases() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  // Use the custom hook for the meditation track
  const { isPlaying, toggleAudio, currentTime, duration, progress, handleProgressChange, formatTime } = useExclusiveAudio("/music/audio.mp3")

  return (
    <section id="diseases" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-secondary/10 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 pb-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">
            DOENÇAS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] rounded-full mx-auto" />
          <h4 className="text-base sm:text-lg text-muted-foreground mt-4 mb-4 max-w-4xl mx-auto">
            ACONSELHO REMÉDIOS QUE NÃO ENCONTRA NA FARMÁCIA
          </h4>
          <h5 className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto">
            CONSUMIR COM FREQUÊNCIA!
          </h5>
          
          {/* Tabela de Remédios */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mx-auto max-w-3xl">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 text-left">JEJUM, É UM REMÉDIO</td>
                  <td className="border border-gray-300 p-3 text-left">AMAR, É UM REMÉDIO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-left">GRATIDÃO, É UM REMÉDIO</td>
                  <td className="border border-gray-300 p-3 text-left">PERDOAR, É UM REMÉDIO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-left">COMIDA DE VERDADE, É UM REMÉDIO</td>
                  <td className="border border-gray-300 p-3 text-left">COMER NA HORA CERTA, É UM REMÉDIO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-left">RIR, É UM REMÉDIO</td>
                  <td className="border border-gray-300 p-3 text-left">DANÇAR É UM REMÉDIO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-left">PENSAMENTO POSITIVO, É UM REMÉDIO</td>
                  <td className="border border-gray-300 p-3 text-left">MEDITAÇÃO, É UM REMÉDIO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-left">APANHAR SOL (com consciência), É UM REMÉDIO</td>
                  <td className="border border-gray-300 p-3 text-left">EXERCÍCIO FÍSICO, É UM REMÉDIO</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Reprodutor de Meditação - Abaixo da Tabela */}
          <div className="my-5 max-w-2xl mx-auto">
            <div className="rounded-2xl bg-card/80 backdrop-blur-md border border-border/60 shadow-lg p-6">
              <div className="space-y-4">
                {/* Header com título e botão play */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Sparkles className="w-5 h-5 text-[#C8935F]" />
                    <span className="text-[#C8935F] font-medium text-base sm:text-lg">
                      Meditação: Cure as células doentes
                    </span>
                  </div>

                  {/* Botão de Play/Pause */}
                  <motion.button
                    onClick={toggleAudio}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background border border-border shadow-sm flex items-center justify-center overflow-hidden group transition-all duration-300 flex-shrink-0 ${
                      isPlaying ? "ring-2 ring-[#C8935F]/50" : "hover:border-[#C8935F]/50"
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className={`text-3xl transition-transform duration-[3000ms] ease-linear ${
                          isPlaying ? "animate-spin" : ""
                        }`}
                      >
                        💿
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors rounded-full">
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white drop-shadow-md" fill="currentColor" />
                      ) : (
                        <Play className="w-5 h-5 text-white drop-shadow-md ml-0.5" fill="currentColor" />
                      )}
                    </div>
                  </motion.button>
                </div>

                {/* Barra de progresso */}
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleProgressChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C8935F]"
                    style={{
                      background: `linear-gradient(to right, #C8935F 0%, #C8935F ${progress}%, #e5e7eb ${progress}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Status de Reprodução */}
                <AnimatePresence>
                  {isPlaying && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm font-medium text-[#C8935F] flex items-center gap-2 justify-center italic"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8935F] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8935F]"></span>
                      </span>
                      Meditação Guiada Ativa
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Texto Introdução à Saúde */}
          <div className="text-muted-foreground leading-relaxed space-y-4 mb-12 mt-5">
            <h4 className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto">
              INTRODUÇÃO À SAÚDE
            </h4>
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
            <strong>
              Quando existe autorreflexão honesta e reconciliação interna, o organismo responde com
              mais equilíbrio, resiliência e clareza emocional
            </strong>
          </div>
        </div>

        {/* Card do Perdão */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            onPointerEnter={() => setExpandedCard("philosophy")}
            onPointerLeave={() => setExpandedCard(null)}
            className="rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 shadow-lg transition-all overflow-hidden"
          >
            {/* Header do Card - Always Visible & Clickable */}
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
                  <ChevronUp className="w-5 h-5 text-[#C8935F] " />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#C8935F]" />
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

        {/* Lista Alfabética de Doenças */}
        <DiseasesAlphabetGrid />
      </div>
    </section>
  )
}