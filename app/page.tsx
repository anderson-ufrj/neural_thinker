import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default async function HomePage() {
  const t = await getTranslations('home');
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 5);

  return (
    <div className="container py-16">
      <header className="mb-16">
        <h1 className="text-3xl font-normal mb-4">Anderson Henrique</h1>
        <p className="text-gray-600 dark:text-gray-400">
          {t('subtitle')}
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-xl mb-6">Recent Writing</h2>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/writing/${post.slug}`} className="block">
                <h3 className="text-lg group-hover:text-[rgb(var(--accent))] transition-colors">
                  {post.title}
                </h3>
                <time className="text-sm text-gray-500 dark:text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </Link>
            </article>
          ))}
        </div>
        <Link href="/writing" className="inline-block mt-6 text-sm">
          View all posts →
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-xl mb-6">About</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Software engineer and researcher interested in artificial intelligence, 
          distributed systems, and building tools that enhance human capabilities.
        </p>
        <div className="flex gap-6 text-sm">
          <Link href="/about">More about me →</Link>
          <Link href="/contact">Contact →</Link>
        </div>
      </section>
    </div>
  );
}