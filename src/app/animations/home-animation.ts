import { gsap } from "gsap/dist/gsap";
import { addSplitTextTitleAnimation } from "./Splittext/splittext";

export const createHomeAnimation = (refs: {
  picture: HTMLElement;
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
    scale: 6,
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
    "0.15", // cette anim commence après 300ms après la précédente.
  );
  addSplitTextTitleAnimation(tl, refs.title, {
    position: "-=0.4",
    tween: { filter: "none" },
  });
  tl.from(
    refs.subtitle,
    {
      autoAlpha: 0,
      duration: 0.8,
      y: 40,
    },
    "-=0.5",
  );
  tl.from(
    refs.button,
    {
      autoAlpha: 0,
      duration: 0.8,
      y: 40,
      scale: 1.1,
    },
    "-=0.9",
  );

  return tl;
};

export const setupPictureHover = (element: HTMLElement) => {
  const handleMouseEnter = () => {
    gsap.to(element, {
      duration: 0.15,
      y: -25,
      scale: 1.1,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      duration: 0.15,
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

export const createNavBarAnimation = (refs: { container: HTMLElement }) => {
  const tl = gsap.timeline({ defaults: { ease: "power2.Out" } });

  tl.from(refs.container, {
    autoAlpha: 0,
    y: -50,
    duration: 0.8,
    delay: 2,
  });
};
