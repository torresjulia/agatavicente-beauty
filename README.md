# Agata Vicente Beauty Studio

Landing page completa para estúdio de beleza especializado em sobrancelhas, brow lamination e lash lifting.

---

## Visão geral

Site institucional com design dark glamour inspirado em marcas de beleza de luxo. Paleta em preto, rosé, dourado e marrom, com estampa de onça aplicada como elemento decorativo via SVG.

**Páginas:**

- `/` — Landing page principal com scroll suave
- `/clube-lash` — Página do programa de assinatura
- `/produtos-digitais` — Página de vendas de infoprodutos

---

## Stack

|             |                                                     |
| ----------- | --------------------------------------------------- |
| Framework   | Next.js 16 (App Router)                             |
| Linguagem   | TypeScript                                          |
| Estilização | Tailwind CSS v4                                     |
| Fontes      | Cormorant Garamond + Raleway via `next/font/google` |
| Deploy      | Cloudflare Pages (static export)                    |

---

## Estrutura do projeto

```
src/
├── app/
│   ├── globals.css                 # Estilos globais, variáveis, padrão de onça
│   ├── layout.tsx                  # Root layout — fontes, Navbar, WhatsAppButton
│   ├── page.tsx                    # Landing page principal
│   ├── clube-lash/
│   │   └── page.tsx                # Página do Clube Lash
│   └── produtos-digitais/
│       └── page.tsx                # Página de produtos digitais
└── components/
    ├── Navbar.tsx                  # Navbar principal com menu mobile
    ├── NavbarSimples.tsx           # Navbar das páginas internas
    ├── WhatsAppButton.tsx          # Botão flutuante WhatsApp
    ├── HeroSection.tsx             # Seção hero com prova social
    ├── SobreSection.tsx            # Apresentação + diferenciais
    ├── ServicosSection.tsx         # Cards de serviços
    ├── CatalogoSection.tsx         # Portfólio com filtro por categoria
    ├── DepoimentosSection.tsx      # Depoimentos de clientes
    ├── ContatoSection.tsx          # WhatsApp, Instagram, endereço
    └── Footer.tsx                  # Rodapé com links e redes sociais

public/
└── leopard.svg                     # Padrão de estampa de onça (rosetas SVG)
```

---

## Rodando localmente

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000`.

---

## Build e deploy

O projeto usa `output: 'export'` — gera HTML estático puro na pasta `out/`.

```bash
npm run build
# Gera a pasta /out com todos os arquivos estáticos
```

### Cloudflare Pages

Configurações do projeto no painel do Cloudflare Pages:

| Campo                  | Valor           |
| ---------------------- | --------------- |
| Build command          | `npm run build` |
| Build output directory | `out`           |
| Node.js version        | `20`            |

O Cloudflare executa o build automaticamente a cada push no branch `main`.

---

## Identidade visual

| Elemento            | Valor                                     |
| ------------------- | ----------------------------------------- |
| Cor base            | `#0a0a0a` — preto                         |
| Cor principal       | `#d4a0a0` — rosé                          |
| Destaque            | `#c9a84c` — dourado                       |
| Complementar        | `#5c3d2e` — marrom                        |
| Título              | Cormorant Garamond (serif elegante)       |
| Corpo               | Raleway (sans-serif moderno)              |
| Elemento decorativo | Estampa de onça via `/public/leopard.svg` |

A estampa de onça é aplicada via pseudo-elemento `::before` em três intensidades:

```css
.leopard-subtle  /* opacity 0.07 — seções principais */
.leopard-medium  /* opacity 0.14 — depoimentos, footer */
.leopard-bold    /* opacity 0.28 — hero do Clube Lash  */
```

---

## Personalização

### Número do WhatsApp

Altere a constante `WA_NUMBER` em cada componente onde aparece:

```
src/components/WhatsAppButton.tsx
src/components/HeroSection.tsx
src/components/ContatoSection.tsx
src/components/Footer.tsx
src/app/clube-lash/page.tsx
src/app/produtos-digitais/page.tsx
```

### Serviços e preços

Edite o array `servicos` em `src/components/ServicosSection.tsx`.

### Links de checkout e assinatura

- **Clube Lash** — substitua `href="#"` pelo link da maquininha/gateway em `src/app/clube-lash/page.tsx`
- **Produtos Digitais** — substitua `href="#"` pelo link do checkout em `src/app/produtos-digitais/page.tsx`

### Instagram

Troque `@agatavicente.beauty` e a URL `https://instagram.com/agatavicente.beauty` nos componentes `ContatoSection.tsx` e `Footer.tsx`.

---

## SEO

Cada página exporta um objeto `metadata` do Next.js com `title`, `description`, `keywords`, `openGraph` e `twitter`. Edite diretamente nos arquivos de página:

- `src/app/layout.tsx` — metadados globais
- `src/app/page.tsx`
- `src/app/clube-lash/page.tsx`
- `src/app/produtos-digitais/page.tsx`

---

## Desenvolvido por

[Zuxia](https://www.zuxia.com.br)
