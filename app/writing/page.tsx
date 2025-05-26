import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { formatDate, getLocaleDisplayName } from '@/lib/utils';

export default async function WritingPage() {
  const t = await getTranslations('writing');
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">{t('title')}</h1>
      
      {posts.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400 text-center py-12">
          No posts yet. Check back soon!
        </p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0"
            >
              <Link
                href={`/writing/${post.slug}`}
                className="block group"
              >
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
              </Link>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <span>{t('publishedOn')} {formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.readingTime} {t('readingTime')}</span>
                <span>•</span>
                <span>{t('originalIn')} {getLocaleDisplayName(post.language)}</span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}