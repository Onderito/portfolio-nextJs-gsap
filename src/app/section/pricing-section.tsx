"use client";

import { getPricingTiers, type PricingTier } from "@/app/data/pricing-data";
import Button from "../ui/button";
import { BadgeCheck } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { createPricingAnimation } from "../animations/pricing";
import { useLocale, useMessages } from "../i18n/use-messages";
import AuroraOverlay from "../ui/aurora-overlay";

function PricingCard({
  tier,
  isSecond,
}: {
  tier: PricingTier;
  isSecond: boolean;
}) {
  const features = Array.isArray(tier?.features) ? tier.features : [];

  return (
    <div
      className={`relative mx-auto w-full rounded-2xl border p-4 xl:p-5 overflow-hidden webkit-clip flex flex-col xl:min-h-[630px] ${
        tier.featured ? "border-[#363636] bg-[#1C1C1C]" : "border-[#363636]"
      }`}
    >
      {isSecond ? <AuroraOverlay className="opacity-95" /> : null}

      <div className="relative z-10 flex items-center justify-between gap-4 xl:gap-3">
        <h3 className="text-white heading-3 font-black leading-tight">
          {tier.title}
        </h3>
        <span
          className="text-[#c4c4c4] text-[14px] xl:text-[13px] shrink-0 bg-white/5 rounded-full p-2 xl:px-2.5 xl:py-1.5 border-[0.5px] border-[#363636]"
        >
          {tier.duration}
        </span>
      </div>
      <p className="relative z-10 mt-4 text-[#d0d0d0] text-[16px] xl:text-[15px] leading-[21px] min-h-[63px] xl:min-h-[56px]">
        {tier.description}
      </p>
      <div className="relative z-10 flex items-end mt-10 xl:mt-8">
        <p className="text-[48px] xl:text-[42px] font-black text-white">
          {tier.price}
        </p>
      </div>
      <ul className="relative z-10 mt-10 xl:mt-8 flex flex-col gap-3 xl:gap-2.5">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-3 xl:gap-2.5 text-[16px] xl:text-[15px]"
          >
            <BadgeCheck className="w-4 h-4 text-[#d0d0d0]" />
            <span className="text-[#d0d0d0] font-light">{feature.text}</span>
          </li>
        ))}
      </ul>
      <div className="relative z-10 mt-12 xl:mt-auto xl:pt-10">
        <a
          href="https://calendly.com/ulas-onder/30min"
          target="_blank"
          rel="noreferrer"
        >
          <Button ref={null} className="w-full h-[58px] xl:h-[54px] scale-animation">
            {tier.ctaText}
          </Button>
        </a>
      </div>
    </div>
  );
}

export function PricingSection() {
  const messages = useMessages();
  const locale = useLocale();
  const tiersToShow = getPricingTiers(locale).slice(0, 3);
  const refs = {
    container: useRef<HTMLElement>(null),
    title: useRef<HTMLHeadingElement>(null),
    subtitle: useRef<HTMLParagraphElement>(null),
    cardsWrapper: useRef<HTMLDivElement>(null),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createPricingAnimation({
        container: refs.container.current!,
        title: refs.title.current!,
        subtitle: refs.subtitle.current!,
        cardsWrapper: refs.cardsWrapper.current!,
      });
    }, refs.container);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="pricing"
      ref={refs.container}
      className="w-full scroll-mt-24"
    >
      <h2 ref={refs.title} className="heading-2 text-white text-center">
        {messages.pricing.title}
      </h2>
      <p ref={refs.subtitle} className="body-text text-center mt-2">
        {messages.pricing.subtitle}
      </p>
      <div
        ref={refs.cardsWrapper}
        className="grid grid-cols-1 gap-6 xl:gap-4 bg-[#1F1F1F] w-full mx-auto p-2 xl:p-3 rounded-3xl border border-[#2B2B2B] mt-10 xl:mt-12 lg:grid-cols-3"
      >
        {tiersToShow.map((tier, index) => (
          <PricingCard key={tier.title} tier={tier} isSecond={index === 2} />
        ))}
      </div>
    </section>
  );
}
