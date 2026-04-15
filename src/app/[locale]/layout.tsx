import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { getHomeContent } from "@/i18n/content";
import { isLocale } from "@/i18n/config";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps): Promise<React.JSX.Element> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getHomeContent(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader
        locale={locale}
        navigation={content.header.navigation}
        ctaLabel={content.header.ctaLabel}
        ctaHref={content.header.ctaHref}
      />
      <div className="flex-1">{children}</div>
      <SiteFooter locale={locale} content={content.footer} />
    </div>
  );
}
