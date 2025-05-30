import { getTranslations, getLocale } from 'next-intl/server';
import Link from 'next/link';
import { getAllPosts, getPostsByLanguage } from '@/lib/mdx';

export default async function HomePage() {
  const t = await getTranslations('home');
  const tWriting = await getTranslations('writing');
  const locale = await getLocale();
  
  // Get posts in current locale, fallback to all posts if none available
  const localePosts = await getPostsByLanguage(locale);
  const posts = localePosts.length > 0 ? localePosts : await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <main className="container py-16">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
          {t('heroTitle')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          {t('heroSubtitle')}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href={`/${locale}/writing`}
            className="inline-flex items-center justify-center font-medium px-6 py-3 bg-accent text-white hover:bg-[rgb(var(--accent-dark))] rounded-lg transition-colors"
          >
            {t('exploreButton')}
          </Link>
          <Link 
            href={`/${locale}/about`}
            className="inline-flex items-center justify-center font-medium px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white rounded-lg transition-colors"
          >
            {t('aboutButton')}
          </Link>
        </div>
      </header>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 text-center">{tWriting('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article key={post.slug} className="group bg-[rgb(var(--muted))] dark:bg-[rgba(var(--foreground),0.03)] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <Link href={`/${locale}/writing/${post.slug}`} className="block p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-[rgba(var(--accent),0.1)] text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-[rgb(var(--muted-foreground))] mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <time className="text-sm text-[rgb(var(--muted-foreground))]">
                    {new Date(post.date).toLocaleDateString(locale, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  
                  <span className="text-sm text-[rgb(var(--muted-foreground))]">
                    {post.readingTime} {tWriting('readingTime')}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href={`/${locale}/writing`}
            className="inline-flex items-center font-medium text-accent hover:text-[rgb(var(--accent-dark))] transition-colors"
          >
            {tWriting('viewAll')} →
          </Link>
        </div>
      </section>

      <section className="mb-24 bg-[rgb(var(--muted))] dark:bg-[rgba(var(--foreground),0.03)] rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('about')}</h2>
            <p className="text-[rgb(var(--foreground))] mb-6">
              {t('aboutContent')}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white dark:bg-[rgba(var(--foreground),0.05)] p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-accent">{t('expertise')}</h3>
                <ul className="space-y-1 text-sm text-[rgb(var(--muted-foreground))]">
                  <li>• OSINT</li>
                  <li>• Cybersecurity</li>
                  <li>• AI Ethics</li>
                  <li>• Digital Intelligence</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-[rgba(var(--foreground),0.05)] p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-accent">{t('education')}</h3>
                <ul className="space-y-1 text-sm text-[rgb(var(--muted-foreground))]">
                  <li>• Computer Science</li>
                  <li>• Philosophy</li>
                  <li>• Digital Forensics</li>
                  <li>• Neural Networks</li>
                </ul>
              </div>
            </div>
            <Link 
              href={`/${locale}/about`}
              className="inline-flex items-center justify-center font-medium px-4 py-2 bg-accent text-white hover:bg-[rgb(var(--accent-dark))] rounded-lg transition-colors"
            >
              {t('moreAbout')}
            </Link>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 h-80 md:h-96 rounded-xl flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Profile Image</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">{t('ctaTitle')}</h2>
        <p className="text-lg text-blue-50 dark:text-blue-100 mb-8 max-w-2xl mx-auto">
          {t('ctaText')}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center font-medium px-4 py-2 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            {t('contact')}
          </Link>
          <Link 
            href={`/${locale}/writing`}
            className="inline-flex items-center justify-center font-medium px-4 py-2 border border-white text-white hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
          >
            {t('exploreContent')}
          </Link>
        </div>
      </section>
    </main>
  );
}