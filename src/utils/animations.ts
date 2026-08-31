import type { Variants } from 'framer-motion';

export const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]; // Custom cubic-bezier for ultra-smooth easing

export const transitionDefault = {
  duration: 0.8,
  ease: PREMIUM_EASE,
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionDefault,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionDefault,
  },
};

export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const itemReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: PREMIUM_EASE,
    },
  },
};

export const fadeOnly: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: PREMIUM_EASE,
    },
  },
};
