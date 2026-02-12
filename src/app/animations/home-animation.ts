import { gsap } from "gsap/dist/gsap";
import { addSplitTextTitleAnimation } from "./Splittext/splittext";

export const createHomeAnimation = (refs: {
  picture: HTMLElement;
  name: HTMLElement;
  title: HTMLElement;
  subtitle: HTMLElement;
  button: HTMLElement;
  gradientImage: HTMLElement;
}) => {
  const tl = gsap.timeline({ defaults: { ease: "power2.Out" } });

  tl.from(refs.gradientImage, {
    autoAlpha: 0,
    duration: 0.8,
    y: 100,
    scale: 4,
  });
  tl.from(
    refs.picture,
    {
      autoAlpha: 0,
      y: 100,
      duration: 0.8,
      rotate: 10,
      scale: 1.2,
    },
    "0.5"
  );
  tl.from(
    refs.name,
    {
      autoAlpha: 0,
      y: 100,
      duration: 0.8,
      rotate: 10,
      scale: 1.2, 
    },
    "<"
  );
  const split = addSplitTextTitleAnimation(tl, refs.title, {
    position: "-=0.2",
    tween: { filter: "none", ease: "power3.out" },
  });
  tl.from(
    refs.subtitle,
    {
      autoAlpha: 0,
      duration: 0.8,
      y: 40,
      ease: "power3.out"
    },
    "-=1.2"
  );
  tl.from(
    refs.button,
    {
      autoAlpha: 0,
      duration: 0.8,
      y: 40,
      scale: 1.1,
      ease: "power3.out"
    },
    "-=0.9"
  );

  tl.add(() => {
    split.revert();
  });

  return tl;
};


export const setupPictureHover = (element: HTMLElement) => {
  const handleMouseEnter = () => {
    gsap.to(element, {
      duration: 0.8,
      y: -25,
      scale: 1.1,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      duration: 0.8,
      y: 0,
      scale: 1,
    });
  };

  element.addEventListener("mouseenter", handleMouseEnter);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mouseenter", handleMouseEnter);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};
