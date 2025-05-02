import tinycolor from "tinycolor2";
import type { ComputedRef, Ref } from "vue";
import groupDefinitions from "../../../bulmaThemeDefinitions.json";
import { defaultTheme, setTheme } from "../../../theming";
import { setHSLVariables } from "../../../utils/color";

export type ThemeValue = "light" | "dark";

/**
 * Defines the base colors provided for theme generation.
 */
interface BaseColors {
  /** Base accent color for light and dark themes. */
  accent: Record<ThemeValue, string>;
  /** Base gray color for light and dark themes. */
  gray: Record<ThemeValue, string>;
  /** Base background color (typically near white/black) for light and dark themes. */
  background: Record<ThemeValue, string>;
}

/** Represents a single color shade within a category for both light and dark modes. */
interface ColorCategory {
  /** Identifier (often corresponds to the 0-based index). */
  id: number;
  /** Color value for light mode. */
  light: string;
  /** Color value for dark mode. */
  dark: string;
}

/** Defines the structure of a 12-step color scale, categorized by usage. */
interface ColorScale {
  /** Background colors (Levels 1-2). */
  backgrounds: ColorCategory[];
  /** Interactive component colors (Levels 3-5). */
  interactive: ColorCategory[];
  /** Border and separator colors (Levels 6-8). */
  borders: ColorCategory[];
  /** Solid colors, often for active states (Levels 9-10). */
  solid: ColorCategory[];
  /** High-contrast text colors (Levels 11-12). */
  accessible: ColorCategory[];
}

/** Contains the accent and gray color scales. */
interface ColorScales {
  /** The 12-step accent color scale. */
  accent: ColorScale;
  /** The 12-step gray color scale. */
  gray: ColorScale;
}

// Updated interface reflecting the current JSON structure
interface ThemeGroupDefinition {
  type: "base" | "scale";
  vars: string[];
  scale?: keyof ColorScales; // Optional: only for type 'scale'
  category?: keyof ColorScale; // Optional: only for type 'scale'
  level?: number; // Optional: only for type 'scale'
}

/**
 * Composable hook to manage and apply a dynamic Bulma theme based on 12 color scales.
 *
 * This hook takes base colors and computed color scales, reads definitions from
 * `bulmaThemeDefinitions.json` to map Bulma CSS variables to specific levels (1-12)
 * of the gray or accent scales, calculates derived colors (info, success, etc.),
 * and applies all necessary CSS variables (including HSL components) to the document root.
 *
 * @param baseColors - Reactive object containing the base accent, gray, and background colors.
 * @param colorScales - Computed ref containing the generated 12-step accent and gray scales.
 * @param theme - Ref indicating the current theme ('light' or 'dark').
 * @returns An object containing the `applyTheme` function.
 */
export function useBulmaTheme(
  baseColors: BaseColors,
  colorScales: ComputedRef<ColorScales>,
  theme: Ref<ThemeValue>,
) {
  // setHSLVariables is now imported

  /**
   * Calculates and applies all Bulma theme CSS variables to the document root.
   *
   * It uses the `groupDefinitions` imported from JSON to determine which color scale
   * level and category to use for each CSS variable. It handles base background,
   * scaled colors (gray and accent), derived colors, and primary color overrides.
   * Finally, it calculates and sets HSL component variables for Bulma compatibility.
   */
  const applyTheme = (): void => {
    const root = document.documentElement;
    if (!root) return;
    const currentTheme = theme.value;

    /**
     * Internal helper to retrieve a specific color from the scales based on a 1-12 level.
     * Maps the 1-12 level to the correct 0-based index for the given category.
     */
    const get = (
      scale: keyof ColorScales,
      category: keyof ColorScale,
      level: number, // Expecting 1-12
    ): string | undefined => {
      let index: number | undefined;
      if (category === "backgrounds") index = level - 1;
      else if (category === "interactive") index = level - 3;
      else if (category === "borders") index = level - 6;
      else if (category === "solid") index = level - 9;
      else if (category === "accessible") index = level - 11;

      if (
        index !== undefined &&
        index >= 0 &&
        colorScales.value[scale]?.[category]?.[index]
      ) {
        return colorScales.value[scale][category][index][currentTheme];
      }
      // console.warn(`Invalid level ${level} for category ${category} or color scale data missing.`);
      return undefined;
    };

    /**
     * Internal helper to create derived colors (like info, success) with a fixed hue
     * but matching the saturation and value of the current theme's base accent color.
     */
    const createDerivedColor = (hue: number): string => {
      const baseAccent = tinycolor(baseColors.accent[currentTheme]);
      return tinycolor({
        h: hue,
        s: baseAccent.toHsv().s,
        v: baseAccent.toHsv().v,
      }).toHexString();
    };

    const finalVars: Record<string, string | undefined> = {};

    // Single loop to apply all groups from the imported JSON
    // Cast directly to the accurate ThemeGroupDefinition
    (groupDefinitions as ThemeGroupDefinition[]).forEach((group) => {
      let value: string | undefined;

      // No longer need the outer if check, type assertion handles it.
      switch (group.type) {
        case "base":
          value = baseColors.background[currentTheme];
          break;
        case "scale":
          // Ensure scale, category, and level exist for this type
          if (group.scale && group.category && group.level) {
            value = get(group.scale, group.category, group.level);
          }
          break;
      }

      if (value !== undefined) {
        group.vars.forEach((key) => {
          finalVars[`--${key}`] = value;
        });
      }
    });

    // Apply Derived Colors directly
    finalVars["--info"] = createDerivedColor(204);
    finalVars["--success"] = createDerivedColor(141);
    finalVars["--warning"] = createDerivedColor(48);
    finalVars["--danger"] = createDerivedColor(350);

    // --- Final Step: Apply all calculated variables to the DOM ---
    for (const [key, value] of Object.entries(finalVars)) {
      if (value) {
        root.style.setProperty(key, value);
      }
    }

    // --- Set HSL variables using imported function ---
    const bulmaBaseColors = [
      "white",
      "black",
      "light",
      "dark",
      "primary",
      "link",
      "info",
      "success",
      "warning",
      "danger",
    ];
    const bulmaShades = [
      "black-bis",
      "black-ter",
      "grey-darker",
      "grey-dark",
      "grey",
      "grey-light",
      "grey-lighter",
      "grey-lightest",
      "white-ter",
      "white-bis",
    ];

    bulmaBaseColors.forEach((color) => {
      const baseColor = finalVars[`--${color}`];

      if (baseColor) {
        setHSLVariables(color, baseColor);
        if (
          ["primary", "link", "info", "success", "warning", "danger"].includes(
            color,
          )
        ) {
          const tc = tinycolor(baseColor);
          // Use levels for contrast colors
          const invertColor = tc.isLight()
            ? get("gray", "solid", 10) || "#000"
            : get("gray", "backgrounds", 1) || "#FFF";
          finalVars[`--${color}-invert`] = invertColor;
          setHSLVariables(`${color}-invert`, invertColor);
        }
      }
    });

    bulmaShades.forEach((shade) => {
      const shadeColor = finalVars[`--${shade}`];
      if (shadeColor) {
        setHSLVariables(shade, shadeColor);
      }
    });

    setTheme(defaultTheme);
  };

  return {
    applyTheme,
  };
}
