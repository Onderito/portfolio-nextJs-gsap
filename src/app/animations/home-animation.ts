import gsap from "gsap";
import SplitText from "gsap/SplitText";

export const createHomeAnimation = (refs: {
  picture: HTMLElement;
  name: HTMLElement;
  title: HTMLElement;
  subtitle: HTMLElement;
  button: HTMLElement;
  gradientImage: HTMLElement;
}) => {
  const tl = gsap.timeline({ defaults: { ease: "power1.ut" } });

  const split = SplitText.create(refs.title, { type: "words, chars" });

  tl.from(refs.gradientImage, {
    autoAlpha: 0,
    duration: 1.2,
    y: 100,
    scale: 4,
  });
  tl.from(refs.picture, {
    autoAlpha: 0,
    y: 50,
    duration: 1.2,
    scale: 2,
  });
  tl.from(
    split.chars,
    {
      autoAlpha: 0,
      duration: 1,
      y: 50,
      stagger: 0.01,
    },
    "-=1"
  );
  tl.from(
    refs.subtitle,
    {
      autoAlpha: 0,
      duration: 1,
      y: 50,
    },
    "-=0.9"
  );
  tl.from(
    refs.button,
    {
      autoAlpha: 0,
      duration: 1.2,
      y: 100,
      scale: 2,
    },
    "-=0.8"
  );
  tl.from(
    refs.name,
    {
      autoAlpha: 0,
      duration: 1.2,
      y: 100,
      scale: 2,
    },
    "<"
  );

  return tl;
};

// animations/homeAnimations.ts
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
      y: 0, // je suppose que tu veux revenir à 0 ?
      scale: 1,
    });
  };

  element.addEventListener("mouseenter", handleMouseEnter);
  element.addEventListener("mouseleave", handleMouseLeave);
};
