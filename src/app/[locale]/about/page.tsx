import type { Metadata } from "next";
import { getAboutPageContent } from "@/i18n/about-content";
import { isLocale } from "@/i18n/config";
import { StorySections } from "@/app/[locale]/about/story-sections";
import { MilestonesCarousel } from "@/app/[locale]/about/milestones-carousel";
import { MilestonesTimeline } from "@/app/[locale]/about/milestones-timeline";
import { GoodsGallery } from "@/app/[locale]/about/goods-gallery";
import "./about.css";

type AboutPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

// 里程碑轮播配图：商务风格，与各年份主题对应
const MILESTONE_IMAGES = [
  // 2014 公司创立 — 德国城市商务
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&q=85",
  // 2015 营收破百万 — 商务握手/合作
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=85",
  // 2016 上海办公室 + JYSK — 仓储物流
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85",
  // 2017 意大利设计中心 — 设计工作室
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=85",
  // 2019 越南办公室 + KUKA — 家居展厅
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=85",
  // 2022 低碳项目 — 绿色可持续
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=85",
] as const;

// 每个板块对应的占位配图（Unsplash 大气商务风）
const STORY_IMAGES = [
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1400&q=80",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
  "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1400&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80",
] as const;

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const content = getAboutPageContent(resolvedLocale);

  return {
    title: content.seo.title,
    description: content.seo.description,
  };
}

export default async function AboutPage({ params }: AboutPageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const content = getAboutPageContent(resolvedLocale);

  return (
    /* overflow-x 防止图片向右扩展时产生横向滚动条 */
    <main className="overflow-x-hidden">
      <div className="container-shell py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl">
          {/* 标题区：与 Products 页完全一致 */}
          <h1 className="section-title text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <div className="mt-6 h-[2px] w-full bg-(--line-strong)" />

          {/* 五大板块：交由 client 组件渲染，含滚动入场动效 */}
          <StorySections sections={content.storySections} images={STORY_IMAGES} />

          {/* 里程碑：无限滚动图片轮播，hover 展示标题 */}
          <section className="mt-20 lg:mt-28">
            <h2 className="section-title text-3xl leading-[0.95] font-semibold sm:text-4xl">
              {content.milestonesTitle}
            </h2>
            <div className="mt-6 h-[2px] w-full bg-(--line-strong)" />

            {/* 水平时间线：数据一览 */}
            <div className="mt-10">
              <MilestonesTimeline milestones={content.milestones} />
            </div>

            {/* 图片轮播：沉浸式视觉补充 */}
            <div className="mt-12">
              <MilestonesCarousel milestones={content.milestones} images={MILESTONE_IMAGES} />
            </div>
          </section>
        </div>
      </div>

      {/* 瀑布流商品画廊：全宽，置于页面最底部 */}
      <GoodsGallery />
    </main>
  );
}
