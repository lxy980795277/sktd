"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { HomeContent } from "@/i18n/content";
import { cn } from "@/lib/utils";

type SectorsSectionProps = {
  content: HomeContent["sectors"];
};

const SECTOR_IMAGES = [
  "/images/products/goods/1.jpg",
  "/images/products/goods/2.jpg",
  "/images/products/goods/3.jpg",
  "/images/products/goods/4.jpg",
  "/images/products/goods/5.jpg",
  "/images/products/goods/6.jpg",
  "/images/products/goods/7.jpg",
  "/images/products/goods/8.jpg",
] as const;

// 行业模块：展示业务覆盖范围与行业理解广度。
export function SectorsSection({ content }: SectorsSectionProps): React.JSX.Element {
  const cardGridRef = useRef<HTMLDivElement | null>(null);
  const [isCardGridVisible, setIsCardGridVisible] = useState(false);

  useEffect(() => {
    const element = cardGridRef.current;

    if (!element || isCardGridVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCardGridVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isCardGridVisible]);

  return (
    <section className="container-shell">
      <div className="rounded-[36px] border border-(--line) bg-(--surface) px-6 py-8 shadow-[0_24px_80px_rgba(31,29,25,0.05)] sm:px-8 sm:py-10 lg:px-10">
        <p className="eyebrow">{content.eyebrow}</p>
        <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="section-title text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-[3.6rem]">
              {content.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-(--muted) sm:text-lg">
              {content.description}
            </p>
          </div>
        </div>

        <div ref={cardGridRef} className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {content.items.slice(0, 8).map((item, index) => {
            const imageUrl = SECTOR_IMAGES[index];

            return (
              <article
                key={item.title}
                className={cn(
                  "group min-h-[420px] rounded-[28px] border border-white/70 bg-white/78 p-5 shadow-[0_14px_32px_rgba(31,29,25,0.05)] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_28px_64px_rgba(31,29,25,0.22)] hover:duration-300",
                  isCardGridVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-10 scale-[0.975] opacity-0",
                )}
                style={{ transitionDelay: `${index * 220}ms` }}
              >
                <div className="rounded-2xl bg-white/85 p-3">
                  <div className="relative h-48 w-full overflow-hidden rounded-xl">
                    <Image
                      src={imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-900 ease-out group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 22vw"
                    />
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-(--muted)">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
