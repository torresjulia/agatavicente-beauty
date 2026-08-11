import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Exporta HTML/CSS/JS estático puro para Cloudflare Pages.
  // Compatível porque todas as rotas deste projeto são estáticas.
  output: 'export',

  // Cloudflare Pages serve arquivos sem extensão .html por padrão,
  // então desabilitamos o trailing slash para manter /clube-lash limpo.
  trailingSlash: false,

  // Desabilita o prefixo /_next/image — imagens externas (Unsplash, ui-avatars)
  // são referenciadas diretamente com <img>, então o Image Optimization
  // do Next.js não é necessário e não funciona em static export de qualquer forma.
  images: {
    unoptimized: true,
  },
}

export default nextConfig
