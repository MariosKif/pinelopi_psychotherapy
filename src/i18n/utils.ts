/**
 * ═══════════════════════════════════════════════════
 * i18n UTILITIES
 * ═══════════════════════════════════════════════════
 */

export type Lang = 'el' | 'en';
export const defaultLang: Lang = 'el';
export const languages = { el: 'Ελληνικά', en: 'English' } as const;

/** Prefix a path with the language (skips prefix for default Greek) */
export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean}`;
}

/** Get the alternate language */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'el' ? 'en' : 'el';
}

/** Strip language prefix from a path to get the bare route */
export function stripLangPrefix(pathname: string): string {
  return pathname.replace(/^\/(el|en)/, '') || '/';
}
