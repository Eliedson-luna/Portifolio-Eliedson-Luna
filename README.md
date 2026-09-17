# Portfólio Profissional - Eliedson Luna

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify)](https://www.netlify.com/)
[![Velite](https://img.shields.io/badge/Content-Velite-FF6B6B)](https://velite.js.org/)

**Acesse em:** [https://devluna.com.br](https://devluna.com.br)

---

## Visão Geral

Portfólio profissional desenvolvido com Next.js 15 (App Router), TypeScript e Tailwind CSS v4. Apresenta projetos, blog técnico com MDX e formulário de contato protegido por reCAPTCHA. Deploy contínuo no Netlify.

---

## Funcionalidades

- **Blog técnico com MDX** — Posts gerenciados via Velite (frontmatter + conteúdo MDX)
- **Formulário de contato** — Validação client-side + verificação reCAPTCHA v3 server-side
- **Tema escuro/claro** — Persistência via localStorage + CSS variables
- **Design responsivo** — Mobile-first, breakpoints Tailwind
- **Projetos em destaque** — Thumbnails WebP/JPG, páginas de detalhe dinâmicas
- **Performance** — Turbopack no dev, build otimizado para produção

---

## Stack Tecnológico

| Categoria | Tecnologia |
|-----------|------------|
| Framework | Next.js 15 (App Router, Turbopack) |
| Estilização | Tailwind CSS v4 (@tailwindcss/postcss) |
| Linguagem | TypeScript 5 (strict mode) |
| CMS/Conteúdo | Velite (MDX + frontmatter schema) |
| Formulários | react-google-recaptcha v3 |
| Ícones | react-icons |
| Deploy | Netlify (@netlify/plugin-nextjs) |

---

## Estrutura do Projeto

````
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home
│   ├── layout.tsx         # Layout raiz + Header
│   ├── globals.css        # Estilos globais + Tailwind
│   ├── loading.tsx        # Loading UI
│   ├── sobre/page.tsx     # Página Sobre
│   ├── contatos/page.tsx  # Página Contato
│   ├── projetos/          # Listagem + detalhe de projetos
│   └── api/recaptcha/     # Verificação reCAPTCHA server-side
├── features/              # Componentes por feature
│   ├── Home/              # Seções da home (Start, TopProjects, About, Contacts)
│   ├── Sobre/             # Componentes da página Sobre
│   ├── Projetos/          # Listagem de projetos
│   └── Contatos/          # Formulário de contato
└── shared/                # Código compartilhado
    ├── components/
    │   ├── ui/            # Text, Buttons, ScrollIndicators
    │   ├── structural/    # Header, Footer, Containers, Wrappers
    │   └── animations/    # Luna SVG animation
    ├── content/posts/     # Posts MDX (fonte para Velite)
    ├── context/           # ThemeContext
    ├── hooks/             # useMDXComponent
    └── fonts/             # Roboto Mono + utilitários de font-size

public/
├── assets/                # PDF do currículo
└── images/projects/       # Thumbnails (WebP + JPG)

.velite/                   # Dados gerados pelo Velite (gitignored)
````

---

