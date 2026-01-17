"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      wheelMultiplier: 1, 
      touchMultiplier: 2,
      infinite: false,
      syncTouch: true, 
      syncTouchLerp: 0.075,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return lenisRef;
};

export default useLenis;