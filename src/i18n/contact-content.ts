import type { Locale } from "@/i18n/config";
import type { ContactContent } from "@/i18n/types/contact";
import en from "@/i18n/locales/en/contact";
import de from "@/i18n/locales/de/contact";
import zh from "@/i18n/locales/zh/contact";
import es from "@/i18n/locales/es/contact";
import it from "@/i18n/locales/it/contact";

export type { ContactContent } from "@/i18n/types/contact";

const contactContent: Record<Locale, ContactContent> = { en, de, zh, es, it };

export const getContactContent = (locale: Locale): ContactContent => {
  return contactContent[locale];
};
