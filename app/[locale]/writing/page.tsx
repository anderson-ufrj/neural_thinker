import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';

export default async function WritingPage() {
  const posts = await getAllPosts();
  const t = await getTranslations('writing');
  const locale = await getLocale();
  
  return (
    <div className="container py-16">
      <h1 className="text-3xl mb-16">{t('title')}</h1>
      
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/${locale}/writing/${post.slug}`} className="block">
                <time className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString(locale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <h2 className="text-xl mt-2 group-hover:text-[rgb(var(--accent))] transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {post.excerpt}
                  </p>
                )}
              </Link>
            </article>
          ))
        ) : (
          <p className="text-gray-500">{t('noPostsYet')}</p>
        )}
      </div>
    </div>
  );
}