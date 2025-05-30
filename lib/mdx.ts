import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type Post = {
  slug: string;
  title: string;
  date: string;
  language: string;
  tags: string[];
  excerpt: string;
  content: string;
  readingTime: string;
  translations?: {
    [key: string]: string | null;
  };
};

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // Try to find the file with the given slug, considering different formats
    const possibleFiles = [
      `${slug}.pt.mdx`,
      `${slug}.en.mdx`,
      `${slug}.es.mdx`
    ];
    
    let filePath = '';
    for (const file of possibleFiles) {
      const fullPath = path.join(postsDirectory, file);
      if (fs.existsSync(fullPath)) {
        filePath = fullPath;
        break;
      }
    }
    
    if (!filePath) {
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    
    const contentHtml = processedContent.toString();
    const stats = readingTime(content);

    // Use the slug as is
    
    return {
      slug,
      title: data.title,
      date: data.date,
      language: data.language,
      tags: data.tags || [],
      excerpt: data.excerpt,
      content: contentHtml,
      readingTime: Math.ceil(stats.minutes).toString(),
      translations: data.translations || {},
    };
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const uniqueSlugs = new Set<string>();
  
  // Extract unique slugs from filenames, removing language suffixes
  fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .forEach(fileName => {
      const slug = fileName.replace(/\.(pt|en|es)\.mdx$/, '');
      uniqueSlugs.add(slug);
    });
  
  const allPosts = await Promise.all(
    Array.from(uniqueSlugs).map(async (slug) => {
      const post = await getPostBySlug(slug);
      return post;
    })
  );

  return allPosts
    .filter((post): post is Post => post !== null)
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
}

export async function getPostsByLanguage(language: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.language === language);
}