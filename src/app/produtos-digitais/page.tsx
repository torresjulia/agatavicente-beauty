import type { Metadata } from 'next'
import NavbarSimples from '@/components/NavbarSimples'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import CursosPresenciaisSection from '@/components/academy/CursosPresenciaisSection'
import { WHATSAPP_HREF } from '@/data/cursosPresenciais'

export const metadata: Metadata = {
  title: 'Agata Vicente Beauty Academy — Infoprodutos e Cursos Presenciais',
  description:
    'Apostilas editáveis 100%, formação presencial VIP em extensão de cílios, design de sobrancelhas, lash lifting e brow lamination com Agata Vicente.',
}

const produtos = [
  {
    imagem: '/images/apostila-extensao-cilios.jpeg',
    nome: 'Apostila de Extensão de Cílios Completa',
    descricao:
      'Técnica fio a fio e fios tecnológicos em apostila 100% editável — ideal para estudar, aplicar no seu estúdio ou montar seu próprio curso.',
    beneficios: [
      'Técnica fio a fio do básico ao avançado',
      'Fios tecnológicos: Volume Brasileiro, Egípcio, 5D, 6D e 8D',
      'Conteúdo completo para ensinar ou se especializar',
      'Arquivo 100% editável — personalize com a sua marca',
      'Material profissional pronto para uso',
    ],
    badge: 'Apostila Editável',
    badgeColor: 'from-[#d4a0a0] to-[#c9a84c]',
    cta: 'Comprar agora',
    link: 'https://pay.kiwify.com.br/sNxvg3V',
  },
  {
    imagem: '/images/apostila-editavel-lashlifting.jpeg',
    nome: 'Apostila Completa Editável — Lash Lifting',
    descricao:
      'Apostila com o passo a passo para você dominar e ensinar a técnica de Lash Lifting do zero!',
    beneficios: [
      'Passo a passo completo da técnica',
      'Do zero ao atendimento profissional',
      'Ideal para quem quer ensinar lash lifting',
      'Arquivo 100% editável',
      'Conteúdo direto e aplicável no dia a dia',
    ],
    badge: 'Apostila Editável',
    badgeColor: 'from-[#c9a84c] to-[#d4a0a0]',
    cta: 'Comprar agora',
    link: 'https://pay.kiwify.com.br/6tmvc90',
  },
  {
    imagem: '/images/apostila-curso-design-sobrancelha.jpeg',
    nome: 'Apostila para Curso de Design de Sobrancelha',
    descricao:
      'Apostila completa com conteúdo para design personalizado e aplicação de henna — 100% editável para o seu curso ou estudo.',
    beneficios: [
      'Design personalizado e mapeamento facial',
      'Técnica de aplicação de henna',
      'Conteúdo completo para montar seu curso',
      'Arquivo 100% editável',
      'Material profissional pronto para uso',
    ],
    badge: 'Apostila Editável',
    badgeColor: 'from-[#5c3d2e] to-[#c9a84c]',
    cta: 'Comprar agora',
    link: 'https://pay.kiwify.com.br/KBKRJj6',
  },
  {
    imagem: '/images/jornal-personalizado.jpeg',
    nome: 'Jornal Personalizado 100% Editável',
    descricao:
      'Jornal personalizado para você arrasar na autenticidade do seu estúdio — personalize com a sua marca e encante suas clientes.',
    beneficios: [
      '100% editável com a identidade do seu estúdio',
      'Transmita autenticidade e profissionalismo',
      'Ideal para recepção, atendimento ou redes sociais',
      'Pronto para personalizar e usar',
      'Destaque-se com um material exclusivo',
    ],
    badge: 'Jornal Editável',
    badgeColor: 'from-[#d4a0a0] to-[#5c3d2e]',
    cta: 'Comprar agora',
    link: 'https://pay.kiwify.com.br/93ZP4Kn',
  },
  {
    imagem: '/images/catalogo-moderno-personalizavel.jpeg',
    nome: 'Catálogo Moderno Personalizável',
    descricao:
      'Catálogo moderno personalizável para elevar o nível dos seus agendamentos — apresente seus serviços com elegância e profissionalismo.',
    beneficios: [
      'Layout moderno e sofisticado',
      '100% personalizável com a sua marca',
      'Ideal para enviar no WhatsApp ou redes sociais',
      'Valorize seus serviços e aumente conversões',
      'Pronto para editar e compartilhar',
    ],
    badge: 'Catálogo Editável',
    badgeColor: 'from-[#c9a84c] to-[#d4a0a0]',
    cta: 'Comprar agora',
    link: 'https://pay.kiwify.com.br/RghxmPZ',
  },
  {
    imagem: '/images/cilios3.jpeg',
    nome: 'Pack Lash — Conteúdos Didáticos e Ilustrativos',
    descricao:
      'Pack completo com conteúdos didáticos e ilustrativos para cursos e materiais de extensão de cílios — tudo para enriquecer suas aulas.',
    beneficios: [
      'Conteúdos didáticos prontos para uso',
      'Ilustrações profissionais para aulas e apostilas',
      'Ideal para montar cursos de extensão de cílios',
      'Material visual de alta qualidade',
      'Agilize a produção dos seus materiais',
    ],
    badge: 'Pack Didático',
    badgeColor: 'from-[#d4a0a0] to-[#c9a84c]',
    cta: 'Comprar agora',
    link: 'https://pay.kiwify.com.br/uTKnS4e',
  },
  {
    imagem: '/demoKitECertificado.jpeg',
    nome: 'Folhas de Treino — Design de Sobrancelhas e Extensão de Cílios',
    descricao:
      'Folhas de treino para cursos de design de sobrancelhas e extensão de cílios, sem logo de marca — prontas para personalizar e usar nas suas aulas.',
    beneficios: [
      'Folhas para design de sobrancelhas e extensão de cílios',
      'Sem logo de marca — total liberdade para personalizar',
      'Ideal para aulas práticas e cursos presenciais',
      'Material didático profissional',
      'Pronto para imprimir ou usar digitalmente',
    ],
    badge: 'Material Didático',
    badgeColor: 'from-[#5c3d2e] to-[#d4a0a0]',
    cta: 'Comprar agora',
    link: 'https://pay.kiwify.com.br/yJPL0vy',
  },
]

