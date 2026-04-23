"use client";

import Image from "next/image";
import type { FC } from "react";
import "./milestones-carousel.css";

type Milestone = {
  year: string;
  title: string;
  description: string;
};

type MilestonesCarouselProps = {
  milestones: Milestone[];
  images: readonly string[];
};

export const MilestonesCarousel: FC<MilestonesCarouselProps> = ({ milestones, images }) => {
  // 将卡片数组复制 3 份，保证无缝循环
  const tripled = [...milestones, ...milestones, ...milestones];

  return (
    <div className="milestones-viewport">
      <div className="milestones-track">
        {tripled.map((milestone, index) => {
          // 循环取图
          const imageSrc = images[index % images.length] ?? images[0];

          return (
            <div key={`${milestone.year}-${index}`} className="milestone-card">
              {/* 背景图 */}
              <Image
                src={imageSrc}
                alt={milestone.title}
                fill
                className="milestone-card__img"
                sizes="560px"
                draggable={false}
              />

              {/* hover 覆盖层：年份 + 标题 + 描述 */}
              <div className="milestone-card__overlay">
                <span className="milestone-card__year">{milestone.year}</span>
                <p className="milestone-card__title">{milestone.title}</p>
                <p className="milestone-card__desc">{milestone.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
