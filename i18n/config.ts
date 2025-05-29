export const locales = ['pt', 'en', 'es'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'pt';

// Map language codes to full names (for display)
export const localeNames: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
};