import tinycolor from "tinycolor2";
import { type ComputedRef, type Ref, computed } from "vue";

type ThemeValue = "light" | "dark";

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
    const color = tinycolor(baseColor);
    const scale: string[] = [];

    for (let i = 0; i < steps; i++) {
      if (i < 2) {
        scale.push(
          color
            .clone()
            .lighten(60 - i * 20)
            .toHexString(),
        );
      } else if (i < 5) {
        scale.push(
          color
            .clone()
            .lighten(35 - (i - 2) * 12)
            .toHexString(),
        );
      } else if (i < 8) {
        scale.push(
          color
            .clone()
            .lighten(15 - (i - 5) * 8)
            .toHexString(),
        );
      } else if (i < 10) {
        scale.push(
          color
            .clone()
            .darken((i - 8) * 12)
            .toHexString(),
        );
      } else {
        scale.push(
          color
            .clone()
            .darken(25 + (i - 10) * 12)
            .toHexString(),
        );
      }
    }
    return scale;
  };

  const colorScales = computed<ColorScales>(() => {
    const accentScale = generateColorScale(baseColors.accent[theme.value], 12);
    const grayScale = generateColorScale(baseColors.gray[theme.value], 12);

    const createCategory = (
      start: number,
      length: number,
      lightScale: string[],
    ): ColorCategory[] => {
      const scale =
        theme.value === "light" ? lightScale : [...lightScale].reverse();
      return Array.from({ length }, (_, i) => ({
        id: start + i,
        light: lightScale[start + i - 1],
        dark: scale[start + i - 1],
      }));
    };

    return {
      accent: {
        backgrounds: createCategory(1, 2, accentScale),
        interactive: createCategory(3, 3, accentScale),
        borders: createCategory(6, 3, accentScale),
        solid: createCategory(9, 2, accentScale),
        accessible: createCategory(11, 2, accentScale),
      },
      gray: {
        backgrounds: createCategory(1, 2, grayScale),
        interactive: createCategory(3, 3, grayScale),
        borders: createCategory(6, 3, grayScale),
        solid: createCategory(9, 2, grayScale),
        accessible: createCategory(11, 2, grayScale),
      },
    };
  });

  return {
    colorScales,
  };
}
