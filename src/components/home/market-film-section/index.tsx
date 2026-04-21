import Image from "next/image";
import type { FC } from "react";
import "./index.css";

const GOODS_IMAGES = [
  "/images/goods/1.jpg",
  "/images/goods/2.jpg",
  "/images/goods/3.jpg",
  "/images/goods/4.jpg",
  "/images/goods/5.jpg",
  "/images/goods/6.jpg",
  "/images/goods/7.jpg",
  "/images/goods/8.jpg",
] as const;

export const MarketFilmSection: FC = () => {
  return (
    <section className="market-film-section" aria-label="Market film strip">
      <div className="market-film-section__inner">
        <div className="market-film-section__glow" />
        <div className="market-film-section__mask-left" />
        <div className="market-film-section__mask-right" />

        <div className="market-film-row market-film-row--primary">
          <div className="market-film-row__track">
            {[0, 1].map((groupIndex) => {
              return (
                <div
                  key={`primary-group-${groupIndex}`}
                  className="market-film-row__group market-film-row__group--primary"
                >
                  {GOODS_IMAGES.map((image, index) => {
                    return (
                      <article
                        key={`primary-${groupIndex}-${image}-${index}`}
                        className="market-film-card"
                      >
                        <div className="market-film-card__frost" />
                        <div className="market-film-card__shine" />
                        <Image
                          src={image}
                          alt={`Market showcase ${index + 1}`}
                          fill
                          className="market-film-card__image"
                          sizes="320px"
                        />
                      </article>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="market-film-row market-film-row--secondary">
          <div className="market-film-row__track">
            {[0, 1].map((groupIndex) => {
              return (
                <div
                  key={`secondary-group-${groupIndex}`}
                  className="market-film-row__group market-film-row__group--secondary"
                >
                  {GOODS_IMAGES.map((image, index) => {
                    return (
                      <article
                        key={`secondary-${groupIndex}-${image}-${index}`}
                        className="market-film-card market-film-card--soft"
                      >
                        <div className="market-film-card__frost" />
                        <div className="market-film-card__shine" />
                        <Image
                          src={image}
                          alt={`Market showcase alternate ${index + 1}`}
                          fill
                          className="market-film-card__image"
                          sizes="260px"
                        />
                      </article>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
