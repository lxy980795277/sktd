"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/home/language-switcher";
import type { NavigationItem } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

type SiteHeaderProps = {
  locale: Locale;
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
        <div className="container-shell flex items-center justify-between gap-4 py-4">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-(--accent) text-sm font-bold tracking-[0.28em] text-white">
              SKTD
            </span>
            <div>
              <p className="text-xs tracking-[0.32em] text-(--muted) uppercase">
                Corporate Homepage
              </p>
              <p className="section-title text-2xl leading-none font-semibold">SKTD</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className="text-sm font-medium text-(--muted) transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher locale={locale} />
            <Link
              href={`/${locale}${ctaHref}`}
              className="rounded-full bg-(--accent) px-5 py-3 text-sm font-semibold text-white transition hover:bg-(--accent-strong)"
            >
              {ctaLabel}
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--line) bg-white/80 text-foreground lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
          <div className="ml-auto flex h-full w-full max-w-sm flex-col bg-background px-6 py-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs tracking-[0.32em] text-(--muted) uppercase">
                  Navigation
                </p>
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
                    href={`/${locale}${item.href}`}
                    className="rounded-[24px] border border-(--line) bg-white/70 px-4 py-4 text-base font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href={`/${locale}${ctaHref}`}
              className="mt-auto inline-flex items-center justify-center rounded-full bg-(--accent) px-5 py-3 text-sm font-semibold text-white transition hover:bg-(--accent-strong)"
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
