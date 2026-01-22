import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

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

  const split = SplitText.create(refs.title, { type: "words, chars" });

  gsap.from(split.chars, {
    autoAlpha: 0,
    y: 40,
    duration: 0.9,
    stagger: 0.02,
    ease: "power3.out",
    filter: "blur(5px)",
    scrollTrigger: {
      trigger: refs.container,
      start: "top-=300 center",
      markers: true,
    },
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
    gsap.set(allElements, { willChange: "transform" });
    gsap.set(refs.picture, { yPercent: -180, xPercent: -50, rotate: -6, scale: 0.6 });
    gsap.set(refs.presentationCard, { yPercent: -520, xPercent: 70, rotate: 4, scale: 0.6 });
    gsap.set(refs.toolkitCard, { yPercent: -580, xPercent: 110, rotate: -4, scale: 0.6 });
    gsap.set(refs.hireMeCard, { yPercent: -420, xPercent: 70, rotate: -6, scale: 0.6 });
    gsap.set(refs.linkedinCard, { yPercent: -520, xPercent: -300, rotate: 6, scale: 0.6 });
    gsap.set(refs.xCard, { yPercent: -450, xPercent: -400, rotate: 6, scale: 0.6 });
    gsap.set(refs.devCard, { yPercent: -440, xPercent: 70, rotate: -6, scale: 0.6 });
  };

   const tl2 = gsap.timeline({ defaults: {ease: "power4.inOut", }});

   const cardsAnimConfig = [
    { ref: refs.picture, x: -240  },
    { ref: refs.presentationCard, x: -140 },
    { ref: refs.toolkitCard, x: -220 },
    { ref: refs.hireMeCard, x: -20 },
    { ref: refs.linkedinCard, x: -40 },
    { ref: refs.xCard, x: -20 },
    { ref: refs.devCard, x: -40 },
  ];

  cardsAnimConfig.forEach(({ ref, x }) => {
  tl2.from(ref, {
    x,
    autoAlpha: 0,
    duration: 1.2,
  }, "<");
});

  const mm = gsap.matchMedia();

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

    tl.to(allElements, {yPercent: 0, xPercent: 0, rotate: 0, scale: 1, }, 0.01);

    tl.set(allElements, { willChange: "auto" });

    return tl;
  });
  return () => {
    mm.revert();
    split.revert();
  };
};
