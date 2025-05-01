import tinycolor from "tinycolor2";
import type { ComputedRef, Ref } from "vue";
import groupDefinitions from "../../../bulmaThemeDefinitions.json"; // Corrected path
import { defaultTheme, setTheme } from "../../../theming";
// Import the utility function and the definitions
import { setHSLVariables } from "../../../utils/color"; // Corrected path

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

// Define the type for the imported JSON structure
interface GroupDefinition {
  type: "base" | "scale" | "primary" | "derived";
  vars: string[];
  scale?: keyof ColorScales;
  category?: keyof ColorScale;
  level?: number;
  hue?: number;
}

export function useBulmaTheme(
  baseColors: BaseColors,
  colorScales: ComputedRef<ColorScales>,
  theme: Ref<ThemeValue>,
) {
  // setHSLVariables is now imported

  const applyTheme = (): void => {
    const root = document.documentElement;
    const currentTheme = theme.value;

    // --- Get Color Function (Maps 1-12 levels to 0-based indices) ---
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

    // --- Derived Color Function ---
    const createDerivedColor = (hue: number): string => {
      const baseAccent = tinycolor(baseColors.accent[currentTheme]);
      return tinycolor({
        h: hue,
        s: baseAccent.toHsv().s,
        v: baseAccent.toHsv().v,
      }).toHexString();
    };

    const finalVars: Record<string, string | undefined> = {};

    // --- Use imported groupDefinitions ---
    // (The large inline array is removed)

    // Pre-calculate primary color
    const primaryColorValue = get("accent", "solid", 9);

    // Single loop to apply all groups from the imported JSON
    (groupDefinitions as GroupDefinition[]).forEach((group) => {
      let value: string | undefined;

      switch (group.type) {
        case "base":
          value = baseColors.background[currentTheme];
          break;
        case "scale":
          if (group.scale && group.category && group.level) {
            value = get(group.scale, group.category, group.level);
          }
          break;
        case "primary":
          // Assign primary color later in a separate step to ensure overrides
          value = primaryColorValue; // Get the value but don't assign yet for non-'primary' keys
          break;
        case "derived":
          if (group.hue !== undefined) {
            value = createDerivedColor(group.hue);
          }
          break;
      }

      if (value !== undefined) {
        group.vars.forEach((key) => {
          // Assign the calculated value unless it's a primary override variable
          // The actual primary override happens after this loop
          if (group.type !== "primary") {
            finalVars[`--${key}`] = value;
          }
        });
      }
    });

    // Apply primary overrides explicitly after initial calculations
    // Find the primary definition to get its variables
    const primaryGroup = (groupDefinitions as GroupDefinition[]).find(
      (g) => g.type === "primary",
    );
    if (primaryColorValue && primaryGroup) {
      primaryGroup.vars.forEach((key) => {
        finalVars[`--${key}`] = primaryColorValue;
      });
    }

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
        setHSLVariables(color, baseColor); // Use imported function
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
          setHSLVariables(`${color}-invert`, invertColor); // Use imported function
        }
      }
    });

    bulmaShades.forEach((shade) => {
      const shadeColor = finalVars[`--${shade}`];
      if (shadeColor) {
        setHSLVariables(shade, shadeColor); // Use imported function
      }
    });

    setTheme(defaultTheme);
  };

  return {
    applyTheme,
  };
}
