"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale, normalizeLocale } from "../i18n/locales";
import { useMessages } from "../i18n/use-messages";

function withLocale(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  const current = normalizeLocale(segments[0]);
  const rest = current === segments[0] ? segments.slice(1) : segments;
  const restPath = rest.length ? `/${rest.join("/")}` : "";
  return `/${locale}${restPath}`;
}

export default function LanguageSwitch() {
  const messages = useMessages();
  const pathname = usePathname() ?? "/";
  const currentLocale = normalizeLocale(pathname.split("/").filter(Boolean)[0]);

  return (
    <div
      className="p-1.5 rounded-[10px] bg-[#151515] shadow-white-blur flex w-fit items-center gap-1 px-2 text-sm"
      aria-label={messages.footer.language}
    >
      {locales.map((locale) => {
        const active = locale === currentLocale;
        return (
          <a
            key={locale}
            href={withLocale(pathname, locale)}
            aria-current={active ? "page" : undefined}
            className={`px-2 py-1 rounded-md transition-colors ${
              active ? "text-white bg-white/10" : "text-neutral-400 hover:text-white"
            }`}
          >
            {locale.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
