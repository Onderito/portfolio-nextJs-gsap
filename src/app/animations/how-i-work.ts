import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

export const createHowIWorkAnimation = (refs: {
  container: HTMLElement;
  title: HTMLElement;
  subtitle: HTMLElement;
  cards: HTMLElement[];
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const split = SplitText.create(refs.title, { type: "words, chars" });
  const splitSubtile = SplitText.create(refs.subtitle, {
    type: "words, chars",
  });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: refs.container,
      start: "top bottom-=200",
      end: "top center",
      scrub: 1,
    },
  });
  tl.from(split.chars, {
    autoAlpha: 0,
    y: 10,
    stagger: 0.04,
    filter: "blur(10px)",
  });
  tl.from(
    splitSubtile.chars,
    {
      autoAlpha: 0,
      y: 10,
      stagger: 0.04,
      filter: "blur(10px)",
    },
    "-=0.2"
  );

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1280px)", () => {
    const cards = refs.cards.filter(Boolean); // sécurité

    gsap.set(cards, { autoAlpha: 0, y: 60, scale: 0.8, filter: "blur(10px)" });

    gsap.to(cards, {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      scale: 1,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: refs.container,
        start: "top center",
        end: "top 25%",
        scrub: true,
      },
    });
    return () => {};
  });
  return () => {
    split.revert();
    mm.revert();
  };
};
