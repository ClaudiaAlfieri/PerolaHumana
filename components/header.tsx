"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"

export function Header() {
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   const previous = scrollY.getPrevious() ?? 0
  //   if (latest > previous && latest > 150) {
  //     setHidden(true)
  //   } else {
  //     setHidden(false)
  //   }
  // })

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  // Reusable class for underline hover animation
  const navLink =
    "relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 " +
    "after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-0 after:bg-gradient-to-r " +
    "after:from-[#C8935F] after:to-[#E0A878] after:rounded-full after:transition-all after:duration-300 hover:after:w-full"

  const mobileNavLink =
    "block py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border shadow"
      style={{ backgroundColor: 'rgba(250, 247, 242, 0.95)' }}
    >
      <div className="container mx-auto px-4 sm:px-5 lg:px-0">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 px-2.5">
            <img 
              src="/logo_nav.png" 
              alt="Pérola Humana" 
              className="h-14 sm:h-16 w-auto object-contain"
            />
            <span className="font-semibold text-xl sm:text-2xl" style={{ color: '#C8935F' }}>
              Pérola Humana
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 px-1">
            <a href="#hero" className={navLink}>
              Início
            </a>
            <a href="#about" className={navLink}>
              Sobre Nós
            </a>
            <a href="#mission" className={navLink}>
              O que fazemos
            </a>                        
            <a href="#diseases" className={navLink}>
              Doenças
            </a>
            <a href="#health-videos" className={navLink}>
              Saúde
            </a>
            <a href="#timeline" className={navLink}>
              Autoconhecimento
            </a>
            <a href="#book" className={navLink}>
              Livro
            </a>
            <a href="#events" className={navLink}>
              Eventos
            </a>
            <a href="#contact" className={navLink}>
              Contacto
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center px-5 sm:gap-3">
            {/* <Button variant="ghost" className="hidden sm:inline-flex border text-sm">
              Sign In
            </Button> */}
                      
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border backdrop-blur-md overflow-hidden"
            style={{ backgroundColor: 'rgba(250, 247, 242, 0.95)' }}
          >
            <nav className="container mx-auto px-4 sm:px-6 py-4">
              <a href="#about" onClick={handleNavClick} className={mobileNavLink}>
                About
              </a>
              <a href="#mission" onClick={handleNavClick} className={mobileNavLink}>
                Mission
              </a>
              <a href="#events" onClick={handleNavClick} className={mobileNavLink}>
                Events
              </a>
              <a href="#diseases" onClick={handleNavClick} className={mobileNavLink}>
                Health
              </a>
              <a href="#health-videos" onClick={handleNavClick} className={mobileNavLink}>
                Videos
              </a>
              <a href="#timeline" onClick={handleNavClick} className={mobileNavLink}>
                Timeline
              </a>
              <a href="#book" onClick={handleNavClick} className={mobileNavLink}>
                Book
              </a>
              <a href="#contact" onClick={handleNavClick} className={mobileNavLink}>
                Contact
              </a>
              {/* <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="ghost" className="flex-1 border text-sm">
                  Sign In
                </Button>
                <Button className="flex-1 text-sm">Get Started</Button>
              </div> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}