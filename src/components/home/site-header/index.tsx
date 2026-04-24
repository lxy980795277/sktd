"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/home/language-switcher";
import type { NavigationItem } from "@/i18n/content";
import type { RouteLocale } from "@/i18n/config";
import { getLocaleHref } from "@/lib/locale-href";

type SiteHeaderProps = {
  locale: RouteLocale;
  navigation: NavigationItem[];
  ctaLabel: string;
  ctaHref: string;
};

export function SiteHeader({
  locale,
  navigation,
  ctaLabel,
  ctaHref,
}: SiteHeaderProps): React.JSX.Element {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-(--line) bg-[rgba(246,241,232,0.82)] backdrop-blur-xl">
        <div className="container-shell flex items-center justify-between gap-5 py-5 lg:py-6">
          <Link href={`/${locale}/home`} className="flex items-center">
            <div>
              <p className="text-xs tracking-[0.32em] text-(--muted) uppercase">
                Corporate Homepage
              </p>
              <p className="section-title text-3xl leading-none font-semibold">SKTD</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={getLocaleHref(locale, item.href)}
                  className="hover:text-foreground text-sm font-semibold tracking-[0.06em] text-(--muted) uppercase transition"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher locale={locale} className="min-w-[118px]" />
            <Link
              href={getLocaleHref(locale, ctaHref)}
              className="rounded-full bg-(--accent) px-6 py-3.5 text-sm font-semibold tracking-[0.04em] text-white! uppercase transition hover:bg-(--accent-strong)"
            >
              {ctaLabel}
            </Link>
          </div>

          <button
            type="button"
            className="text-foreground inline-flex h-12 w-12 items-center justify-center rounded-full border border-(--line) bg-white/80 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
          <div className="bg-background ml-auto flex h-full w-full max-w-sm flex-col px-6 py-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs tracking-[0.32em] text-(--muted) uppercase">Navigation</p>
                <p className="section-title text-3xl font-semibold">SKTD</p>
              </div>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--line) bg-white/80"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8">
              <LanguageSwitcher locale={locale} className="w-full justify-center" />
            </div>

            <nav className="mt-8 flex flex-col gap-3">
              {navigation.map((item) => {
                return (
                  <Link
                    key={item.href}
                    href={getLocaleHref(locale, item.href)}
                    className="rounded-[24px] border border-(--line) bg-white/70 px-4 py-4 text-base font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href={getLocaleHref(locale, ctaHref)}
              className="mt-auto inline-flex items-center justify-center rounded-full bg-(--accent) px-5 py-3 text-sm font-semibold text-white! transition hover:bg-(--accent-strong)"
              onClick={() => setOpen(false)}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
