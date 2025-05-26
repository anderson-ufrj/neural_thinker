import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100" {...props} />,
    h2: (props) => <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100" {...props} />,
    h3: (props) => <h3 className="text-2xl font-medium mt-4 mb-2 text-gray-900 dark:text-gray-100" {...props} />,
    p: (props) => <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />,
    a: ({ href, ...props }) => {
      if (href?.startsWith('/')) {
        return <Link href={href} className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />;
      }
      return <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />;
    },
    blockquote: (props) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-4 italic text-gray-600 dark:text-gray-400" {...props} />
    ),
    code: (props) => (
      <code className="bg-gray-100 dark:bg-gray-800 rounded px-1.5 py-0.5 text-sm font-mono text-gray-800 dark:text-gray-200" {...props} />
    ),
    pre: (props) => (
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto my-4 text-sm" {...props} />
    ),
    ul: (props) => <ul className="list-disc list-inside mb-4 space-y-1" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />,
    li: (props) => <li className="text-gray-700 dark:text-gray-300" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: ({ src, alt, width, height, ...props }: any) => {
      const imgWidth = width ? (typeof width === 'string' ? parseInt(width, 10) : Number(width)) : 800;
      const imgHeight = height ? (typeof height === 'string' ? parseInt(height, 10) : Number(height)) : 400;
      return (
        <Image 
          className="rounded-lg my-4" 
          src={src || ''} 
          alt={alt || ''} 
          width={imgWidth} 
          height={imgHeight} 
          {...props} 
        />
      );
    },
    hr: () => <hr className="my-8 border-gray-300 dark:border-gray-700" />,
    ...components,
  };
}