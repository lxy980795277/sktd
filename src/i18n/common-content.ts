import type { Locale } from "@/i18n/config";
import type { CommonContent } from "@/i18n/types/common";
import { common as en } from "@/i18n/locales/en/common";
import { common as de } from "@/i18n/locales/de/common";
import { common as es } from "@/i18n/locales/es/common";
import { common as it } from "@/i18n/locales/it/common";
import { common as zh } from "@/i18n/locales/zh/common";

export type { CommonContent } from "@/i18n/types/common";

const commonContent: Record<Locale, CommonContent> = { en, de, es, it, zh };

export function getCommonContent(locale: Locale): CommonContent {
  return commonContent[locale];
}
