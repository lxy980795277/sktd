import type { Locale } from "@/i18n/config";
import type { ProductPagesContent } from "@/i18n/types/product-pages";
import en from "@/i18n/locales/en/product-pages";
import de from "@/i18n/locales/de/product-pages";
import es from "@/i18n/locales/es/product-pages";
import it from "@/i18n/locales/it/product-pages";
import zh from "@/i18n/locales/zh/product-pages";

export type { ProductPagesContent } from "@/i18n/types/product-pages";

const content: Record<Locale, ProductPagesContent> = { en, de, es, it, zh };

export const getProductPagesContent = (locale: Locale): ProductPagesContent => content[locale];
