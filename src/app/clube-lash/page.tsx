import type { Metadata } from 'next'
import NavbarSimples from '@/components/NavbarSimples'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Clube Lash 🐆 — Beleza com Exclusividade',
  description:
    'Faça parte do Clube Lash e tenha acesso a descontos exclusivos, prioridade no agendamento, brindes mensais e novidades em primeira mão. Beleza premium por assinatura.',
}

const planos = [
  {
    nome: 'Plano Onça',
    preco: 'R$ 79',
    periodo: '/mês',
    descricao: 'Para quem quer começar a viver a experiência premium.',
    beneficios: [
      '10% de desconto em todos os serviços',
      'Agendamento prioritário',
      '1 brinde por mês',
      'Acesso antecipado a promoções',
    ],
    destaque: false,
    cta: 'Assinar Plano Onça',
  },
  {
    nome: 'Plano Lash Gold',
    preco: 'R$ 149',
    periodo: '/mês',
    descricao: 'O plano favorito das clientes mais assíduas.',
    beneficios: [
      '20% de desconto em todos os serviços',
      'Agendamento prioritário VIP',
      '2 brindes por mês',
      'Acesso antecipado a novas técnicas',
      '1 serviço surpresa por trimestre',
      'Convite para eventos exclusivos',
    ],
    destaque: true,
    cta: 'Assinar Plano Gold',
  },
  {
    nome: 'Plano Black',
    preco: 'R$ 249',
    periodo: '/mês',
    descricao: 'Experiência máxima para quem não abre mão do melhor.',
    beneficios: [
      '30% de desconto em todos os serviços',
      'Agenda reservada (horários exclusivos)',
      '3 brindes premium por mês',
      'Acesso antecipado a todos os lançamentos',
      '1 serviço completo grátis/trimestre',
      'Atendimento prioritário via WhatsApp',
      'Presente especial no aniversário',
    ],
    destaque: false,
    cta: 'Assinar Plano Black',
  },
]

const beneficiosGerais = [
  {
    icon: '🐆',
    titulo: 'Desconto Exclusivo',
    texto: 'De 10% a 30% em todos os serviços do estúdio, válido durante a assinatura ativa.',
  },
  {
    icon: '📅',
    titulo: 'Prioridade no Agendamento',
    texto: 'Sua agenda é garantida antes das demais clientes. Nunca mais fique sem horário.',
  },
  {
    icon: '🎁',
    titulo: 'Brindes Mensais',
    texto: 'Todo mês uma surpresa especial: produtos de beleza, acessórios e muito mais.',
  },
  {
    icon: '✨',
    titulo: 'Acesso Antecipado',
    texto: 'Seja a primeira a conhecer novas técnicas, produtos e serviços antes do lançamento.',
  },
]

export default function ClubeLashPage() {
  return (
    <>
      <NavbarSimples />

      <main className="bg-[#0a0a0a] min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-24 overflow-hidden leopard-bold">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#0a0a0a]/90 pointer-events-none z-[1]" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block font-raleway text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-6">
              Exclusivo para membros
            </span>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
              Clube Lash{' '}
              <span className="text-5xl sm:text-6xl lg:text-7xl">🐆</span>
              <br />
              <em className="gradient-rose-gold not-italic">Beleza com exclusividade</em>
            </h1>
            <div className="gold-divider max-w-32 mx-auto my-6" />
            <p className="font-raleway text-base sm:text-lg text-white/78 max-w-2xl mx-auto leading-relaxed font-light">
              Uma experiência premium que vai além do serviço. Seja membro do clube mais exclusivo
              de beleza de São Paulo e viva a diferença todos os meses.
            </p>
          </div>
        </section>

        {/* Benefícios gerais */}
        <section className="py-20 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
                Benefícios
              </p>
              <h2 className="font-cormorant text-4xl text-white font-light">
                Por que entrar para o{' '}
                <em className="gradient-rose-gold not-italic">Clube Lash?</em>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficiosGerais.map((b) => (
                <div
                  key={b.titulo}
                  className="border border-[#c9a84c]/15 bg-[#0f0f0f] p-6 text-center hover:border-[#c9a84c]/40 transition-colors group"
                >
                  <div className="text-4xl mb-4">{b.icon}</div>
                  <h3 className="font-cormorant text-xl text-white font-medium mb-3 group-hover:text-[#d4a0a0] transition-colors">
                    {b.titulo}
                  </h3>
                  <p className="font-raleway text-sm text-white/88 leading-relaxed font-light">
                    {b.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planos */}
        <section className="py-20 bg-[#0a0a0a] relative overflow-hidden leopard-medium">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
                Planos
              </p>
              <h2 className="font-cormorant text-4xl text-white font-light">
                Escolha a sua{' '}
                <em className="gradient-rose-gold not-italic">experiência</em>
              </h2>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {planos.map((plano) => (
                <div
                  key={plano.nome}
                  className={`relative flex flex-col border p-8 ${
                    plano.destaque
                      ? 'border-[#c9a84c]/60 bg-gradient-to-br from-[#1a1208] to-[#0f0f0f]'
                      : 'border-white/8 bg-[#0f0f0f]'
                  }`}
                >
                  {plano.destaque && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d4a0a0] to-[#c9a84c] px-5 py-1 whitespace-nowrap">
                      <span className="font-raleway text-[10px] tracking-[0.2em] uppercase text-[#0a0a0a] font-semibold">
                        Mais Popular
                      </span>
                    </div>
                  )}

                  <h3 className="font-cormorant text-2xl text-white font-medium mb-2">
                    {plano.nome}
                  </h3>
                  <p className="font-raleway text-xs text-white/65 mb-5 font-light">
                    {plano.descricao}
                  </p>

                  <div className="mb-6">
                    <span className="font-cormorant text-4xl text-[#c9a84c] font-light">
                      {plano.preco}
                    </span>
                    <span className="font-raleway text-sm text-white/78">{plano.periodo}</span>
                  </div>

                  <div className="gold-divider mb-6" />

                  <ul className="space-y-3 flex-1 mb-8">
                    {plano.beneficios.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-[#c9a84c] mt-0.5 text-xs">✦</span>
                        <span className="font-raleway text-sm text-white/78 font-light">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-raleway text-xs tracking-[0.12em] uppercase px-6 py-3 text-center transition-all duration-200 ${
                      plano.destaque
                        ? 'bg-gradient-to-r from-[#d4a0a0] to-[#c9a84c] text-[#0a0a0a] hover:opacity-90'
                        : 'border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a]'
                    }`}
                  >
                    {plano.cta}
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center font-raleway text-xs text-white/75 mt-8">
              * Assinatura mensal recorrente. Cancele a qualquer momento sem burocracia.
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-[#080808]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <p className="font-cormorant text-3xl text-white font-light mb-4">
              Dúvidas sobre o Clube?
            </p>
            <p className="font-raleway text-sm text-white/88 mb-8 font-light">
              Fale comigo pelo WhatsApp e tire todas as suas dúvidas antes de assinar.
            </p>
            <a
              href={`https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Tenho interesse no Clube Lash e gostaria de mais informações!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-raleway text-sm tracking-[0.1em] uppercase px-8 py-4 hover:bg-[#20b85a] transition-colors"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </section>

        <Footer />
      </main>

      <WhatsAppButton />
    </>
  )
}
