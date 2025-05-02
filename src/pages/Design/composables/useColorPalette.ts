import Color from "colorjs.io";
import { type ComputedRef, type Ref, computed } from "vue";
import {
  getButtonHoverColor,
  getScaleFromColor,
  getStep9Colors,
} from "../../../utils/color";
import {
  type ArrayOf12,
  darkColors,
  darkGrayColors,
  lightColors,
  lightGrayColors,
} from "../../../utils/color-scale-references";

export type ThemeValue = "light" | "dark";

interface BaseColors {
  accent: Record<ThemeValue, string>;
  gray: Record<ThemeValue, string>;
  background: Record<ThemeValue, string>;
}

function generatePaletteScale(
  baseColorHex: string,
  backgroundColorHex: string,
  scaleType: "accent" | "gray",
  appearance: ThemeValue,
): ArrayOf12<string> {
  try {
    const sourceColor = new Color(baseColorHex).to("oklch");
    const backgroundColor = new Color(backgroundColorHex).to("oklch");

    const referenceScales =
      scaleType === "gray"
        ? appearance === "light"
          ? lightGrayColors
          : darkGrayColors
        : appearance === "light"
          ? lightColors
          : darkColors;

    const generatedScaleOklch = getScaleFromColor(
      sourceColor,
      referenceScales,
      backgroundColor,
    );

    const [step9Color] = getStep9Colors(generatedScaleOklch, sourceColor);
    generatedScaleOklch[8] = step9Color;

    const allReferenceScales =
      appearance === "light" ? lightColors : darkColors;
    generatedScaleOklch[9] = getButtonHoverColor(
      step9Color,
      Object.values(allReferenceScales),
    );

    const chromaStep8 = generatedScaleOklch[7].coords[1];
    const chromaStep9 = generatedScaleOklch[8].coords[1];
    const maxChromaForText = Math.max(chromaStep8, chromaStep9);

    generatedScaleOklch[10].coords[1] = Math.min(
      maxChromaForText,
      generatedScaleOklch[10].coords[1],
    );
    generatedScaleOklch[11].coords[1] = Math.min(
      maxChromaForText,
      generatedScaleOklch[11].coords[1],
    );

    if (scaleType === "gray" && sourceColor.coords[1] < 0.01) {
      generatedScaleOklch.forEach((color) => {
        color.coords[1] = 0;
      });
    }

    const finalHexScale = generatedScaleOklch.map((color) =>
      color.to("srgb").toString({ format: "hex" }),
    ) as ArrayOf12<string>;

    return finalHexScale;
  } catch (error) {
    console.error(
      `Error generating scale for ${scaleType} (${appearance}):`,
      baseColorHex,
      backgroundColorHex,
      error,
    );
    const fallbackColor = appearance === "light" ? "#808080" : "#808080";
    return Array(12).fill(fallbackColor) as ArrayOf12<string>;
  }
}

interface ColorCategory {
  id: number;
  light: string;
  dark: string;
}

interface ColorScale {
  backgrounds: ColorCategory[];
  interactive: ColorCategory[];
  borders: ColorCategory[];
  solid: ColorCategory[];
  accessible: ColorCategory[];
}

interface ColorScales {
  accent: ColorScale;
  gray: ColorScale;
}

function mapScaleToCategories(scale: ArrayOf12<string>): ColorScale {
  if (!scale || scale.length !== 12) {
    console.error("Invalid scale passed to mapScaleToCategories");
    const fallbackCat = { id: 0, light: "#808080", dark: "#808080" };
    return {
      backgrounds: [fallbackCat, fallbackCat],
      interactive: [fallbackCat, fallbackCat, fallbackCat],
      borders: [fallbackCat, fallbackCat, fallbackCat],
      solid: [fallbackCat, fallbackCat],
      accessible: [fallbackCat, fallbackCat],
    };
  }
  const createCat = (id: number, value: string): ColorCategory => ({
    id,
    light: value,
    dark: value,
  });

  return {
    backgrounds: [createCat(1, scale[0]), createCat(2, scale[1])],
    interactive: [
      createCat(3, scale[2]),
      createCat(4, scale[3]),
      createCat(5, scale[4]),
    ],
    borders: [
      createCat(6, scale[5]),
      createCat(7, scale[6]),
      createCat(8, scale[7]),
    ],
    solid: [createCat(9, scale[8]), createCat(10, scale[9])],
    accessible: [createCat(11, scale[10]), createCat(12, scale[11])],
  };
}

export function useColorPalette(
  baseColors: BaseColors,
  theme: Ref<ThemeValue>,
): { colorScales: ComputedRef<ColorScales> } {
  const colorScales = computed<ColorScales>(() => {
    const currentTheme = theme.value;
    const accentBase = baseColors.accent[currentTheme];
    const grayBase = baseColors.gray[currentTheme];
    const background = baseColors.background[currentTheme];

    const accentScaleHex = generatePaletteScale(
      accentBase,
      background,
      "accent",
      currentTheme,
    );

    const grayScaleHex = generatePaletteScale(
      grayBase,
      background,
      "gray",
      currentTheme,
    );

    return {
      accent: mapScaleToCategories(accentScaleHex),
      gray: mapScaleToCategories(grayScaleHex),
    };
  });

  return {
    colorScales,
  };
}