const depoimentosAlunas = [
  {
    nome: 'Priscila Mendes',
    texto:
      'O curso de Brow Lamination mudou minha carreira. Em 3 semanas após concluir já estava atendendo clientes e me pagando em menos de 2 meses.',
    avatar:
      'https://ui-avatars.com/api/?name=Priscila+Mendes&background=d4a0a0&color=0a0a0a&size=80&bold=true&font-size=0.4',
  },
  {
    nome: 'Beatriz Oliveira',
    texto:
      'A apostila de sobrancelhas é completa e muito bem estruturada. O fato de ser editável fez toda diferença — personalizei com a minha marca e já uso nas minhas aulas.',
    avatar:
      'https://ui-avatars.com/api/?name=Beatriz+Oliveira&background=d4a0a0&color=0a0a0a&size=80&bold=true&font-size=0.4',
  },
  {
    nome: 'Vanessa Costa',
    texto:
      'A apostila de lash lifting tem o passo a passo que eu precisava. Conteúdo direto, fácil de seguir e pronto para ensinar — a didática da Agata transparece em cada página.',
    avatar:
      'https://ui-avatars.com/api/?name=Vanessa+Costa&background=d4a0a0&color=0a0a0a&size=80&bold=true&font-size=0.4',
  },
]

const faqs = [
  {
    pergunta: 'Como recebo a apostila após a compra?',
    resposta:
      'Após a confirmação do pagamento na Kiwify, você recebe o acesso por e-mail para download do arquivo. As apostilas são em PDF 100% editáveis, prontas para personalizar e usar.',
  },
  {
    pergunta: 'Preciso ter experiência prévia para comprar os infoprodutos?',
    resposta:
      'Não. Todos os materiais foram criados com linguagem acessível e começam do básico. Tanto iniciantes quanto profissionais que querem aprimorar a técnica se beneficiam do conteúdo.',
  },
  {
    pergunta: 'O que significa apostila 100% editável?',
    resposta:
      'Você recebe o arquivo em formato editável para adaptar o conteúdo com a sua marca, incluir seus dados ou usar como material didático nos seus próprios cursos — sem precisar criar tudo do zero.',
  },
  {
    pergunta: 'E se eu não gostar do infoproduto?',
    resposta:
      'Você tem 7 dias corridos após a compra para solicitar o reembolso integral, sem necessidade de justificativa. Basta enviar um e-mail ou mensagem no WhatsApp.',
  },
  {
    pergunta: 'Como funciona a inscrição nos cursos presenciais?',
    resposta:
      'Entre em contato pelo WhatsApp para consultar valores, datas das próximas turmas e garantir sua vaga. As turmas são pequenas para garantir atenção individualizada e prática em modelo real.',
  },
  {
    pergunta: 'Qual a diferença entre apostila e curso presencial?',
    resposta:
      'As apostilas são materiais digitais editáveis para estudar no seu ritmo, com acesso imediato após a compra na Kiwify. Os cursos presenciais são formações VIP de um dia, com prática em modelo, diploma, materiais e suporte direto com a Agata.',
  },
]

