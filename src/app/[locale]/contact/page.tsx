import type { Metadata } from "next";
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
    <main className="container-shell py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <section className="py-6 sm:py-8 lg:py-10">
          <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-(--accent) uppercase">
                {content.eyebrow}
              </p>
              <h1 className="section-title mt-3 text-3xl leading-[0.95] font-semibold sm:text-4xl lg:text-5xl">
                {content.title}
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-(--muted) sm:text-base sm:leading-8">
                {content.description}
              </p>
            </div>

            <div className="lg:pl-10">
              <ContactForm content={content.form} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
