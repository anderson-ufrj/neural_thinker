import { getTranslations, getLocale } from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('about');
  const locale = await getLocale();
  
  // Get arrays from translations
  const skillsList: string[] = t.raw('skillsList');
  const interestsList: string[] = t.raw('interestsList');
  const educationList: string[] = t.raw('educationList');
  
  return (
    <div className="container py-16 max-w-xl">
      <h1 className="text-3xl mb-8">{t('title')}</h1>
      
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-gray-600 dark:text-gray-400">
          {t('bio')}
        </p>
        
        <h2 className="text-xl mt-12 mb-4">{t('skills')}</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        
        <h2 className="text-xl mt-12 mb-4">{t('interests')}</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          {interestsList.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        
        <h2 className="text-xl mt-12 mb-4">{t('education')}</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          {educationList.map((education, index) => (
            <li key={index}>{education}</li>
          ))}
        </ul>
        
        <h2 className="text-xl mt-12 mb-4">Connect</h2>
        <p className="text-gray-600 dark:text-gray-400">
          <a href={`/${locale}/contact`}>Email</a> | {' '}
          <a href="https://linkedin.com/in/anderson-h-silva95" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a> | {' '}
          <a href="https://github.com/anderson-h-silva" target="_blank" rel="noopener noreferrer">
            GitHub
          </a> | {' '}
          <a href="https://twitter.com/neural_thinker" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </p>
      </div>
    </div>
  );
}