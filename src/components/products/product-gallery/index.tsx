"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps): React.JSX.Element {
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

  const handleThumbClick = (index: number): void => {
    if (!carouselApi) {
      return;
    }

    carouselApi.scrollTo(index);
  };

  return (
    <div className="relative h-full">
      <Carousel setApi={setCarouselApi} opts={{ loop: false }} className="h-full w-full">
        <CarouselContent className="ml-0 h-full">
          {images.map((image, index) => {
            return (
              <CarouselItem key={`${image}-${index}`} className="h-full pl-0">
                <div className="relative h-full min-h-[320px] overflow-hidden rounded-[24px] border border-(--line) sm:min-h-[420px]">
                  <Image
                    src={image}
                    alt={`${productName} image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 56vw"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-3 left-3 z-30 grid grid-cols-3 gap-1.5 rounded-[10px] border border-white/24 bg-black/35 p-1.5 backdrop-blur-sm">
        {images.map((image, index) => {
          return (
            <button
              key={`${image}-thumb-${index}`}
              type="button"
              onClick={() => handleThumbClick(index)}
              className={cn(
                "cursor-pointer overflow-hidden rounded-[8px] border transition",
                index === activeIndex
                  ? "border-(--accent)"
                  : "border-(--line) opacity-75 hover:opacity-100",
              )}
              aria-label={`View image ${index + 1}`}
            >
              <div className="relative h-8 w-11">
                <Image
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 18vw"
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
