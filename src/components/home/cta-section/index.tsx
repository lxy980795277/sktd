import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HomeContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import { getLocaleHref } from "@/lib/locale-href";

type CtaSectionProps = {
  locale: Locale;
  content: HomeContent["cta"];
};

// 行动号召模块：承接转化与下一步联系动作。
export function CtaSection({ locale, content }: CtaSectionProps): React.JSX.Element {
  const primaryHref = content.primaryHref.startsWith("mailto:")
    ? content.primaryHref
    : getLocaleHref(locale, content.primaryHref);

  return (
    <section id="cta" className="container-shell">
      <div className="overflow-hidden rounded-[38px] border border-(--line) bg-[linear-gradient(135deg,#8b3f2c_0%,#6f2c1f_50%,#a75d3f_100%)] px-6 py-8 text-white shadow-[0_28px_90px_rgba(31,29,25,0.14)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow border-white/20 bg-white/10 text-white">{content.eyebrow}</p>
            <h2 className="section-title mt-5 text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-[3.8rem]">
              {content.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              {content.subtitle}
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-(--accent) transition hover:bg-[#f8ede6]"
            >
              {content.primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
