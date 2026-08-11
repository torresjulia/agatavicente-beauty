const WA_NUMBER = '5511999999999'
const WA_MESSAGE = 'Olá! Vim pelo site e gostaria de agendar um horário!'

export default function HeroSection() {
  const whatsappHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] leopard-bg"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/80 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
        {/* Eyebrow */}
        <p className="font-raleway text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-6 opacity-80">
          Estúdio de Beleza Premium
        </p>

        {/* Main title */}
        <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-8xl font-light leading-tight mb-6">
          <span className="gradient-rose-gold">Arte em cada</span>
          <br />
          <span className="text-white italic">detalhe do</span>
          <br />
          <span className="gradient-rose-gold">seu olhar</span>
        </h1>

        {/* Subtitle */}
        <p className="font-raleway text-base sm:text-lg text-white/82 max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-wide">
          Referência em design de sobrancelhas, brow lamination e lash lifting.
          Transformamos o seu olhar com técnica, cuidado e exclusividade.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#catalogo"
            className="font-raleway text-sm tracking-[0.15em] uppercase px-8 py-4 bg-gradient-to-r from-[#d4a0a0] to-[#c9a84c] text-[#0a0a0a] font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Ver Catálogo
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-raleway text-sm tracking-[0.15em] uppercase px-8 py-4 border border-white/30 text-white hover:border-[#d4a0a0] hover:text-[#d4a0a0] transition-colors w-full sm:w-auto"
          >
            Agendar pelo WhatsApp
          </a>
        </div>

        {/* Divider */}
        <div className="gold-divider max-w-xs mx-auto mb-12" />

        {/* Social Proof */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-lg mx-auto">
          <div className="text-center">
            <p className="font-cormorant text-3xl sm:text-4xl font-light gradient-rose-gold">
              +500
            </p>
            <p className="font-raleway text-xs tracking-[0.1em] uppercase text-white/65 mt-1">
              Clientes Atendidas
            </p>
          </div>
          <div className="text-center">
            <p className="font-cormorant text-3xl sm:text-4xl font-light gradient-rose-gold">
              5+
            </p>
            <p className="font-raleway text-xs tracking-[0.1em] uppercase text-white/65 mt-1">
              Anos de Experiência
            </p>
          </div>
          <div className="text-center">
            <p className="font-cormorant text-3xl sm:text-4xl font-light gradient-rose-gold">
              98%
            </p>
            <p className="font-raleway text-xs tracking-[0.1em] uppercase text-white/65 mt-1">
              Satisfação
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-[1]" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-10">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#c9a84c] animate-pulse" />
        <p className="font-raleway text-[10px] tracking-[0.3em] uppercase text-[#c9a84c]">
          Scroll
        </p>
      </div>
    </section>
  )
}
