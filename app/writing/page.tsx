import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';

export default async function WritingPage() {
  const posts = await getAllPosts();
  
  return (
    <div className="container py-16">
      <h1 className="text-3xl mb-16">Writing</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/writing/${post.slug}`} className="block">
              <time className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <h2 className="text-xl mt-2 group-hover:text-[rgb(var(--accent))] transition-colors">
                {post.title}
              </h2>
              {post.description && (
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {post.description}
                </p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}