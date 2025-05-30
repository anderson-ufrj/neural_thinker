# Neural Thinker - Personal Website

Site pessoal multilíngue com suporte a português, inglês e espanhol. Desenvolvido com Next.js 14+, TypeScript, Tailwind CSS e MDX.

🌐 **Site ao vivo:** [https://neural-thinker.vercel.app/pt](https://neural-thinker.vercel.app/pt)

## 🚀 Tecnologias

- **Next.js 14+** - Framework React com App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização utility-first
- **MDX** - Markdown com componentes React
- **next-intl** - Internacionalização
- **Framer Motion** - Animações
- **Vercel** - Deploy e hosting

## 📁 Estrutura

```
neural-thinker/
├── app/                    # Páginas e rotas
├── components/             # Componentes React
├── content/posts/          # Posts em MDX
├── lib/                    # Utilitários e helpers
│   └── i18n/              # Arquivos de tradução
├── public/                 # Assets estáticos
├── scripts/               # Scripts auxiliares
└── styles/                # Estilos globais
```

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar build de produção
npm run start
```

## ✍️ Criar Novo Post

```bash
# Criar post em português
npm run new-post "Título do Post" --lang pt

# Criar post em inglês
npm run new-post "Post Title" --lang en

# Criar post em espanhol
npm run new-post "Título del Post" --lang es
```

## 🌍 Internacionalização

O site suporta três idiomas:
- Português (pt)
- Inglês (en)
- Espanhol (es)

As traduções estão em `/lib/i18n/[idioma].json`.

## 📝 Formato dos Posts

```yaml
---
title: "Título do Post"
date: "2024-03-15"
language: "pt"
tags: ["tag1", "tag2"]
excerpt: "Descrição breve do post"
translations:
  en: "slug-do-post-em-ingles"
  es: null
---

Conteúdo do post em Markdown...
```

## 🚀 Deploy

O site está configurado para deploy automático no Vercel:

1. Push para o branch `main`
2. Vercel detecta mudanças automaticamente
3. Build e deploy são executados
4. Site atualizado em produção

## 📄 Licença

MIT