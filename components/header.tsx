"use client"

import { motion, useScroll, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lang, setLang] = useState<'pt' | 'fr'>('pt')
  const [isTranslated, setIsTranslated] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const { scrollY } = useScroll()

  useEffect(() => {
    const cookie = document.cookie.includes('googtrans=/pt/fr')
    setIsTranslated(cookie)
    setLang(cookie ? 'fr' : 'pt')

    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const showDesktopNav = windowWidth !== null && windowWidth >= 1024
  const showHamburger = windowWidth !== null && windowWidth < 1024
  const isMobile = windowWidth !== null && windowWidth < 640

  const switchLanguage = (targetLang: 'pt' | 'fr') => {
    setLang(targetLang)
    if (targetLang === 'pt') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname
      window.location.reload()
      return
    }
    document.cookie = 'googtrans=/pt/fr; path=/'
    document.cookie = 'googtrans=/pt/fr; path=/; domain=' + window.location.hostname
    window.location.reload()
  }

  const handleNavClick = () => setMobileMenuOpen(false)

  const navLink =
    "relative text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 " +
    "after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-0 after:bg-gradient-to-r " +
    "after:from-[#C8935F] after:to-[#E0A878] after:rounded-full after:transition-all after:duration-300 hover:after:w-full"

  const mobileNavLink =
    "block py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 border-b border-border last:border-0"

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border shadow"
      style={{
        backgroundColor: 'rgba(250, 247, 242, 0.95)',
        marginTop: isTranslated ? '40px' : '0px',
        transition: 'margin-top 0.3s ease',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src="/logo_nav.png" alt="Pérola Humana" className="h-16 w-auto object-contain" />
           <span style={{ 
            fontWeight: 600, 
            fontSize: isMobile ? '0.85rem' : '1.1rem', 
            color: '#C8935F', 
            whiteSpace: 'nowrap' 
          }}>
            Pérola Humana
          </span>
          </div>

          {/* Desktop Navigation — só acima de 1024px */}
          {showDesktopNav && (
            <nav className="flex items-center gap-4 xl:gap-6 flex-1 justify-center px-4">
              <a href="#hero" className={navLink}>Início</a>
              <a href="#about" className={navLink}>Sobre Nós</a>
              <a href="#mission" className={navLink}>O que fazemos</a>
              <a href="#diseases" className={navLink}>Doenças</a>
              <a href="#health-videos" className={navLink}>Saúde</a>
              <a href="#timeline" className={navLink}>Autoconhecimento</a>
              <a href="#book" className={navLink}>Livro</a>
              <a href="#events" className={navLink}>Eventos</a>
              <a href="#contact" className={navLink}>Contacto</a>
            </nav>
          )}

          {/* Right side */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Botão PT / FR — sempre visível */}
            <div className="flex items-center rounded-md overflow-hidden border" style={{ borderColor: '#C8935F' }}>
              <button
                onClick={() => switchLanguage('pt')}
                className="px-3 py-1.5 text-sm font-medium transition-colors duration-200"
                style={{
                  backgroundColor: lang === 'pt' ? '#C8935F' : 'transparent',
                  color: lang === 'pt' ? '#fff' : '#C8935F',
                }}
              >
                PT
              </button>
              <div style={{ width: '1px', backgroundColor: '#C8935F', alignSelf: 'stretch' }} />
              <button
                onClick={() => switchLanguage('fr')}
                className="px-3 py-1.5 text-sm font-medium transition-colors duration-200"
                style={{
                  backgroundColor: lang === 'fr' ? '#C8935F' : 'transparent',
                  color: lang === 'fr' ? '#fff' : '#C8935F',
                }}
              >
                FR
              </button>
            </div>

            {/* Hamburger — abaixo de 1024px */}
            {showHamburger && (
              <button
                className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>

          <div id="google_translate_element" style={{ display: 'none' }} />
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {mobileMenuOpen && showHamburger && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-border overflow-hidden"
            style={{ backgroundColor: 'rgba(250, 247, 242, 0.98)' }}
          >
            <nav className="container mx-auto px-4 py-2">
              <a href="#hero" onClick={handleNavClick} className={mobileNavLink}>Início</a>
              <a href="#about" onClick={handleNavClick} className={mobileNavLink}>Sobre Nós</a>
              <a href="#mission" onClick={handleNavClick} className={mobileNavLink}>O que fazemos</a>
              <a href="#diseases" onClick={handleNavClick} className={mobileNavLink}>Doenças</a>
              <a href="#health-videos" onClick={handleNavClick} className={mobileNavLink}>Saúde</a>
              <a href="#timeline" onClick={handleNavClick} className={mobileNavLink}>Autoconhecimento</a>
              <a href="#book" onClick={handleNavClick} className={mobileNavLink}>Livro</a>
              <a href="#events" onClick={handleNavClick} className={mobileNavLink}>Eventos</a>
              <a href="#contact" onClick={handleNavClick} className={mobileNavLink}>Contacto</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}