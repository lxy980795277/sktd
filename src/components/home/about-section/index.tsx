"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { HomeContent } from "@/i18n/content";
import { cn } from "@/lib/utils";
import { imgV } from "@/utils/image-version";
import "./index.css";

type AboutSectionProps = {
  content: HomeContent["about"];
};

// 关于模块：横向背景图承载核心叙事，左卡片/右文案双区域呈现。
export function AboutSection({ content }: AboutSectionProps): React.JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.28,
      },
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={cn("about-section-entry w-full", isVisible && "about-section-visible")}
    >
      <div className="about-section-frame relative overflow-hidden border border-(--line) shadow-[0_24px_80px_rgba(31,29,25,0.08)]">
        <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[620px]">
          <Image
            src={imgV(content.image)}
            alt={content.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/24 to-black/38" />

          <div className="about-section-content absolute inset-0 grid items-stretch gap-6 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
            <div className="about-section-left flex items-end">
              <div className="max-w-sm rounded-[26px] border border-white/20 bg-(--accent)/92 px-5 py-5 text-white shadow-[0_16px_40px_rgba(31,29,25,0.22)]">
                <p className="text-xs tracking-[0.22em] text-white/75 uppercase">SKTD network</p>
                <p className="section-title mt-3 text-3xl font-semibold sm:text-4xl">
                  Europe ↔ Asia
                </p>
                <p className="mt-3 text-sm leading-7 text-white/82">
                  A high-fidelity homepage inspired by the reference structure, ready for your final
                  visual assets.
                </p>
              </div>
            </div>

            <div className="about-section-right flex items-center lg:justify-end">
              <div className="max-w-2xl text-white">
                <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md">
                  {content.eyebrow}
                </p>
                <h2 className="section-title mt-5 text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
                  {content.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-white/86 sm:text-lg">
                  {content.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
