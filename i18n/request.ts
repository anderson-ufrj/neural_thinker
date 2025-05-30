import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales, Locale} from './config';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale as Locale;

  if (!locale || !locales.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../lib/i18n/${locale}.json`)).default
  };
});