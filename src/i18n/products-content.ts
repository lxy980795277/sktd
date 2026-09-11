import type { Locale } from "@/i18n/config";
import type { ProductStoryItem } from "@/i18n/types/product-stories";
import en from "@/i18n/locales/en/product-stories";
import de from "@/i18n/locales/de/product-stories";
import zh from "@/i18n/locales/zh/product-stories";
import es from "@/i18n/locales/es/product-stories";
import it from "@/i18n/locales/it/product-stories";

export type { ProductStoryItem } from "@/i18n/types/product-stories";

const productStoriesContent: Record<Locale, ProductStoryItem[]> = { en, de, zh, es, it };

export const getProductStories = (locale: Locale): ProductStoryItem[] => {
  return productStoriesContent[locale];
};
