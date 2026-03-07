import type { Metadata } from "next";
import { getMessages } from "../../i18n/messages";
import type { Locale } from "../../i18n/locales";

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  const messages = getMessages(params.locale);
  const terms = messages.legal.terms;

  const path = `/${params.locale}/terms-of-service`;

  return {
    title: terms.metaTitle,
    description: terms.metaDescription,
    alternates: {
      canonical: path,
      languages: {
        fr: "/fr/terms-of-service",
        en: "/en/terms-of-service",
      },
    },
    openGraph: {
      title: terms.metaTitle,
      description: terms.metaDescription,
      url: path,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function TermsOfServicePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const messages = getMessages(params.locale);
  const terms = messages.legal.terms;

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">{terms.title}</h1>
        <p className="mt-3 text-sm text-neutral-400">
          {messages.legal.lastUpdatedLabel}:{" "}
          <time dateTime="2025-12-01">{messages.legal.lastUpdatedDate}</time>
        </p>
      </header>

      <section className="space-y-8 text-base leading-7 text-neutral-200">
        <p>
          {terms.intro.split("Ulas Önder")[0]}
          <strong className="font-semibold text-neutral-100">Ulas Önder</strong>
          {terms.intro.split("Ulas Önder")[1] ?? ""}
        </p>

        {terms.sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-lg font-semibold text-neutral-100">
              {section.title}
            </h2>
            <p className="mt-2">{section.body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

