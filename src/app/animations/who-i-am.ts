import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { addSplitTextTitleAnimation } from "./Splittext/splittext";

export const createWhoIAmAnimation = (refs: {
  container: HTMLElement;
  title: HTMLElement;
  picture: HTMLElement;
  presentationCard: HTMLElement;
  toolkitCard: HTMLElement;
  hireMeCard: HTMLElement;
  linkedinCard: HTMLElement;
  xCard: HTMLElement;
  devCard: HTMLElement;
}) => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: refs.container,
      start: "top-=300 center",
    },
  });
  const split = addSplitTextTitleAnimation(tl, refs.title, {
    tween: { duration: 0.9, stagger: 0.02 },
  });

  const allElements = [
    refs.picture,
    refs.presentationCard,
    refs.toolkitCard,
    refs.hireMeCard,
    refs.linkedinCard,
    refs.xCard,
    refs.devCard,
  ];

  const setInitialStates = () => {
    gsap.set(allElements, {
      willChange: "transform, opacity",
      autoAlpha: 0,
      transformOrigin: "center center",
    });
    gsap.set(refs.picture, {
      yPercent: -180,
      xPercent: -50,
      rotate: -6,
      scale: 0.6,
    });
    gsap.set(refs.presentationCard, {
      yPercent: -520,
      xPercent: 70,
      rotate: 4,
      scale: 0.6,
    });
    gsap.set(refs.toolkitCard, {
      yPercent: -580,
      xPercent: 110,
      rotate: -4,
      scale: 0.6,
    });
    gsap.set(refs.hireMeCard, {
      yPercent: -420,
      xPercent: 70,
      rotate: -6,
      scale: 0.6,
    });
    gsap.set(refs.linkedinCard, {
      yPercent: -520,
      xPercent: -300,
      rotate: 6,
      scale: 0.6,
    });
    gsap.set(refs.xCard, {
      yPercent: -450,
      xPercent: -400,
      rotate: 6,
      scale: 0.6,
    });
    gsap.set(refs.devCard, {
      yPercent: -440,
      xPercent: 70,
      rotate: -6,
      scale: 0.6,
    });
  };

  const cardsAnimConfig = [
    { ref: refs.picture, scale: 0.8 },
    { ref: refs.presentationCard, scale: 0.8 },
    { ref: refs.toolkitCard, scale: 0.8 },
    { ref: refs.hireMeCard, scale: 0.8 },
    { ref: refs.linkedinCard, scale: 0.8 },
    { ref: refs.xCard, scale: 0.8 },
    { ref: refs.devCard, scale: 0.8 },
  ];

  const mm = gsap.matchMedia();

  mm.add("(max-width: 1279px)", () => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      scrollTrigger: {
        trigger: refs.container,
        start: "top bottom-=120",
      },
    });

    cardsAnimConfig.forEach(({ ref, scale }) => {
      tl.fromTo(
        ref,
        {
          scale,
          autoAlpha: 0,
          transformOrigin: "center center",
        },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.9,
        },
        "<",
      );
    });

    tl.set(allElements, { willChange: "auto" });

    return tl;
  });

  mm.add("(min-width: 1280px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: refs.container,
        start: "top-=580 center",
        end: "bottom 90%",
        scrub: 1,
        invalidateOnRefresh: true,
        onRefreshInit: setInitialStates,
      },
    });

    tl.to(
      allElements,
      { autoAlpha: 1, yPercent: 0, xPercent: 0, rotate: 0, scale: 1 },
      0.01,
    );

    tl.set(allElements, { willChange: "auto" });

    return tl;
  });
  return () => {
    mm.revert();
    split.revert();
  };
};
