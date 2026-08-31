import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ExclusivoSection from '@/components/ExclusivoSection'
import SobreSection from '@/components/SobreSection'
import ServicosSection from '@/components/ServicosSection'
import CatalogoSection from '@/components/CatalogoSection'
import DepoimentosSection from '@/components/DepoimentosSection'
import ContatoSection from '@/components/ContatoSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Agata Vicente Beauty | Estúdio, Academy e Clube Lash',
  description:
    'Referência em design de sobrancelhas, extensão de cílios e lash lifting. Conheça a Beauty Academy, os infoprodutos e os planos exclusivos do Clube Lash — ou agende seu horário no estúdio.',
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExclusivoSection />
      <SobreSection />
      <ServicosSection />
      <CatalogoSection />
      <DepoimentosSection />
      <ContatoSection />
      <Footer />
    </main>
  )
}
