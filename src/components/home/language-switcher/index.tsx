"use client";

import { Globe2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { localeLabels, locales, type RouteLocale } from "@/i18n/config";

type LanguageSwitcherProps = {
  locale: RouteLocale;
  className?: string;
};

function getLocalizedPath(pathname: string, nextLocale: RouteLocale): string {
  const segments = pathname.split("/");

  if (segments[0] !== "") {
    segments.unshift("");
  }

  if (segments.length > 1 && locales.includes(segments[1] as RouteLocale)) {
    segments[1] = nextLocale;
  } else {
    segments.splice(1, 0, nextLocale);
  }

  return segments.join("/") || `/${nextLocale}`;
}

export function LanguageSwitcher({
  locale,
  className = "",
}: LanguageSwitcherProps): React.JSX.Element {
  const pathname = usePathname();
  const router = useRouter();

  const handleValueChange = (nextLocale: string): void => {
    if (nextLocale === locale) {
      return;
    }

    router.push(getLocalizedPath(pathname ?? `/${locale}`, nextLocale as RouteLocale));
  };

  return (
    <Select value={locale} onValueChange={handleValueChange}>
      <SelectTrigger
        aria-label="Select language"
        className={cn("h-11 min-w-[124px] rounded-full px-4 font-semibold", className)}
      >
        <span className="flex items-center gap-2">
          <Globe2 className="h-4 w-4 shrink-0 text-(--muted)" />
          <SelectValue />
        </span>
      </SelectTrigger>
      <SelectContent align="end">
        {locales.map((item) => {
          return (
            <SelectItem key={item} value={item}>
              {localeLabels[item]}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
