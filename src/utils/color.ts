import BezierEasing from "bezier-easing";
import Color from "colorjs.io";
import tinycolor from "tinycolor2";
import {
  type ArrayOf12,
  arrayOf12,
  darkModeEasing,
  grayScaleNames,
  lightModeEasing,
} from "./color-scale-references";

/**
 * Sets CSS variables for the H, S, L, and Alpha components of a given color.
 * @param prefix - The prefix for the CSS variables (e.g., "primary", "grey-dark").
 * @param color - The color string (e.g., "#ff0000", "rgb(255,0,0)").
 */
export const setHSLVariables = (prefix: string, color: string): void => {
  const root = document.documentElement;
  if (!root || !color) return; // Basic guard

  try {
    const tc = tinycolor(color);
    if (!tc.isValid()) {
      console.warn(
        `Invalid color passed to setHSLVariables for prefix ${prefix}: ${color}`,
      );
      return;
    }
    const hsl = tc.toHsl();
    root.style.setProperty(`--${prefix}-h`, Math.round(hsl.h).toString());
    root.style.setProperty(`--${prefix}-s`, `${Math.round(hsl.s * 100)}%`);
    root.style.setProperty(`--${prefix}-l`, `${Math.round(hsl.l * 100)}%`);
    // Use original alpha, not hsl.a which might be inaccurate for some formats
    root.style.setProperty(`--${prefix}-a`, `${tc.getAlpha()}`);
  } catch (error) {
    console.error(
      `Error processing color in setHSLVariables for prefix ${prefix}:`,
      color,
      error,
    );
  }
};

export function getScaleFromColor(
  source: Color,
  scales: Record<string, ArrayOf12<Color>>,
  backgroundColor: Color,
): ArrayOf12<Color> {
  const allColors: { scale: string; color: Color; distance: number }[] = [];

  Object.entries(scales).forEach(([name, scale]) => {
    for (const color of scale) {
      const distance = source.deltaEOK(color);
      allColors.push({ scale: name, distance, color });
    }
  });

  allColors.sort((a, b) => a.distance - b.distance);

  // Remove non-unique scales
  const closestColors = allColors.filter(
    (color, i, arr) =>
      i === arr.findIndex((value) => value.scale === color.scale),
  );

  // If the next two closest colors are both grays, remove the second one until it's not a gray anymore.
  const grayScaleNamesStr = grayScaleNames as readonly string[];
  const allAreGrays = closestColors.every((color) =>
    grayScaleNamesStr.includes(color.scale),
  );
  if (
    !allAreGrays &&
    closestColors.length > 1 &&
    grayScaleNamesStr.includes(closestColors[0].scale)
  ) {
    while (
      closestColors.length > 1 &&
      grayScaleNamesStr.includes(closestColors[1].scale)
    ) {
      closestColors.splice(1, 1);
    }
  }

  // Handle cases where only one unique scale was found
  if (closestColors.length < 2) {
    // If only one scale is found, use it directly
    const scaleA = scales[closestColors[0].scale];
    const scale = arrayOf12.map((i) =>
      new Color(scaleA[i]).to("oklch"),
    ) as ArrayOf12<Color>;
    // Adjust Hue and Chroma
    adjustScaleChromaHue(scale, source);
    // Adjust Lightness based on background
    return adjustScaleLightness(scale, backgroundColor);
  }

  const colorA = closestColors[0];
  const colorB = closestColors[1];

  // Perform trigonometric calculations to find the mix ratio
  const a = colorB.distance;
  const b = colorA.distance;
  const c = colorA.color.deltaEOK(colorB.color);

  const cosA = (b ** 2 + c ** 2 - a ** 2) / (2 * b * c);
  const cosB = (a ** 2 + c ** 2 - b ** 2) / (2 * a * c);

  let ratio = 0;
  // Ensure angles are valid before calculating tan
  if (Math.abs(cosA) <= 1 && Math.abs(cosB) <= 1) {
    const radA = Math.acos(cosA);
    const sinA = Math.sin(radA);
    const radB = Math.acos(cosB);
    const sinB = Math.sin(radB);

    // Check for division by zero
    if (sinA !== 0 && sinB !== 0) {
      const tanC1 = cosA / sinA;
      const tanC2 = cosB / sinB;
      if (tanC2 !== 0) {
        ratio = Math.max(0, tanC1 / tanC2) * 0.5;
      }
    }
  }

  // Mix the two closest scales
  const scaleA = scales[colorA.scale];
  const scaleB = scales[colorB.scale];
  const scale = arrayOf12.map((i) =>
    new Color(Color.mix(scaleA[i], scaleB[i], ratio)).to("oklch"),
  ) as ArrayOf12<Color>;

  // Adjust Hue and Chroma
  adjustScaleChromaHue(scale, source);

  // Adjust Lightness based on background
  return adjustScaleLightness(scale, backgroundColor);
}

