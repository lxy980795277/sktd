import Image from "next/image";
import type { FC } from "react";
import "./product-film-section.css";

type ProductFilmSectionProps = {
  /** 当前商品所有图片路径，由详情页服务端读取后传入 */
  images: string[];
  /** 商品名称，用于 hover 蒙层展示 */
  productName: string;
};

/** 商品详情页底部无限滚动图片条，展示当前商品的所有图片，hover 时显示商品名蒙层 */
export const ProductFilmSection: FC<ProductFilmSectionProps> = ({ images, productName }) => {
  if (images.length === 0) {
    return null;
  }

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
            {images.map((image, index) => (
              <article
                key={`${groupIndex}-${index}`}
                className="product-film-card"
              >
                <div className="product-film-card__shine" />
                <Image
                  src={image}
                  alt={`${productName} - ${index + 1}`}
                  fill
                  className="product-film-card__image"
                  sizes="340px"
                />
                {/* hover 蒙层：半透明遮罩 + 居中商品名 */}
                <div className="product-film-card__overlay">
                  <span className="product-film-card__overlay-name">{productName}</span>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
