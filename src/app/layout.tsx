import type { Metadata } from 'next'
import { Cormorant_Garamond, Raleway } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Agata Vicente Beauty Studio | Sobrancelhas, Brow Lamination e Lash Lifting',
    template: '%s | Agata Vicente Beauty Studio',
  },
  description:
    'Referência em design de sobrancelhas, brow lamination e lash lifting em São Paulo. Técnica avançada, produtos importados e atendimento exclusivo.',
  keywords: [
    'sobrancelhas São Paulo',
    'brow lamination',
    'lash lifting',
    'design de sobrancelha',
    'Agata Vicente',
    'beauty studio',
    'sobrancelha São Paulo',
    'cílios naturais',
  ],
  authors: [{ name: 'Agata Vicente' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://agatavicente.beauty',
    siteName: 'Agata Vicente Beauty Studio',
    title: 'Agata Vicente Beauty Studio | Sobrancelhas, Brow Lamination e Lash Lifting',
    description:
      'Referência em design de sobrancelhas, brow lamination e lash lifting em São Paulo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agata Vicente Beauty Studio',
    description: 'Referência em sobrancelhas, brow lamination e lash lifting em São Paulo.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorantGaramond.variable} ${raleway.variable}`}
    >
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>

  )
}
