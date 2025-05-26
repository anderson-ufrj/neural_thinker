import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function ContactPage() {
  const t = await getTranslations('contact');

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anderson-h-silva95/',
      username: '@anderson-h-silva95',
      icon: '💼'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/anderson-ufrj',
      username: '@anderson-ufrj',
      icon: '🐙'
    },
    {
      name: 'X (Twitter)',
      href: 'https://twitter.com/neural_thinker',
      username: '@neural_thinker',
      icon: '🐦'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/andhenrique_',
      username: '@andhenrique_',
      icon: '📷'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
        {t('subtitle')}
      </p>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">{t('email')}</h2>
          <Link
            href="mailto:anderson.henrique@example.com"
            className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
          >
            anderson.henrique@example.com
          </Link>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">{t('social')}</h2>
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="text-2xl">{link.icon}</span>
                <div>
                  <div className="font-medium">{link.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {link.username}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}