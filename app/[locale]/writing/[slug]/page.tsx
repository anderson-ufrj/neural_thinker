import { getTranslations, getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { formatDate, getLocaleDisplayName } from '@/lib/utils';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
    locale: post.language,
  }));
}

export default async function PostPage({ 
  params 
}: { 
  params: { 
    slug: string;
    locale: string;
  } 
}) {
  const t = await getTranslations('writing');
  const currentLocale = await getLocale();
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span>{t('publishedOn')} {formatDate(post.date)}</span>
          <span>•</span>
          <span>{post.readingTime} {t('readingTime')}</span>
          <span>•</span>
          <span>{t('originalIn')} {getLocaleDisplayName(post.language)}</span>
        </div>
        
        {post.translations && Object.keys(post.translations).length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {t('translations')}:
            </p>
            <div className="flex gap-2">
              {Object.entries(post.translations).map(([lang, slug]) => {
                if (slug) {
                  return (
                    <Link
                      key={lang}
                      href={`/${lang}/writing/${slug.replace(/\.(pt|en|es)$/, '')}`}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {getLocaleDisplayName(lang)}
                    </Link>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
        
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <div 
        className="prose prose-gray dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <Link
          href={`/${currentLocale}/writing`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← {t('viewAll')}
        </Link>
      </footer>
    </article>
  );
}