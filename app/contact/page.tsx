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
      href: 'https://github.com/anderson-h-silva',
      username: '@anderson-h-silva',
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
    <div className="container py-16">
      <h1 className="text-3xl mb-8">{t('title')}</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-12">
        {t('subtitle')}
      </p>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl mb-4">{t('email')}</h2>
          <Link
            href="mailto:anderson.silva@neuralthinker.com"
            className="text-[rgb(var(--accent))] hover:underline"
          >
            anderson.silva@neuralthinker.com
          </Link>
        </div>
        
        <div>
          <h2 className="text-xl mb-4">{t('social')}</h2>
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-[rgb(var(--accent))] transition-colors"
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