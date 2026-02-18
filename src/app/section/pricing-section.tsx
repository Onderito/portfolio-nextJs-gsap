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
      className={`relative mx-auto w-full rounded-2xl border p-4  xl:p-6 overflow-hidden  ${
        tier.featured ? "border-[#363636] bg-[#1C1C1C]" : "border-[#363636]"
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
        <span
          style={{ cornerShape: "squircle" }}
          className="text-[#c4c4c4] text-[14px] shrink-0 bg-white/5 rounded-full p-2 border-[0.5px] border-[#363636]"
        >
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
            <BadgeCheck className="w-4 h-4 text-[#d0d0d0]" />
            <span className="text-[#d0d0d0] font-light">{feature.text}</span>
          </li>
        ))}
      </ul>
      <a
        href="https://calendly.com/ulas-onder/30min"
        target="_blank"
        rel="noreferrer"
      >
        <Button ref={null} className="mt-12 w-full h-[58px] scale-animation">
          {tier.ctaText}
        </Button>
      </a>
    </div>
  );
}

export function PricingSection() {
  const tiersToShow = pricingTiers.slice(0, 3);
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
      <p ref={refs.subtitle} className="body-text text-center mt-2">
        Choose the package that matches your goals.
      </p>
      <div
        ref={refs.cardsWrapper}
        className="grid grid-cols-1 gap-6 bg-[#1F1F1F] w-full mx-auto p-2 xl:p-4 rounded-3xl border border-[#2B2B2B] mt-10 xl:mt-14 lg:grid-cols-3"
      >
        {tiersToShow.map((tier, index) => (
          <PricingCard key={tier.title} tier={tier} isSecond={index === 2} />
        ))}
      </div>
    </section>
  );
}
