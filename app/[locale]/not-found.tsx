import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="container py-16 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <p className="text-xl mb-8">{t('message')}</p>
      <Link href="/" className="text-[rgb(var(--accent))] hover:underline">
        {t('backHome')}
      </Link>
    </div>
  );
}