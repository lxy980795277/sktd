import { notFound, redirect } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";

type LocaleIndexProps = {
  params: Promise<{
    locale: string;
  }>;
};

/**
 * 语言根路径仅作跳转到显式首页路由 `/[locale]/home`，让首页拥有稳定 URL，避免与 `/#` 混用。
 */
export async function generateStaticParams(): Promise<Array<{ locale: string }>> {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleIndexPage({ params }: LocaleIndexProps): Promise<never> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  redirect(`/${locale}/home`);
}
