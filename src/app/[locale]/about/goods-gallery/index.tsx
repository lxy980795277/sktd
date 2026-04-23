import Image from "next/image";
import type { FC } from "react";
import "./goods-gallery.css";

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85",
    ratio: "r-4-5",
    alt: "Team collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85",
    ratio: "r-16-9",
    alt: "Modern office space",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=85",
    ratio: "r-3-4",
    alt: "Brainstorming session",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=85",
    ratio: "r-4-3",
    alt: "Team presentation",
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=85",
    ratio: "r-2-3",
    alt: "Business professional",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=85",
    ratio: "r-16-9",
    alt: "Team at work",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85",
    ratio: "r-3-5",
    alt: "Working together",
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=85",
    ratio: "r-4-5",
    alt: "Focused work",
  },
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=85",
    ratio: "r-4-3",
    alt: "Business meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=900&q=85",
    ratio: "r-1-1",
    alt: "Office discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=85",
    ratio: "r-2-3",
    alt: "Creative workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&q=85",
    ratio: "r-16-9",
    alt: "Laptop working",
  },
] as const;

export const GoodsGallery: FC = () => {
  return (
    <section className="mt-24 lg:mt-32">
      {/* 标题区：container-shell + max-w-7xl 与里程碑对齐 */}
      <div className="container-shell mb-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title text-3xl leading-[0.95] font-semibold sm:text-4xl">
            Life at SKTD
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
