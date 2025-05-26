'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

export default function Navigation({ locale }: { locale: string }) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/writing', label: 'Writing' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="container py-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
                           (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive 
                    ? 'text-[rgb(var(--foreground))]' 
                    : 'text-gray-500 hover:text-[rgb(var(--foreground))]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-sm text-gray-500 hover:text-[rgb(var(--foreground))] transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}