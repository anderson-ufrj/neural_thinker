import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function ContactPage() {
  const t = await getTranslations('contact');

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anderson-h-silva95/',
      username: '@anderson-h-silva95',
      icon: '💼',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/anderson-h-silva',
      username: '@anderson-h-silva',
      icon: '🐙',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    },
    {
      name: 'X (Twitter)',
      href: 'https://twitter.com/neural_thinker',
      username: '@neural_thinker',
      icon: '🐦',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/andhenrique_',
      username: '@andhenrique_',
      icon: '📷',
      color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
    }
  ];

  return (
    <main className="container py-16">
      <header className="mb-16 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
          {t('title')}
        </h1>
        <p className="text-xl text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </header>
      
      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <section className="bg-[rgb(var(--muted))] dark:bg-[rgba(var(--foreground),0.03)] rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-8 text-accent">{t('email')}</h2>
          
          <div className="bg-white dark:bg-[rgba(var(--foreground),0.05)] rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl">
                📧
              </div>
              <div>
                <h3 className="font-medium text-lg">{t('getInTouch') || "Get in Touch"}</h3>
                <p className="text-[rgb(var(--muted-foreground))]">
                  {t('responseTime') || "I'll respond within 24-48 hours"}
                </p>
              </div>
            </div>
            
            <Link
              href="mailto:anderson.silva@neuralthinker.com"
              className="text-accent hover:text-[rgb(var(--accent-dark))] transition-colors font-medium flex items-center justify-center w-full py-3 border border-accent rounded-lg hover:bg-[rgba(var(--accent),0.05)]"
            >
              anderson.silva@neuralthinker.com
            </Link>
          </div>
          
          <div className="mt-8">
            <h3 className="font-medium text-lg mb-4">{t('preferEmail') || "Why Email?"}</h3>
            <p className="text-[rgb(var(--muted-foreground))]">
              {t('emailBenefits') || "Email allows for more detailed discussions and ensures I can properly respond to your inquiries or collaboration proposals."}
            </p>
          </div>
        </section>
        
        <section className="bg-[rgb(var(--muted))] dark:bg-[rgba(var(--foreground),0.03)] rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-8 text-accent">{t('social')}</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-[rgba(var(--foreground),0.05)] rounded-lg p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all hover:translate-x-1"
              >
                <div className={`w-12 h-12 ${link.color} rounded-full flex items-center justify-center text-2xl`}>
                  {link.icon}
                </div>
                <div>
                  <div className="font-medium text-lg">{link.name}</div>
                  <div className="text-sm text-[rgb(var(--muted-foreground))]">
                    {link.username}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      
      <section className="mt-16 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{t('openToCollaboration') || "Open to Collaboration"}</h2>
        <p className="text-lg text-blue-50 dark:text-blue-100 mb-8 max-w-2xl mx-auto">
          {t('collaborationText') || "I'm always interested in new projects, research opportunities, and collaborations in the fields of AI ethics, OSINT, and cybersecurity."}
        </p>
        <Link 
          href="mailto:anderson.silva@neuralthinker.com?subject=Collaboration%20Opportunity"
          className="inline-flex items-center justify-center font-medium px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          {t('letsTalk') || "Let's Talk"}
        </Link>
      </section>
    </main>
  );
}