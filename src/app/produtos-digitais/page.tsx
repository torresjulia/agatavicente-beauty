import type { Metadata } from 'next'
import NavbarSimples from '@/components/NavbarSimples'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Produtos Digitais — Aprenda com quem é referência em beleza',
  description:
    'E-books e guias profissionais de sobrancelhas, brow lamination e lash lifting. Aprenda com a especialista Agata Vicente e eleve seu nível técnico.',
}

const produtos = [
  {
    imagem: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    nome: 'E-book Design Perfeito de Sobrancelha',
    descricao:
      'O guia completo para dominar as técnicas de mapeamento e design de sobrancelhas. Do básico ao avançado.',
    beneficios: [
      'Mapeamento facial com precisão milimétrica',
      'Técnicas de design para cada formato de rosto',
      'Erros mais comuns e como evitá-los',
      'Escolha de produtos e materiais',
      'Passo a passo ilustrado com fotos reais',
    ],
    preco: 'R$ 47',
    badge: 'E-book PDF',
    badgeColor: 'from-[#d4a0a0] to-[#c9a84c]',
    cta: 'Comprar E-book',
  },
  {
    imagem: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&q=80',
    nome: 'Curso Online Brow Lamination do Zero',
    descricao:
      'Formação completa na técnica de brow lamination — do alinhamento ao acabamento perfeito, do iniciante ao profissional.',
    beneficios: [
      '+6 horas de videoaulas em HD',
      'Teoria + prática passo a passo',
      'Lista completa de materiais',
      'Certificado de conclusão',
      'Suporte via grupo exclusivo',
      'Atualizações vitalícias',
    ],
    preco: 'R$ 297',
    badge: 'Curso Online',
    badgeColor: 'from-[#c9a84c] to-[#d4a0a0]',
    cta: 'Comprar Curso',
  },
  {
    imagem: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&q=80',
    nome: 'Guia Completo de Lash Lifting',
    descricao:
      'Tudo o que você precisa saber para executar o lash lifting com segurança, precisão e resultados duradouros.',
    beneficios: [
      'Anatomia e cuidados com os cílios',
      'Escolha do kit e dos produtos ideais',
      'Passo a passo da técnica completa',
      'Como tratar casos difíceis',
      'Ficha de anamnese pronta para usar',
    ],
    preco: 'R$ 97',
    badge: 'Guia PDF',
    badgeColor: 'from-[#5c3d2e] to-[#c9a84c]',
    cta: 'Comprar Guia',
  },
]

const depoimentosAlunas = [
  {
    nome: 'Priscila Mendes',
    texto:
      'O curso de Brow Lamination mudou minha carreira. Em 3 semanas após concluir já estava atendendo clientes e me pagando em menos de 2 meses.',
    avatar: 'https://ui-avatars.com/api/?name=Priscila+Mendes&background=d4a0a0&color=0a0a0a&size=80&bold=true&font-size=0.4',
  },
  {
    nome: 'Beatriz Oliveira',
    texto:
      'Comprei o e-book de sobrancelhas achando que já sabia tudo e aprendi técnicas que jamais vira em outros cursos. Vale cada centavo, muito mais do que o preço.',
    avatar: 'https://ui-avatars.com/api/?name=Beatriz+Oliveira&background=d4a0a0&color=0a0a0a&size=80&bold=true&font-size=0.4',
  },
  {
    nome: 'Vanessa Costa',
    texto:
      'O guia de lash lifting tem fotos, explicações detalhadas e fichas prontas para usar. A didática da Agata é incrível — uso no meu estúdio todo dia.',
    avatar: 'https://ui-avatars.com/api/?name=Vanessa+Costa&background=d4a0a0&color=0a0a0a&size=80&bold=true&font-size=0.4',
  },
]

