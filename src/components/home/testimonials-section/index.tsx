"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { HomeContent } from "@/i18n/content";
import { cn } from "@/lib/utils";

type TestimonialsSectionProps = {
  content: HomeContent["testimonials"];
};

const TESTIMONIAL_BACKGROUND_IMAGES = [
  "/images/home/testimonials-section/1.webp",
  "/images/home/testimonials-section/2.webp",
  "/images/home/testimonials-section/3.webp",
] as const;

// 口碑模块：展示合作反馈，增强页面信任感。
export function TestimonialsSection({ content }: TestimonialsSectionProps): React.JSX.Element {
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
        threshold: 0.22,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isCardGridVisible]);

  return (
    <section className="container-shell">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0 p-2 sm:p-4">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title mt-5 text-4xl leading-[0.95] font-semibold sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-(--muted) sm:text-lg">
            {content.description}
          </p>
        </div>
        <div ref={cardGridRef} className="grid min-w-0 gap-4 xl:grid-cols-3">
          {content.items.slice(0, 3).map((item, index) => {
            const backgroundImage =
              TESTIMONIAL_BACKGROUND_IMAGES[index % TESTIMONIAL_BACKGROUND_IMAGES.length];

            return (
              <article
                key={`${item.author}-${index}`}
                className={cn(
                  "group relative min-h-[320px] overflow-hidden rounded-[28px] border border-(--line) p-6 text-white shadow-[0_18px_48px_rgba(31,29,25,0.08)] transition-all duration-1100 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isCardGridVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-10 scale-[0.98] opacity-0",
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Image
                  src={backgroundImage}
                  alt={item.author}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1280px) 100vw, 26vw"
                />
                <div className="absolute inset-0 bg-black/28 transition-colors duration-500 group-hover:bg-black/62" />
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/18 to-transparent" />

                <div className="relative z-10 flex h-full flex-col justify-end">
                  <p className="text-xs tracking-[0.2em] text-white/65 uppercase">
                    Partner perspective
                  </p>
                  <p className="mt-2 text-2xl font-semibold">{item.author}</p>

                  <div className="mt-3 max-h-0 translate-y-2 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-56 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="border-t border-white/25 pt-4 text-sm leading-7 text-white/85">
                      “{item.quote}”
                    </p>
                    <p className="mt-3 text-sm text-white/72">{item.company}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
