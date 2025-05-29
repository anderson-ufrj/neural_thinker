'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Navigation({ 
  locale, 
  onLocaleChange 
}: { 
  locale: string;
  onLocaleChange: (newLocale: string) => void;
}) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const t = useTranslations('navigation');
  const tLang = useTranslations('languages');

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/writing', label: t('writing') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  const locales = [
    { code: 'pt', label: tLang('pt') },
    { code: 'en', label: tLang('en') },
    { code: 'es', label: tLang('es') },
  ];

  return (
    <nav className="container py-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
                           (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive 
                    ? 'text-[rgb(var(--foreground))]' 
                    : 'text-gray-500 hover:text-[rgb(var(--foreground))]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative group">
            <button
              className="text-sm text-gray-500 hover:text-[rgb(var(--foreground))] transition-colors"
              aria-label="Change language"
            >
              {locale.toUpperCase()}
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-md hidden group-hover:block z-10">
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onLocaleChange(l.code)}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    locale === l.code
                      ? 'text-[rgb(var(--accent))]'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-sm text-gray-500 hover:text-[rgb(var(--foreground))] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}