import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/contact-form";
import { getContactContent } from "@/i18n/contact-content";
import { isLocale } from "@/i18n/config";

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const content = getContactContent(resolvedLocale);

  return {
    title: content.seo.title,
    description: content.seo.description,
  };
}

export default async function ContactPage({
  params,
}: ContactPageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const content = getContactContent(resolvedLocale);

  return (
    /* 整页相对定位，背景图绝对铺满 */
    <main className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden">
      {/* ── 背景图：横向占满，纵向覆盖全页 ── */}
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=90"
        alt="Contact background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* 深色渐变遮罩：左深右浅，右侧留白给卡片 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,8,5,0.78) 0%, rgba(10,8,5,0.62) 45%, rgba(10,8,5,0.45) 100%)",
        }}
      />

      {/* ── 内容区：浮于图片之上 ── */}
      <div className="container-shell relative z-10 w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* 左侧：标题 + 描述（白色文字直接在图上） */}
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
                {content.eyebrow}
              </p>
              <h1 className="section-title mt-4 text-4xl leading-[0.95] font-semibold text-white sm:text-5xl lg:text-6xl">
                {content.title}
              </h1>
              <p className="mt-5 max-w-md text-sm leading-8 text-white/70 sm:text-base">
                {content.description}
              </p>

              {/* 分隔线 */}
              <div className="mt-10 h-px w-16 bg-white/30" />

              {/* 联系信息补充 */}
              <div className="mt-8 space-y-3 text-sm text-white/60">
                <p>980795277@qq.com</p>
                <p>Düsseldorf · Milan · Shanghai · Ho Chi Minh City</p>
              </div>
            </div>

            {/* 右侧：表单卡片（白色半透明浮层） */}
            <div>
              <div className="rounded-2xl border border-white/10 bg-white/95 p-8 shadow-2xl backdrop-blur-sm sm:p-10">
                <ContactForm content={content.form} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
