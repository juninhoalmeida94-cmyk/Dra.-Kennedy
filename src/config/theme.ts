export const theme = {
  colors: {
    warmWhite: "#F8F7F4",
    white: "#FFFFFF",
    graphite: "#2E2E2E",
    graphiteDeep: "#1A1A1A",
    lightGray: "#EAE7E2",
    accent: "#f0bf4c",
    grayMedium: "#8A8983",
    grayText: "#55534D",
    curtain: "#0B0B0C",
    curtainText: "#FAFAF8",
    hairline: "rgba(46,46,46,0.14)",
    hairlineDark: "rgba(248,247,244,0.18)",
  },
  motion: {
    ease: "cubic-bezier(.22,.61,.36,1)",
  },
} as const;

export const themeCssVariables = {
  "--warm-white": theme.colors.warmWhite,
  "--white": theme.colors.white,
  "--graphite": theme.colors.graphite,
  "--graphite-deep": theme.colors.graphiteDeep,
  "--light-gray": theme.colors.lightGray,
  "--gold": theme.colors.accent,
  "--grey-mid": theme.colors.grayMedium,
  "--grey-text": theme.colors.grayText,
  "--hairline": theme.colors.hairline,
  "--hairline-dark": theme.colors.hairlineDark,
  "--curtain": theme.colors.curtain,
  "--curtain-text": theme.colors.curtainText,
  "--ease": theme.motion.ease,
} as CSSProperties;
import type { CSSProperties } from "react";
