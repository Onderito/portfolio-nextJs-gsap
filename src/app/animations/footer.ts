import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const createFooterAnimation = (refs: { container: HTMLElement }) => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1280px)", () => {
    gsap.from(refs.container, {
      autoAlpha: 0,
      y: 50,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: refs.container,
        start: "top bottom-=200",
        end: "top center",
        once: true,
      },
    });
  });
  return () => {
    mm.revert();
  };
};
