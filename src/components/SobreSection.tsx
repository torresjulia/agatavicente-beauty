import QuemSou from '../../public/quem-sou.jpeg'


const diferenciais = [
  {
    icon: '✦',
    title: 'Técnica Avançada',
    description:
      'Formação contínua nas mais modernas técnicas do mercado de beleza, garantindo resultados precisos e duradouros.',
  },
  {
    icon: '◈',
    title: 'Produtos Importados',
    description:
      'Trabalho exclusivamente com insumos de alta performance, selecionados entre as melhores marcas internacionais.',
  },
  {
    icon: '◇',
    title: 'Atendimento Exclusivo',
    description:
      'Cada cliente recebe atenção individualizada, com horários espaçados para garantir total conforto e privacidade.',
  },
  {
    icon: '✧',
    title: 'Resultados Duradouros',
    description:
      'Procedimentos que aliam estética e saúde, preservando a integridade dos seus cílios e sobrancelhas naturais.',
  },
]

export default function SobreSection() {
  return (
    <section id="sobre" className="py-24 bg-[#0a0a0a] relative overflow-hidden leopard-bg">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a84c]/40" />
          <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c]">
            Sobre
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a84c]/40" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-[#1a1010] to-[#0a0a0a] border border-[#c9a84c]/20 overflow-hidden">
              <img
                src={QuemSou.src}
                alt="Agata Vicente — profissional de beleza"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
            </div>
            {/* Gold frame accent */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#c9a84c]/20 -z-10" />
            {/* Experience badge */}
            <div className="absolute bottom-6 left-6 bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#c9a84c]/30 px-5 py-3">
              <p className="font-cormorant text-3xl font-light text-[#c9a84c]">5+</p>
              <p className="font-raleway text-[10px] tracking-[0.2em] uppercase text-white/75">
                Anos de Experiência
              </p>
            </div>
          </div>

          {/* Text content */}
          <div>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-white leading-tight mb-6">
              Beleza que fala por{' '}
              <em className="gradient-rose-gold not-italic">si mesma</em>
            </h2>
            <div className="gold-divider mb-8" />
            <p className="font-raleway text-white/82 leading-relaxed mb-5 font-light">
              Sou Ágata Vicente, especialista em Extensão de Cílios, Design de Sobrancelhas, Brow Lamination e Lash Lifting. Há mais de 5 anos, dedico meu trabalho ao universo da beleza, construindo uma trajetória pautada em três pilares: técnica, cuidado e resultado.
            </p>
            <p className="font-raleway text-white/82 leading-relaxed mb-5 font-light">
              Cada procedimento é realizado de forma personalizada e com atenção minuciosa aos detalhes, respeitando as características únicas de cada cliente. Não acredito em resultados genéricos, acredito no resultado ideal para o seu rosto, o seu olhar e a sua essência.
            </p>
            <p className="font-raleway text-white/82 leading-relaxed mb-5 font-light">
              Meu atendimento acontece em estúdio privativo, com agenda exclusiva e insumos importados de alta qualidade, proporcionando uma experiência segura, sofisticada e personalizada.
            </p>
            <p className="font-raleway text-white/82 leading-relaxed mb-5 font-light">
              Porque investir em si é escolher se cuidar, e você merece o melhor.
            </p>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item) => (
            <div
              key={item.title}
              className="border border-[#c9a84c]/15 p-6 hover:border-[#c9a84c]/40 transition-colors duration-300 group bg-[#0f0f0f]"
            >
              <span className="text-[#c9a84c] text-xl mb-4 block">{item.icon}</span>
              <h3 className="font-cormorant text-xl font-medium text-white mb-3 group-hover:text-[#d4a0a0] transition-colors">
                {item.title}
              </h3>
              <p className="font-raleway text-sm text-white/75 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
