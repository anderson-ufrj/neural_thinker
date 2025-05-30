import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts, getPostsByLanguage } from '@/lib/mdx';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') || 'pt';
  
  try {
    // Get posts in specified locale, fallback to all posts if none available
    const localePosts = await getPostsByLanguage(locale);
    const posts = localePosts.length > 0 ? localePosts : await getAllPosts();
    
    // Return only the necessary fields for the API
    const formattedPosts = posts.map(post => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      language: post.language,
      tags: post.tags,
      excerpt: post.excerpt,
      readingTime: post.readingTime,
    }));
    
    return NextResponse.json({
      success: true,
      posts: formattedPosts
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}