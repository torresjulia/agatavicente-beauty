import Link from 'next/link'

const destaques = [
  {
    href: '/clube-lash',
    imagem: '/images/onça-coroa.jpeg',
    alt: 'Clube Lash — assinatura exclusiva de beleza',
    eyebrow: 'Assinatura Premium',
    titulo: 'Clube Lash',
    subtitulo: 'Beleza com exclusividade',
    descricao:
      'Planos mensais com manutenções, prioridade no agendamento e benefícios exclusivos para quem não abre mão do melhor.',
    cta: 'Conheça nossos planos do clube',
    accent: 'gold' as const,
  },
  {
    href: '/produtos-digitais',
    imagem: '/images/agata-curso.jpeg',
    alt: 'Agata Vicente Beauty Academy — cursos e materiais digitais',
    eyebrow: 'Educação em Beleza',
    titulo: 'Agata Vicente Beauty Academy',
    subtitulo: 'Online e presencial',
    descricao:
      'Apostilas editáveis e cursos presenciais VIP com prática em modelo — tudo para elevar sua técnica na área da beleza.',
    cta: 'Conheça a Academy',
    accent: 'rose' as const,
  },
]

export default function ExclusivoSection() {
  return (
    <section
      id="exclusivo"
      className="relative -mt-20 sm:-mt-28 z-20 bg-[#080808] overflow-hidden leopard-medium scroll-mt-24 border-t border-[#c9a84c]/30"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block font-raleway text-[10px] tracking-[0.35em] uppercase text-[#0a0a0a] bg-gradient-to-r from-[#d4a0a0] to-[#c9a84c] px-4 py-1.5 mb-5">
            Destaque
          </span>
          <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
            Exclusivo
          </p>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
            Vá além do{' '}
            <em className="gradient-rose-gold not-italic">estúdio</em>
          </h2>
          <div className="gold-divider max-w-32 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {destaques.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative block overflow-hidden border bg-[#0f0f0f] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] ${
                item.accent === 'gold'
                  ? 'border-[#c9a84c]/25 hover:border-[#c9a84c]/50 focus-visible:ring-[#c9a84c]'
                  : 'border-[#d4a0a0]/25 hover:border-[#d4a0a0]/50 focus-visible:ring-[#d4a0a0]'
              }`}
            >
              <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] overflow-hidden">
                <img
                  src={item.imagem}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-[#0a0a0a]/20" />
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    item.accent === 'gold'
                      ? 'bg-gradient-to-t from-[#c9a84c]/10 to-transparent'
                      : 'bg-gradient-to-t from-[#d4a0a0]/10 to-transparent'
                  }`}
                />

                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <p className="font-raleway text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-3">
                    {item.eyebrow}
                  </p>
                  <h3 className="font-cormorant text-3xl sm:text-4xl font-light text-white leading-tight mb-1">
                    {item.titulo}
                  </h3>
                  <p className="font-raleway text-sm text-white/70 mb-3">{item.subtitulo}</p>
                  <p className="font-raleway text-sm text-white/75 leading-relaxed mb-6 max-w-md">
                    {item.descricao}
                  </p>
                  <span
                    className={`inline-flex items-center justify-center self-start font-raleway text-xs tracking-[0.12em] uppercase px-6 py-3 font-medium transition-all duration-300 ${
                      item.accent === 'gold'
                        ? 'bg-gradient-to-r from-[#c9a84c] to-[#d4a0a0] text-[#0a0a0a] group-hover:opacity-90'
                        : 'bg-gradient-to-r from-[#d4a0a0] to-[#c9a84c] text-[#0a0a0a] group-hover:opacity-90'
                    }`}
                  >
                    {item.cta}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
