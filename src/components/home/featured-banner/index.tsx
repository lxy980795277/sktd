"use client";

import type { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type FeaturedBannerContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  images: string[];
};

type FeaturedBannerProps = {
  locale: Locale;
  content: FeaturedBannerContent;
};

export function FeaturedBanner({ locale, content }: FeaturedBannerProps): React.JSX.Element {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = (api: EmblaCarouselType): void => {
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

  const handleDotClick = (index: number): void => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  const getDotClassName = (index: number): string => {
    if (index === activeIndex) {
      return "w-8 bg-white";
    }

    return "w-2 bg-white/45";
  };

  return (
    <section className="container-shell pt-8 sm:pt-10 lg:pt-12">
      <div className="relative overflow-hidden rounded-[34px] border border-(--line) shadow-[0_26px_88px_rgba(31,29,25,0.12)]">
        <div className="relative min-h-[460px] sm:min-h-[560px] lg:min-h-[620px]">
          <Carousel setApi={setCarouselApi} opts={{ loop: true }} className="h-full">
            <CarouselContent className="ml-0 h-full">
              {content.images.map((image, index) => {
                return (
                  <CarouselItem key={`${image}-${index}`} className="pl-0">
                    <div className="relative min-h-[460px] sm:min-h-[560px] lg:min-h-[620px]">
                      <Image
                        src={image}
                        alt={`${content.title} ${index + 1}`}
                        fill
                        priority={index === 0}
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/35 to-black/10" />

          <div className="absolute inset-x-0 top-0 p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-md">
                {content.eyebrow}
              </p>
              <h1 className="section-title mt-5 text-4xl leading-[0.92] font-semibold text-white sm:text-5xl lg:text-6xl">
                {content.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                {content.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/${locale}${content.primaryHref}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-(--accent) transition hover:bg-[#f7e9df]"
                >
                  {content.primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={`/${locale}${content.secondaryHref}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/12 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/18"
                >
                  {content.secondaryLabel}
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute right-6 bottom-6 z-20 sm:right-8 sm:bottom-8 lg:right-10 lg:bottom-10">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-2 backdrop-blur-md">
              {content.images.map((image, index) => {
                return (
                  <button
                    key={`${image}-dot-${index}`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => handleDotClick(index)}
                    className={cn(
                      "h-2 cursor-pointer rounded-full transition-all duration-300",
                      getDotClassName(index),
                    )}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
