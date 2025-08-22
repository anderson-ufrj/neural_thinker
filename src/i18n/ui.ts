export const defaultLang = 'pt' as const;
export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const ui = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    'nav.blog': 'Blog',
    'nav.tags': 'Tags',
    
    // Hero Section
    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'AI/ML Engineer',
    'hero.description': 'Engenheiro de IA e Machine Learning especializado em sistemas inteligentes e arquitetura de modelos',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.about': 'Sobre Mim',
    
    // Projects Section
    'projects.title': 'Projetos em Destaque',
    'projects.viewAll': 'Ver Todos os Projetos',
    'projects.viewGithub': 'Ver no GitHub',
    'projects.viewLive': 'Ver Demo',
    'projects.filterBy': 'Filtrar por:',
    'projects.all': 'Todos',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.readMore': 'Ler mais',
    'about.expertise': 'Expertise',
    'about.experience': 'Experiência',
    'about.philosophy': 'Filosofia',
    
    // Blog Section
    'blog.title': 'Últimas Publicações',
    'blog.readMore': 'Ler mais',
    'blog.readingTime': 'min de leitura',
    'blog.viewAll': 'Ver Todas as Publicações',
    
    // Certifications Section
    'certifications.title': 'Certificações',
    'certifications.viewCredential': 'Ver Credencial',
    
    // Contact Section
    'contact.title': 'Vamos Conversar',
    'contact.description': 'Interessado em colaborar ou tem alguma pergunta? Entre em contato!',
    'contact.email': 'Email',
    'contact.social': 'Redes Sociais',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados',
    'footer.madeWith': 'Feito com',
    
    // Common
    'theme.toggle': 'Alternar tema',
    'theme.light': 'Claro',
    'theme.dark': 'Escuro',
    'language.toggle': 'English',
    'back.to.top': 'Voltar ao topo',
    'booking.schedule': 'Agendar Conversa',
    'booking.cta': 'Vamos conversar?',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.tags': 'Tags',
    
    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'AI/ML Engineer',
    'hero.description': 'AI and Machine Learning Engineer specialized in intelligent systems and model architecture',
    'hero.cta.projects': 'View Projects',
    'hero.cta.about': 'About Me',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.viewAll': 'View All Projects',
    'projects.viewGithub': 'View on GitHub',
    'projects.viewLive': 'View Demo',
    'projects.filterBy': 'Filter by:',
    'projects.all': 'All',
    
    // About Section
    'about.title': 'About Me',
    'about.readMore': 'Read more',
    'about.expertise': 'Expertise',
    'about.experience': 'Experience',
    'about.philosophy': 'Philosophy',
    
    // Blog Section
    'blog.title': 'Latest Posts',
    'blog.readMore': 'Read more',
    'blog.readingTime': 'min read',
    'blog.viewAll': 'View All Posts',
    
    // Certifications Section
    'certifications.title': 'Certifications',
    'certifications.viewCredential': 'View Credential',
    
    // Contact Section
    'contact.title': 'Let\'s Talk',
    'contact.description': 'Interested in collaborating or have any questions? Get in touch!',
    'contact.email': 'Email',
    'contact.social': 'Social Media',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.madeWith': 'Made with',
    
    // Common
    'theme.toggle': 'Toggle theme',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'language.toggle': 'Português',
    'back.to.top': 'Back to top',
    'booking.schedule': 'Schedule a Chat',
    'booking.cta': 'Let\'s talk?',
  }
} as const;

export type UI = typeof ui[typeof defaultLang];