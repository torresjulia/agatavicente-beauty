'use client'

import { useEffect } from 'react'

export default function CursosPresenciaisRedirect() {
  useEffect(() => {
    window.location.replace('/produtos-digitais#presencial')
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <p className="font-raleway text-sm text-white/70 tracking-wide">
        Redirecionando para a Beauty Academy…
      </p>
    </main>
  )
}