// Helper function to adjust Chroma and Hue
function adjustScaleChromaHue(scale: ArrayOf12<Color>, source: Color): void {
  const baseColor = scale
    .slice()
    .sort((a: Color, b: Color) => source.deltaEOK(a) - source.deltaEOK(b))[0];

  // Note the chroma difference between the source color and the base color
  const sourceChroma = source.coords[1];
  const baseChroma = baseColor.coords[1];
  const ratioC = baseChroma === 0 ? 1 : sourceChroma / baseChroma; // Avoid division by zero

  // Modify hue and chroma of the scale to match the source color
  scale.forEach((color: Color) => {
    // Ensure chroma doesn't become negative or excessively large
    const newChroma = Math.max(0, color.coords[1] * ratioC);
    color.coords[1] = Math.min(sourceChroma * 1.5, newChroma); // Cap chroma
    color.coords[2] = source.coords[2]; // Set hue
  });
}

// Helper function to adjust Lightness based on background and easing
function adjustScaleLightness(
  scale: ArrayOf12<Color>,
  backgroundColor: Color,
): ArrayOf12<Color> {
  const isLightMode = scale[0].coords[0] > 0.5; // Simple check based on first step lightness

  if (isLightMode) {
    const lightnessScale = scale.map(
      ({ coords }: { coords: number[] }) => coords[0],
    );
    const backgroundL = Math.max(0, Math.min(1, backgroundColor.coords[0]));
    const newLightnessScale = transposeProgressionStart(
      backgroundL,
      [1, ...lightnessScale], // Add white as the first "step"
      lightModeEasing,
    );
    newLightnessScale.shift(); // Remove the added step

    newLightnessScale.forEach((lightness: number, i: number) => {
      scale[i].coords[0] = Math.max(0, Math.min(1, lightness)); // Clamp lightness
    });
  } else {
    // Dark mode
    const ease: [number, number, number, number] = [...darkModeEasing] as [
      number,
      number,
      number,
      number,
    ];
    const referenceBackgroundColorL = scale[0].coords[0];
    const backgroundColorL = Math.max(
      0,
      Math.min(1, backgroundColor.coords[0]),
    );

    // Adjust easing if background is lighter than reference
    const ratioL =
      referenceBackgroundColorL === 0
        ? Number.POSITIVE_INFINITY
        : backgroundColorL / referenceBackgroundColorL; // Avoid division by zero

    if (ratioL > 1) {
      const maxRatio = 1.5;
      for (let i = 0; i < ease.length; i++) {
        const metaRatio = (ratioL - 1) * (maxRatio / (maxRatio - 1));
        ease[i] =
          ratioL > maxRatio ? 0 : Math.max(0, ease[i] * (1 - metaRatio));
      }
    }

    const lightnessScale = scale.map(
      ({ coords }: { coords: number[] }) => coords[0],
    );
    const newLightnessScale = transposeProgressionStart(
      backgroundColorL,
      lightnessScale,
      ease,
    );

    newLightnessScale.forEach((lightness: number, i: number) => {
      scale[i].coords[0] = Math.max(0, Math.min(1, lightness)); // Clamp lightness
    });
  }
  return scale;
}

export function getStep9Colors(
  scale: ArrayOf12<Color>,
  accentBaseColor: Color,
): [Color, Color] {
  const referenceBackgroundColor = scale[0];
  const distance = accentBaseColor.deltaEOK(referenceBackgroundColor) * 100;

  // Handle potential NaN distance
  if (Number.isNaN(distance) || distance < 25) {
    return [scale[8].clone(), getTextColor(scale[8])];
  }

  return [accentBaseColor.clone(), getTextColor(accentBaseColor)];
}

