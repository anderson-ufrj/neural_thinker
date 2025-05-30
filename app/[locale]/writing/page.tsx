import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';

export default async function WritingPage() {
  const posts = await getAllPosts();
  const t = await getTranslations('writing');
  const locale = await getLocale();
  
  return (
    <main className="container py-16">
      <header className="mb-16 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
          {t('title')}
        </h1>
        <p className="text-xl text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
          {t('description') || "Thoughts on technology, philosophy, and the digital world."}
        </p>
      </header>
      
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="group bg-[rgb(var(--muted))] dark:bg-[rgba(var(--foreground),0.03)] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/${locale}/writing/${post.slug}`} className="block p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags && post.tags.slice(0, 2).map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-[rgba(var(--accent),0.1)] text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                {post.excerpt && (
                  <p className="text-[rgb(var(--muted-foreground))] mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
                
                <div className="flex items-center justify-between">
                  <time className="text-sm text-[rgb(var(--muted-foreground))]">
                    {new Date(post.date).toLocaleDateString(locale, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  
                  {post.readingTime && (
                    <span className="text-sm text-[rgb(var(--muted-foreground))]">
                      {post.readingTime} {t('readingTime')}
                    </span>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-[rgb(var(--muted-foreground))] text-lg mb-4">
            {t('noPostsYet')}
          </p>
          <Link 
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center font-medium px-4 py-2 bg-accent text-white hover:bg-[rgb(var(--accent-dark))] rounded-lg transition-colors"
          >
            {t('contactMe') || "Contact Me"}
          </Link>
        </div>
      )}
    </main>
  );
}