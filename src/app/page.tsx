import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import SobreSection from '@/components/SobreSection'
import ServicosSection from '@/components/ServicosSection'
import CatalogoSection from '@/components/CatalogoSection'
import DepoimentosSection from '@/components/DepoimentosSection'
import ContatoSection from '@/components/ContatoSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Agata Vicente Beauty Studio | Sobrancelhas, Cílios e Maquiagem em SP',
  description:
    'Referência em design de sobrancelhas, brow lamination e lash lifting em São Paulo. Agende pelo WhatsApp e transforme seu olhar.',
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SobreSection />
      <ServicosSection />
      <CatalogoSection />
      <DepoimentosSection />
      <ContatoSection />
      <Footer />
    </main>
  )
}
