import type { Metadata } from 'next'
import CursosPresenciaisRedirect from './redirect'

export const metadata: Metadata = {
  title: 'Cursos Presenciais — Agata Vicente Beauty Academy',
  description:
    'Cursos presenciais VIP de Extensão de Cílios, Design de Sobrancelhas, Lash Lifting e Brow Lamination na Agata Vicente Beauty Academy.',
}

export default function CursosPresenciaisPage() {
  return <CursosPresenciaisRedirect />
}
