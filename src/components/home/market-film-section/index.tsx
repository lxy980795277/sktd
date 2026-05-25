import Image from "next/image";
import type { FC } from "react";
import { imgV } from "@/utils/image-version";
import "./index.css";

/** 上排图片（top/8-1，反序播放） */
const ROW_PRIMARY_IMAGES = [
  imgV("/images-v5/home/market-film-section/top/8.jpg"),
  imgV("/images-v5/home/market-film-section/top/7.jpg"),
  imgV("/images-v5/home/market-film-section/top/6.jpg"),
  imgV("/images-v5/home/market-film-section/top/5.jpg"),
  imgV("/images-v5/home/market-film-section/top/4.jpg"),
  imgV("/images-v5/home/market-film-section/top/3.jpg"),
  imgV("/images-v5/home/market-film-section/top/2.jpg"),
  imgV("/images-v5/home/market-film-section/top/1.jpg"),
];

/** 下排图片（bottom/1-8） */
const ROW_SECONDARY_IMAGES = [
  imgV("/images-v5/home/market-film-section/bottom/1.jpg"),
  imgV("/images-v5/home/market-film-section/bottom/2.jpg"),
  imgV("/images-v5/home/market-film-section/bottom/3.jpg"),
  imgV("/images-v5/home/market-film-section/bottom/4.jpg"),
  imgV("/images-v5/home/market-film-section/bottom/5.jpg"),
  imgV("/images-v5/home/market-film-section/bottom/6.jpg"),
  imgV("/images-v5/home/market-film-section/bottom/7.jpg"),
  imgV("/images-v5/home/market-film-section/bottom/8.jpg"),
];

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
                  {ROW_PRIMARY_IMAGES.map((image, index) => {
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
                  {ROW_SECONDARY_IMAGES.map((image, index) => {
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
