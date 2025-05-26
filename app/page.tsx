import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default async function HomePage() {
  const t = await getTranslations('home');
  const tNav = await getTranslations('navigation');

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('title')}
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-700 dark:text-gray-300">
          {t('subtitle')}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {t('description')}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/about"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {tNav('about')}
          </Link>
          <Link
            href="/writing"
            className="px-8 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            {tNav('writing')}
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            {tNav('projects')}
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            {tNav('contact')}
          </Link>
        </div>
      </div>
    </div>
  );
}