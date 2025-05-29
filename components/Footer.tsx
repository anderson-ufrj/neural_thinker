'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="container py-16 mt-16 border-t border-[rgb(var(--border))]">
      <div className="flex justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Anderson Henrique. {t('rights')}</p>
        <div className="flex gap-6">
          <a 
            href="https://github.com/anderson-h-silva" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[rgb(var(--foreground))] transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/anderson-h-silva95" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[rgb(var(--foreground))] transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://twitter.com/neural_thinker" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[rgb(var(--foreground))] transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}