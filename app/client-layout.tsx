'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

type Props = {
  children: React.ReactNode;
  locale: string;
};

export default function ClientLayout({ children, locale: initialLocale }: Props) {
  const [locale, setLocale] = useState(initialLocale);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely access localStorage and show UI that depends on it
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && savedLocale !== locale) {
      setLocale(savedLocale);
      document.cookie = `NEXT_LOCALE=${savedLocale};path=/;max-age=31536000`;
      
      // Get current path and redirect to the same path with new locale
      const currentPath = window.location.pathname;
      const pathWithoutLocale = currentPath.replace(/^\/(pt|en|es)/, '');
      const newPath = savedLocale === 'pt' ? pathWithoutLocale : `/${savedLocale}${pathWithoutLocale}`;
      
      window.location.href = newPath || '/';
    }
  }, [locale, router, mounted]);

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    
    // Get current path and redirect to the same path with new locale
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(pt|en|es)/, '');
    const newPath = newLocale === 'pt' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`;
    
    window.location.href = newPath || '/';
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen">
        <Navigation locale={locale} onLocaleChange={handleLocaleChange} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}