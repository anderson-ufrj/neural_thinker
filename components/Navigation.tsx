'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

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
  
  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const dropdown = document.getElementById('language-dropdown');
      const button = document.getElementById('language-button');
      
      if (dropdown && !dropdown.contains(event.target as Node) && 
          button && !button.contains(event.target as Node)) {
        dropdown.classList.add('hidden');
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          <div className="relative">
            <button
              id="language-button"
              className="text-sm text-gray-500 hover:text-[rgb(var(--foreground))] transition-colors flex items-center gap-1"
              aria-label="Change language"
              onClick={() => {
                const dropdown = document.getElementById('language-dropdown');
                if (dropdown) {
                  dropdown.classList.toggle('hidden');
                }
              }}
            >
              {locale.toUpperCase()}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div id="language-dropdown" className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-md hidden z-10">
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    onLocaleChange(l.code);
                    const dropdown = document.getElementById('language-dropdown');
                    if (dropdown) {
                      dropdown.classList.add('hidden');
                    }
                  }}
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