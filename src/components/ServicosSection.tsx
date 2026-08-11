const WA_NUMBER = '5511999999999'

const servicos = [
  {
    titulo: 'Design de Sobrancelha',
    descricao:
      'Mapeamento facial preciso e modelagem personalizada para realçar sua expressão natural. Inclui higienização, design e acabamento.',
    preco: 'Consultar',
    categoria: 'Sobrancelhas',
    destaque: false,
    emoji: '✦',
    waMsg: 'Olá! Vim pelo site e gostaria de agendar um Design de Sobrancelha!',
  },
  {
    titulo: 'Brow Lamination',
    descricao:
      'Técnica que alinha, levanta e fixa os fios naturais da sobrancelha, criando um efeito fuller brow denso e estruturado por até 8 semanas.',
    preco: 'Consultar',
    categoria: 'Sobrancelhas',
    destaque: true,
    emoji: '◈',
    waMsg: 'Olá! Vim pelo site e gostaria de agendar uma Brow Lamination!',
  },
  {
    titulo: 'Lash Lifting',
    descricao:
      'Curvatura permanente nos cílios naturais que elimina a necessidade de curvex e máscara. Olhar aberto e expressivo por até 8 semanas.',
    preco: 'Consultar',
    categoria: 'Cílios',
    destaque: false,
    emoji: '✧',
    waMsg: 'Olá! Vim pelo site e gostaria de agendar um Lash Lifting!',
  },
]

export default function ServicosSection() {
  return (
    <section
      id="servicos"
      className="py-24 bg-[#080808] relative overflow-hidden leopard-bg"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
            Serviços
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-white">
            O que posso fazer{' '}
            <em className="gradient-rose-gold not-italic">por você</em>
          </h2>
          <div className="gold-divider max-w-32 mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {servicos.map((s) => {
            const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(s.waMsg)}`
            return (
              <div
                key={s.titulo}
                className={`relative flex flex-col border p-7 group transition-all duration-300 ${
                  s.destaque
                    ? 'border-[#c9a84c]/60 bg-gradient-to-br from-[#1a1208] to-[#0f0f0f]'
                    : 'border-white/8 bg-[#0f0f0f] hover:border-[#c9a84c]/30'
                }`}
              >
                {/* Most wanted badge */}
                {s.destaque && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-[#d4a0a0] to-[#c9a84c] px-4 py-1">
                    <span className="font-raleway text-[10px] tracking-[0.2em] uppercase text-[#0a0a0a] font-semibold">
                      Mais Procurado
                    </span>
                  </div>
                )}

                {/* Category tag */}
                <span className="font-raleway text-[10px] tracking-[0.3em] uppercase text-[#d4a0a0]/80 mb-4">
                  {s.categoria}
                </span>

                {/* Icon */}
                <span className="text-[#c9a84c] text-lg mb-3">{s.emoji}</span>

                {/* Title */}
                <h3 className="font-cormorant text-2xl font-medium text-white mb-3 group-hover:text-[#d4a0a0] transition-colors">
                  {s.titulo}
                </h3>

                {/* Description */}
                <p className="font-raleway text-sm text-white/75 leading-relaxed font-light flex-1">
                  {s.descricao}
                </p>

                {/* Divider */}
                <div className="gold-divider my-5" />

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <span className="font-cormorant text-2xl text-[#c9a84c] font-light">
                    {s.preco}
                  </span>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-raleway text-xs tracking-[0.1em] uppercase px-4 py-2 transition-all duration-200 ${
                      s.destaque
                        ? 'bg-gradient-to-r from-[#d4a0a0] to-[#c9a84c] text-[#0a0a0a] hover:opacity-90'
                        : 'border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a]'
                    }`}
                  >
                    Agendar
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center font-raleway text-xs text-white/78 mt-10 tracking-wide">
          * Preços sujeitos a alteração. Entre em contato para valores atualizados.
        </p>
      </div>
    </section>
  )
}
