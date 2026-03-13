import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
  addSplitTextDescriptionAnimation,
  addSplitTextTitleAnimation,
} from "./Splittext/splittext";

export const createMyJourneyAnimation = (refs: {
  container: HTMLElement;
  title: HTMLElement;
  subtitle: HTMLElement;
  cards: HTMLElement[];
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

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1280px)", () => {
    const cards = refs.cards.filter(Boolean); // sécurité

    gsap.set(cards, {
      autoAlpha: 0,
      y: 80,
      scale: 0.7,
      willChange: "transform, opacity",
    });

    gsap.to(cards, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: {
        each: 0.04,
        ease: "power2.Out",
      },
      scrollTrigger: {
        trigger: refs.container,
        start: "top center",
      },
      onComplete: () => {
        gsap.set(cards, { willChange: "auto" });
      },
    });
    return () => {};
  });
  return () => {
    split.revert();
    splitSubTitle.revert();
    mm.revert();
  };
};
