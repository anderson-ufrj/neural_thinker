import { getTranslations } from 'next-intl/server';
import { getLocale } from 'next-intl/server';
import Link from 'next/link';
import { getAllPosts, getPostsByLanguage } from '@/lib/mdx';

export default async function HomePage() {
  const t = await getTranslations('home');
  const tWriting = await getTranslations('writing');
  const locale = await getLocale();
  
  // Get posts in current locale, fallback to all posts if none available
  const localePosts = await getPostsByLanguage(locale);
  const posts = localePosts.length > 0 ? localePosts : await getAllPosts();
  const recentPosts = posts.slice(0, 5);

  return (
    <div className="container py-16">
      <header className="mb-16">
        <h1 className="text-3xl font-normal mb-4">Anderson Henrique</h1>
        <p className="text-gray-600 dark:text-gray-400">
          {t('subtitle')}
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-500">
          {t('description')}
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-xl mb-6">{tWriting('title')}</h2>
        {recentPosts.length > 0 ? (
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/writing/${post.slug}`} className="block">
                  <h3 className="text-lg group-hover:text-[rgb(var(--accent))] transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-500">
                    <time>
                      {new Date(post.date).toLocaleDateString(locale, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime} {tWriting('readingTime')}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-500">No posts available yet.</p>
        )}
        <Link href="/writing" className="inline-block mt-6 text-sm">
          {tWriting('viewAll')} →
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-xl mb-6">{t('about')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t('description')}
        </p>
        <div className="flex gap-6 text-sm">
          <Link href="/about">{t('moreAbout')} →</Link>
          <Link href="/contact">{t('contact')} →</Link>
        </div>
      </section>
    </div>
  );
}