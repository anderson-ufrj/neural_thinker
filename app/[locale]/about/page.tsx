import { getTranslations, getLocale } from 'next-intl/server';
import Link from 'next/link';

export default async function AboutPage() {
  const t = await getTranslations('about');
  const locale = await getLocale();
  
  // Get arrays from translations
  const skillsList: string[] = t.raw('skillsList');
  const interestsList: string[] = t.raw('interestsList');
  const educationList: string[] = t.raw('educationList');

  const socialLinks = [
    {
      name: 'Email',
      href: `/${locale}/contact`,
      icon: '📧',
      isExternal: false
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/anderson-h-silva95',
      icon: '💼',
      isExternal: true
    },
    {
      name: 'GitHub',
      href: 'https://github.com/anderson-h-silva',
      icon: '🐙',
      isExternal: true
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/neural_thinker',
      icon: '🐦',
      isExternal: true
    }
  ];
  
  return (
    <main className="container py-16">
      <header className="mb-16 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
          {t('title')}
        </h1>
        <p className="text-xl text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
          {t('bio')}
        </p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <section className="bg-[rgb(var(--muted))] dark:bg-[rgba(var(--foreground),0.03)] rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-accent">{t('skills')}</h2>
          <ul className="space-y-3">
            {skillsList.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-[rgb(var(--foreground))]">{skill}</span>
              </li>
            ))}
          </ul>
        </section>
        
        <section className="bg-[rgb(var(--muted))] dark:bg-[rgba(var(--foreground),0.03)] rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-accent">{t('interests')}</h2>
          <ul className="space-y-3">
            {interestsList.map((interest, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-[rgb(var(--foreground))]">{interest}</span>
              </li>
            ))}
          </ul>
        </section>
        
        <section className="bg-[rgb(var(--muted))] dark:bg-[rgba(var(--foreground),0.03)] rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-accent">{t('education')}</h2>
          <ul className="space-y-3">
            {educationList.map((education, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-[rgb(var(--foreground))]">{education}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      
      <section className="mt-16 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Connect</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
            >
              <span className="text-4xl">{link.icon}</span>
              <span className="font-medium">{link.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}