// Scroll animation hook — once: true means animations play once and stay
// Removed once: false to prevent re-triggering lag on scroll

import { useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";

export function useScrollAnimation() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 32,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return { ref, isInView, variants };
}
