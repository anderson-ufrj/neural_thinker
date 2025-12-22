export interface Certification {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  icon?: string;
  featured?: boolean;
  skills?: string[];
}

export interface Membership {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  organization: string;
  date: string;
  credentialId?: string;
  expiryDate?: string;
  description: {
    pt: string;
    en: string;
  };
}

// Featured certifications for timeline
export const certifications: Certification[] = [
  {
    id: 'mcp-advanced',
    title: {
      pt: 'Model Context Protocol (MCP): Advanced Topics',
      en: 'Model Context Protocol (MCP): Advanced Topics'
    },
    issuer: 'Anthropic',
    date: '2025-09',
    credentialId: 'eg3tfrrvikxq',
    featured: true,
    skills: ['MCP', 'AI', 'Tool Integration']
  },
  {
    id: 'spark-kyuubi',
    title: {
      pt: 'Spark and Kyuubi – Engineering Deep Dive',
      en: 'Spark and Kyuubi – Engineering Deep Dive'
    },
    issuer: 'BrightTALK',
    date: '2025-08',
    featured: true,
    skills: ['Apache Spark', 'Kyuubi', 'Big Data', 'ELT']
  },
  {
    id: 'uaisint-speaker',
    title: {
      pt: 'Palestrante UaiSINT Falazada: AI & OSINT',
      en: 'Guest Speaker UaiSINT Falazada: AI & OSINT'
    },
    issuer: 'Ruvixx, Inc.',
    date: '2025-05',
    featured: true,
    skills: ['OSINT', 'AI', 'Public Speaking', 'Cybersecurity']
  },
  {
    id: 'claude-code-action',
    title: {
      pt: 'Claude Code in Action',
      en: 'Claude Code in Action'
    },
    issuer: 'Anthropic',
    date: '2025-08',
    credentialId: 'jgbbg43j5ty3',
    featured: true,
    skills: ['AI', 'Prompt Engineering', 'Software Development']
  },
  {
    id: 'ai-fluency',
    title: {
      pt: 'AI Fluency: Framework & Foundations',
      en: 'AI Fluency: Framework & Foundations'
    },
    issuer: 'Anthropic',
    date: '2025-07',
    credentialId: 'dksf2dyknqik',
    featured: true,
    skills: ['AI']
  },
  {
    id: 'multivariate-calculus',
    title: {
      pt: 'Mathematics for Machine Learning: Multivariate Calculus',
      en: 'Mathematics for Machine Learning: Multivariate Calculus'
    },
    issuer: 'Imperial College London',
    date: '2025-04',
    credentialId: 'OYZ26RMRUT5J',
    featured: true,
    skills: ['Machine Learning', 'Mathematics', 'Linear Algebra']
  },
  {
    id: 'core-ai-concepts',
    title: {
      pt: 'Core Concepts in AI',
      en: 'Core Concepts in AI'
    },
    issuer: 'Johns Hopkins University',
    date: '2025-03',
    credentialId: 'PMQQMJ6ZHB3W',
    featured: true,
    skills: ['AI', 'Machine Learning', 'Ethics', 'Big Data']
  },
  {
    id: 'statistics-stanford',
    title: {
      pt: 'Introduction to Statistics',
      en: 'Introduction to Statistics'
    },
    issuer: 'Stanford Online',
    date: '2025-03',
    credentialId: 'CQ4UTOBWP3K0',
    featured: true,
    skills: ['Statistics', 'Data Science']
  },
  {
    id: 'linear-algebra',
    title: {
      pt: 'Mathematics for Machine Learning: Linear Algebra',
      en: 'Mathematics for Machine Learning: Linear Algebra'
    },
    issuer: 'Imperial College London',
    date: '2025-03',
    credentialId: 'K70QW24O90YE',
    featured: true,
    skills: ['Linear Algebra', 'Machine Learning', 'Mathematics']
  },
  {
    id: 'scrum-master',
    title: {
      pt: 'Scrum Master Certification Specialization',
      en: 'Scrum Master Certification Specialization'
    },
    issuer: 'LearnQuest',
    date: '2025-03',
    credentialId: 'Z679J4RVYKBU',
    featured: true,
    skills: ['Scrum', 'CI/CD', 'Project Management']
  },
  {
    id: 'cybersecurity-fundamentals',
    title: {
      pt: 'Cyber Security Fundamentals',
      en: 'Cyber Security Fundamentals'
    },
    issuer: 'University of London',
    date: '2025-02',
    credentialId: 'X59N6YB9ZCSH',
    featured: true,
    skills: ['Cybersecurity', 'ISO 27001', 'Cloud Computing']
  },
  {
    id: 'prompt-engineering',
    title: {
      pt: 'Prompt Engineering Specialization',
      en: 'Prompt Engineering Specialization'
    },
    issuer: 'Vanderbilt University',
    date: '2025-01',
    credentialId: '52XH03PSJDK6',
    featured: true,
    skills: ['Prompt Engineering', 'AI', 'Technical Design']
  },
  {
    id: 'deep-learning-business',
    title: {
      pt: 'Deep Learning for Business',
      en: 'Deep Learning for Business'
    },
    issuer: 'Yonsei University',
    date: '2024-12',
    credentialId: 'XMREKUPQ4H7Y',
    featured: true,
    skills: ['Deep Learning', 'Python', 'PyTorch', 'Business Intelligence']
  },
  {
    id: 'aws-fundamentals',
    title: {
      pt: 'AWS Fundamentals Specialization',
      en: 'AWS Fundamentals Specialization'
    },
    issuer: 'Amazon Web Services (AWS)',
    date: '2024-11',
    credentialId: 'UGYGY9HBK570',
    featured: true,
    skills: ['AWS', 'Cloud Computing', 'Infrastructure']
  }
];

