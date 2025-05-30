'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Footer() {
  const t = useTranslations('footer');
  const { locale } = useParams() as { locale: string };

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/anderson-h-silva',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/anderson-h-silva95',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/neural_thinker',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      )
    },
  ];

  const quickLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/writing`, label: t('writing') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="mt-24 bg-[rgb(var(--muted))] dark:bg-[rgba(var(--foreground),0.03)] border-t border-[rgb(var(--border))]">
      <AnimatedSection animation="fadeUp" className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand/Info section */}
          <div className="space-y-4">
            <div className="text-xl font-serif font-bold tracking-tight">
              Neural<span className="text-accent">Thinker</span>
            </div>
            <p className="text-sm text-[rgb(var(--muted-foreground))]">
              {t('tagline')}
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--accent))] transition-colors p-2"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-[rgb(var(--foreground))]">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--accent))] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-[rgb(var(--foreground))]">
              {t('newsletter')}
            </h3>
            <p className="text-sm text-[rgb(var(--muted-foreground))]">
              {t('newsletterText')}
            </p>
            <div className="mt-3 flex space-x-2">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="flex-1 rounded-lg border border-[rgb(var(--border))] bg-white dark:bg-[rgb(var(--background))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]"
              />
              <motion.button
                className="rounded-lg bg-[rgb(var(--accent))] px-4 py-2 text-sm text-white transition-colors hover:bg-[rgb(var(--accent-dark))]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('subscribe')}
              </motion.button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgb(var(--border))]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[rgb(var(--muted-foreground))]">
            <p>© {new Date().getFullYear()} Anderson Henrique. {t('rights')}</p>
            <div className="flex space-x-6">
              <Link href={`/${locale}/privacy`} className="hover:text-[rgb(var(--accent))] transition-colors">
                {t('privacy')}
              </Link>
              <Link href={`/${locale}/terms`} className="hover:text-[rgb(var(--accent))] transition-colors">
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
}