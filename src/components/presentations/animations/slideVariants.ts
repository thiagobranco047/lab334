import type { SlideType } from "@/data/presentations/types";

const ease = [0.22, 1, 0.36, 1] as const;

export type SlideMotionVariants = {
  enter: Record<string, number>;
  center: Record<string, number>;
  exit: Record<string, number>;
  transition: { duration: number; ease: readonly [number, number, number, number] };
};

export const slideMotionByType: Record<SlideType, SlideMotionVariants> = {
  cover: {
    enter: { opacity: 0, scale: 0.97, y: 12 },
    center: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.01, y: -20 },
    transition: { duration: 0.65, ease },
  },
  text: {
    enter: { opacity: 0, y: 36 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -24 },
    transition: { duration: 0.5, ease },
  },
  pillar: {
    enter: { opacity: 0, x: -32 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 24 },
    transition: { duration: 0.55, ease },
  },
  investment: {
    enter: { opacity: 0, y: 28 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease },
  },
  cta: {
    enter: { opacity: 0, scale: 0.96, y: 16 },
    center: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.98, y: -16 },
    transition: { duration: 0.55, ease },
  },
  table: {
    enter: { opacity: 0, y: 24 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 },
    transition: { duration: 0.45, ease },
  },
  quote: {
    enter: { opacity: 0, x: 28 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.55, ease },
  },
  stats: {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.45, ease },
  },
  deliverable: {
    enter: { opacity: 0, y: 28 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease },
  },
  investmentTable: {
    enter: { opacity: 0, y: 24 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 },
    transition: { duration: 0.5, ease },
  },
  package: {
    enter: { opacity: 0, scale: 0.97, y: 16 },
    center: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.01, y: -16 },
    transition: { duration: 0.55, ease },
  },
};

export function getSlideMotion(type: SlideType = "text"): SlideMotionVariants {
  return slideMotionByType[type];
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};
