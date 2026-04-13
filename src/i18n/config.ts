export const locales = ["en", "de", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  zh: "中文",
};

export const isLocale = (value: string): value is Locale => {
  return locales.includes(value as Locale);
};
