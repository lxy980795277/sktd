import type { Metadata } from "next";
import { getAboutPageContent } from "@/i18n/about-content";
import { getHomeContent } from "@/i18n/content";
import { isLocale } from "@/i18n/config";
import { imgV } from "@/utils/image-version";
import { StorySections } from "@/app/[locale]/about/story-sections";
import { MilestonesCarousel } from "@/app/[locale]/about/milestones-carousel";
import { MilestonesSection } from "@/components/home/milestones-section";
import { GoodsGallery } from "@/app/[locale]/about/goods-gallery";
import "./about.css";

type AboutPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

// 里程碑轮播配图
const MILESTONE_IMAGES = [
  imgV("/images-v5/about/milestones/1.jpg"),
  imgV("/images-v5/about/milestones/2.jpg"),
  imgV("/images-v5/about/milestones/3.jpg"),
  imgV("/images-v5/about/milestones/4.jpg"),
  imgV("/images-v5/about/milestones/5.jpg"),
  imgV("/images-v5/about/milestones/6.jpg"),
];

// 五大板块配图
const STORY_IMAGES = [
  imgV("/images-v5/about/story-sections/1.jpg"),
  imgV("/images-v5/about/story-sections/2.jpg"),
  imgV("/images-v5/about/story-sections/3.jpg"),
  imgV("/images-v5/about/story-sections/4.jpg"),
];

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
  const homeContent = getHomeContent(resolvedLocale);

  return (
    /* overflow-x 防止图片向右扩展时产生横向滚动条 */
    <main className="overflow-x-hidden">
      {/* ── 受限宽度区：页面标题 + 五大板块 + 里程碑标题/分割线 ── */}
      <div className="container-shell py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="section-title text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
            {content.pageTitle}
          </h1>
          <div className="mt-6 h-[2px] w-full bg-(--line-strong)" />

          <StorySections sections={content.storySections} images={STORY_IMAGES} />

          {/* 里程碑区标题 + 分割线 */}
          <section className="mt-20 lg:mt-28">
            <h2 className="section-title text-3xl leading-[0.95] font-semibold sm:text-4xl">
              {content.milestonesTitle}
            </h2>
            <div className="mt-6 h-[2px] w-full bg-(--line-strong)" />
          </section>
        </div>
      </div>

      {/* ── 全出血：左图右轴时间轴 ── */}
      <MilestonesSection content={homeContent.milestones} hideHeader />

      {/* ── 受限宽度区：里程碑图片轮播 ── */}
      <div className="container-shell pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="mt-10">
            <MilestonesCarousel milestones={content.milestones} images={MILESTONE_IMAGES} />
          </div>
        </div>
      </div>

      {/* 瀑布流商品画廊：全宽，置于页面最底部 */}
      <GoodsGallery title={content.galleryTitle} />
    </main>
  );
}
