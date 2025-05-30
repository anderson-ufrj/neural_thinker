import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

// Importar fontes
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}