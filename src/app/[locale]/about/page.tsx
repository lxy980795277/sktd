import type { Metadata } from "next";
import { getAboutPageContent } from "@/i18n/about-content";
import { isLocale } from "@/i18n/config";

type AboutPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

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
    <main className="container-shell py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <section>
          <p className="text-xs font-semibold tracking-[0.2em] text-(--accent) uppercase">
            {content.eyebrow}
          </p>
          <h1 className="section-title mt-3 max-w-4xl text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
        </section>

        <section className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
          <div className="space-y-9">
            {content.storySections.map((section) => {
              return (
                <article key={section.title}>
                  <h3 className="text-foreground text-base font-semibold sm:text-lg">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-sm leading-8 text-(--muted) sm:text-base">
                    {section.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="rounded-[24px] border border-(--line) bg-white/55 p-5 sm:p-6">
            <h2 className="section-title text-3xl leading-[0.95] font-semibold sm:text-4xl">
              {content.milestonesTitle}
            </h2>
            <div className="mt-5 space-y-4">
              {content.milestones.map((milestone) => {
                return (
                  <article key={milestone.year} className="border-l-2 border-(--accent)/35 pl-4">
                    <p className="text-xs font-semibold tracking-[0.18em] text-(--accent) uppercase">
                      {milestone.year}
                    </p>
                    <h3 className="text-foreground mt-1 text-base font-semibold">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-(--muted)">{milestone.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
