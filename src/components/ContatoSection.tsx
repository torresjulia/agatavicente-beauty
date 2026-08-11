const WA_NUMBER = '5511999999999'
const WA_MESSAGE = 'Olá! Vim pelo site e gostaria de agendar um horário!'

export default function ContatoSection() {
  const whatsappHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

  return (
    <section id="contato" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Gold horizontal accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
            Contato
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-white">
            Pronta para sua{' '}
            <em className="gradient-rose-gold not-italic">transformação?</em>
          </h2>
          <div className="gold-divider max-w-32 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: CTA principal */}
          <div className="bg-gradient-to-br from-[#1a1010] to-[#0f0f0f] border border-[#c9a84c]/20 p-10">
            <h3 className="font-cormorant text-3xl text-white font-light mb-4">
              Agende pelo WhatsApp
            </h3>
            <p className="font-raleway text-sm text-white/75 leading-relaxed mb-8 font-light">
              A forma mais rápida de garantir o seu horário. Envie uma mensagem e respondemos em
              até 2 horas durante o horário de atendimento.
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-raleway text-sm tracking-[0.1em] uppercase px-8 py-4 hover:bg-[#20b85a] transition-colors w-full justify-center sm:w-auto"
            >
              {/* WhatsApp icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="white"
                aria-hidden="true"
              >
                <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.617 4.56 1.693 6.48L2.667 29.333l6.987-1.667A13.27 13.27 0 0016.003 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.003 2.667zm0 2.4c5.96 0 10.8 4.84 10.8 10.8s-4.84 10.8-10.8 10.8a10.77 10.77 0 01-5.493-1.507l-.387-.24-4.147.987.987-4.027-.267-.4A10.77 10.77 0 015.203 16c0-5.96 4.84-10.933 10.8-10.933zm-3.04 5.493c-.24 0-.627.093-.96.453-.32.36-1.227 1.2-1.227 2.933s1.253 3.4 1.427 3.64c.173.24 2.427 3.867 5.973 5.28 2.96 1.187 3.547.96 4.187.907.64-.053 2.08-.853 2.373-1.68.293-.827.293-1.533.2-1.68-.093-.147-.333-.24-.693-.427s-2.16-1.067-2.493-1.187c-.333-.12-.573-.187-.813.187-.24.373-.92 1.187-1.133 1.427-.213.24-.427.267-.787.093-.36-.173-1.52-.56-2.893-1.787-1.067-.96-1.787-2.147-2-2.507-.213-.36-.023-.56.16-.747.16-.16.36-.427.547-.64.187-.213.24-.36.36-.6.12-.24.053-.453-.027-.64-.08-.187-.8-1.987-1.107-2.72-.293-.72-.6-.613-.813-.627-.213-.013-.453-.013-.693-.013z" />
              </svg>
              Enviar Mensagem Agora
            </a>

            <div className="mt-8 pt-8 border-t border-white/8">
              <p className="font-raleway text-xs tracking-[0.1em] uppercase text-[#c9a84c] mb-3">
                Instagram
              </p>
              <a
                href="https://instagram.com/agatavicente.beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-raleway text-sm text-white/82 hover:text-[#d4a0a0] transition-colors"
              >
                {/* Instagram SVG inline */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                @agatavicente.beauty
              </a>
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="flex flex-col gap-5">
            {/* Endereço */}
            <div className="border border-white/8 p-6 bg-[#0f0f0f]">
              <p className="font-raleway text-xs tracking-[0.2em] uppercase text-[#c9a84c] mb-3">
                Localização
              </p>
              <p className="font-cormorant text-lg text-white font-light">
                Av. Jorge Tibiriçá, 714
              </p>
              <p className="font-raleway text-sm text-white/65 mt-1">
                Centro, Mogi Mirim — SP
              </p>
            </div>

            {/* Horários */}
            <div className="border border-white/8 p-6 bg-[#0f0f0f]">
              <p className="font-raleway text-xs tracking-[0.2em] uppercase text-[#c9a84c] mb-4">
                Horário de Atendimento
              </p>
              <div className="space-y-2">
                {[
                  { dia: 'Segunda — Sexta', hora: '9h às 19h' },
                  { dia: 'Sábado', hora: '9h às 17h' },
                  { dia: 'Domingo', hora: 'Fechado' },
                ].map((h) => (
                  <div key={h.dia} className="flex justify-between items-center">
                    <span className="font-raleway text-sm text-white/75">{h.dia}</span>
                    <span className="font-raleway text-sm text-white/80">{h.hora}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="border border-[#d4a0a0]/20 bg-[#1a0f0f]/50 p-6">
              <p className="font-cormorant text-lg text-[#d4a0a0] italic mb-2">
                Atendimento com hora marcada
              </p>
              <p className="font-raleway text-xs text-white/65 leading-relaxed">
                Para garantir a exclusividade e qualidade do seu atendimento, trabalho
                exclusivamente com agendamento prévio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
