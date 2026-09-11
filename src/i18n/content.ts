import type { Locale } from "@/i18n/config";
import type { HomeContent } from "@/i18n/types/home";
import en from "@/i18n/locales/en/home";
import de from "@/i18n/locales/de/home";
import zh from "@/i18n/locales/zh/home";
import es from "@/i18n/locales/es/home";
import it from "@/i18n/locales/it/home";

export type {
  NavigationItem,
  HeroSlide,
  FeatureItem,
  GridItem,
  TestimonialItem,
  MilestoneItem,
  HomeContent,
} from "@/i18n/types/home";

const content: Record<Locale, HomeContent> = { en, de, zh, es, it };

export const getHomeContent = (locale: Locale): HomeContent => {
  return content[locale];
};