export function getButtonHoverColor(
  source: Color,
  scales: ArrayOf12<Color>[],
): Color {
  const [L, C, H] = source.coords;
  // Adjust lightness slightly - avoid division by zero/infinity
  const Lmodifier = L === -0.1 ? 0.03 / 0.001 : 0.03 / (L + 0.1);
  const newL = L > 0.4 ? L - Lmodifier : L + Lmodifier;
  // Adjust chroma slightly in light mode if hue is defined
  const newC = L > 0.4 && !Number.isNaN(H) ? C * 0.93 : C;
  const buttonHoverColor = new Color("oklch", [
    Math.max(0, Math.min(1, newL)), // Clamp lightness
    Math.max(0, newC), // Ensure non-negative chroma
    H,
  ]);

  // Find closest in-scale color to donate the chroma and hue.
  let closestColor = buttonHoverColor.clone();
  let minDistance = Number.POSITIVE_INFINITY;

  scales.forEach((scale) => {
    for (const color of scale) {
      try {
        const distance = buttonHoverColor.deltaEOK(color);
        if (distance < minDistance) {
          minDistance = distance;
          closestColor = color.clone();
        }
      } catch (e) {
        // Ignore potential errors during deltaEOK calculation
        // console.error("Error calculating deltaEOK:", e);
      }
    }
  });

  buttonHoverColor.coords[1] = closestColor.coords[1]; // Chroma
  buttonHoverColor.coords[2] = closestColor.coords[2]; // Hue
  return buttonHoverColor;
}

export function getTextColor(background: Color): Color {
  const white = new Color("oklch", [1, 0, 0]);
  try {
    if (Math.abs(white.contrastAPCA(background)) < 40) {
      const [L, C, H] = background.coords;
      // Return a darker color with some chroma preserved
      return new Color("oklch", [0.25, Math.max(0.08 * C, 0.04), H]);
    }
  } catch (e) {
    // Fallback or log error if contrast calculation fails
    // console.error("Error calculating contrast:", e);
  }
  return white; // Default to white
}

export function transposeProgressionStart(
  to: number,
  arr: number[],
  curve: [number, number, number, number],
): number[] {
  const fn = BezierEasing(...curve);
  const lastIndex = arr.length - 1;
  if (lastIndex < 0) return []; // Handle empty array case

  const diff = arr[0] - to;
  return arr.map((n, i) => {
    // Avoid division by zero if lastIndex is 0 (array has one element)
    const progress = lastIndex === 0 ? 1 : 1 - i / lastIndex;
    return n - diff * fn(progress);
  });
}

export function transposeProgressionEnd(
  to: number,
  arr: number[],
  curve: [number, number, number, number],
): number[] {
  const fn = BezierEasing(...curve);
  const lastIndex = arr.length - 1;
  if (lastIndex < 0) return []; // Handle empty array case

  const diff = arr[lastIndex] - to;
  return arr.map((n, i) => {
    // Avoid division by zero if lastIndex is 0
    const progress = lastIndex === 0 ? 0 : i / lastIndex;
    return n - diff * fn(progress);
  });
}

export function toOklchString(color: Color): string {
  // Ensure color is valid before proceeding
  if (!color || typeof color.to !== "function") {
    console.warn("Invalid color passed to toOklchString");
    return "oklch(0% 0 0)"; // Return a fallback value
  }
  try {
    const oklchColor = color.to("oklch");
    // Handle potential NaN or invalid coordinates
    const L = Number.isNaN(oklchColor.coords[0])
      ? 0
      : +(oklchColor.coords[0] * 100).toFixed(1);
    const C = Number.isNaN(oklchColor.coords[1]) ? 0 : oklchColor.coords[1];
    const H = Number.isNaN(oklchColor.coords[2]) ? 0 : oklchColor.coords[2];

    // Use Color object's toString for better formatting and precision control
    return new Color("oklch", [L / 100, C, H])
      .toString({ precision: 4 })
      .replace(/(\S+)(.+)/, `oklch(${L}%$2`);
  } catch (error) {
    console.error("Error converting color to OKLCH string:", color, error);
    return "oklch(0% 0 0)"; // Fallback on error
  }
}
