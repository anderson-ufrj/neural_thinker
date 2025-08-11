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
}

export const certifications: Certification[] = [
  {
    id: 'ufrj-cs',
    title: {
      pt: 'Graduação em Ciência da Computação',
      en: 'Bachelor\'s in Computer Science'
    },
    issuer: 'UFRJ - Universidade Federal do Rio de Janeiro',
    date: '2023-12',
    credentialId: 'UFRJ-CC-2023',
    url: 'https://ufrj.br',
    icon: 'graduation'
  },
  {
    id: 'aws-solutions-architect',
    title: {
      pt: 'AWS Certified Solutions Architect',
      en: 'AWS Certified Solutions Architect'
    },
    issuer: 'Amazon Web Services',
    date: '2024-01',
    credentialId: 'AWS-CSA-2024',
    url: 'https://aws.amazon.com/certification/',
    icon: 'aws'
  },
  {
    id: 'ml-stanford',
    title: {
      pt: 'Machine Learning Specialization',
      en: 'Machine Learning Specialization'
    },
    issuer: 'Coursera - Stanford University',
    date: '2023-06',
    credentialId: 'ML-STANFORD-2023',
    url: 'https://www.coursera.org/specializations/machine-learning-introduction',
    icon: 'coursera'
  },
  {
    id: 'python-data-science',
    title: {
      pt: 'Python for Data Science',
      en: 'Python for Data Science'
    },
    issuer: 'IBM - Coursera',
    date: '2022-10',
    credentialId: 'IBM-PY-DS-2022',
    url: 'https://www.coursera.org/professional-certificates/ibm-data-science',
    icon: 'ibm'
  }
];