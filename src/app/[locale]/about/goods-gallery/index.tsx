import Image from "next/image";
import type { FC } from "react";
import { imgV } from "@/utils/image-version";
import "./goods-gallery.css";

const GALLERY_ITEMS = [
  { src: imgV("/images-v3/about/life-at-sktd/1.jpg"), ratio: "r-4-5", alt: "Team collaboration" },
  { src: imgV("/images-v3/about/life-at-sktd/2.jpg"), ratio: "r-16-9", alt: "Modern office space" },
  { src: imgV("/images-v3/about/life-at-sktd/3.jpg"), ratio: "r-3-4", alt: "Brainstorming session" },
  { src: imgV("/images-v3/about/life-at-sktd/4.jpg"), ratio: "r-4-3", alt: "Team presentation" },
  { src: imgV("/images-v3/about/life-at-sktd/5.jpg"), ratio: "r-2-3", alt: "Business professional" },
  { src: imgV("/images-v3/about/life-at-sktd/6.jpg"), ratio: "r-16-9", alt: "Team at work" },
  { src: imgV("/images-v3/about/life-at-sktd/7.jpg"), ratio: "r-3-5", alt: "Working together" },
  { src: imgV("/images-v3/about/life-at-sktd/8.jpg"), ratio: "r-4-5", alt: "Focused work" },
  { src: imgV("/images-v3/about/life-at-sktd/9.jpg"), ratio: "r-4-3", alt: "Business meeting" },
  { src: imgV("/images-v3/about/life-at-sktd/10.jpg"), ratio: "r-1-1", alt: "Office discussion" },
  { src: imgV("/images-v3/about/life-at-sktd/11.jpg"), ratio: "r-2-3", alt: "Creative workspace" },
  { src: imgV("/images-v3/about/life-at-sktd/12.jpg"), ratio: "r-16-9", alt: "Laptop working" },
];

type GoodsGalleryProps = {
  title: string;
};

export const GoodsGallery: FC<GoodsGalleryProps> = ({ title }) => {
  return (
    <section className="mt-24 lg:mt-32">
      {/* 标题区：container-shell + max-w-7xl 与里程碑对齐 */}
      <div className="container-shell mb-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title text-3xl leading-[0.95] font-semibold sm:text-4xl">
            {title}
          </h2>
          <div className="mt-6 h-[2px] w-full bg-(--line-strong)" />
        </div>
      </div>

      {/* 瀑布流画廊：全宽 */}
      <div className="goods-gallery-viewport">
        <div className="goods-gallery-columns">
          {GALLERY_ITEMS.map((item, index) => (
            <div key={index} className={`goods-gallery-item goods-gallery-item--${item.ratio}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="goods-gallery-item__img"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
