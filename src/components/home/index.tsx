import { AboutSection } from "@/components/home/about-section";
import { AdvantagesSection } from "@/components/home/advantages-section";
import { CtaSection } from "@/components/home/cta-section";
import { FeaturedBanner } from "@/components/home/featured-banner";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { MilestonesSection } from "@/components/home/milestones-section";
import { SectorsSection } from "@/components/home/sectors-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TopBar } from "@/components/home/top-bar";
import type { HomeContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

type HomePageProps = {
  locale: Locale;
  content: HomeContent;
};

// 首页装配入口：仅保留模块顺序与数据传递，便于快速理解页面结构。
export function HomePage({ locale, content }: HomePageProps): React.JSX.Element {
  return (
    <div>
      <TopBar message={content.topBar} />

      <main className="space-y-10 sm:space-y-14 lg:space-y-20">
        {/* 首屏模块：品牌横幅 + 动态轮播 */}
        <FeaturedBanner locale={locale} content={content.featuredBanner} />
        <HeroCarousel locale={locale} slides={content.hero.slides} />

        {/* 内容模块：优势、行业、流程、口碑、关于、服务、里程碑、CTA */}
        <AdvantagesSection content={content.advantages} />
        <SectorsSection content={content.sectors} />
        {/* <PlanningSection content={content.planning} /> */}
        <TestimonialsSection content={content.testimonials} />
        <AboutSection content={content.about} />
        {/* <ServicesSection locale={locale} content={content.services} /> */}
        <MilestonesSection content={content.milestones} />
        <CtaSection locale={locale} content={content.cta} />
      </main>
    </div>
  );
}
