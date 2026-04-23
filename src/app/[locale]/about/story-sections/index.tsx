"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { FC } from "react";

type StorySection = {
  title: string;
  description: string;
};

type StorySectionsProps = {
  sections: StorySection[];
  images: readonly string[];
};

export const StorySections: FC<StorySectionsProps> = ({ sections, images }) => {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-story-row--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      // rootMargin 让触发点稍微靠下，滚动时更自然
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    );

    rowRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mt-12 space-y-20 lg:mt-16 lg:space-y-32">
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        const imageSrc = images[index] ?? images[0];

        const textBlock = (extraClass: string) => (
          <div className={`about-story-text ${extraClass}`}>
            {/* 标题：第一层入场 */}
            <h2 className="about-story-title section-title text-foreground text-2xl leading-snug font-semibold sm:text-3xl">
              {section.title}
            </h2>
            {/* 描述：第二层入场，稍有延迟 */}
            <p className="about-story-desc mt-5 text-base leading-8 text-(--muted) sm:text-lg">
              {section.description}
            </p>
          </div>
        );

        const imageBlock = (extraClass: string) => (
          <div
            className={`about-story-img ${extraClass} relative aspect-4/3 overflow-hidden rounded-[18px]`}
          >
            <Image
              src={imageSrc}
              alt={section.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        );

        return (
          <div
            key={section.title}
            ref={(el) => {
              rowRefs.current[index] = el;
            }}
            className="about-story-row grid items-center gap-8 lg:gap-0"
            style={{ gridTemplateColumns: isEven ? "1fr 1.25fr" : "1.25fr 1fr" }}
          >
            {isEven ? (
              <>
                {/* 偶数：文字在左，图片在右顶格 */}
                {textBlock("about-story-text--from-left lg:py-6 lg:pr-16")}
                {imageBlock(
                  "about-story-img-bleed about-story-img-bleed--right about-story-img--from-right",
                )}
              </>
            ) : (
              <>
                {/* 奇数：图片在左顶格，文字在右 */}
                {imageBlock(
                  "about-story-img-bleed about-story-img-bleed--left about-story-img--from-left lg:order-first",
                )}
                {textBlock("about-story-text--from-right lg:py-6 lg:pl-16")}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
