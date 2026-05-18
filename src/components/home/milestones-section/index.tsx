"use client";

import Image from "next/image";
import {
  Building2,
  Globe,
  Leaf,
  Palette,
  TrendingUp,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { HomeContent } from "@/i18n/content";
import { imgV } from "@/utils/image-version";

type MilestonesSectionProps = {
  content: HomeContent["milestones"];
  /** 隐藏顶部 eyebrow + 大标题，用于嵌入其他页面时避免重复标题 */
  hideHeader?: boolean;
};

// 6 个锚点坐标：S 曲线摆幅 44px（168↔212）
const POINTS = [
  { x: 212, y: 50 },
  { x: 168, y: 160 },
  { x: 212, y: 270 },
  { x: 168, y: 380 },
  { x: 212, y: 490 },
  { x: 168, y: 600 },
] as const;

// Catmull-Rom → Cubic Bezier，控制点除数 1.6，转弯处更圆润
const CURVE_PATH = (() => {
  const T = [
    { x: 0, y: POINTS[1].y - POINTS[0].y },
    { x: (POINTS[2].x - POINTS[0].x) / 2, y: (POINTS[2].y - POINTS[0].y) / 2 },
    { x: (POINTS[3].x - POINTS[1].x) / 2, y: (POINTS[3].y - POINTS[1].y) / 2 },
    { x: (POINTS[4].x - POINTS[2].x) / 2, y: (POINTS[4].y - POINTS[2].y) / 2 },
    { x: (POINTS[5].x - POINTS[3].x) / 2, y: (POINTS[5].y - POINTS[3].y) / 2 },
    { x: 0, y: POINTS[5].y - POINTS[4].y },
  ];

  const segments = [`M ${POINTS[0].x} ${POINTS[0].y}`];
  for (let i = 0; i < POINTS.length - 1; i++) {
    const p = POINTS[i],
      pn = POINTS[i + 1];
    const cp1x = Math.round(p.x + T[i].x / 1.6);
    const cp1y = Math.round(p.y + T[i].y / 1.6);
    const cp2x = Math.round(pn.x - T[i + 1].x / 1.6);
    const cp2y = Math.round(pn.y - T[i + 1].y / 1.6);
    segments.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${pn.x} ${pn.y}`);
  }
  return segments.join(" ");
})();

// 里程碑数据：从远到近，2014 在顶部，自上而下时间递增
const MILESTONES: { year: string; lines: string[]; Icon: LucideIcon }[] = [
  { year: "2014", lines: ["Founded in Düsseldorf"], Icon: Building2 },
  { year: "2015", lines: ["Exceeded €1M annual sales"], Icon: TrendingUp },
  { year: "2016", lines: ["Shanghai sourcing center established"], Icon: Warehouse },
  { year: "2017", lines: ["Milan design & sales center opened"], Icon: Palette },
  {
    year: "2019",
    lines: ["Vietnam office established", "Strategic partnership with KUKA HOME"],
    Icon: Globe,
  },
  { year: "2022", lines: ["Low-carbon logistics initiative launched"], Icon: Leaf },
];

const CURVE_LENGTH = 1400;
// SVG viewBox 尺寸，供 HTML 叠加层计算百分比定位使用
const SVG_W = 600;
const SVG_H = 650;

export function MilestonesSection({ content, hideHeader = false }: MilestonesSectionProps): React.JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="milestones" ref={sectionRef} className="w-full overflow-hidden">
      {/* 顶部标题区：About 等页面复用时可通过 hideHeader 隐藏 */}
      {!hideHeader && (
        <div className="container-shell mb-8">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title mt-4 text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
        </div>
      )}

      {/* 左图（全出血）+ 右侧时间轴 */}
      <div className="flex min-h-[520px] flex-col lg:flex-row lg:items-stretch">
        {/* 左侧：全出血图片 */}
        <div className="relative min-h-[300px] w-full shrink-0 lg:w-[60%]">
          <Image
            src={imgV("/images-v3/home/milestones-section/1.jpg")}
            alt={content.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[rgba(246,241,232,0.5)] lg:to-[rgba(246,241,232,0.75)]" />
        </div>

        {/* 右侧：SVG 图形层 + HTML 文字叠加层 */}
        <div className="flex flex-1 flex-col justify-center px-6 py-6 sm:px-10 lg:px-10 lg:py-8">
          {/*
           * 使用 relative 包裹 SVG 和 HTML 叠加层：
           * SVG 决定容器高度（由 viewBox 纵横比决定），
           * HTML 叠加层通过百分比坐标精确对齐 SVG 锚点
           */}
          <div className="relative w-full">
            {/* 光晕呼吸动画：仅 scale，opacity 固定，避免颜色深浅变化感 */}
            <style>{`
              @keyframes milestone-halo-breathe {
                0%, 100% { transform: scale(1); }
                50%       { transform: scale(1.45); }
              }
              .milestone-halo {
                transform-box: fill-box;
                transform-origin: center;
                animation: milestone-halo-breathe 2.8s ease-in-out infinite;
              }
            `}</style>

            {/* ── SVG 层：纯图形（曲线 / 光晕 / 锚点 / 刻度线） ── */}
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="block w-full"
              aria-label="SKTD milestones timeline"
            >
              {/* 底色曲线（始终可见） */}
              <path d={CURVE_PATH} fill="none" stroke="var(--line)" strokeWidth="1.5" />

              {/* 动画曲线（滚动进入视口后绘制） */}
              <path
                d={CURVE_PATH}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray={CURVE_LENGTH}
                strokeDashoffset={isVisible ? 0 : CURVE_LENGTH}
                style={{
                  transition: "stroke-dashoffset 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "stroke-dashoffset",
                }}
              />

              {MILESTONES.map((m, i) => {
                const { x, y } = POINTS[i];
                const delay = `${0.6 + i * 0.18}s`;
                return (
                  <g
                    key={m.year}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.45s ease ${delay}`,
                    }}
                  >
                    {/* 外圈柔光光晕：固定 opacity，只做 scale 呼吸，各节点相位错开 */}
                    <circle
                      cx={x}
                      cy={y}
                      r={17}
                      fill="var(--accent)"
                      opacity={0.14}
                      className={isVisible ? "milestone-halo" : ""}
                      style={{ animationDelay: `${i * 0.5}s` }}
                    />
                    {/* 锚点圆圈 */}
                    <circle
                      cx={x}
                      cy={y}
                      r={6}
                      fill="var(--accent)"
                      stroke="var(--surface)"
                      strokeWidth="3"
                    />
                    {/* 左侧刻度线：圆圈边缘 → 年份标签 */}
                    <line
                      x1={x - 9}
                      y1={y}
                      x2={x - 44}
                      y2={y}
                      stroke="var(--accent)"
                      strokeWidth="1.2"
                      strokeOpacity="0.4"
                    />
                    {/* 右侧刻度线：圆圈边缘 → 里程碑卡片 */}
                    <line
                      x1={x + 9}
                      y1={y}
                      x2={x + 44}
                      y2={y}
                      stroke="var(--accent)"
                      strokeWidth="1.2"
                      strokeOpacity="0.4"
                    />
                  </g>
                );
              })}
            </svg>

            {/* ── HTML 层：年份标签（左侧，百分比坐标对齐 SVG 锚点） ── */}
            {MILESTONES.map((m, i) => {
              const { x, y } = POINTS[i];
              const delay = `${0.6 + i * 0.18}s`;
              return (
                <div
                  key={`year-${m.year}`}
                  className="pointer-events-none absolute"
                  style={{
                    // 右边缘对齐刻度线左端（x-46）
                    left: `${((x - 46) / SVG_W) * 100}%`,
                    top: `${(y / SVG_H) * 100}%`,
                    transform: "translate(-100%, -50%)",
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.45s ease ${delay}`,
                  }}
                >
                  <span className="section-title block pr-1 text-right text-4xl leading-none font-bold tracking-tight text-(--accent)">
                    {m.year}
                  </span>
                </div>
              );
            })}

            {/* ── HTML 层：里程碑卡片（右侧，毛玻璃风格） ── */}
            {MILESTONES.map((m, i) => {
              const { x, y } = POINTS[i];
              const delay = `${0.6 + i * 0.18}s`;
              const IconComponent = m.Icon;
              // 最近一条（2022，位于末尾）给予高亮样式，与其余条目区分
              const isLatest = i === MILESTONES.length - 1;
              return (
                <div
                  key={`card-${m.year}`}
                  className="pointer-events-none absolute"
                  style={{
                    // 左边缘对齐刻度线右端（x+46）
                    left: `${((x + 46) / SVG_W) * 100}%`,
                    top: `${(y / SVG_H) * 100}%`,
                    transform: "translateY(-50%)",
                    // 限制卡片最大宽度，防止在窄屏溢出
                    maxWidth: `${((SVG_W - x - 50) / SVG_W) * 100}%`,
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.45s ease ${delay}`,
                  }}
                >
                  <div
                    className={`flex items-start gap-2 rounded-xl border px-3.5 py-2 shadow-sm backdrop-blur-sm ${
                      isLatest ? "border-none bg-(--accent)/20" : "border-(--line)/50 bg-white/60"
                    }`}
                  >
                    <IconComponent
                      className={`mt-0.5 shrink-0 ${isLatest ? "text-(--accent)" : "text-(--accent)/75"}`}
                      size={22}
                    />
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        lineHeight: 1.5,
                        color: "var(--foreground)",
                        fontFamily: "var(--font-cormorant), serif",
                      }}
                    >
                      {m.lines.map((line, li) => (
                        <div key={li}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
