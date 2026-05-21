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
              <div className="max-w-lg rounded-[26px] border border-white/20 bg-(--accent)/92 px-8 py-8 text-white shadow-[0_16px_40px_rgba(31,29,25,0.22)]">
                <p className="text-xs tracking-[0.22em] text-white/75 uppercase">{content.networkLabel}</p>
                <p className="section-title mt-3 text-lg font-semibold leading-relaxed sm:text-xl">
                  {content.offices.join(" · ")}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {content.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-6 text-white/82"
                    >
                      <span className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="about-section-right flex items-center lg:justify-end">
              <div className="max-w-2xl text-white">
                <p className="mb-10 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md">
                  {content.eyebrow}
                </p>
                {content.tagline.split("/").map((line) => (
                  <p
                    key={line}
                    className="section-title mt-0 text-3xl leading-snug font-semibold text-white/92 sm:text-4xl lg:text-5xl"
                  >
                    {line.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
