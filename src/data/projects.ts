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
    id: 'cidadao-ai',
    title: {
      pt: 'Cidadão.AI',
      en: 'Cidadão.AI'
    },
    description: {
      pt: 'Sistema multi-agente de IA para transparência governamental brasileira. Projeto de conclusão de curso desenvolvido com metodologia Design Science Research.',
      en: 'Multi-agent AI system for Brazilian government transparency. Capstone project developed with Design Science Research methodology.'
    },
    tags: ['FastAPI', 'Next.js', 'Multi-Agent', 'AI/ML', 'LangChain', 'FAISS', 'ChromaDB', 'BERTimbau', 'PostgreSQL'],
    image: '/images/projects/placeholder.svg',
    github: 'https://github.com/anderson-ufrj/cidadao.ai-backend',
    live: 'https://anderson-ufrj.github.io/cidadao.ai-docs/',
    featured: true,
    date: '2025-01-15'
  },
  {
    id: 'transparencia-br',
    title: {
      pt: 'TransparenciaBR Analytics',
      en: 'TransparencyBR Analytics'
    },
    description: {
      pt: 'Análise de transparência governamental com IA e ML via API do Portal da Transparência. Implementa modelos ML para detecção de anomalias em gastos públicos.',
      en: 'Government transparency analysis with AI and ML via Brazil\'s Transparency Portal API. Implements ML models to detect anomalies in public spending.'
    },
    tags: ['Python', 'Machine Learning', 'Data Science', 'API', 'Anomaly Detection', 'Government Data'],
    image: '/images/projects/placeholder.svg',
    github: 'https://github.com/anderson-ufrj/TransparenciaBR-Analytics',
    featured: true,
    date: '2024-01-15'
  },
  {
    id: 'uai-sint',
    title: {
      pt: 'UaiSINT - Toolkit de Automação OSINT',
      en: 'UaiSINT - OSINT Automation Toolkit'
    },
    description: {
      pt: 'Plataforma modular para coleta automatizada de inteligência com análise visual e geração de relatórios. Integra múltiplas fontes públicas com scraping de alta confiabilidade.',
      en: 'Modular platform for automated intelligence gathering with visual analytics and report generation. Integrates multiple public sources with high-reliability scraping.'
    },
    tags: ['Python', 'OSINT', 'Scrapy', 'Intelligence', 'Automation', 'Compliance', 'Analytics'],
    image: '/images/projects/placeholder.svg',
    github: 'https://github.com/anderson-ufrj/UaiSINT',
    featured: true,
    date: '2024-08-20'
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
    tags: ['Python', 'Game Development', 'PyGame', 'IFSULDEMINAS'],
    image: '/images/projects/placeholder.svg',
    github: 'https://github.com/anderson-ufrj/project-game-py',
    date: '2023-06-15'
  }
];