// Professional memberships
export const memberships: Membership[] = [
  {
    id: 'sbc-member',
    title: {
      pt: 'Membro da Sociedade Brasileira de Computação (SBC)',
      en: 'Member of the Brazilian Computer Society (SBC)'
    },
    organization: 'Sociedade Brasileira de Computação - SBC',
    date: '2025-02',
    expiryDate: '2026-02',
    credentialId: '67985',
    description: {
      pt: 'Membro ativo da principal sociedade científica brasileira na área de Computação, participando de eventos, publicações e iniciativas para o avanço da ciência da computação no Brasil.',
      en: 'Active member of Brazil\'s leading scientific society in Computing, participating in events, publications and initiatives for the advancement of computer science in Brazil.'
    }
  },
  {
    id: 'sbmac-member',
    title: {
      pt: 'Membro da Sociedade Brasileira de Matemática Aplicada e Computacional (SBMAC)',
      en: 'Member of the Brazilian Society for Applied and Computational Mathematics (SBMAC)'
    },
    organization: 'SBMAC',
    date: '2024-11',
    description: {
      pt: 'Engajamento com a comunidade de matemática aplicada e computacional, contribuindo para pesquisas interdisciplinares entre matemática, computação e aplicações práticas.',
      en: 'Engagement with the applied and computational mathematics community, contributing to interdisciplinary research between mathematics, computing and practical applications.'
    }
  },
  {
    id: 'sbm-member',
    title: {
      pt: 'Membro da Sociedade Brasileira de Matemática (SBM)',
      en: 'Member of the Brazilian Mathematical Society (SBM)'
    },
    organization: 'Sociedade Brasileira de Matemática',
    date: '2024-03',
    expiryDate: '2026-01',
    description: {
      pt: 'Participação ativa na comunidade matemática brasileira, fortalecendo a base teórica essencial para desenvolvimentos em IA e machine learning.',
      en: 'Active participation in the Brazilian mathematical community, strengthening the theoretical foundation essential for AI and machine learning developments.'
    }
  }
];