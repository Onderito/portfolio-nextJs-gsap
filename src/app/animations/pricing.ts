import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
  addSplitTextDescriptionAnimation,
  addSplitTextTitleAnimation,
} from "./Splittext/splittext";

export const createPricingAnimation = (refs: {
  container: HTMLElement;
  title: HTMLElement;
  subtitle: HTMLElement;
  cardsWrapper: HTMLElement;
}) => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: refs.container,
      start: "top bottom-=200",
      end: "top center",
    },
  });

  const split = addSplitTextTitleAnimation(tl, refs.title, {
    tween: { filter: "none" },
  });
  const splitSubTitle = addSplitTextDescriptionAnimation(tl, refs.subtitle, {
    tween: { filter: "none" },
  });

  tl.set(refs.cardsWrapper, { willChange: "transform, opacity" }, "<0.4");
  tl.from(
    refs.cardsWrapper,
    {
      autoAlpha: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    },
    "<"
  );
  tl.set(refs.cardsWrapper, { willChange: "auto" });

  return () => {
    split.revert();
    splitSubTitle.revert();
  };
};
