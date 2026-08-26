import type { Metadata } from 'next'
import NavbarSimples from '@/components/NavbarSimples'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cursos Presenciais — Formação em Beleza com Agata Vicente',
  description:
    'Cursos presenciais de Extensão de Cílios, Design de Sobrancelhas, Lash Lifting e Brow Lamination. Formação completa com diploma, kit de materiais e suporte da especialista Agata Vicente.',
}

const WHATSAPP_HREF = 'https://wa.me/message/J6BWH3D6F3TQC1'

const cursos = [
  {
    id: 'extensao-cilios',
    titulo: 'Extensão de Cílios',
    subtitulo: 'Curso VIP EmpreendedoraLash',
    duracao: '1 dia',
    badge: 'Mais Procurado',
    destaque: true,
    descricao:
      'O Curso VIP de Extensão de Cílios EmpreendedoraLash é um curso presencial e completo onde você aprenderá do zero essa profissão tão lucrativa na área da beleza.',
    incluso: [
      'Apostila Completa',
      'Diploma',
      'Kit com materiais iniciantes',
      'Coffee Break',
      'Aula teórica e prática',
      'Aplicação do zero em modelo',
    ],
    conteudo: [
      'Isolamento e acoplagem dos fios',
      'Higienização, Biossegurança e saúde ocular',
      'Mapping e visagismo',
      'Remoção e Manutenção',
      'Técnicas fio a fio e fios tecnológicos (Volume Brasileiro, Egípcio, 5D, 6D e 8D)',
    ],
    formadas: '+50',
    waMsg: 'Olá! Vim pelo site e tenho interesse no Curso de Extensão de Cílios. Gostaria de saber mais sobre o investimento e as próximas turmas!',
  },
  {
    id: 'design-sobrancelhas',
    titulo: 'Design de Sobrancelhas',
    subtitulo: 'Curso Completo de Sobrancelhas',
    duracao: '1 dia',
    badge: null,
    destaque: false,
    descricao:
      'Aprenda do zero a técnica de design e mapeamento de sobrancelhas, moldando o olhar de cada cliente com precisão e personalidade. Um curso completo para quem quer se destacar na área.',
    incluso: [
      'Apostila Completa',
      'Diploma',
      'Kit com materiais iniciantes',
      'Coffee Break',
      'Aula teórica e prática',
      'Aplicação do zero em modelo',
    ],
    conteudo: [
      'Mapeamento facial e visagismo',
      'Técnicas de design personalizado',
      'Higienização e biossegurança',
      'Design com pinça, linha e cera',
      'Correção de assimetrias',
    ],
    formadas: '+40',
    waMsg: 'Olá! Vim pelo site e tenho interesse no Curso de Design de Sobrancelhas. Gostaria de saber mais sobre o investimento e as próximas turmas!',
  },
  {
    id: 'lash-lifting',
    titulo: 'Lash Lifting',
    subtitulo: 'Curvatura Perfeita de Cílios',
    duracao: '1 dia',
    badge: null,
    destaque: false,
    descricao:
      'Domine a técnica de lash lifting e ofereça às suas clientes um olhar aberto e expressivo sem extensão. Alta demanda no mercado, resultado natural e duradouro.',
    incluso: [
      'Apostila Completa',
      'Diploma',
      'Coffee Break',
      'Aula teórica e prática',
      'Aplicação do zero em modelo',
    ],
    conteudo: [
      'Anatomia e cuidados com os cílios',
      'Escolha do bastão correto',
      'Aplicação do lifting e neutralizante',
      'Cuidados pós-procedimento',
      'Combinação com lash tint (coloração)',
    ],
    formadas: '+30',
    waMsg: 'Olá! Vim pelo site e tenho interesse no Curso de Lash Lifting. Gostaria de saber mais sobre o investimento e as próximas turmas!',
  },
  {
    id: 'brow-lamination',
    titulo: 'Brow Lamination',
    subtitulo: 'Sobrancelha Fuller Brow',
    duracao: '1 dia',
    badge: null,
    destaque: false,
    descricao:
      'Aprenda a técnica que tomou o mercado de beleza — o brow lamination. Alinhamento, levantamento e fixação dos fios para sobrancelhas mais cheias e estruturadas.',
    incluso: [
      'Apostila Completa',
      'Diploma',
      'Coffee Break',
      'Aula teórica e prática',
      'Aplicação do zero em modelo',
    ],
    conteudo: [
      'Preparação e higienização',
      'Aplicação do loção de alisamento',
      'Modelagem e fixação dos fios',
      'Nutrição e cuidados pós',
      'Combinação com henna e design',
    ],
    formadas: '+25',
    waMsg: 'Olá! Vim pelo site e tenho interesse no Curso de Brow Lamination. Gostaria de saber mais sobre o investimento e as próximas turmas!',
  },
]

