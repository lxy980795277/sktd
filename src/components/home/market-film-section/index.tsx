import Image from "next/image";
import type { FC } from "react";
import { imgV } from "@/utils/image-version";
import "./index.css";

/** 上排图片（8-1，反序播放） */
const ROW_PRIMARY_IMAGES = [
  imgV("/images-v3/home/market-film-section/8.jpg"),
  imgV("/images-v3/home/market-film-section/7.jpg"),
  imgV("/images-v3/home/market-film-section/6.jpg"),
  imgV("/images-v3/home/market-film-section/5.jpg"),
  imgV("/images-v3/home/market-film-section/4.jpg"),
  imgV("/images-v3/home/market-film-section/3.jpg"),
  imgV("/images-v3/home/market-film-section/2.jpg"),
  imgV("/images-v3/home/market-film-section/1.jpg"),
];

/** 下排图片（9-16） */
const ROW_SECONDARY_IMAGES = [
  imgV("/images-v3/home/market-film-section/9.jpg"),
  imgV("/images-v3/home/market-film-section/10.jpg"),
  imgV("/images-v3/home/market-film-section/11.jpg"),
  imgV("/images-v3/home/market-film-section/12.jpg"),
  imgV("/images-v3/home/market-film-section/13.jpg"),
  imgV("/images-v3/home/market-film-section/14.jpg"),
  imgV("/images-v3/home/market-film-section/15.jpg"),
  imgV("/images-v3/home/market-film-section/16.jpg"),
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
