import type { Locale } from "@/i18n/config";
import { productCategoriesEn } from "@/i18n/locales/en/product-categories";
import { productCategoriesDe } from "@/i18n/locales/de/product-categories";
import { productCategoriesZh } from "@/i18n/locales/zh/product-categories";
import { productCategoriesEs } from "@/i18n/locales/es/product-categories";
import { productCategoriesIt } from "@/i18n/locales/it/product-categories";
import type { ProductCategoryTextContent } from "@/i18n/types/product-categories";

export type {
  ProductItemTextContent,
  ProductCategoryTextContent,
} from "@/i18n/types/product-categories";

const productCategoriesContent: Record<Locale, ProductCategoryTextContent[]> = {
  en: productCategoriesEn,
  de: productCategoriesDe,
  zh: productCategoriesZh,
  es: productCategoriesEs,
  it: productCategoriesIt,
};

export const getProductCategoriesText = (locale: Locale): ProductCategoryTextContent[] => {
  return productCategoriesContent[locale];
};
