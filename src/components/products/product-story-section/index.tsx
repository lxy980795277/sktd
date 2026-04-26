"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { FC } from "react";
import "./product-story-section.css";

const STORIES = [
  {
    image: "/images/products/product-story-section/1.jpg",
    title: "A product range built for every market",
    description:
      "From home furnishings and hotel supplies to apparel, footwear, appliances, and food — SKTD covers six core categories with depth and breadth. Whether you need a single SKU or a full assortment program, our sourcing network spans hundreds of verified factories across China, giving you access to the full spectrum of consumer goods under one partnership.",
    /** 左图右文 */
    imageLeft: true,
  },
  {
    image: "/images/products/product-story-section/2.jpg",
    title: "Uncompromising standards at every stage",
    description:
      "We don't just move products — we build them right. Every item in our catalog goes through structured quality control checkpoints, from raw material selection to pre-shipment inspection. Our team works directly with production lines to enforce specifications, eliminate deviation, and ensure what arrives at your destination matches what was agreed on paper.",
    /** 右图左文 */
    imageLeft: false,
  },
] as const;

/** 商品详情页底部：公司产品理念双分区，图片顶格页面边缘 */
export const ProductStorySection: FC = () => {
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
      {STORIES.map((story, index) => (
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
                  src={story.image}
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
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};
