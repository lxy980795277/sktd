import Image from "next/image";
import type { FC } from "react";
import { imgV } from "@/utils/image-version";
import type { CommonContent } from "@/i18n/types/common";
import "./goods-gallery.css";

const GALLERY_ITEMS = [
  { src: imgV("/images-v5/about/life-at-sktd/1.jpg"), ratio: "r-4-5" },
  { src: imgV("/images-v5/about/life-at-sktd/2.jpg"), ratio: "r-16-9" },
  { src: imgV("/images-v5/about/life-at-sktd/3.jpg"), ratio: "r-3-4" },
  { src: imgV("/images-v5/about/life-at-sktd/4.jpg"), ratio: "r-4-3" },
  { src: imgV("/images-v5/about/life-at-sktd/5.jpg"), ratio: "r-2-3" },
  { src: imgV("/images-v5/about/life-at-sktd/6.jpg"), ratio: "r-16-9" },
  { src: imgV("/images-v5/about/life-at-sktd/7.jpg"), ratio: "r-3-5" },
  { src: imgV("/images-v5/about/life-at-sktd/8.jpg"), ratio: "r-4-5" },
  { src: imgV("/images-v5/about/life-at-sktd/9.jpg"), ratio: "r-4-3" },
  { src: imgV("/images-v5/about/life-at-sktd/10.jpg"), ratio: "r-1-1" },
  { src: imgV("/images-v5/about/life-at-sktd/11.jpg"), ratio: "r-2-3" },
  { src: imgV("/images-v5/about/life-at-sktd/12.jpg"), ratio: "r-16-9" },
  { src: imgV("/images-v5/about/life-at-sktd/13.jpg"), ratio: "r-4-5" },
  { src: imgV("/images-v5/about/life-at-sktd/14.jpg"), ratio: "r-4-3" },
  { src: imgV("/images-v5/about/life-at-sktd/15.jpg"), ratio: "r-3-4" },
];

type GoodsGalleryProps = {
  title: string;
  imageDescriptions: CommonContent["images"]["aboutGallery"];
};

export const GoodsGallery: FC<GoodsGalleryProps> = ({ title, imageDescriptions }) => {
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
                alt={imageDescriptions[index]}
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
