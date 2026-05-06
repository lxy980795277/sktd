"use client";

import { useEffect, useState } from "react";
import type { FC } from "react";
import Image from "next/image";

type ContactBackgroundCarouselProps = {
  images: string[];
};

/**
 * 无锚点静默背景轮播
 * 每张图通过 opacity 过渡交叉淡入淡出，5 秒自动切换
 */
export const ContactBackgroundCarousel: FC<ContactBackgroundCarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Contact background"
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
};