export default function ProdutosDigitaisPage() {
  return (
    <>
      <NavbarSimples />

      <main className="bg-[#0a0a0a] min-h-screen">
        <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden leopard-subtle">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-[1]" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block font-raleway text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-6">
              Agata Vicente Beauty Academy
            </span>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
              Aprenda com quem é{' '}
              <em className="gradient-rose-gold not-italic">referência</em>
              <br />
              em beleza
            </h1>
            <div className="gold-divider max-w-32 mx-auto my-6" />
            <p className="font-raleway text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
              Apostilas 100% editáveis para estudar no seu ritmo ou formação presencial VIP com
              prática em modelo. Escolha o formato ideal para o seu momento.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#infoprodutos"
                className="font-raleway text-xs tracking-[0.12em] uppercase px-6 py-3 bg-gradient-to-r from-[#d4a0a0] to-[#c9a84c] text-[#0a0a0a] hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                Ver infoprodutos
              </a>
              <a
                href="#presencial"
                className="font-raleway text-xs tracking-[0.12em] uppercase px-6 py-3 border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-colors w-full sm:w-auto"
              >
                Ver cursos presenciais
              </a>
            </div>
          </div>
        </section>

        <section id="infoprodutos" className="py-20 bg-[#080808] scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
                Infoprodutos
              </p>
              <h2 className="font-cormorant text-4xl text-white font-light">
                Estude no seu{' '}
                <em className="gradient-rose-gold not-italic">ritmo</em>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {produtos.map((p) => (
                <div
                  key={p.nome}
                  className="flex flex-col border border-white/8 bg-[#0f0f0f] overflow-hidden group hover:border-[#c9a84c]/30 transition-colors duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={p.imagem}
                      alt={`Capa: ${p.nome}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                    <div
                      className={`absolute top-4 left-4 bg-gradient-to-r ${p.badgeColor} px-3 py-1`}
                    >
                      <span className="font-raleway text-[10px] tracking-[0.2em] uppercase text-[#0a0a0a] font-semibold">
                        {p.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-cormorant text-2xl text-white font-medium mb-3 leading-tight">
                      {p.nome}
                    </h3>
                    <p className="font-raleway text-sm text-white/78 leading-relaxed mb-5">
                      {p.descricao}
                    </p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {p.beneficios.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="text-[#c9a84c] text-xs mt-0.5 shrink-0">✦</span>
                          <span className="font-raleway text-xs text-white/78">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="gold-divider mb-5" />

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full font-raleway text-xs tracking-[0.12em] uppercase px-5 py-3 bg-gradient-to-r from-[#d4a0a0] to-[#c9a84c] text-[#0a0a0a] hover:opacity-90 transition-opacity font-semibold"
                    >
                      {p.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-[#c9a84c]/30 bg-gradient-to-br from-[#1a1208] to-[#0f0f0f] p-10 text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h2 className="font-cormorant text-3xl text-white font-light mb-3">
                7 dias de garantia
              </h2>
              <div className="gold-divider max-w-24 mx-auto mb-5" />
              <p className="font-raleway text-base text-white/80 leading-relaxed">
                Nos infoprodutos, se não gostar do material por qualquer motivo, devolvemos 100%
                do seu dinheiro. Sem questionamentos, sem burocracia.
              </p>
              <p className="font-raleway text-xs text-[#c9a84c] mt-4 tracking-wide">
                Válido por 7 dias corridos após a compra
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#080808] relative overflow-hidden leopard-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
                Depoimentos
              </p>
              <h2 className="font-cormorant text-4xl text-white font-light">
                O que dizem nossas{' '}
                <em className="gradient-rose-gold not-italic">alunas online</em>
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {depoimentosAlunas.map((d) => (
                <div key={d.nome} className="border border-white/8 bg-[#0f0f0f] p-6">
                  <div className="flex gap-1 mb-4" aria-label="5 estrelas">
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
                  <blockquote className="font-raleway text-sm text-white/80 leading-relaxed italic mb-5">
                    &ldquo;{d.texto}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <img
                      src={d.avatar}
                      alt={`Foto de ${d.nome}`}
                      width={40}
                      height={40}
                      className="rounded-full border border-[#d4a0a0]/30"
                      loading="lazy"
                    />
                    <p className="font-raleway text-sm font-semibold text-white">{d.nome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CursosPresenciaisSection />

        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
                FAQ
              </p>
              <h2 className="font-cormorant text-4xl text-white font-light">
                Perguntas{' '}
                <em className="gradient-rose-gold not-italic">frequentes</em>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.pergunta} className="border border-white/8 bg-[#0f0f0f] p-6">
                  <h3 className="font-cormorant text-lg text-white font-medium mb-3">
                    {faq.pergunta}
                  </h3>
                  <p className="font-raleway text-sm text-white/78 leading-relaxed">
                    {faq.resposta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#080808] leopard-subtle relative">
          <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
            <p className="font-cormorant text-3xl sm:text-4xl text-white font-light mb-4">
              Dúvidas sobre a Academy?
            </p>
            <p className="font-raleway text-sm text-white/75 mb-8 leading-relaxed">
              Fale comigo pelo WhatsApp para escolher o infoproduto ideal ou garantir sua vaga em
              um curso presencial. Estou aqui para te ajudar.
            </p>
            <a
              href={WHATSAPP_HREF}
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
