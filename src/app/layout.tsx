import type { Metadata } from "next";
import { Inter, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ui/client-wrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const gloria = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloria",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ulas Önder, Front-end Developer & Designer",
    template: "%s",
  },
  description:
    "High-end websites for unique projects. Fast, refined and conversion-focused experiences built with Next.js, Tailwind and GSAP.",
  openGraph: {
    title: "Ulas Önder, Front-end Developer & Designer",
    description:
      "High-end websites for unique projects. Fast, refined and conversion-focused experiences built with Next.js, Tailwind and GSAP.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulas Önder, Front-end Developer & Designer",
    description:
      "High-end websites for unique projects. Fast, refined and conversion-focused experiences built with Next.js, Tailwind and GSAP.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${gloria.variable}`}>
      <body>
        <main>
          <ClientWrapper>{children}</ClientWrapper>
        </main>
      </body>
    </html>
  );
}
