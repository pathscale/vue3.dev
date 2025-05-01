import tinycolor from "tinycolor2";

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
