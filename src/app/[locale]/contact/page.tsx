import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { getContactContent } from "@/i18n/contact-content";
import { isLocale } from "@/i18n/config";

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const content = getContactContent(resolvedLocale);

  return {
    title: content.seo.title,
    description: content.seo.description,
  };
}

export default async function ContactPage({ params }: ContactPageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const content = getContactContent(resolvedLocale);

  return (
    <main className="container-shell h-svh overflow-hidden py-3 sm:py-4">
      <div className="mx-auto flex h-full max-w-4xl flex-col justify-center gap-3">
        <Link
          href={`/${resolvedLocale}`}
          className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-(--accent) transition hover:text-(--accent-strong) sm:text-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          {content.backToHomeLabel}
        </Link>

        <section className="rounded-[28px] border border-(--line) bg-(--surface)/75 p-5 shadow-[0_20px_66px_rgba(31,29,25,0.08)] sm:p-6 lg:p-7">
          <h1 className="section-title text-3xl leading-[0.95] font-semibold sm:text-4xl lg:text-5xl">
            {content.title}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-(--muted) sm:text-base sm:leading-7">{content.description}</p>

          <div className="mt-4 sm:mt-5">
            <ContactForm content={content.form} />
          </div>
        </section>
      </div>
    </main>
  );
}
