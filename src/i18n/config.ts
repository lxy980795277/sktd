/** 所有维护的文案语言；中文保留内容，但暂不开放路由。 */
export const contentLocales = ["en", "de", "es", "it", "zh"] as const;

export type Locale = (typeof contentLocales)[number];

export const locales = ["en", "de", "es", "it"] as const satisfies ReadonlyArray<Locale>;

/** 当前实际生成路由与语言切换的语言代码（Locale 仍含 zh 以保留文案表）。 */
export type RouteLocale = (typeof locales)[number];

export const defaultLocale: RouteLocale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  es: "ES",
  it: "IT",
  zh: "ZH",
};

export const isLocale = (value: string): value is RouteLocale => {
  return (locales as readonly string[]).includes(value);
};
