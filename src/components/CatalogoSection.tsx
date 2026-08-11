'use client'

import { useState } from 'react'

type Categoria = 'Todos' | 'Sobrancelhas' | 'Brow Lamination' | 'Lash Lifting'

const fotos = [
  {
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    alt: 'Design de sobrancelha perfeito',
    categoria: 'Sobrancelhas',
  },
  {
    url: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=600&q=80',
    alt: 'Design e modelagem de sobrancelha',
    categoria: 'Sobrancelhas',
  },
  {
    url: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&q=80',
    alt: 'Sobrancelha definida e natural',
    categoria: 'Sobrancelhas',
  },
  {
    url: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&q=80',
    alt: 'Brow lamination — fios alinhados e cheios',
    categoria: 'Brow Lamination',
  },
  {
    url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
    alt: 'Brow lamination resultado natural',
    categoria: 'Brow Lamination',
  },
  {
    url: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=600&q=80',
    alt: 'Brow lamination efeito fuller brow',
    categoria: 'Brow Lamination',
  },
  {
    url: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&q=80',
    alt: 'Lash lifting — curvatura natural dos cílios',
    categoria: 'Lash Lifting',
  },
  {
    url: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&q=80',
    alt: 'Lash lifting olhar expressivo',
    categoria: 'Lash Lifting',
  },
  {
    url: 'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=600&q=80',
    alt: 'Lash lifting resultado duradouro',
    categoria: 'Lash Lifting',
  },
]

const categorias: Categoria[] = ['Todos', 'Sobrancelhas', 'Brow Lamination', 'Lash Lifting']

export default function CatalogoSection() {
  const [ativa, setAtiva] = useState<Categoria>('Todos')

  const fotosFiltradas =
    ativa === 'Todos' ? fotos : fotos.filter((f) => f.categoria === ativa)

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
            <div
              key={`${foto.categoria}-${i}`}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
