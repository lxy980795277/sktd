import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Blocks,
  BriefcaseBusiness,
  Factory,
  Flower2,
  Globe2,
  Gift,
  Home,
  Landmark,
  MapPinned,
  PackageCheck,
  Palette,
  PencilRuler,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import { FeaturedBanner } from "@/components/home/featured-banner";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { LanguageSwitcher } from "@/components/home/language-switcher";
import { SiteHeader } from "@/components/home/site-header";
import type { HomeContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

const advantageIcons = [Globe2, ShieldCheck, PackageCheck] as const;
const sectorIcons = [
  Home,
  Palette,
  UtensilsCrossed,
  ShoppingBag,
  Gift,
  BriefcaseBusiness,
  Store,
  Baby,
  Flower2,
  Blocks,
] as const;
const planningIcons = [MapPinned, PencilRuler, ShieldCheck, Landmark, Truck] as const;
const serviceIcons = [Factory, PencilRuler, ShieldCheck, Landmark, Truck] as const;

type HomePageProps = {
  locale: Locale;
  content: HomeContent;
};

export function HomePage({ locale, content }: HomePageProps): React.JSX.Element {
  return (
    <div className="pb-8 sm:pb-10">
      <div className="bg-(--accent) py-3 text-white">
        <div className="container-shell flex items-center justify-center text-center text-xs font-medium tracking-[0.2em] uppercase sm:justify-start sm:text-left">
          <span>{content.topBar}</span>
        </div>
      </div>

      <SiteHeader
        locale={locale}
        navigation={content.header.navigation}
        ctaLabel={content.header.ctaLabel}
        ctaHref={content.header.ctaHref}
      />

      <main className="space-y-10 sm:space-y-14 lg:space-y-20">
        <FeaturedBanner locale={locale} content={content.featuredBanner} />
        <HeroCarousel locale={locale} slides={content.hero.slides} />

        <section id="advantages" className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">{content.advantages.eyebrow}</p>
              <h2 className="section-title mt-5 text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
                {content.advantages.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-(--muted) sm:text-lg">
                {content.advantages.description}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {content.advantages.items.map((item, index) => {
                const Icon = advantageIcons[index];

                return (
                  <article
                    key={item.title}
                    className="glass-card rounded-[28px] border border-(--line) p-6 shadow-[0_18px_50px_rgba(31,29,25,0.06)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--surface) text-(--accent)">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-6 text-sm font-semibold tracking-[0.18em] text-(--accent) uppercase">
                      {item.value}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-(--muted)">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container-shell">
          <div className="rounded-[36px] border border-(--line) bg-(--surface) px-6 py-8 shadow-[0_24px_80px_rgba(31,29,25,0.05)] sm:px-8 sm:py-10 lg:px-10">
            <p className="eyebrow">{content.sectors.eyebrow}</p>
            <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="section-title text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-[3.6rem]">
                  {content.sectors.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-(--muted) sm:text-lg">
                  {content.sectors.description}
                </p>
              </div>
              <div className="rounded-full border border-(--line) bg-white/70 px-5 py-3 text-sm font-medium text-(--muted)">
                10 business segments
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {content.sectors.items.map((item, index) => {
                const Icon = sectorIcons[index];

                return (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-white/70 bg-white/78 p-5 shadow-[0_14px_32px_rgba(31,29,25,0.05)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--surface) text-(--accent)">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-(--muted)">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="planning" className="container-shell">
          <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="glass-card rounded-[32px] border border-(--line) p-6 sm:p-8">
              <p className="eyebrow">{content.planning.eyebrow}</p>
              <h2 className="section-title mt-5 text-4xl leading-[0.95] font-semibold sm:text-5xl">
                {content.planning.title}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {content.planning.items.map((item, index) => {
                const Icon = planningIcons[index];

                return (
                  <article
                    key={item.title}
                    className="glass-card rounded-[28px] border border-(--line) p-5 shadow-[0_18px_48px_rgba(31,29,25,0.05)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--surface) text-(--accent)">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-(--muted)">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="glass-card rounded-[32px] border border-(--line) p-6 sm:p-8">
              <p className="eyebrow">{content.testimonials.eyebrow}</p>
              <h2 className="section-title mt-5 text-4xl leading-[0.95] font-semibold sm:text-5xl">
                {content.testimonials.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-(--muted) sm:text-lg">
                {content.testimonials.description}
              </p>
            </div>
            <div className="grid gap-4 xl:grid-cols-3">
              {content.testimonials.items.map((item, index) => {
                return (
                  <article
                    key={`${item.author}-${index}`}
                    className={`rounded-[28px] border border-(--line) p-6 shadow-[0_18px_48px_rgba(31,29,25,0.05)] ${
                      index === 0 ? "bg-(--accent) text-white" : "glass-card"
                    }`}
                  >
                    <p
                      className={`text-sm leading-8 ${
                        index === 0 ? "text-white/80" : "text-(--muted)"
                      }`}
                    >
                      “{item.quote}”
                    </p>
                    <div className="mt-8 border-t border-current/15 pt-5">
                      <p className="text-base font-semibold">{item.author}</p>
                      <p
                        className={`mt-1 text-sm ${
                          index === 0 ? "text-white/75" : "text-(--muted)"
                        }`}
                      >
                        {item.company}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div className="glass-card rounded-[32px] border border-(--line) p-6 shadow-[0_22px_64px_rgba(31,29,25,0.06)] sm:p-8 lg:p-10">
              <p className="eyebrow">{content.about.eyebrow}</p>
              <h2 className="section-title mt-5 text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
                {content.about.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-(--muted) sm:text-lg">
                {content.about.description}
              </p>

              <div className="mt-8">
                <p className="text-sm font-semibold tracking-[0.2em] text-(--accent) uppercase">
                  {content.about.officesLabel}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {content.about.offices.map((office) => {
                    return (
                      <span
                        key={office}
                        className="rounded-full border border-(--line) bg-white/75 px-4 py-2 text-sm font-medium"
                      >
                        {office}
                      </span>
                    );
                  })}
                </div>
              </div>

              <Link
                href={`/${locale}${content.about.actionHref}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--accent-strong)"
              >
                {content.about.actionLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-(--line) bg-[#e8dccd] shadow-[0_24px_80px_rgba(31,29,25,0.08)]">
              <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[640px]">
                <Image
                  src={content.about.image}
                  alt={content.about.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/5 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-5 sm:p-6">
                  <div className="glass-card rounded-[26px] border border-white/25 px-5 py-5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                    <p className="text-xs tracking-[0.22em] text-white/70 uppercase">
                      SKTD network
                    </p>
                    <p className="section-title mt-3 text-3xl font-semibold sm:text-4xl">
                      Europe ↔ Asia
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/75">
                      A high-fidelity homepage inspired by the reference structure, ready for your
                      final visual assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="container-shell">
          <div className="rounded-[36px] border border-(--line) bg-[#f9f6f0] px-6 py-8 shadow-[0_22px_64px_rgba(31,29,25,0.05)] sm:px-8 sm:py-10 lg:px-10">
            <p className="eyebrow">{content.services.eyebrow}</p>
            <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="section-title max-w-3xl text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-[3.5rem]">
                {content.services.title}
              </h2>
              <Link
                href={`/${locale}#cta`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-(--accent)"
              >
                Contact SKTD
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-4 xl:grid-cols-5">
              {content.services.items.map((item, index) => {
                const Icon = serviceIcons[index];

                return (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-(--line) bg-white px-5 py-6 shadow-[0_12px_30px_rgba(31,29,25,0.04)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--surface) text-(--accent)">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-6 flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <span className="text-xs font-semibold tracking-[0.22em] text-(--accent) uppercase">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-(--muted)">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="milestones" className="container-shell">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">{content.milestones.eyebrow}</p>
              <h2 className="section-title mt-5 text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
                {content.milestones.title}
              </h2>
            </div>
            <div className="rounded-full border border-(--line) bg-white/70 px-5 py-3 text-sm font-medium text-(--muted)">
              2014 → 2022
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {content.milestones.items.map((item) => {
              return (
                <article
                  key={`${item.year}-${item.title}`}
                  className="glass-card rounded-[28px] border border-(--line) p-6 shadow-[0_16px_44px_rgba(31,29,25,0.05)]"
                >
                  <p className="text-sm font-semibold tracking-[0.24em] text-(--accent) uppercase">
                    {item.year}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-(--muted)">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="cta" className="container-shell">
          <div className="overflow-hidden rounded-[38px] border border-(--line) bg-[linear-gradient(135deg,#8b3f2c_0%,#6f2c1f_50%,#a75d3f_100%)] px-6 py-8 text-white shadow-[0_28px_90px_rgba(31,29,25,0.14)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="eyebrow border-white/20 bg-white/10 text-white">
                  Final call to action
                </p>
                <h2 className="section-title mt-5 text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-[3.8rem]">
                  {content.cta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                  {content.cta.subtitle}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href={content.cta.primaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-(--accent) transition hover:bg-[#f8ede6]"
                >
                  {content.cta.primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={`/${locale}${content.cta.secondaryHref}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  {content.cta.secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container-shell mt-10 border-t border-(--line) pt-8 sm:mt-14 sm:pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-title text-4xl font-semibold">SKTD</p>
            <p className="mt-4 max-w-xl text-sm leading-8 text-(--muted) sm:text-base">
              {content.footer.blurb}
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <div className="flex flex-wrap gap-4 text-sm font-medium text-(--muted)">
              {content.footer.links.map((item) => {
                return (
                  <Link key={item.href} href={`/${locale}${item.href}`}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-(--line) py-5 text-xs tracking-[0.18em] text-(--muted) uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>{content.footer.rights}</span>
          <span>Next.js · TypeScript · Tailwind CSS · lucide-react</span>
        </div>
      </footer>
    </div>
  );
}
