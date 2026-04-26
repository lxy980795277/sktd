"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/home/language-switcher";
import type { NavigationItem } from "@/i18n/content";
import type { RouteLocale } from "@/i18n/config";
import { getLocaleHref } from "@/lib/locale-href";

type SiteHeaderProps = {
  locale: RouteLocale;
  navigation: NavigationItem[];
};

export function SiteHeader({
  locale,
  navigation,
}: SiteHeaderProps): React.JSX.Element {
  const [open, setOpen] = useState(false);
  // 移动端展开的下拉项 href
  const [expandedHref, setExpandedHref] = useState<string | null>(null);

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

          {/* 桌面端导航 */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => {
              if (item.children && item.children.length > 0) {
                // 有子菜单：渲染 hover 下拉，tab 本身不可点击
                return (
                  <div key={item.href} className="group relative">
                    <span className="flex cursor-pointer select-none items-center gap-1 text-sm font-semibold tracking-[0.06em] text-(--muted) uppercase transition group-hover:text-foreground">
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </span>

                    {/* 下拉面板：CSS group-hover 控制显隐 */}
                    <div className="pointer-events-none absolute top-full left-1/2 z-50 -translate-x-1/2 pt-4 opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
                      <div className="min-w-[220px] overflow-hidden rounded-2xl border border-(--line) bg-white/95 py-2 shadow-xl backdrop-blur-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={getLocaleHref(locale, child.href)}
                            className="block px-5 py-2.5 text-sm font-medium text-(--muted) transition hover:bg-(--surface) hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // 普通导航项
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

          <div className="hidden items-center lg:flex">
            <LanguageSwitcher locale={locale} className="min-w-[118px]" />
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

      {/* 移动端抽屉 */}
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
                if (item.children && item.children.length > 0) {
                  const isExpanded = expandedHref === item.href;
                  return (
                    <div key={item.href}>
                      {/* 展开/收起触发器 */}
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-[24px] border border-(--line) bg-white/70 px-4 py-4 text-base font-medium"
                        onClick={() => setExpandedHref(isExpanded ? null : item.href)}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 text-(--muted) transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      {/* 子菜单列表 */}
                      {isExpanded && (
                        <div className="mt-1.5 flex flex-col gap-1 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={getLocaleHref(locale, child.href)}
                              className="rounded-[18px] border border-(--line) bg-white/50 px-4 py-3 text-sm font-medium text-(--muted)"
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

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
          </div>
        </div>
      )}
    </>
  );
}
