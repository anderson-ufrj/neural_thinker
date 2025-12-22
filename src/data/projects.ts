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
    id: 'langchain-maritaca',
    title: {
      pt: 'LangChain Maritaca',
      en: 'LangChain Maritaca'
    },
    description: {
      pt: 'Primeiro pacote open source LangChain para LLMs brasileiros. Integração nativa com Maritaca AI (Sabiá-3.1, Sabiazinho-3) com streaming, async e rate limiting.',
      en: 'First LangChain open source package for Brazilian LLMs. Native integration with Maritaca AI (Sabiá-3.1, Sabiazinho-3) with streaming, async and rate limiting.'
    },
    tags: ['Python', 'LangChain', 'PyPI', 'Open Source', 'LLM', 'Maritaca AI', 'RAG'],
    github: 'https://github.com/anderson-ufrj/langchain-maritaca',
    live: 'https://pypi.org/project/langchain-maritaca/',
    featured: true,
    date: '2025-12-22'
  },
  {
    id: 'developer-mental-model',
    title: {
      pt: 'Developer Mental Model Framework',
      en: 'Developer Mental Model Framework'
    },
    description: {
      pt: 'Pesquisa científica publicada no Zenodo sobre modelos mentais de desenvolvedores em parceria humano-IA. Framework teórico para Design Science Research.',
      en: 'Scientific research published on Zenodo about developer mental models in human-AI partnership. Theoretical framework for Design Science Research.'
    },
    tags: ['Research', 'Zenodo', 'Design Science', 'AI Partnership', 'Mental Models', 'Academic'],
    github: 'https://github.com/anderson-ufrj/dmmf_mental-model',
    live: 'https://zenodo.org/records/14547092',
    featured: true,
    date: '2025-12-21'
  },
  {
    id: 'dspy-cultural-agents',
    title: {
      pt: 'DSPy Tutorial: Agentes Culturais',
      en: 'DSPy Tutorial: Cultural Agents'
    },
    description: {
      pt: 'Tutorial oficial para o framework DSPy (Stanford NLP) demonstrando arquitetura multi-agente com personalidades culturais brasileiras.',
      en: 'Official tutorial for DSPy framework (Stanford NLP) demonstrating multi-agent architecture with Brazilian cultural personalities.'
    },
    tags: ['DSPy', 'Stanford NLP', 'Multi-Agent', 'Tutorial', 'Open Source', 'Documentation'],
    github: 'https://github.com/stanfordnlp/dspy',
    featured: true,
    date: '2025-12-12'
  },
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