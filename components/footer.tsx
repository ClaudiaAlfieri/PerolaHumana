import { Mail, Phone } from "lucide-react"

export function Footer() {
  const linkWithUnderline =
    "relative hover:text-foreground transition-colors duration-300 " +
    "after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-0 after:bg-gradient-to-r " +
    "after:from-emerald-500 after:to-teal-400 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"

  return (
    <footer className="border-t border-border bg-secondary/20 px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <span className="font-semibold text-xl text-foreground">Pérola Humana</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A sua jornada rumo à saúde e bem-estar ideais.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent mb-4">Navegue</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className={linkWithUnderline}>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#mission" className={linkWithUnderline}>
                  O que fazemos
                </a>
              </li>
              <li>
                <a href="#diseases" className={linkWithUnderline}>
                  Doenças
                </a>
              </li>
              <li>
                <a href="#book" className={linkWithUnderline}>
                  Livro
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#events" className={linkWithUnderline}>
                  Eventos
                </a>
              </li>
              <li>
                <a href="#timeline" className={linkWithUnderline}>
                  Autoconhecimento
                </a>
              </li>
              <li>
                <a href="#health-videos" className={linkWithUnderline}>
                  Saúde
                </a>
              </li>
              <li>
                <a href="#contact" className={linkWithUnderline}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+351221117865" className={linkWithUnderline}>
                    +351 221 117 865
                  </a>
                  <br />
                  <a href="tel:+351939069379" className={linkWithUnderline}>
                    +351 939 069 379
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a href="mailto:geral@perolahumana.org" className={linkWithUnderline}>
                  geral@perolahumana.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Pérola Humana. Todos os direitos reservados.</p>
          {/* <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className={linkWithUnderline}>
              Privacy Policy
            </a>
            <a href="#" className={linkWithUnderline}>
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
