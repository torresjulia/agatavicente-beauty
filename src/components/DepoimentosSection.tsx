const depoimentos = [
  {
    nome: 'Juliana Ferreira',
    servico: 'Brow Lamination',
    texto:
      'Fiz a brow lamination com a Agata e simplesmente não consigo imaginar minha sobrancelha de outro jeito. O resultado ficou tão natural e cheio — todo mundo pergunta se são minhas sobrancelhas mesmo.',
    avatar: 'https://ui-avatars.com/api/?name=Juliana+Ferreira&background=d4a0a0&color=0a0a0a&size=80&bold=true&font-size=0.4',
  },
  {
    nome: 'Camila Rodrigues',
    servico: 'Design de Sobrancelha',
    texto:
      'Fiz o design com a Agata depois de anos sofrendo com sobrancelhas que nunca ficavam boas em outros lugares. O resultado foi transformador. Ela mapeou meu rosto com perfeição técnica.',
    avatar: 'https://ui-avatars.com/api/?name=Camila+Rodrigues&background=d4a0a0&color=0a0a0a&size=80&bold=true&font-size=0.4',
  },
  {
    nome: 'Mariana Santos',
    servico: 'Lash Lifting',
    texto:
      'O lash lifting mudou minha rotina de manhã. Acordo com os cílios alongados e pigmentados, sem curvex nem máscara. Simplesmente incrível.',
    avatar: 'https://ui-avatars.com/api/?name=Mariana+Santos&background=d4a0a0&color=0a0a0a&size=80&bold=true&font-size=0.4',
  },
  {
    nome: 'Fernanda Lima',
    servico: 'Brow Lamination + Design',
    texto:
      'Fiz a brow lamination combinada com o design e o resultado foi acima de qualquer expectativa. A Agata tem um olho clínico impressionante — entendeu o que eu queria sem eu precisar explicar muito.',
    avatar: 'https://ui-avatars.com/api/?name=Fernanda+Lima&background=d4a0a0&color=0a0a0a&size=80&bold=true&font-size=0.4',
  },
]

function Estrelas() {
  return (
    <div className="flex gap-1" aria-label="Avaliação 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4 text-[#c9a84c]"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function DepoimentosSection() {
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden leopard-medium">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
            Depoimentos
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-white">
            O que dizem nossas{' '}
            <em className="gradient-rose-gold not-italic">clientes</em>
          </h2>
          <div className="gold-divider max-w-32 mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {depoimentos.map((d) => (
            <div
              key={d.nome}
              className="bg-[#0f0f0f] border border-white/8 p-6 flex flex-col gap-4 hover:border-[#c9a84c]/25 transition-colors duration-300"
            >
              {/* Stars */}
              <Estrelas />

              {/* Quote */}
              <blockquote className="font-raleway text-sm text-white/78 leading-relaxed font-light flex-1 italic">
                &ldquo;{d.texto}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="gold-divider" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={d.avatar}
                  alt={`Foto de ${d.nome}`}
                  width={44}
                  height={44}
                  className="rounded-full border border-[#d4a0a0]/30"
                  loading="lazy"
                />
                <div>
                  <p className="font-raleway text-sm font-medium text-white">{d.nome}</p>
                  <p className="font-raleway text-xs text-[#d4a0a0]/80 tracking-wide">
                    {d.servico}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
