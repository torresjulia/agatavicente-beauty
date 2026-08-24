'use client'

import { useEffect, useState } from 'react'

type Categoria =
  | 'Todos'
  | 'Sobrancelhas'
  | 'Extensão de Cílios'
  | 'Brow Lamination'
  | 'Lash Lifting'

const fotos = [
  {
    url: '/images/sobrancelha1.jpeg',
    alt: 'Design de sobrancelha com henna e tintura — antes e depois',
    categoria: 'Sobrancelhas',
  },
  {
    url: '/images/sobrancelha2.jpeg',
    alt: 'Design de sobrancelha sem henna — modelagem natural e definida',
    categoria: 'Sobrancelhas',
  },
  {
    url: '/images/cilios1.jpeg',
    alt: 'Extensão de cílios com curvatura elegante e efeito sofisticado',
    categoria: 'Extensão de Cílios',
  },
  {
    url: '/images/cilios2.jpeg',
    alt: 'Extensão de cílios com acabamento leve, alinhado e delicado',
    categoria: 'Extensão de Cílios',
  },
  {
    url: '/images/cilios3.jpeg',
    alt: 'Extensão de cílios com definição suave e olhar iluminado',
    categoria: 'Extensão de Cílios',
  },
  {
    url: '/images/cilios4.jpeg',
    alt: 'Extensão de cílios com volume marcante e efeito glamouroso',
    categoria: 'Extensão de Cílios',
  },
  {
    url: '/images/brow1.jpeg',
    alt: 'Brow lamination — fios alinhados e efeito fuller brow',
    categoria: 'Brow Lamination',
  },
  {
    url: '/images/brow2.jpeg',
    alt: 'Brow lamination — resultado cheio e estruturado',
    categoria: 'Brow Lamination',
  },
  {
    url: '/images/lashlifting1.jpeg',
    alt: 'Lash lifting — curvatura natural e olhar expressivo',
    categoria: 'Lash Lifting',
  },
  {
    url: '/images/lashlifting2.jpeg',
    alt: 'Lash lifting — cílios curvados e definidos',
    categoria: 'Lash Lifting',
  },
]

const categorias: Categoria[] = [
  'Todos',
  'Sobrancelhas',
  'Extensão de Cílios',
  'Brow Lamination',
  'Lash Lifting',
]

export default function CatalogoSection() {
  const [ativa, setAtiva] = useState<Categoria>('Todos')
  const [fotoAtiva, setFotoAtiva] = useState<(typeof fotos)[number] | null>(null)

  const fotosFiltradas =
    ativa === 'Todos' ? fotos : fotos.filter((f) => f.categoria === ativa)

  useEffect(() => {
    if (!fotoAtiva) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFotoAtiva(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [fotoAtiva])

  return (
    <section id="catalogo" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
            Portfólio
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-white">
            Cada resultado conta{' '}
            <em className="gradient-rose-gold not-italic">uma história</em>
          </h2>
          <div className="gold-divider max-w-32 mx-auto mt-6" />
          <p className="font-raleway text-sm text-white/70 max-w-2xl mx-auto mt-6 leading-relaxed font-light">
            No design de sobrancelhas, você escolhe o acabamento: com henna e tintura para mais
            definição, ou apenas a modelagem para um visual mais natural.
          </p>
        </div>

        {/* Filter buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10"
          role="group"
          aria-label="Filtrar por categoria"
        >
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setAtiva(cat)}
              className={`font-raleway text-xs tracking-[0.15em] uppercase px-5 py-2 border transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#c9a84c] ${
                ativa === cat
                  ? 'filter-btn-active border-transparent'
                  : 'border-white/15 text-white/75 hover:border-[#d4a0a0]/40 hover:text-[#d4a0a0]'
              }`}
              aria-pressed={ativa === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fotosFiltradas.map((foto, i) => (
            <button
              type="button"
              key={`${foto.categoria}-${i}`}
              onClick={() => setFotoAtiva(foto)}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              aria-label={`Ampliar imagem: ${foto.alt}`}
            >
              <img
                src={foto.url}
                alt={foto.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0a0a0a]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                {/* Zoom icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-8 h-8 text-white"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                </svg>
                <span className="font-raleway text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
                  {foto.categoria}
                </span>
                <p className="font-cormorant text-lg text-white italic px-4 text-center">
                  {foto.alt}
                </p>
              </div>
              {/* Category tag always visible */}
              <div className="absolute top-3 left-3 bg-[#0a0a0a]/70 px-3 py-1 backdrop-blur-sm">
                <span className="font-raleway text-[9px] tracking-[0.2em] uppercase text-[#c9a84c]">
                  {foto.categoria}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {fotoAtiva && (
        <button
          type="button"
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          onClick={() => setFotoAtiva(null)}
          aria-label="Fechar imagem ampliada"
        >
          <img
            src={fotoAtiva.url}
            alt={fotoAtiva.alt}
            className="max-w-full max-h-full object-contain"
          />
        </button>
      )}
    </section>
  )
}
