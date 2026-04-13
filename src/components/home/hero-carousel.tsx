"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { HeroSlide } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

type HeroCarouselProps = {
  locale: Locale;
  slides: HeroSlide[];
};

export function HeroCarousel({ locale, slides }: HeroCarouselProps): React.JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => {
        return (current + 1) % slides.length;
      });
    }, 6000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  const goToPrevious = (): void => {
    setActiveIndex((current) => {
      return current === 0 ? slides.length - 1 : current - 1;
    });
  };

  const goToNext = (): void => {
    setActiveIndex((current) => {
      return (current + 1) % slides.length;
    });
  };

  return (
    <section className="container-shell pt-8 sm:pt-10 lg:pt-12">
      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="glass-card rounded-[32px] border border-[color:var(--line)] p-6 shadow-[0_24px_80px_rgba(31,29,25,0.08)] sm:p-8 lg:p-10">
          <p className="eyebrow">{activeSlide.eyebrow}</p>
          <h1 className="section-title mt-5 max-w-4xl text-5xl leading-[0.92] font-semibold sm:text-6xl lg:text-[5.6rem]">
            {activeSlide.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
            {activeSlide.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}${activeSlide.primaryHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--accent-strong)]"
            >
              {activeSlide.primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/${locale}${activeSlide.secondaryHref}`}
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white/70 px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:bg-white"
            >
              {activeSlide.secondaryLabel}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
            <span className="rounded-full bg-[color:var(--surface)] px-4 py-2 font-medium text-[color:var(--foreground)]">
              {activeSlide.note}
            </span>
            <span>
              0{activeIndex + 1} / 0{slides.length}
            </span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {activeSlide.highlights.map((item) => {
              return (
                <div
                  key={item}
                  className="rounded-[24px] border border-[color:var(--line)] bg-white/72 px-4 py-4 text-sm leading-7 text-[color:var(--foreground)]"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-[color:var(--line)] bg-[#e8dccd] shadow-[0_24px_80px_rgba(31,29,25,0.08)]">
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5">
            <div className="rounded-full bg-black/35 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-md">
              SKTD Homepage Concept
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[color:var(--foreground)] shadow-sm"
                onClick={goToPrevious}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[color:var(--foreground)] shadow-sm"
                onClick={goToNext}
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative min-h-[420px] sm:min-h-[560px] lg:min-h-[760px]">
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
              <div className="glass-card rounded-[28px] border border-white/25 px-5 py-5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                <p className="text-xs tracking-[0.24em] text-white/70 uppercase">Slide preview</p>
                <p className="section-title mt-3 text-3xl leading-none font-semibold sm:text-4xl">
                  {activeSlide.note}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  {slides.map((slide, index) => {
                    return (
                      <button
                        key={slide.title}
                        type="button"
                        className={`h-2 rounded-full transition ${
                          index === activeIndex ? "w-14 bg-white" : "w-6 bg-white/40"
                        }`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
