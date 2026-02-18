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

  const split = addSplitTextTitleAnimation(tl, refs.title);
  const splitSubTitle = addSplitTextDescriptionAnimation(tl, refs.subtitle);
  const state = { value: 0 };

  gsap.to(state, {});

  tl.from(
    refs.cardsWrapper,
    {
      autoAlpha: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    },
    "<0.4",
  );

  return () => {
    split.revert();
    splitSubTitle.revert();
  };
};
