import type { Locale } from "@/i18n/config";
import type { AboutPageContent } from "@/i18n/types/about";
import en from "@/i18n/locales/en/about";
import de from "@/i18n/locales/de/about";
import zh from "@/i18n/locales/zh/about";
import es from "@/i18n/locales/es/about";
import it from "@/i18n/locales/it/about";

export type { AboutPageContent } from "@/i18n/types/about";

const aboutContent: Record<Locale, AboutPageContent> = { en, de, zh, es, it };

export const getAboutPageContent = (locale: Locale): AboutPageContent => {
  return aboutContent[locale];
};
