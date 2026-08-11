import Link from 'next/link'

export default function NavbarSimples() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm gold-border-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group" aria-label="Voltar para o site principal">
            <span className="font-cormorant text-lg font-light tracking-[0.15em] text-white group-hover:opacity-80 transition-opacity">
              Agata Vicente
            </span>
            <span className="block font-raleway text-[9px] tracking-[0.35em] uppercase text-[#c9a84c]">
              Beauty Studio
            </span>
          </Link>

          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-raleway text-xs tracking-[0.12em] uppercase text-white/75 hover:text-[#d4a0a0] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Voltar ao site
          </Link>
        </div>
      </div>
    </header>
  )
}
