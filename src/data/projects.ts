export interface Project {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: 'transparencia-br',
    title: {
      pt: 'TransparenciaBR Analytics',
      en: 'TransparencyBR Analytics'
    },
    description: {
      pt: 'Análise de transparência governamental com IA e ML via API do Portal da Transparência',
      en: 'Government transparency analysis with AI and ML via Brazil\'s Transparency Portal API'
    },
    tags: ['Python', 'Machine Learning', 'Data Science', 'API', 'Government Data'],
    image: '/images/projects/placeholder.svg',
    github: 'https://github.com/anderson-ufrj/TransparenciaBR-Analytics',
    featured: true,
    date: '2024-01-15'
  },
  {
    id: 'neural-thinker',
    title: {
      pt: 'Neural Thinker - Site Pessoal',
      en: 'Neural Thinker - Personal Website'
    },
    description: {
      pt: 'Website pessoal desenvolvido com TypeScript e arquitetura moderna',
      en: 'Personal website developed with TypeScript and modern architecture'
    },
    tags: ['TypeScript', 'Web Development', 'Frontend', 'Astro'],
    image: '/images/projects/placeholder.svg',
    github: 'https://github.com/anderson-ufrj/neural_thinker',
    live: 'https://neural-thinker.com',
    featured: true,
    date: '2023-11-20'
  },
  {
    id: 'game-2d-python',
    title: {
      pt: 'Game 2D em Python',
      en: '2D Game in Python'
    },
    description: {
      pt: 'Desenvolvimento de jogo 2D como projeto de Tópicos Especiais em Ciência da Computação',
      en: '2D game development as a Special Topics in Computer Science project'
    },
    tags: ['Python', 'Game Development', 'PyGame', 'UFRJ'],
    image: '/images/projects/placeholder.svg',
    github: 'https://github.com/anderson-ufrj/project-game-py',
    date: '2023-06-15'
  },
  {
    id: 'scrapy-project',
    title: {
      pt: 'Web Scraping com Scrapy',
      en: 'Web Scraping with Scrapy'
    },
    description: {
      pt: 'Sistema de extração de dados web usando Scrapy framework',
      en: 'Web data extraction system using Scrapy framework'
    },
    tags: ['Python', 'Scrapy', 'Web Scraping', 'Data Extraction'],
    image: '/images/projects/placeholder.svg',
    github: 'https://github.com/anderson-ufrj/ScrapyProject',
    date: '2023-08-10'
  }
];