const depoimentos = [
  {
    nome: 'Larissa Campos',
    curso: 'Extensão de Cílios',
    texto:
      'Fiz o curso sem nenhuma experiência anterior e saí aplicando sozinha. A Agata tem uma didática incrível, é super paciente e detalha cada passo. Já estou atendendo clientes e me pagando!',
    avatar: 'https://ui-avatars.com/api/?name=Larissa+Campos&background=d4a0a0&color=0a0a0a&size=80&bold=true&font-size=0.4',
  },
  {
    nome: 'Tatiane Moura',
    curso: 'Design de Sobrancelhas',
    texto:
      'Aprendi mais em um dia com a Agata do que em um curso online que durou semanas. A prática em modelo foi o diferencial — sai confiante e com técnica de verdade.',
    avatar: 'https://ui-avatars.com/api/?name=Tatiane+Moura&background=d4a0a0&color=0a0a0a&size=80&bold=true&font-size=0.4',
  },
  {
    nome: 'Renata Souza',
    curso: 'Lash Lifting',
    texto:
      'O kit de materiais já vale o investimento! E o ensino é muito completo — Agata passa todo o conteúdo com calma, tira todas as dúvidas e ainda ficamos em contato depois.',
    avatar: 'https://ui-avatars.com/api/?name=Renata+Souza&background=d4a0a0&color=0a0a0a&size=80&bold=true&font-size=0.4',
  },
]

