import { gsap } from "gsap/dist/gsap";
import { addSplitTextTitleAnimation } from "./Splittext/splittext";

export const createHomeAnimation = (refs: {
  picture: HTMLElement;
  title: HTMLElement;
  subtitle: HTMLElement;
  button: HTMLElement;
  gradientImage: HTMLElement;
}) => {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.from(refs.gradientImage, {
    autoAlpha: 0,
    duration: 0.8,
    scale: 2,
    ease: "power2.out",
  });
  tl.from(
    refs.picture,
    {
      autoAlpha: 0,
      y: 90,
      filter: "blur(5px)",
      duration: 1.5,
      rotate: 10,
      ease: "elastic.out(1, 0.5)",
      scale: 1.2,
    },
    "<",
  );
  addSplitTextTitleAnimation(tl, refs.title, {
    position: "<0.6",
  });
  tl.from(
    refs.subtitle,
    {
      autoAlpha: 0,
      duration: 0.8,
      y: 20,
      scale: 0.9,
    },
    "<1.2",
  );
  tl.from(
    refs.button,
    {
      autoAlpha: 0,
      duration: 0.8,
      y: 20,
      scale: 0.9,
    },
    "<",
  );

  return tl;
};

export const setupPictureHover = (zone: HTMLElement, target: HTMLElement) => {
  zone.addEventListener("mouseenter", () => {
    gsap.to(target, {
      y: -20,
      x: 20,
      rotate: 10,
      ease: "power2.out",
      duration: 0.3,
    });
  });
  zone.addEventListener("mouseleave", () => {
    gsap.to(target, {
      y: 0,
      x: 0,
      rotate: 0,
      ease: "power2.in",
      duration: 0.3,
    });
  });
};

// export const createNavBarAnimation = (refs: { container: HTMLElement }) => {
//   const tl = gsap.timeline({ defaults: { ease: "back.out(1.5)" } });

//   tl.from(refs.container, {
//     autoAlpha: 0,
//     y: -50,
//     duration: 0.8,
//     delay: 1.5,
//   });
// };
