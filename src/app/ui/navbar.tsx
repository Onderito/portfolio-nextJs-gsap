"use client";

import Link from "next/link";
import { useLocale, useMessages } from "../i18n/use-messages";
import LanguageSwitch from "./language-switch";
import { gsap } from "gsap/dist/gsap";
import { useLayoutEffect, useRef } from "react";
import { createNavBarAnimation } from "../animations/home-animation";

const sectionIds = ["home", "about", "projects", "pricing"] as const;

export default function Navbar() {
  const refs = {
    container: useRef<HTMLDivElement>(null),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createNavBarAnimation({
        container: refs.container.current!,
      });
    }, refs.container);

    return () => ctx.revert();
  }, []);
  const locale = useLocale();
  const messages = useMessages();

  const labels = messages.footer.navs;
  const labelsById = {
    home: labels[0],
    about: labels[1],
    projects: labels[2],
    journey: labels[3],
    process: labels[4],
    pricing: labels[5],
  } as const;

  const items = sectionIds
    .map((id) => ({ id, label: labelsById[id] }))
    .filter((item) => Boolean(item.label));

  return (
    <div
      ref={refs.container}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-60 w-[calc(100%-2rem)] max-w-3xl"
    >
      <nav
        className="webkit-clip rounded-2xl bg-[#0f0f0f]/70 border border-white/10 backdrop-blur-md shadow-white-blur px-3 py-2"
        aria-label="Primary"
      >
        <div className="flex items-center gap-3">
          <Link
            href={`/${locale}#home`}
            className="shrink-0 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[12px] text-neutral-200"
            aria-label={labelsById.home ?? "Home"}
          >
            UÖ
          </Link>

          <div className="flex-1 flex justify-center">
            <div className="hidden sm:flex items-center gap-4 text-sm text-neutral-300">
              {items.map((item) => (
                <Link
                  key={item.id}
                  href={`/${locale}#${item.id}`}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <a
              href="https://calendly.com/ulas-onder/30min"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex text-sm text-neutral-200 hover:text-white transition-colors px-3 py-2 rounded-xl bg-white/5 border border-white/10"
            >
              {messages.hero.cta}
            </a>
            <LanguageSwitch />
          </div>
        </div>
      </nav>
    </div>
  );
}
