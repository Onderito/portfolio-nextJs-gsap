import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Ulas Önder",
  description:
    "Terms of Service for the personal portfolio website of Ulas Önder. These terms govern access to and use of the website and its content.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Ulas Önder",
    description:
      "Terms governing the use of the personal portfolio website of Ulas Önder.",
    url: "/terms-of-service",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Ulas Önder",
    description:
      "Terms governing the use of the personal portfolio website of Ulas Önder.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-neutral-400">
          Last updated: <time dateTime="2025-01-01">December 2025</time>
        </p>
      </header>

      <section className="space-y-8 text-base leading-7 text-neutral-200">
        <p>
          This website is a personal portfolio owned and operated by{" "}
          <strong className="font-semibold text-neutral-100">Ulas Önder</strong>
          . By accessing or using this website, you agree to be bound by these
          Terms of Service.
        </p>

        <div>
          <h2 className="text-lg font-semibold text-neutral-100">
            1. Purpose of the Website
          </h2>
          <p className="mt-2">
            This website is provided for informational and professional
            presentation purposes only. It showcases projects, skills, and work
            experience.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-100">
            2. Intellectual Property
          </h2>
          <p className="mt-2">
            All content on this website, including but not limited to text,
            code, designs, images, and animations, is the property of{" "}
            <strong className="font-semibold text-neutral-100">
              Ulas Önder
            </strong>{" "}
            unless otherwise stated. Any reproduction, distribution, or use
            without prior written permission is prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-100">
            3. Acceptable Use
          </h2>
          <p className="mt-2">
            You agree to use this website only for lawful purposes and in a way
            that does not infringe the rights of others or restrict or inhibit
            their use of the website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-100">
            4. Limitation of Liability
          </h2>
          <p className="mt-2">
            The content of this website is provided “as is” without warranties
            of any kind.{" "}
            <strong className="font-semibold text-neutral-100">
              Ulas Önder
            </strong>{" "}
            shall not be liable for any damages resulting from the use or
            inability to use this website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-100">
            5. External Links
          </h2>
          <p className="mt-2">
            This website may contain links to external websites. These links are
            provided for convenience only, and no responsibility is assumed for
            the content or practices of third-party websites.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-100">
            6. Changes to These Terms
          </h2>
          <p className="mt-2">
            These Terms of Service may be updated at any time. Continued use of
            the website after changes constitutes acceptance of the revised
            terms.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-100">
            7. Governing Law
          </h2>
          <p className="mt-2">
            These Terms shall be governed by and construed in accordance with
            the laws of France.
          </p>
        </div>
      </section>
    </main>
  );
}
