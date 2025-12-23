import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ulas Önder",
  description:
    "Privacy Policy for the personal portfolio website of Ulas Önder. This website does not collect personal data and does not use cookies or analytics.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Ulas Önder",
    description:
      "This website does not collect personal data and does not use cookies or analytics.",
    url: "/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Ulas Önder",
    description:
      "This website does not collect personal data and does not use cookies or analytics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-neutral-400">
          Last updated: <time dateTime="2025-01-01">December 2025</time>
        </p>
      </header>

      <section className="space-y-8 text-base leading-7 text-neutral-200">
        <p>
          This website is a personal portfolio owned and operated by{" "}
          <strong className="font-semibold text-neutral-100">Ulas Önder</strong>
          .
        </p>

        <div>
          <h2 className="text-lg font-semibold text-neutral-100">
            1. Data Collection
          </h2>
          <p className="mt-2 text-neutral-200">
            This website does <strong>not</strong> collect, store, or process
            any personal data. There are no contact forms, user accounts,
            analytics tools, or tracking technologies in use.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-100">2. Cookies</h2>
          <p className="mt-2 text-neutral-200">
            This website does <strong>not</strong> use cookies, tracking pixels,
            or similar technologies.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-100">
            3. Third-Party Services
          </h2>
          <p className="mt-2 text-neutral-200">
            No third-party services are used to collect or process user data.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-100">
            4. Data Security
          </h2>
          <p className="mt-2 text-neutral-200">
            Since no personal data is collected, no personal information is
            stored or transmitted.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-100">
            5. Changes to This Policy
          </h2>
          <p className="mt-2 text-neutral-200">
            If this website later implements features that involve personal data
            collection, this Privacy Policy will be updated accordingly.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-100">6. Contact</h2>
          <p className="mt-2 text-neutral-200">
            If you have any questions regarding this Privacy Policy, you may
            contact:{" "}
            <strong className="font-semibold text-neutral-100">
              Ulas Önder
            </strong>
          </p>
        </div>
      </section>
    </main>
  );
}