export default function CursosPresenciaisPage() {
  return (
    <>
      <NavbarSimples />

      <main className="bg-[#0a0a0a] min-h-screen">

        {/* ── Hero ── */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <img
            src="/images/agata-curso.jpeg"
            alt="Ágata Vicente — instrutora dos cursos presenciais"
            className="absolute inset-0 w-full h-full object-cover object-[center_18%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/55 to-[#0a0a0a] pointer-events-none z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/50 pointer-events-none z-[1]" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-32 pb-20">
            <span className="inline-block font-raleway text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-6">
              Formação Presencial
            </span>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
              Aprenda com quem{' '}
              <em className="gradient-rose-gold not-italic">já formou</em>
              <br />
              mais de 50 alunas
            </h1>
            <div className="gold-divider max-w-32 mx-auto my-6" />
            <p className="font-raleway text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Cursos presenciais, práticos e completos. Do zero ao atendimento de clientes em
              apenas um dia — com diploma, kit de materiais e todo o suporte necessário.
            </p>
          </div>
        </section>

        {/* ── Fotos do curso ── */}
        <section className="py-16 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { src: '/aluna1.jpeg', alt: 'Aluna praticando extensão de cílios' },
                { src: '/aluna2.jpeg', alt: 'Aluna no curso presencial' },
                { src: '/dupla_alunas.jpeg', alt: 'Alunas no curso' },
                { src: '/lanchinho.jpeg', alt: 'Coffee break do curso' },
                { src: '/demoKitECertificado.jpeg', alt: 'Kit, apostila e certificado inclusos' },
              ].map((foto) => (
                <div key={foto.src} className="aspect-square overflow-hidden border border-[#c9a84c]/15">
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cursos ── */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
                Cursos disponíveis
              </p>
              <h2 className="font-cormorant text-4xl text-white font-light">
                Escolha sua{' '}
                <em className="gradient-rose-gold not-italic">formação</em>
              </h2>
              <div className="gold-divider max-w-32 mx-auto mt-6" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {cursos.map((curso) => {
                const waHref = WHATSAPP_HREF
                return (
                  <div
                    key={curso.id}
                    className={`relative flex flex-col border p-8 ${
                      curso.destaque
                        ? 'border-[#c9a84c]/60 bg-gradient-to-br from-[#1a1208] to-[#0f0f0f]'
                        : 'border-white/8 bg-[#0f0f0f] hover:border-[#c9a84c]/30 transition-colors duration-300'
                    }`}
                  >
                    {curso.badge && (
                      <div className="absolute -top-3 left-6 bg-gradient-to-r from-[#d4a0a0] to-[#c9a84c] px-4 py-1">
                        <span className="font-raleway text-[10px] tracking-[0.2em] uppercase text-[#0a0a0a] font-semibold">
                          {curso.badge}
                        </span>
                      </div>
                    )}

                    {/* Header */}
                    <div className="mb-5">
                      <span className="font-raleway text-[10px] tracking-[0.3em] uppercase text-[#d4a0a0]/80">
                        Presencial · {curso.duracao}
                      </span>
                      <h3 className="font-cormorant text-3xl text-white font-medium mt-1 mb-1">
                        {curso.titulo}
                      </h3>
                      <p className="font-raleway text-xs text-[#c9a84c] tracking-wide">
                        {curso.subtitulo}
                      </p>
                    </div>

                    <p className="font-raleway text-sm text-white/78 leading-relaxed mb-6">
                      {curso.descricao}
                    </p>

                    {/* Incluso */}
                    <div className="mb-5">
                      <p className="font-raleway text-[10px] tracking-[0.25em] uppercase text-[#c9a84c] mb-3">
                        Está incluso
                      </p>
                      <ul className="space-y-1.5">
                        {curso.incluso.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-[#c9a84c] text-xs mt-0.5 shrink-0">✦</span>
                            <span className="font-raleway text-sm text-white/78">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="gold-divider mb-5" />

                    {/* Conteúdo programático */}
                    <div className="mb-6">
                      <p className="font-raleway text-[10px] tracking-[0.25em] uppercase text-[#c9a84c] mb-3">
                        O que você vai aprender
                      </p>
                      <ul className="space-y-1.5">
                        {curso.conteudo.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-[#d4a0a0] text-xs mt-0.5 shrink-0">◈</span>
                            <span className="font-raleway text-sm text-white/78">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Formadas badge */}
                    <div className="mb-6 flex items-center gap-2">
                      <span className="font-cormorant text-2xl text-[#c9a84c] font-light">
                        {curso.formadas}
                      </span>
                      <span className="font-raleway text-xs text-white/60 uppercase tracking-wide">
                        alunas já formadas
                      </span>
                    </div>

                    <div className="gold-divider mb-6" />

                    {/* Investimento + CTA */}
                    <div className="mt-auto">
                      <p className="font-raleway text-xs text-white/55 uppercase tracking-[0.15em] mb-1">
                        Investimento
                      </p>
                      <p className="font-cormorant text-xl text-white/80 font-light italic mb-4">
                        Consulte o valor do investimento
                      </p>
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 w-full font-raleway text-xs tracking-[0.12em] uppercase px-6 py-3 transition-all duration-200 ${
                          curso.destaque
                            ? 'bg-gradient-to-r from-[#d4a0a0] to-[#c9a84c] text-[#0a0a0a] hover:opacity-90'
                            : 'border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a]'
                        }`}
                      >
                        {/* WhatsApp icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden="true">
                          <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.617 4.56 1.693 6.48L2.667 29.333l6.987-1.667A13.27 13.27 0 0016.003 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.003 2.667zm0 2.4c5.96 0 10.8 4.84 10.8 10.8s-4.84 10.8-10.8 10.8a10.77 10.77 0 01-5.493-1.507l-.387-.24-4.147.987.987-4.027-.267-.4A10.77 10.77 0 015.203 16c0-5.96 4.84-10.933 10.8-10.933zm-3.04 5.493c-.24 0-.627.093-.96.453-.32.36-1.227 1.2-1.227 2.933s1.253 3.4 1.427 3.64c.173.24 2.427 3.867 5.973 5.28 2.96 1.187 3.547.96 4.187.907.64-.053 2.08-.853 2.373-1.68.293-.827.293-1.533.2-1.68-.093-.147-.333-.24-.693-.427s-2.16-1.067-2.493-1.187c-.333-.12-.573-.187-.813.187-.24.373-.92 1.187-1.133 1.427-.213.24-.427.267-.787.093-.36-.173-1.52-.56-2.893-1.787-1.067-.96-1.787-2.147-2-2.507-.213-.36-.023-.56.16-.747.16-.16.36-.427.547-.64.187-.213.24-.36.36-.6.12-.24.053-.453-.027-.64-.08-.187-.8-1.987-1.107-2.72-.293-.72-.6-.613-.813-.627-.213-.013-.453-.013-.693-.013z" />
                        </svg>
                        Consultar via WhatsApp
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── O que está incluso em todos ── */}
        <section className="py-16 bg-[#080808] leopard-medium relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10">
              <h2 className="font-cormorant text-3xl text-white font-light">
                Todos os cursos incluem
              </h2>
              <div className="gold-divider max-w-24 mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { icon: '📖', label: 'Apostila Completa' },
                { icon: '🏅', label: 'Diploma' },
                //{ icon: '🎁', label: 'Kit de Materiais' },
                { icon: '☕', label: 'Coffee Break' },
                { icon: '🪞', label: 'Prática em Modelo Real' },
                { icon: '📲', label: 'Suporte pós-curso' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-[#c9a84c]/20 bg-[#0f0f0f] p-5 text-center hover:border-[#c9a84c]/50 transition-colors"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="font-raleway text-sm text-white/80 font-medium">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Foto kit + certificado */}
            <div className="mt-10 border border-[#c9a84c]/20 overflow-hidden">
              <img
                src="/demoKitECertificado.jpeg"
                alt="Kit de materiais, apostila e certificado inclusos em todos os cursos"
                className="w-full object-cover max-h-72"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ── Depoimentos ── */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
                Depoimentos
              </p>
              <h2 className="font-cormorant text-4xl text-white font-light">
                O que dizem nossas{' '}
                <em className="gradient-rose-gold not-italic">alunas</em>
              </h2>
              <div className="gold-divider max-w-32 mx-auto mt-6" />
            </div>

            {/* Fotos de alunas */}
            <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mb-12">
              {['/aluna1.jpeg', '/dupla_alunas.jpeg', '/aluna2.jpeg'].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden border border-[#c9a84c]/15">
                  <img
                    src={src}
                    alt="Aluna formada no curso presencial"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Cards de depoimentos */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {depoimentos.map((d) => (
                <div key={d.nome} className="border border-white/8 bg-[#0f0f0f] p-6 flex flex-col gap-4">
                  <div className="flex gap-1" aria-label="5 estrelas">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#c9a84c]" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="font-raleway text-sm text-white/80 leading-relaxed italic flex-1">
                    &ldquo;{d.texto}&rdquo;
                  </blockquote>
                  <div className="gold-divider" />
                  <div className="flex items-center gap-3">
                    <img src={d.avatar} alt={`Foto de ${d.nome}`} width={40} height={40} className="rounded-full border border-[#d4a0a0]/30" loading="lazy" />
                    <div>
                      <p className="font-raleway text-sm font-semibold text-white">{d.nome}</p>
                      <p className="font-raleway text-xs text-[#d4a0a0]/80">{d.curso}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Final ── */}
        <section className="py-16 bg-[#080808] leopard-subtle relative">
          <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
            <p className="font-cormorant text-4xl text-white font-light mb-3">
              Pronta para começar?
            </p>
            <p className="font-raleway text-sm text-white/75 mb-8 leading-relaxed">
              Fale com a Agata pelo WhatsApp, escolha o curso ideal e garante sua vaga.
              As turmas são pequenas para garantir atenção individualizada.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-raleway text-sm tracking-[0.1em] uppercase px-10 py-4 hover:bg-[#20b85a] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="white" aria-hidden="true">
                <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.617 4.56 1.693 6.48L2.667 29.333l6.987-1.667A13.27 13.27 0 0016.003 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.003 2.667zm0 2.4c5.96 0 10.8 4.84 10.8 10.8s-4.84 10.8-10.8 10.8a10.77 10.77 0 01-5.493-1.507l-.387-.24-4.147.987.987-4.027-.267-.4A10.77 10.77 0 015.203 16c0-5.96 4.84-10.933 10.8-10.933zm-3.04 5.493c-.24 0-.627.093-.96.453-.32.36-1.227 1.2-1.227 2.933s1.253 3.4 1.427 3.64c.173.24 2.427 3.867 5.973 5.28 2.96 1.187 3.547.96 4.187.907.64-.053 2.08-.853 2.373-1.68.293-.827.293-1.533.2-1.68-.093-.147-.333-.24-.693-.427s-2.16-1.067-2.493-1.187c-.333-.12-.573-.187-.813.187-.24.373-.92 1.187-1.133 1.427-.213.24-.427.267-.787.093-.36-.173-1.52-.56-2.893-1.787-1.067-.96-1.787-2.147-2-2.507-.213-.36-.023-.56.16-.747.16-.16.36-.427.547-.64.187-.213.24-.36.36-.6.12-.24.053-.453-.027-.64-.08-.187-.8-1.987-1.107-2.72-.293-.72-.6-.613-.813-.627-.213-.013-.453-.013-.693-.013z" />
              </svg>
              Quero garantir minha vaga
            </a>
          </div>
        </section>

        <Footer />
      </main>

      <WhatsAppButton />
    </>
  )
}
