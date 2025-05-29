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
      router.refresh();
    }
  }, [locale, router, mounted]);

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    router.refresh();
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