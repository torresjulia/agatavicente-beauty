'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#catalogo', label: 'Catálogo' },
    { href: '#contato', label: 'Contato' },
  ]

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
      setMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 gold-border-bottom ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm' : 'bg-[#0a0a0a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 group"
            aria-label="Agata Vicente Beauty — página inicial"
          >
            <span className="font-cormorant text-xl lg:text-2xl font-light tracking-[0.15em] text-white group-hover:opacity-80 transition-opacity">
              Agata Vicente
            </span>
            <span className="block font-raleway text-[10px] lg:text-[11px] tracking-[0.35em] uppercase text-[#c9a84c] leading-tight">
              Beauty Studio
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="font-raleway text-sm tracking-[0.1em] uppercase text-white/88 hover:text-[#d4a0a0] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/cursos-presenciais"
              className="font-raleway text-xs tracking-[0.08em] uppercase px-4 py-2 border border-white/20 text-white/80 hover:bg-white hover:text-[#0a0a0a] transition-all duration-200 rounded-none"
            >
              Cursos Presenciais
            </Link>
            <Link
              href="/clube-lash"
              className="font-raleway text-xs tracking-[0.08em] uppercase px-4 py-2 border border-[#c9a84c]/50 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-200 rounded-none"
            >
              Clube Lash 🐆
            </Link>
            <Link
              href="/produtos-digitais"
              className="font-raleway text-xs tracking-[0.08em] uppercase px-4 py-2 bg-[#d4a0a0]/20 border border-[#d4a0a0]/40 text-[#d4a0a0] hover:bg-[#d4a0a0] hover:text-[#0a0a0a] transition-all duration-200 rounded-none"
            >
              Produtos Digitais
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="bg-[#0a0a0a] border-t border-[#c9a84c]/20 px-4 pb-6 pt-4 flex flex-col gap-1"
          aria-label="Navegação mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="font-raleway text-sm tracking-[0.1em] uppercase text-white/88 hover:text-[#d4a0a0] transition-colors py-3 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/cursos-presenciais"
              onClick={() => setMenuOpen(false)}
              className="font-raleway text-xs tracking-[0.08em] uppercase px-4 py-3 border border-white/20 text-white/80 text-center hover:bg-white hover:text-[#0a0a0a] transition-all duration-200"
            >
              Cursos Presenciais
            </Link>
            <Link
              href="/clube-lash"
              onClick={() => setMenuOpen(false)}
              className="font-raleway text-xs tracking-[0.08em] uppercase px-4 py-3 border border-[#c9a84c]/50 text-[#c9a84c] text-center hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-200"
            >
              Clube Lash 🐆
            </Link>
            <Link
              href="/produtos-digitais"
              onClick={() => setMenuOpen(false)}
              className="font-raleway text-xs tracking-[0.08em] uppercase px-4 py-3 bg-[#d4a0a0]/20 border border-[#d4a0a0]/40 text-[#d4a0a0] text-center hover:bg-[#d4a0a0] hover:text-[#0a0a0a] transition-all duration-200"
            >
              Produtos Digitais
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
