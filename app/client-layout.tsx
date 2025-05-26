'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

type Props = {
  children: React.ReactNode;
  locale: string;
};

export default function ClientLayout({ children, locale: initialLocale }: Props) {
  const [locale, setLocale] = useState(initialLocale);
  const router = useRouter();

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && savedLocale !== locale) {
      setLocale(savedLocale);
      document.cookie = `NEXT_LOCALE=${savedLocale};path=/;max-age=31536000`;
      router.refresh();
    }
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    router.refresh();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation locale={locale} onLocaleChange={handleLocaleChange} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}