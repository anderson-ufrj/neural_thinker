import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function ProjectsPage() {
  const t = await getTranslations('projects');

  const projects = [
    {
      title: 'Neural Thinker',
      description: 'Personal website and blog exploring the intersection of AI and philosophy',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
      category: 'Web Development',
      links: {
        github: 'https://github.com/anderson-ufrj/neural-thinker',
        live: 'https://neural-thinker.vercel.app'
      }
    },
    {
      title: 'OSINT Toolkit',
      description: 'Collection of tools and scripts for Open Source Intelligence gathering',
      technologies: ['Python', 'BeautifulSoup', 'Selenium', 'APIs'],
      category: 'Security Research',
      links: {
        github: 'https://github.com/anderson-ufrj/osint-toolkit'
      }
    },
    {
      title: 'AI Ethics Framework',
      description: 'Framework for evaluating ethical implications of AI systems',
      technologies: ['Python', 'Jupyter', 'Pandas', 'scikit-learn'],
      category: 'Research',
      links: {
        github: 'https://github.com/anderson-ufrj/ai-ethics-framework'
      }
    }
  ];

  // Map technology to color
  const techColors: Record<string, string> = {
    'Next.js': 'bg-black text-white dark:bg-white dark:text-black',
    'TypeScript': 'bg-blue-600 text-white dark:bg-blue-500',
    'Tailwind CSS': 'bg-teal-500 text-white dark:bg-teal-600',
    'MDX': 'bg-yellow-500 text-black dark:bg-yellow-600',
    'Python': 'bg-blue-500 text-white dark:bg-blue-600',
    'BeautifulSoup': 'bg-green-500 text-white dark:bg-green-600',
    'Selenium': 'bg-green-600 text-white dark:bg-green-700',
    'APIs': 'bg-purple-500 text-white dark:bg-purple-600',
    'Jupyter': 'bg-orange-500 text-white dark:bg-orange-600',
    'Pandas': 'bg-indigo-500 text-white dark:bg-indigo-600',
    'scikit-learn': 'bg-blue-700 text-white dark:bg-blue-800',
  };

  // Map category to icon
  const categoryIcons: Record<string, string> = {
    'Web Development': '🌐',
    'Security Research': '🔒',
    'Research': '📊',
  };

  return (
    <main className="container py-16">
      <header className="mb-16 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
          {t('title')}
        </h1>
        <p className="text-xl text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
          {t('description') || "A collection of my personal and professional projects."}
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group bg-[rgb(var(--muted))] dark:bg-[rgba(var(--foreground),0.03)] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{categoryIcons[project.category] || '🔍'}</span>
                <span className="text-sm font-medium text-[rgb(var(--muted-foreground))]">
                  {project.category}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h2>
              
              <p className="text-[rgb(var(--muted-foreground))] mb-6 min-h-[4rem]">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3 text-[rgb(var(--foreground))]">
                  {t('technologies')}:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${techColors[tech] || 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-[rgba(var(--foreground),0.1)]">
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-[rgb(var(--accent-dark))] transition-colors font-medium text-sm flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </Link>
                )}
                {project.links.live && (
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-[rgb(var(--accent-dark))] transition-colors font-medium text-sm flex items-center gap-1"
                  >
                    <span>{t('viewProject')}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <section className="mt-24 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{t('interested') || "Interested in Working Together?"}</h2>
        <p className="text-lg text-blue-50 dark:text-blue-100 mb-8 max-w-2xl mx-auto">
          {t('collaborationText') || "I'm open to new projects and collaborations. If you have an idea you'd like to discuss, I'd love to hear from you."}
        </p>
        <Link 
          href="mailto:anderson.silva@neuralthinker.com?subject=Project%20Collaboration"
          className="inline-flex items-center justify-center font-medium px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          {t('startProject') || "Start a Project"}
        </Link>
      </section>
    </main>
  );
}