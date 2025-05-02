import * as RadixColors from "@radix-ui/colors";
import Color from "colorjs.io";

type ArrayOf12<T> = [T, T, T, T, T, T, T, T, T, T, T, T];

// prettier-ignore
const grayScaleNames = [
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
] as const;
type GrayScaleName = (typeof grayScaleNames)[number];

// prettier-ignore
const scaleNames = [
  ...grayScaleNames,
  "tomato",
  "red",
  "ruby",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "iris",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "jade",
  "green",
  "grass",
  "brown",
  "orange",
  "sky",
  "mint",
  "lime",
  "yellow",
  "amber",
] as const;
type ScaleName = (typeof scaleNames)[number];

// --- Light Mode Scales ---

export const lightColors: Record<
  ScaleName,
  ArrayOf12<Color>
> = Object.fromEntries(
  scaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}P3`]).map((str) =>
      new Color(str).to("oklch"),
    ),
  ]),
) as Record<ScaleName, ArrayOf12<Color>>;

export const lightGrayColors: Record<
  GrayScaleName,
  ArrayOf12<Color>
> = Object.fromEntries(
  grayScaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}P3`]).map((str) =>
      new Color(str).to("oklch"),
    ),
  ]),
) as Record<GrayScaleName, ArrayOf12<Color>>;

// --- Dark Mode Scales ---

export const darkColors: Record<
  ScaleName,
  ArrayOf12<Color>
> = Object.fromEntries(
  scaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}DarkP3`]).map((str) =>
      new Color(str).to("oklch"),
    ),
  ]),
) as Record<ScaleName, ArrayOf12<Color>>;

export const darkGrayColors: Record<
  GrayScaleName,
  ArrayOf12<Color>
> = Object.fromEntries(
  grayScaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}DarkP3`]).map((str) =>
      new Color(str).to("oklch"),
    ),
  ]),
) as Record<GrayScaleName, ArrayOf12<Color>>;

// --- Constants & Types ---
export const arrayOf12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;
export const darkModeEasing = [1, 0, 1, 0] as [number, number, number, number];
export const lightModeEasing = [0, 2, 0, 2] as [number, number, number, number];

// --- Export Names & Types ---
export { scaleNames, grayScaleNames };
export type { ScaleName, GrayScaleName, ArrayOf12 };
