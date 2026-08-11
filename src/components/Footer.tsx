import Link from 'next/link'

const ano = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-[#c9a84c]/15 overflow-hidden leopard-medium">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-cormorant text-2xl font-light tracking-[0.12em] text-white">
                Agata Vicente
              </span>
              <span className="block font-raleway text-[10px] tracking-[0.35em] uppercase text-[#c9a84c] mt-0.5">
                Beauty Studio
              </span>
            </div>
            <div className="gold-divider w-24 mb-4" />
            <p className="font-raleway text-sm text-white/65 leading-relaxed max-w-xs font-light">
              Referência em sobrancelhas, brow lamination e lash lifting em São Paulo.
              Beleza sofisticada para mulheres que sabem o que querem.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/agatavicente.beauty"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Agata Vicente Beauty"
                className="text-white/65 hover:text-[#d4a0a0] transition-colors"
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
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={`https://wa.me/5511999999999`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Agata Vicente Beauty"
                className="text-white/65 hover:text-[#25D366] transition-colors"
              >
                {/* WhatsApp SVG inline */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.617 4.56 1.693 6.48L2.667 29.333l6.987-1.667A13.27 13.27 0 0016.003 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.003 2.667zm0 2.4c5.96 0 10.8 4.84 10.8 10.8s-4.84 10.8-10.8 10.8a10.77 10.77 0 01-5.493-1.507l-.387-.24-4.147.987.987-4.027-.267-.4A10.77 10.77 0 015.203 16c0-5.96 4.84-10.933 10.8-10.933zm-3.04 5.493c-.24 0-.627.093-.96.453-.32.36-1.227 1.2-1.227 2.933s1.253 3.4 1.427 3.64c.173.24 2.427 3.867 5.973 5.28 2.96 1.187 3.547.96 4.187.907.64-.053 2.08-.853 2.373-1.68.293-.827.293-1.533.2-1.68-.093-.147-.333-.24-.693-.427s-2.16-1.067-2.493-1.187c-.333-.12-.573-.187-.813.187-.24.373-.92 1.187-1.133 1.427-.213.24-.427.267-.787.093-.36-.173-1.52-.56-2.893-1.787-1.067-.96-1.787-2.147-2-2.507-.213-.36-.023-.56.16-.747.16-.16.36-.427.547-.64.187-.213.24-.36.36-.6.12-.24.053-.453-.027-.64-.08-.187-.8-1.987-1.107-2.72-.293-.72-.6-.613-.813-.627-.213-.013-.453-.013-.693-.013z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-raleway text-xs tracking-[0.25em] uppercase text-[#c9a84c] mb-5">
              Navegação
            </p>
            <ul className="space-y-3">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre' },
                { href: '#servicos', label: 'Serviços' },
                { href: '#catalogo', label: 'Catálogo' },
                { href: '#contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-raleway text-sm text-white/65 hover:text-[#d4a0a0] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusivo */}
          <div>
            <p className="font-raleway text-xs tracking-[0.25em] uppercase text-[#c9a84c] mb-5">
              Exclusivo
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/clube-lash"
                  className="font-raleway text-sm text-white/65 hover:text-[#d4a0a0] transition-colors"
                >
                  Clube Lash 🐆
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos-digitais"
                  className="font-raleway text-sm text-white/65 hover:text-[#d4a0a0] transition-colors"
                >
                  Produtos Digitais
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="gold-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-20 sm:pb-0">
          <p className="font-raleway text-xs text-white/75 tracking-wide">
            © {ano} Agata Vicente Beauty Studio. Todos os direitos reservados.
          </p>
          <a
            href="https://www.zuxia.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-raleway text-xs text-white/50 tracking-[0.05em] hover:text-[#c9a84c] transition-colors"
          >
            Desenvolvido por Zuxia
          </a>
        </div>
      </div>
    </footer>
  )
}
