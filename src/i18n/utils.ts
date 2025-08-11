import { ui, defaultLang, type Language } from './ui';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLanguageAlternate(currentLang: Language): Language {
  return currentLang === 'pt' ? 'en' : 'pt';
}

export function getLocalizedUrl(url: URL, lang: Language): string {
  const path = url.pathname;
  const currentLang = getLangFromUrl(url);
  
  if (currentLang === lang) return path;
  
  // Replace language in path
  if (path === '/' || path === '/pt' || path === '/en') {
    return lang === defaultLang ? '/' : `/${lang}`;
  }
  
  const pathWithoutLang = path.replace(/^\/(pt|en)/, '');
  return lang === defaultLang ? pathWithoutLang : `/${lang}${pathWithoutLang}`;
}