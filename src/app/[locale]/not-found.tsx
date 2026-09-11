import { LocalizedNotFound } from "@/components/common/localized-not-found";
import { getCommonContent } from "@/i18n/common-content";
import { locales, type RouteLocale } from "@/i18n/config";
import type { CommonContent } from "@/i18n/types/common";

export default function NotFound(): React.JSX.Element {
  const messages = Object.fromEntries(
    locales.map((locale) => [locale, getCommonContent(locale).notFound]),
  ) as Record<RouteLocale, CommonContent["notFound"]>;

  return <LocalizedNotFound messages={messages} />;
}
