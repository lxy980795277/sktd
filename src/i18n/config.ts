/** 文案与类型仍覆盖三种语言；路由与切换仅开放子集时可单独维护。 */
type AllLocalesTuple = readonly ["en", "de", "zh"];

export type Locale = AllLocalesTuple[number];

// 当前仅开放 EN/DE，中文能力保留在代码中，后续可随时恢复。
export const locales = ["en", "de"] as const satisfies ReadonlyArray<Locale>;

/** 当前实际生成路由与语言切换的语言代码（Locale 仍含 zh 以保留文案表）。 */
export type RouteLocale = (typeof locales)[number];

export const defaultLocale: RouteLocale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  zh: "ZH",
};

export const isLocale = (value: string): value is RouteLocale => {
  return (locales as readonly string[]).includes(value);
};
