import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import '@/styles/globals.css';
import ClientLayout from './client-layout';

export const metadata: Metadata = {
  title: 'Anderson Henrique - Digital Intelligence Architect',
  description: 'Where logic meets poetry and machines become extensions of the human mind.',
  keywords: ['AI', 'Philosophy', 'Technology', 'OSINT', 'Cybersecurity'],
  authors: [{ name: 'Anderson Henrique' }],
  creator: 'Anderson Henrique',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://neural-thinker.vercel.app',
    siteName: 'Neural Thinker',
    title: 'Anderson Henrique - Digital Intelligence Architect',
    description: 'Where logic meets poetry and machines become extensions of the human mind.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@neural_thinker',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientLayout locale={locale}>
            {children}
          </ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}