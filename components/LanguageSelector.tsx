'use client';

import { useState, useEffect } from 'react';
import { supportedLocales, getLocaleDisplayName } from '@/lib/utils';
import { motion } from 'framer-motion';

type Props = {
  currentLocale: string;
  onLocaleChange: (locale: string) => void;
};

export default function LanguageSelector({ currentLocale, onLocaleChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const flagEmoji = (locale: string) => {
    const flags: Record<string, string> = {
      pt: '🇧🇷',
      en: '🇺🇸',
      es: '🇪🇸'
    };
    return flags[locale] || '🌐';
  };

  return (
    <div className="relative language-selector">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        aria-label="Select language"
      >
        <span className="text-lg">{flagEmoji(currentLocale)}</span>
        <span className="hidden sm:inline">{getLocaleDisplayName(currentLocale)}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 z-50 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
        >
          {supportedLocales.map((locale) => (
            <button
              key={locale}
              onClick={() => {
                onLocaleChange(locale);
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                locale === currentLocale ? 'bg-gray-50 dark:bg-gray-700' : ''
              }`}
            >
              <span className="text-lg">{flagEmoji(locale)}</span>
              <span>{getLocaleDisplayName(locale)}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}