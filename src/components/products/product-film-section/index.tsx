import Image from "next/image";
import type { FC } from "react";
import "./product-film-section.css";

const FILM_IMAGES = [
  "/images/products/product-film-section/1.jpg",
  "/images/products/product-film-section/2.jpg",
  "/images/products/product-film-section/3.jpg",
  "/images/products/product-film-section/4.jpg",
  "/images/products/product-film-section/5.jpg",
  "/images/products/product-film-section/6.jpg",
  "/images/products/product-film-section/7.jpg",
  "/images/products/product-film-section/8.jpg",
] as const;

/** 商品详情页底部无限滚动图片条，所有详情页共用同一批素材 */
export const ProductFilmSection: FC = () => {
  return (
    <section className="product-film-section" aria-label="Product showcase strip">
      <div className="product-film-section__mask-left" />
      <div className="product-film-section__mask-right" />

      <div className="product-film-track">
        {/* 复制两组实现无缝循环 */}
        {[0, 1].map((groupIndex) => (
          <div
            key={`group-${groupIndex}`}
            className="product-film-group"
          >
            {FILM_IMAGES.map((image, index) => (
              <article
                key={`${groupIndex}-${index}`}
                className="product-film-card"
              >
                <div className="product-film-card__shine" />
                <Image
                  src={image}
                  alt={`Product showcase ${index + 1}`}
                  fill
                  className="product-film-card__image"
                  sizes="340px"
                />
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
