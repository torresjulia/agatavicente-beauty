# Agata Vicente Beauty Studio

Landing page profissional para estúdio de beleza especializado em design de sobrancelhas, brow lamination e lash lifting.

---

## Tecnologias

- **Next.js 16** — App Router com `output: 'export'` (geração estática)
- **TypeScript**
- **Tailwind CSS v4**
- **Fontes:** Cormorant Garamond + Raleway via `next/font/google`
- **Deploy:** Cloudflare Pages

---

## Estrutura de páginas

| Rota                 | Descrição                                    |
| -------------------- | -------------------------------------------- |
| `/`                  | Landing page principal com scroll suave      |
| `/clube-lash`        | Página do Clube Lash — planos de assinatura  |
| `/produtos-digitais` | Página de infoprodutos (e-book, curso, guia) |

### Seções da landing page

1. **Navbar** — logo, links âncora, botões Clube Lash e Produtos Digitais, menu hambúrguer mobile
2. **Hero** — título com gradiente rosé/dourado, botões de CTA, prova social
3. **Sobre** — apresentação da profissional + 4 cards de diferenciais
4. **Serviços** — Design de Sobrancelha, Brow Lamination, Lash Lifting (com botão de agendamento via WhatsApp)
5. **Catálogo** — grid de fotos com filtro por categoria (Sobrancelhas / Brow Lamination / Lash Lifting)
6. **Depoimentos** — 4 cards com avaliações de clientes
7. **Contato** — WhatsApp, Instagram, endereço e horários
8. **Footer** — logo, links rápidos, redes sociais, crédito

---

## Identidade visual

| Papel                 | Cor       |
| --------------------- | --------- |
| Base                  | `#0a0a0a` |
| Principal (rosé)      | `#d4a0a0` |
| Destaque (dourado)    | `#c9a84c` |
| Complementar (marrom) | `#5c3d2e` |

**Estampa de onça** aplicada via `/public/leopard.svg` (SVG com rosetas reais — núcleo irregular + anel fragmentado) controlada por pseudo-elemento `::before` em 3 intensidades: `.leopard-bg` (sutil), `.leopard-medium`, `.leopard-bold`.

---

## Estrutura de arquivos

```
src/
├── app/
│   ├── globals.css              # Variáveis, padrão onça, utilidades globais
│   ├── layout.tsx               # Root layout — fontes, Navbar, WhatsAppButton
│   ├── page.tsx                 # Landing page (/)
│   ├── clube-lash/
│   │   └── page.tsx             # Página /clube-lash
│   └── produtos-digitais/
│       └── page.tsx             # Página /produtos-digitais
└── components/
    ├── Navbar.tsx               # Navbar principal (client — scroll + menu mobile)
    ├── NavbarSimples.tsx        # Navbar das páginas internas
    ├── WhatsAppButton.tsx       # Botão flutuante WhatsApp (SVG inline)
    ├── HeroSection.tsx
    ├── SobreSection.tsx
    ├── ServicosSection.tsx
    ├── CatalogoSection.tsx      # client — filtro interativo por categoria
    ├── DepoimentosSection.tsx
    ├── ContatoSection.tsx
    └── Footer.tsx

public/
└── leopard.svg                  # Estampa de onça (tile 220×220px)
```

---

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

---

## Build de produção

```bash
npm run build
```

Gera a pasta `out/` com HTML/CSS/JS estático pronto para deploy.

---

## Deploy — Cloudflare Pages

O projeto usa `output: 'export'` no `next.config.ts`, gerando arquivos estáticos puros — sem necessidade de runtime Node.js.

**Configurações no painel do Cloudflare Pages:**

| Campo                  | Valor                          |
| ---------------------- | ------------------------------ |
| Framework preset       | `Next.js (Static HTML Export)` |
| Build command          | `npm run build`                |
| Build output directory | `out`                          |
| Node.js version        | `20`                           |

---

## Personalizações pendentes

- [ ] Substituir número de WhatsApp `5511999999999` pelo número real (buscar `WA_NUMBER` nos componentes)
- [ ] Atualizar handle do Instagram `@agatavicente.beauty` com o real
- [ ] Preencher preços dos serviços em `ServicosSection.tsx` (campo `preco: 'Consultar'`)
- [ ] Substituir links de checkout `href="#"` nos planos do Clube Lash e produtos digitais
- [ ] Confirmar endereço e horários em `ContatoSection.tsx`
- [ ] Atualizar números de prova social no Hero (+500 clientes, 5+ anos, 98%)
- [ ] Trocar imagem placeholder da seção Sobre por foto real (`/public/quem-sou.jpeg`)
