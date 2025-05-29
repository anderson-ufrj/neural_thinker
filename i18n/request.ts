import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['pt', 'en', 'es'];

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../lib/i18n/${locale}.json`)).default
  };
});