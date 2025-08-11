# 🧠 Neural Thinker - Portfolio Website

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

> **Arquiteto de Inteligência Digital** - Single Page Application moderna e performática com suporte bilíngue (PT/EN)

## ✨ Características

- 🚀 **Astro 4.x** com SSG otimizado
- 📱 **Single Page Application** com navegação suave
- 🌐 **Bilíngue**: Português (padrão) e Inglês
- 🎨 **Tailwind CSS 4.0** com design system
- 🌙 **Dark/Light mode** com persistência
- ⚡ **Performance otimizada** (Core Web Vitals)
- 📊 **SEO completo** com Open Graph
- 🔧 **TypeScript strict mode**
- 📱 **Mobile-first responsive**

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+ 
- npm 9+

### Instalação
```bash
# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run astro        # CLI do Astro
```

## 🏗️ Arquitetura

### Estrutura do Projeto
```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.astro    # Navegação sticky
│   ├── Hero.astro      # Seção hero com typewriter
│   ├── Projects.astro  # Grid de projetos
│   ├── About.astro     # Sobre mim
│   ├── Blog.astro      # Últimos posts
│   ├── Certifications.astro # Timeline
│   ├── Contact.astro   # Formulário de contato
│   └── Footer.astro    # Rodapé
├── data/               # Dados estruturados
│   ├── site.json      # Configurações globais
│   ├── projects.ts    # Dados dos projetos
│   ├── blog.ts        # Posts do blog
│   ├── certifications.ts # Certificações
│   └── about.ts       # Conteúdo sobre
├── i18n/               # Internacionalização
│   ├── ui.ts          # Traduções da interface
│   └── utils.ts       # Helpers de i18n
├── layouts/            # Layouts base
│   └── Layout.astro   # Layout principal
├── pages/              # Rotas
│   ├── index.astro    # Redirect para /pt
│   ├── pt/index.astro # Página PT
│   └── en/index.astro # Página EN
└── styles/
    └── global.css     # Estilos globais
```

## 🌐 Internacionalização

O site suporta **Português** (padrão) e **Inglês**:

- **Português**: `/pt` (padrão) ou `/`
- **Inglês**: `/en`
- Toggle automático entre idiomas
- URLs localizadas

## 📱 Seções Principais

### 🏠 Hero
- Typewriter effect com role
- Avatar/foto de perfil
- CTAs para projetos e contato
- Links para redes sociais

### 💼 Projetos
- Grid responsivo com cards
- Filtros por tecnologia
- Links para GitHub e demo
- Hover effects

### 👨‍💻 Sobre
- Bio profissional
- Expertise e experiência
- Stats/métricas
- Filosofia de trabalho

### 📝 Blog
- Cards com preview
- Modal para conteúdo completo
- Tags clicáveis
- Tempo de leitura

### 🏆 Certificações
- Timeline visual
- Links para credenciais
- Hover animations

### 📞 Contato
- Informações de contato
- Links para redes sociais
- CTA para email/LinkedIn

## 📈 Performance

### Otimizações
- Static Site Generation (SSG)
- Asset optimization
- Font optimization
- Image lazy loading
- CSS/JS minification

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório GitHub
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

## 👨‍💻 Autor

**Anderson Henrique**
- 📧 Email: andersonhs27@gmail.com
- 💼 LinkedIn: [anderson-h-silva95](https://linkedin.com/in/anderson-h-silva95)
- 🐙 GitHub: [anderson-ufrj](https://github.com/anderson-ufrj)

---

<div align="center">
  <strong>Feito com ❤️ usando Astro + Tailwind CSS</strong>
</div>
