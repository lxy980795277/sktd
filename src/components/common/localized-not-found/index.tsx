"use client";

import { usePathname } from "next/navigation";
import { NotFoundView } from "@/components/common/not-found-view";
import { defaultLocale, isLocale, type RouteLocale } from "@/i18n/config";
import type { CommonContent } from "@/i18n/types/common";

type LocalizedNotFoundProps = {
  messages: Record<RouteLocale, CommonContent["notFound"]>;
};

export function LocalizedNotFound({ messages }: LocalizedNotFoundProps): React.JSX.Element {
  // The 404 boundary has no params and may render outside its failed layout.
  // Read the route directly, without depending on a layout-owned provider.
  const pathname = usePathname();
  const candidate = pathname.split("/")[1];
  const locale = isLocale(candidate) ? candidate : defaultLocale;

  return <NotFoundView content={messages[locale]} homeHref={`/${locale}/home`} />;
}
