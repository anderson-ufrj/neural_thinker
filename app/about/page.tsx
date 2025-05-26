import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function AboutPage() {
  const t = await getTranslations('about');

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/anderson-h-silva95/', icon: '💼' },
    { name: 'GitHub', href: 'https://github.com/anderson-ufrj', icon: '🐙' },
    { name: 'Instagram', href: 'https://instagram.com/andhenrique_', icon: '📷' },
    { name: 'X', href: 'https://twitter.com/neural_thinker', icon: '🐦' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-8">
          {t('bio')}
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('education')}</h2>
            <ul className="space-y-2">
              {t.raw('educationList').map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('skills')}</h2>
            <div className="flex flex-wrap gap-2">
              {t.raw('skillsList').map((skill: string) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">{t('interests')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {t.raw('interestsList').map((interest: string) => (
              <div key={interest} className="flex items-center">
                <span className="text-purple-600 dark:text-purple-400 mr-3">•</span>
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Social</h2>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}