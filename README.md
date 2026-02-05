# 💊 Farmácia — Landing Page

<p align="center">
  <img src="public/favicon.svg" alt="Farmácia Logo" width="80" />
</p>

<p align="center">
  Landing page moderna para uma farmácia de manipulação fictícia
</p>

<p align="center">
  <a href="https://farmacia-lp.vercel.app/pt" target="_blank"><strong>🔗 Ver Deploy</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss" alt="Tailwind CSS" />
</p>

---

## 📋 Sobre o Desafio

O objetivo é transformar um layout de referência (Figma) em uma landing page funcional, responsiva e com boa experiência de usuário, utilizando tecnologias modernas de frontend.

---

## ✨ Funcionalidades

- **Landing Page completa** com seções: Hero, Sobre, Processo, Produtos, Depoimentos, Contato e Footer
- **Internacionalização (i18n)** — Português (PT-BR) e Espanhol (ES) com troca dinâmica
- **Formulário de orçamento** com validação (Zod + React Hook Form), máscara de telefone e upload de arquivos
- **API Route simulada** (`POST /api/orders`) com latência realista e retorno de ID do pedido
- **Toast notifications** para feedback de sucesso/erro no envio
- **Carousel interativo** no Hero e em Produtos (Embla Carousel)
- **Animações suaves** com Framer Motion (fade, scale, stagger)
- **Página 404 customizada** com suporte a i18n
- **SEO otimizado** — Open Graph, Twitter Cards, JSON-LD (Schema.org), sitemap.xml, robots.txt
- **Design responsivo** — Mobile-first com breakpoints para tablet e desktop
- **Favicon customizado** — Cruz verde SVG com versões ICO e PNG

---

## 🛠️ Stack Técnica

| Categoria | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript 5 |
| Estilização | Tailwind CSS 4 |
| Componentes UI | Shadcn/UI + Radix UI |
| Formulário | React Hook Form + Zod |
| Animações | Framer Motion |
| i18n | next-intl |
| Ícones | Lucide React |
| Linting | ESLint + Prettier + jsx-a11y |
| Package Manager | pnpm |

---

## 🚀 Como Rodar

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/desafio.git
cd desafio

# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── api/orders/         # API Route (simulação de backend)
│   ├── [locale]/           # Rotas com i18n (PT/ES)
│   │   ├── layout.tsx      # Layout com metadata SEO + i18n provider
│   │   ├── page.tsx        # Página principal + JSON-LD
│   │   ├── not-found.tsx   # 404 traduzido
│   │   └── [...rest]/      # Catch-all para 404
│   ├── robots.ts           # Geração dinâmica de robots.txt
│   └── sitemap.ts          # Geração dinâmica de sitemap.xml
├── components/
│   ├── header.tsx          # Header sticky com troca de idioma
│   ├── footer.tsx          # Footer com links
│   ├── sections/           # Seções da landing page
│   │   ├── hero/
│   │   ├── about/
│   │   ├── process/
│   │   ├── products/
│   │   ├── testimonials/
│   │   └── contact/        # Formulário com validação
│   └── ui/                 # Componentes Shadcn/UI
├── i18n/                   # Configuração next-intl
├── lib/                    # Utilitários (cn, JSON-LD)
└── assets/images/          # Imagens estáticas
messages/
├── pt.json                 # Traduções Português
└── es.json                 # Traduções Espanhol
```

---


## 📄 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Gera build de produção |
| `pnpm start` | Inicia o servidor de produção |
| `pnpm lint` | Executa o ESLint |

---

<p align="center">
  Feito com 💚 por João Phillipe Fernandes
</p>
