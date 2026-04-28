"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { imgV } from "@/utils/image-version";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { HeroSlide } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type HeroCarouselProps = {
  locale: Locale;
  slides: HeroSlide[];
};

export function HeroCarousel({ locale: _locale, slides }: HeroCarouselProps): React.JSX.Element {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = (api: NonNullable<CarouselApi>): void => {
      setActiveIndex(api.selectedScrollSnap());
    };

    onSelect(carouselApi);
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const intervalId = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [carouselApi]);

  const activeSlide = slides[activeIndex];

  const handleDotClick = (index: number): void => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  return (
    <section className="container-shell pt-8 sm:pt-10 lg:pt-12">
      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="glass-card flex h-[420px] flex-col rounded-[32px] border border-(--line) p-6 shadow-[0_24px_80px_rgba(31,29,25,0.08)] sm:h-[560px] sm:p-8 lg:h-[760px] lg:p-10">
          <p className="eyebrow">{activeSlide.eyebrow}</p>
          <h1 className="section-title mt-5 max-w-4xl text-5xl leading-[0.92] font-semibold sm:text-6xl lg:text-[5.6rem]">
            {activeSlide.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-(--muted) sm:text-lg">
            {activeSlide.description}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-3 text-sm text-(--muted)">
            <span>
              0{activeIndex + 1} / 0{slides.length}
            </span>
          </div>
        </div>

        <div className="relative h-full overflow-hidden rounded-[32px] border border-(--line) bg-[#e8dccd] shadow-[0_24px_80px_rgba(31,29,25,0.08)]">

          <div className="relative h-full min-h-[420px] sm:min-h-[560px] lg:min-h-[760px]">
            <Carousel
              setApi={setCarouselApi}
              opts={{ loop: true }}
              className="h-full min-h-[420px] sm:min-h-[560px] lg:min-h-[760px]"
            >
              <CarouselContent className="ml-0 h-full">
                {slides.map((slide, index) => {
                  return (
                    <CarouselItem key={`${slide.title}-${index}`} className="pl-0">
                      <div className="relative h-full min-h-[420px] sm:min-h-[560px] lg:min-h-[760px]">
                        <Image
                          src={imgV(slide.image)}
                          alt={slide.title}
                          fill
                          priority={index === 0}
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 45vw"
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
            <div className="absolute right-5 bottom-5 z-10 sm:right-6 sm:bottom-6">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-2 backdrop-blur-md">
                {slides.map((slide, index) => {
                  const dotClassName = index === activeIndex ? "w-8 bg-white" : "w-2 bg-white/45";

                  return (
                    <button
                      key={slide.title}
                      type="button"
                      className={cn(
                        "h-2 cursor-pointer rounded-full transition-all duration-300",
                        dotClassName,
                      )}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
