import Link from "next/link";
import { Globe, Mail, MapPin, Phone, Printer } from "lucide-react";
import type { HomeContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import { getLocaleHref } from "@/lib/locale-href";

type SiteFooterProps = {
  locale: Locale;
  content: HomeContent["footer"];
};

// 页脚模块：提供品牌摘要、快速导航与语言切换。
export function SiteFooter({ locale, content }: SiteFooterProps): React.JSX.Element {
  const quickAccessLinks = [...content.links, { label: "Contact", href: "/contact" }] as const;
  const copyrightYear = new Date().getFullYear();

  return (
    <footer className="mt-12 w-full bg-[#080808] text-white sm:mt-16">
      <div className="container-shell py-8 sm:py-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="section-title text-4xl font-semibold">SKTD</p>
            <p className="mt-4 max-w-xl text-sm leading-8 text-white/70 sm:text-base">
              {content.blurb}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-white/60 uppercase">
                Contact Info
              </p>
              <div className="mt-4 space-y-2 text-sm leading-7 text-white/82">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-white/65" />
                  <p>Prinzenallee 7, 40549 Dusseldorf, Germany</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-white/65" />
                  <p>Tel: (00)49 211 3399 5616</p>
                </div>
                <div className="flex items-start gap-3">
                  <Printer className="mt-1 h-4 w-4 shrink-0 text-white/65" />
                  <p>Fax: (00)49 211 3399 5616</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-white/65" />
                  <p>
                    E-mail:{" "}
                    <a href="mailto:sales@sktd-tech.com" className="text-white hover:text-white/80">
                      sales@sktd-tech.com
                    </a>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="mt-1 h-4 w-4 shrink-0 text-white/65" />
                  <p>
                    Website:{" "}
                    <a
                      href="http://www.sktd-tech.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-white/80"
                    >
                      www.sktd-tech.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-white/60 uppercase">
                Quick Access
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm leading-7 text-white/82">
                {quickAccessLinks.slice(0, 5).map((item) => {
                  return (
                    <Link
                      key={item.href}
                      href={getLocaleHref(locale, item.href)}
                      className="hover:text-white"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-5 text-xs tracking-[0.12em] text-white/62 uppercase sm:flex sm:items-center sm:justify-between">
          <span>{`© ${copyrightYear} Copyright SKTD`}</span>
          <span className="mt-2 block sm:mt-0">General Terms and Conditions</span>
        </div>
      </div>
    </footer>
  );
}
