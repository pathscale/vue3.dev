import tinycolor from "tinycolor2";
import { type ComputedRef, type Ref, computed } from "vue";

export type ThemeValue = "light" | "dark";

interface BaseColors {
  accent: Record<ThemeValue, string>;
  gray: Record<ThemeValue, string>;
  background: Record<ThemeValue, string>;
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

export function useColorPalette(
  baseColors: BaseColors,
  theme: Ref<ThemeValue>,
): { colorScales: ComputedRef<ColorScales> } {
  const generateColorScale = (baseColor: string, steps: number): string[] => {
    const tColor = tinycolor(baseColor);
    const scale: string[] = [];
    const isLightTheme = theme.value === "light";

    // Set base color at position 9
    scale[9] = baseColor;

    // Generate lighter or darker colors depending on the theme
    if (isLightTheme) {
      // Light theme: positions 2-8 are lighter than base color with gradual adjustment
      for (let i = 8; i >= 2; i--) {
        const amount = ((9 - i) / 9) * 0.5; // Gradually adjust to make colors lighter
        scale[i] = tinycolor(baseColor)
          .lighten(amount * 100)
          .toHexString();
      }

      // Calculate color 1 based on color 2 to ensure it's lighter but not too white
      const color2 = tinycolor(scale[2]);
      scale[1] = color2.lighten(5).toHexString(); // Lighten color 2 slightly for color 1

      // Light theme: positions 10-12 are darker than base color
      for (let i = 10; i <= 12; i++) {
        const amount = ((i - 9) / 4) * 0.4; // Gradually adjust to make colors darker
        scale[i] = tinycolor(baseColor)
          .darken(amount * 100)
          .toHexString();
      }
    } else {
      // Dark theme: positions 1-8 are darker and less saturated than base color
      for (let i = 8; i >= 1; i--) {
        const amount = ((9 - i) / 9) * 0.5; // Gradually adjust darkness (Reverted)
        const desaturationAmount = ((9 - i) / 9) * 15; // Gradually adjust desaturation (Reverted)
        scale[i] = tinycolor(baseColor)
          .darken(amount * 100)
          .desaturate(desaturationAmount)
          .toHexString();
      }

      // Dark theme: positions 10-12 are lighter than base color
      for (let i = 10; i <= 12; i++) {
        const amount = ((i - 9) / 4) * 0.4; // Gradually adjust to make colors lighter
        scale[i] = tinycolor(baseColor)
          .lighten(amount * 100)
          .toHexString();
      }
    }

    return scale;
  };

  const colorScales = computed<ColorScales>(() => {
    const currentTheme = theme.value;

    // Generate color scales for accent
    const accentBase = baseColors.accent[currentTheme];
    const accentScale = generateColorScale(accentBase, 12);

    // Generate color scales for gray
    const grayBase = baseColors.gray[currentTheme];
    const grayScale = generateColorScale(grayBase, 12);

    const createCategory = (scale: string[]): ColorScale => {
      return {
        backgrounds: [
          { id: 1, light: scale[1], dark: scale[1] },
          { id: 2, light: scale[2], dark: scale[2] },
        ],
        interactive: [
          { id: 3, light: scale[3], dark: scale[3] },
          { id: 4, light: scale[4], dark: scale[4] },
          { id: 5, light: scale[5], dark: scale[5] },
        ],
        borders: [
          { id: 6, light: scale[6], dark: scale[6] },
          { id: 7, light: scale[7], dark: scale[7] },
          { id: 8, light: scale[8], dark: scale[8] },
        ],
        solid: [
          { id: 9, light: scale[9], dark: scale[9] },
          { id: 10, light: scale[10], dark: scale[10] },
        ],
        accessible: [
          { id: 11, light: scale[11], dark: scale[11] },
          { id: 12, light: scale[12], dark: scale[12] },
        ],
      };
    };

    return {
      accent: createCategory(accentScale),
      gray: createCategory(grayScale),
    };
  });

  return {
    colorScales,
  };
}