const faqs = [
  {
    pergunta: 'Como recebo o produto após a compra?',
    resposta:
      'Imediatamente após a confirmação do pagamento você recebe o acesso por e-mail. E-books e guias ficam disponíveis para download em PDF; cursos ficam em uma área de membros exclusiva.',
  },
  {
    pergunta: 'Preciso ter experiência prévia para comprar os produtos?',
    resposta:
      'Não. Todos os materiais foram criados com linguagem acessível e começam do básico. Tanto iniciantes quanto profissionais que querem aprimorar a técnica se beneficiam do conteúdo.',
  },
  {
    pergunta: 'Por quanto tempo tenho acesso ao curso?',
    resposta:
      'O acesso ao curso é vitalício, incluindo todas as atualizações futuras. Uma vez comprado, é seu para sempre.',
  },
  {
    pergunta: 'E se eu não gostar do produto?',
    resposta:
      'Você tem 7 dias corridos após a compra para solicitar o reembolso integral, sem necessidade de justificativa. Basta enviar um e-mail ou mensagem no WhatsApp.',
  },
]

export default function ProdutosDigitaisPage() {
  return (
    <>
      <NavbarSimples />

      <main className="bg-[#0a0a0a] min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden leopard-subtle">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-[1]" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block font-raleway text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-6">
              Educação em Beleza
            </span>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
              Aprenda com quem é{' '}
              <em className="gradient-rose-gold not-italic">referência</em>
              <br />
              em beleza
            </h1>
            <div className="gold-divider max-w-32 mx-auto my-6" />
            <p className="font-raleway text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Mais de 5 anos de experiência condensados em materiais didáticos de altíssima
              qualidade. Acelere sua carreira com quem vive o mercado de beleza todos os dias.
            </p>
          </div>
        </section>

        {/* Produtos */}
        <section className="py-20 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
                Produtos
              </p>
              <h2 className="font-cormorant text-4xl text-white font-light">
                Escolha o seu{' '}
                <em className="gradient-rose-gold not-italic">material</em>
              </h2>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {produtos.map((p) => (
                <div
                  key={p.nome}
                  className="flex flex-col border border-white/8 bg-[#0f0f0f] overflow-hidden group hover:border-[#c9a84c]/30 transition-colors duration-300"
                >
                  {/* Cover image */}
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

                  {/* Content */}
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

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-raleway text-xs text-white/55 uppercase tracking-wide">
                          Por apenas
                        </p>
                        <p className="font-cormorant text-3xl text-[#c9a84c] font-light">
                          {p.preco}
                        </p>
                      </div>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-raleway text-xs tracking-[0.12em] uppercase px-5 py-3 bg-gradient-to-r from-[#d4a0a0] to-[#c9a84c] text-[#0a0a0a] hover:opacity-90 transition-opacity font-semibold"
                      >
                        Comprar agora
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Garantia */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-[#c9a84c]/30 bg-gradient-to-br from-[#1a1208] to-[#0f0f0f] p-10 text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h2 className="font-cormorant text-3xl text-white font-light mb-3">
                7 dias de garantia
              </h2>
              <div className="gold-divider max-w-24 mx-auto mb-5" />
              <p className="font-raleway text-base text-white/80 leading-relaxed">
                Se não gostar do produto por qualquer motivo, devolvemos 100% do seu dinheiro.
                Sem questionamentos, sem burocracia. Sua satisfação é nossa responsabilidade.
              </p>
              <p className="font-raleway text-xs text-[#c9a84c] mt-4 tracking-wide">
                Válido por 7 dias corridos após a compra
              </p>
            </div>
          </div>
        </section>

        {/* Depoimentos de alunas */}
        <section className="py-20 bg-[#080808] relative overflow-hidden leopard-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <p className="font-raleway text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-4">
                Depoimentos
              </p>
              <h2 className="font-cormorant text-4xl text-white font-light">
                O que dizem nossas{' '}
                <em className="gradient-rose-gold not-italic">alunas</em>
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {depoimentosAlunas.map((d) => (
                <div
                  key={d.nome}
                  className="border border-white/8 bg-[#0f0f0f] p-6"
                >
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

        {/* FAQ */}
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
                <div
                  key={faq.pergunta}
                  className="border border-white/8 bg-[#0f0f0f] p-6"
                >
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

        {/* CTA Final */}
        <section className="py-16 bg-[#080808]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <p className="font-cormorant text-3xl text-white font-light mb-4">
              Dúvidas sobre os produtos?
            </p>
            <p className="font-raleway text-sm text-white/75 mb-8">
              Fale comigo pelo WhatsApp antes de comprar. Estou aqui para te ajudar a escolher o
              material certo para o seu momento.
            </p>
            <a
              href={`https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Tenho interesse nos produtos digitais e gostaria de tirar algumas dúvidas!')}`}
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
