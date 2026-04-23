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
    /* 竖长图容器：3:4 比例，符合电商商品图构图 */
    <div className="relative">
      <Carousel setApi={setCarouselApi} opts={{ loop: false }} className="w-full">
        <CarouselContent className="ml-0">
          {images.map((image, index) => {
            return (
              <CarouselItem key={`${image}-${index}`} className="pl-0">
                <div className="relative aspect-[9/10] overflow-hidden rounded-[20px] border border-(--line)">
                  <Image
                    src={image}
                    alt={`${productName} image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* 缩略图导航：浮于图片左下角内部 */}
      <div className="absolute bottom-4 left-4 z-30 flex gap-2">
        {images.map((image, index) => {
          return (
            <button
              key={`${image}-thumb-${index}`}
              type="button"
              onClick={() => handleThumbClick(index)}
              className={cn(
                "cursor-pointer overflow-hidden rounded-[8px] border-2 transition",
                index === activeIndex
                  ? "border-(--accent) opacity-100"
                  : "border-white/40 opacity-70 hover:opacity-100",
              )}
              aria-label={`View image ${index + 1}`}
            >
              <div className="relative h-12 w-9">
                <Image
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
