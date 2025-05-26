import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string, locale: string = 'pt-BR'): string {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export const supportedLocales = ['pt', 'en', 'es'] as const;
export type Locale = typeof supportedLocales[number];

export function getLocaleDisplayName(locale: string): string {
  const names: Record<string, string> = {
    pt: 'Português',
    en: 'English',
    es: 'Español'
  };
  return names[locale] || locale;
}