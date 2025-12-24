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

export const metadata: Metadata = {
  title: "ondermotion-dev",
  description: "my portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${gloria.variable}`}>
      <body>
        <main>
          <ClientWrapper>{children}</ClientWrapper>
        </main>
      </body>
    </html>
  );
}
