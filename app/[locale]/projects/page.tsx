import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function ProjectsPage() {
  const t = await getTranslations('projects');

  const projects = [
    {
      title: 'Neural Thinker',
      description: 'Personal website and blog exploring the intersection of AI and philosophy',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
      links: {
        github: 'https://github.com/anderson-ufrj/neural-thinker',
        live: 'https://neural-thinker.vercel.app'
      }
    },
    {
      title: 'OSINT Toolkit',
      description: 'Collection of tools and scripts for Open Source Intelligence gathering',
      technologies: ['Python', 'BeautifulSoup', 'Selenium', 'APIs'],
      links: {
        github: 'https://github.com/anderson-ufrj/osint-toolkit'
      }
    },
    {
      title: 'AI Ethics Framework',
      description: 'Framework for evaluating ethical implications of AI systems',
      technologies: ['Python', 'Jupyter', 'Pandas', 'scikit-learn'],
      links: {
        github: 'https://github.com/anderson-ufrj/ai-ethics-framework'
      }
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">{t('title')}</h1>
      
      <div className="grid gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                {t('technologies')}:
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  GitHub →
                </Link>
              )}
              {project.links.live && (
                <Link
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  {t('viewProject')} →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}