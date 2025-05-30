'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const flagEmojis: Record<string, string> = {
  'pt': '🇧🇷',
  'en': '🇺🇸',
  'es': '🇪🇸',
};

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Track scroll position for nav styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isDropdownOpen) {
        const dropdown = document.getElementById('language-dropdown');
        const button = document.getElementById('language-button');
        
        if (dropdown && !dropdown.contains(event.target as Node) && 
            button && !button.contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/writing`, label: t('writing') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const locales = [
    { code: 'pt', label: tLang('pt') },
    { code: 'en', label: tLang('en') },
    { code: 'es', label: tLang('es') },
  ];
  
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };
  
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: -10,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`sticky top-0 z-50 w-full ${
        isScrolled 
          ? 'bg-white bg-opacity-80 backdrop-blur-md dark:bg-[rgb(var(--background))] dark:bg-opacity-80 shadow-sm' 
          : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="container py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo/Brand */}
            <Link href={`/${locale}`} className="mr-8">
              <motion.div 
                className="text-lg font-serif font-bold tracking-tight" 
                variants={itemVariants}
              >
                Neural<span className="text-accent">Thinker</span>
              </motion.div>
            </Link>
            
            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href || 
                              (item.href !== `/${locale}` && pathname.startsWith(item.href));
                return (
                  <motion.div key={item.href} variants={itemVariants} custom={index}>
                    <Link
                      href={item.href}
                      className={`relative text-sm py-1 font-medium transition-colors ${
                        isActive 
                          ? 'text-[rgb(var(--foreground))]' 
                          : 'text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))]'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div 
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Controls */}
          <motion.div className="flex items-center space-x-4" variants={itemVariants}>
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                id="language-button"
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm rounded-md border border-[rgb(var(--border))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))] transition-colors"
                aria-label="Change language"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                whileTap={{ scale: 0.97 }}
              >
                <span className="mr-1">{flagEmojis[locale]}</span>
                <span>{locale.toUpperCase()}</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    id="language-dropdown" 
                    className="absolute right-0 mt-2 w-40 bg-white dark:bg-[rgb(var(--muted))] shadow-lg rounded-md z-10 border border-[rgb(var(--border))] overflow-hidden"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {locales.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          onLocaleChange(l.code);
                          setIsDropdownOpen(false);
                        }}
                        className={`flex items-center w-full text-left px-4 py-2.5 text-sm hover:bg-[rgb(var(--muted))] dark:hover:bg-[rgba(var(--foreground),0.1)] transition-colors ${
                          locale === l.code
                            ? 'bg-[rgb(var(--muted))] dark:bg-[rgba(var(--foreground),0.05)] font-medium text-[rgb(var(--accent))]'
                            : 'text-[rgb(var(--foreground))]'
                        }`}
                      >
                        <span className="mr-2">{flagEmojis[l.code]}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Theme Toggler */}
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))] transition-colors"
              aria-label="Toggle theme"
              whileTap={{ scale: 0.9, rotate: 15 }}
              whileHover={{ scale: 1.05 }}
            >
              {theme === 'dark' ? (
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </motion.svg>
              ) : (
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ scale: 0.8, rotate: 90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </motion.svg>
              )}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}