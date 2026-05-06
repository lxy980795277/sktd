"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { FC } from "react";
import { imgV } from "@/utils/image-version";
import type { ProductStoryItem } from "@/i18n/products-content";
import "./product-story-section.css";

/** 每条故事对应的配图，由 imgV 处理缓存版本 */
const STORY_IMAGES = [
  imgV("/images-v3/products/product-story-section/1.jpg"),
  imgV("/images-v3/products/product-story-section/2.jpg"),
];

type ProductStorySectionProps = {
  /** 当前语言的故事内容，由服务端页面从 products-content.ts 读取后传入 */
  stories: ProductStoryItem[];
};

/** 商品详情页底部：公司产品理念双分区，图片顶格页面边缘 */
export const ProductStorySection: FC<ProductStorySectionProps> = ({ stories }) => {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pss-row--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    );

    rowRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="space-y-20 py-16 lg:space-y-28 lg:py-20" style={{ contain: "layout style" }}>
      {stories.map((story, index) => {
        const imageSrc = STORY_IMAGES[index] ?? STORY_IMAGES[0];

        return (
          <div
            key={story.title}
            ref={(el) => {
              rowRefs.current[index] = el;
            }}
            className="pss-row"
            style={{
              gridTemplateColumns: story.imageLeft ? "1.2fr 1fr" : "1fr 1.2fr",
            }}
          >
            {story.imageLeft ? (
              <>
                {/* 图片顶格左边 */}
                <div className="pss-img pss-img--bleed-left pss-img--from-left relative aspect-4/3 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
                {/* 文字在右 */}
                <div className="pss-text pss-text--from-right container-shell lg:pl-14 lg:pr-0">
                  <h2 className="pss-title section-title text-2xl font-semibold leading-snug sm:text-3xl">
                    {story.title}
                  </h2>
                  <p className="pss-desc mt-5 text-base leading-8 text-(--muted) sm:text-lg">
                    {story.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* 文字在左 */}
                <div className="pss-text pss-text--from-left container-shell lg:pl-0 lg:pr-14">
                  <h2 className="pss-title section-title text-2xl font-semibold leading-snug sm:text-3xl">
                    {story.title}
                  </h2>
                  <p className="pss-desc mt-5 text-base leading-8 text-(--muted) sm:text-lg">
                    {story.description}
                  </p>
                </div>
                {/* 图片顶格右边 */}
                <div className="pss-img pss-img--bleed-right pss-img--from-right relative aspect-4/3 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};
