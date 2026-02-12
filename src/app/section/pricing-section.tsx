"use client";

import { pricingTiers, type PricingTier } from "@/app/data/pricing-data";
import Button from "../ui/button";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { createPricingAnimation } from "../animations/pricing";

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
      className={`relative w-full max-w-[520px] rounded-2xl border p-8 overflow-hidden  ${
        tier.featured ? "border-[#0f0f0f] bg-[#1C1C1C]" : "border-[#363636]"
      }`}
    >
      {isSecond && (
        <Image
          src="/color-gradient.svg"
          alt=""
          width={1200}
          height={1200}
          className="absolute blur-3xl inset-x-0 -bottom-30"
        />
      )}

      <div className="flex items-center justify-between gap-6">
        <h3 className="text-white heading-3 font-black leading-tight">
          {tier.title}
        </h3>
        <span className="text-[#c4c4c4] text-[14px] shrink-0">
          {tier.duration}
        </span>
      </div>
      <p className="mt-4 text-[#d0d0d0] text-[16px] leading-[21px]">
        {tier.description}
      </p>
      <div className="flex items-end mt-10">
        <p className="text-[48px] font-black text-white">{tier.price}</p>
      </div>
      <ul className="mt-10 flex flex-col gap-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-[16px]">
            <BadgeCheck className="w-4 h-4 text-[#c4c4c4]" />
            <span className="text-[#c4c4c4] font-light">{feature.text}</span>
          </li>
        ))}
      </ul>
      <Button ref={null} className="mt-12 w-full h-[58px] scale-animation">
        {tier.ctaText}
      </Button>
    </div>
  );
}

export function PricingSection() {
  const tiersToShow = pricingTiers.slice(0, 2);
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
    <section ref={refs.container} className="w-full">
      <h2 ref={refs.title} className="heading-2 text-white text-center">
        Let’s work together
      </h2>
      <p
        ref={refs.subtitle}
        className="body-text text-center mt-2 md:mt-4 xl:mt-6 "
      >
        Choose the package that matches your goals.
      </p>
      <div
        ref={refs.cardsWrapper}
        className="flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-center bg-[#1F1F1F] w-fit mx-auto p-4 rounded-3xl border border-[#2B2B2B] mt-10 xl:mt-14 "
      >
        {tiersToShow.map((tier, index) => (
          <PricingCard key={tier.title} tier={tier} isSecond={index === 1} />
        ))}
      </div>
    </section>
  );
}
