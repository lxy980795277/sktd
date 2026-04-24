import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home";
import { getHomeContent } from "@/i18n/content";
import { isLocale, locales } from "@/i18n/config";

type HomeRoutePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateStaticParams(): Promise<Array<{ locale: string }>> {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: HomeRoutePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {
      title: "SKTD",
    };
  }

  const content = getHomeContent(locale);

  return {
    title: content.seo.title,
    description: content.seo.description,
  };
}

export default async function HomeRoutePage({
  params,
}: HomeRoutePageProps): Promise<React.JSX.Element> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getHomeContent(locale);

  return <HomePage locale={locale} content={content} />;
}
