import tinycolor from "tinycolor2";
import type { ComputedRef, Ref } from "vue";

import { defaultTheme, setTheme } from "../../../theming";

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

export function useBulmaTheme(
  baseColors: BaseColors,
  colorScales: ComputedRef<ColorScales>,
  theme: Ref<ThemeValue>,
) {
  const setHSLVariables = (prefix: string, color: string) => {
    const root = document.documentElement;
    const tc = tinycolor(color);
    const hsl = tc.toHsl();
    root.style.setProperty(`--${prefix}-h`, Math.round(hsl.h).toString());
    root.style.setProperty(`--${prefix}-s`, `${Math.round(hsl.s * 100)}%`);
    root.style.setProperty(`--${prefix}-l`, `${Math.round(hsl.l * 100)}%`);
    root.style.setProperty(`--${prefix}-a`, `${Math.round(hsl.a * 100) / 100}`);
  };

  const applyTheme = (): void => {
    const root = document.documentElement;
    const currentTheme = theme.value;

    const get = (
      scale: keyof ColorScales,
      category: keyof ColorScale,
      level: number,
    ): string | undefined => {
      let index: number | undefined;
      if (category === "backgrounds") index = level - 1;
      else if (category === "interactive") index = level - 3;
      else if (category === "borders") index = level - 6;
      else if (category === "solid") index = level - 9;
      else if (category === "accessible") index = level - 11;

      if (index !== undefined && index >= 0) {
        return colorScales.value[scale]?.[category]?.[index]?.[currentTheme];
      }
      console.warn(`Invalid level ${level} for category ${category}`);
      return undefined;
    };

    const createDerivedColor = (hue: number): string => {
      const baseAccent = tinycolor(baseColors.accent[currentTheme]);
      return tinycolor({
        h: hue,
        s: baseAccent.toHsv().s,
        v: baseAccent.toHsv().v,
      }).toHexString();
    };

    const finalVars: Record<string, string | undefined> = {};

    const groupBaseBackground = ["background-color"];

    const groupGrayL1: string[] = [
      "white",
      "menu-item-active-color",
      "body-background-color",
      "box-background-color",
      "button-background-color",
      "button-disabled-background-color",
      "button-static-background-color",
      "button-text-hover-background-color",
      "card-background-color",
      "card-content-background-color",
      "card-footer-background-color",
      "card-header-background-color",
      "checkbox-active-background-color",
      "checkbox-background-color",
      "content-blockquote-background-color",
      "datepicker-background-color",
      "datepicker-item-hover-background-color",
      "datepicker-item-selected-background-color",
      "dropdown-background-color",
      "dropdown-content-background-color",
      "dropdown-divider-background-color",
      "file-cta-background-color",
      "file-cta-hover-background-color",
      "footer-background-color",
      "hr-background-color",
      "input-background-color",
      "input-disabled-background-color",
      "message-background-color",
      "message-body-pre-background-color",
      "message-body-pre-code-background-color",
      "message-header-background-color",
      "modal-background-background-color",
      "modal-background-color",
      "modal-card-body-background-color",
      "modal-card-head-background-color",
      "navbar-background-color",
      "navbar-divider-background-color",
      "navbar-dropdown-background-color",
      "navbar-item-hover-background-color",
      "navbar-tab-hover-background-color",
      "notification-background-color",
      "notification-code-background-color",
      "pagination-disabled-background-color",
      "panel-block-hover-background-color",
      "panel-heading-background-color",
      "progress-bar-background-color",
      "snackbar-background-color",
      "steps-background-color",
      "steps-details-background-color",
      "table-background-color",
      "table-body-background-color",
      "table-foot-background-color",
      "table-head-background-color",
      "table-row-hover-background-color",
      "table-striped-row-even-background-color",
      "table-striped-row-even-hover-background-color",
      "tabs-boxed-link-active-background-color",
      "tabs-boxed-link-focus-background-color",
      "tabs-boxed-link-hover-background-color",
      "tabs-toggle-link-focus-background-color",
      "tabs-toggle-link-hover-background-color",
      "tag-background-color",
      "tag-focus-background-color",
      "dropdown-item-active-background-color",
      "file-cta-active-background-color",
      "menu-item-active-background-color",
      "navbar-dropdown-item-active-background-color",
      "navbar-item-active-background-color",
      "navbar-tab-active-background-color",
      "pagination-current-background-color",
      "progress-value-background-color",
      "radio-active-background-color",
      "switch-active-background-color",
      "table-row-active-background-color",
      "tag-active-background-color",
    ];
    const groupGrayL2: string[] = ["white-bis"];

    const groupGrayL3: string[] = ["white-ter", "light"];
    const groupGrayL4: string[] = [
      "grey-lightest",
      "-box-link-active-shadow-color",
      "-box-link-hover-shadow-color",
      "breadcrumb-item-active-color",
      "breadcrumb-item-hover-color",
      "button-focus-border-color",
      "button-focus-box-shadow-color",
      "button-focus-color",
      "button-ghost-hover-color",
      "button-hover-border-color",
      "button-hover-color",
      "button-text-hover-color",
      "checkbox-focus-box-shadow-color",
      "datepicker-item-hover-color",
      "dropdown-item-hover-color",
      "file-cta-hover-color",
      "input-focus-border-color",
      "input-focus-box-shadow-color",
      "input-focus-color",
      "input-hover-border-color",
      "input-hover-color",
      "input-icon-active-color",
      "menu-item-hover-color",
      "navbar-dropdown-item-hover-color",
      "navbar-item-hover-color",
      "navbar-tab-hover-border-bottom-color",
      "pagination-focus-border-color",
      "pagination-focus-color",
      "pagination-hover-border-color",
      "pagination-hover-color",
      "panel-block-active-icon-color",
      "panel-list-item-hover-color",
      "select-hover-color",
      "steps-active-color",
      "tabs-boxed-link-hover-border-bottom-color",
      "tabs-link-hover-border-bottom-color",
      "tabs-link-hover-color",
      "tabs-toggle-link-hover-border-color",
      "pre-background",
      "button-active-border-color",
      "button-active-color",
      "dropdown-item-active-color",
      "file-cta-active-color",
      "navbar-dropdown-item-active-color",
      "navbar-item-active-color",
      "navbar-tab-active-border-bottom-color",
      "navbar-tab-active-color",
      "pagination-active-border-color",
      "pagination-active-color",
      "panel-block-active-border-left-color",
      "panel-block-active-color",
      "panel-tab-active-border-bottom-color",
      "panel-tab-active-color",
      "table-row-active-color",
    ];
    const groupGrayL5: string[] = ["grey-lighter", "tabs-border-bottom-color"];

    const groupGrayL6: string[] = ["grey-light"];
    const groupGrayL7: string[] = [
      "grey",
      "-navbar-dropdown-boxed-shadow-color",
      "button-border-color",
      "button-disabled-border-color",
      "button-ghost-border-color",
      "button-static-border-color",
      "checkbox-border-color",
      "file-border-color",
      "file-name-border-color",
      "input-border-color",
      "input-disabled-border-color",
      "input-shadow-color",
      "media-border-color",
      "message-body-border-color",
      "navbar-box-shadow-color",
      "navbar-shadow-color",
      "notices-shadow-color",
      "pagination-border-color",
      "pagination-current-border-color",
      "pagination-disabled-border-color",
      "select-disabled-border-color",
      "sidebar-shadow-color",
      "tabs-toggle-link-border-color",
      "tabs-boxed-link-active-border-color",
    ];
    const groupGrayL8: string[] = ["grey-dark"];

    const groupGrayL9: string[] = ["grey-darker", "dark"];
    const groupGrayL10: string[] = [
      "black-ter",
      "body-color",
      "box-color",
      "breadcrumb-item-color",
      "breadcrumb-item-separator-color",
      "button-color",
      "button-ghost-color",
      "button-static-color",
      "button-text-color",
      "card-color",
      "card-header-color",
      "carousel-arrow-color",
      "carousel-indicator-color",
      "checkbox-checkmark-color",
      "content-heading-color",
      "content-table-cell-heading-color",
      "content-table-foot-cell-color",
      "content-table-head-cell-color",
      "datepicker-header-color",
      "datepicker-item-color",
      "datepicker-item-disabled-color",
      "datepicker-item-selected-color",
      "dropdown-item-color",
      "file-cta-color",
      "footer-color",
      "input-arrow-color",
      "input-color",
      "input-disabled-color",
      "input-disabled-placeholder-color",
      "input-icon-color",
      "input-placeholder-color",
      "label-color",
      "menu-item-color",
      "menu-label-color",
      "message-body-color",
      "message-header-color",
      "modal-card-title-color",
      "navbar-burger-color",
      "navbar-item-color",
      "pagination-color",
      "pagination-current-color",
      "pagination-disabled-color",
      "pagination-ellipsis-color",
      "panel-block-color",
      "panel-heading-color",
      "panel-icon-color",
      "panel-list-item-color",
      "progress-value-color",
      "rate-color",
      "select-arrow-color",
      "select-disabled-color",
      "skeleton-color",
      "skeleton-shine-color",
      "slider-thumb-color",
      "slider-track-color",
      "snackbar-color",
      "steps-default-color",
      "steps-maker-color",
      "steps-maker-default-color",
      "steps-previous-color",
      "strong-color",
      "subtitle-color",
      "subtitle-strong-color",
      "table-cell-heading-color",
      "table-color",
      "table-foot-cell-color",
      "table-head-cell-color",
      "tabs-link-color",
      "tag-color",
      "title-color",
      "title-strong-color",
    ];

    const groupGrayL11: string[] = ["black-bis", "primary-dark"];
    const groupGrayL12: string[] = ["black", "tabs-link-active-color"];

    const groupAccentL4: string[] = ["yellow", "primary-light"];
    const groupAccentL5: string[] = ["orange"];
    const groupAccentL6: string[] = ["green", "cyan"];
    const groupAccentL7: string[] = ["turquoise", "link"];
    const groupAccentL8: string[] = ["blue"];
    const groupAccentL9: string[] = ["primary"];
    const groupAccentL10: string[] = ["purple"];
    const groupAccentL11: string[] = ["red"];

    const groupIsPrimary: string[] = [
      "menu-item-active-background-color",
      "tabs-link-active-border-bottom-color",
      "tabs-link-focus-active-border-bottom-color",
      "tabs-toggle-link-active-background-color",
      "tabs-toggle-link-active-border-color",
      "dropdown-item-active-background-color",
      "file-cta-active-background-color",
      "navbar-dropdown-item-active-background-color",
      "navbar-item-active-background-color",
      "navbar-tab-active-background-color",
      "pagination-current-background-color",
      "progress-value-background-color",
      "radio-active-background-color",
      "switch-active-background-color",
      "table-row-active-background-color",
      "tag-active-background-color",
      "button-active-color",
      "dropdown-item-active-color",
      "file-cta-active-color",
      "navbar-dropdown-item-active-color",
      "navbar-item-active-color",
      "navbar-tab-active-color",
      "pagination-active-color",
      "panel-block-active-color",
      "panel-tab-active-color",
      "button-active-border-color",
      "pagination-active-border-color",
      "panel-block-active-border-left-color",
      "navbar-tab-active-border-bottom-color",
      "panel-tab-active-border-bottom-color",
    ];

    const groupDerivedInfo: string[] = ["info"];
    const groupDerivedSuccess: string[] = ["success"];
    const groupDerivedWarning: string[] = ["warning"];
    const groupDerivedDanger: string[] = ["danger"];

    groupBaseBackground.forEach((key) => {
      finalVars[`--${key}`] = baseColors.background[currentTheme];
    });

    groupGrayL1.forEach((key) => {
      finalVars[`--${key}`] = get("gray", "backgrounds", 1);
    });
    groupGrayL2.forEach((key) => {
      finalVars[`--${key}`] = get("gray", "backgrounds", 2);
    });
    groupGrayL3.forEach((key) => {
      finalVars[`--${key}`] = get("gray", "interactive", 3);
    });
    groupGrayL4.forEach((key) => {
      finalVars[`--${key}`] = get("gray", "interactive", 4);
    });
    groupGrayL5.forEach((key) => {
      finalVars[`--${key}`] = get("gray", "interactive", 5);
    });
    groupGrayL6.forEach((key) => {
      finalVars[`--${key}`] = get("gray", "borders", 6);
    });
    groupGrayL7.forEach((key) => {
      finalVars[`--${key}`] = get("gray", "borders", 7);
    });
    groupGrayL8.forEach((key) => {
      finalVars[`--${key}`] = get("gray", "borders", 8);
    });
    groupGrayL9.forEach((key) => {
      finalVars[`--${key}`] = get("gray", "solid", 9);
    });
    groupGrayL10.forEach((key) => {
      finalVars[`--${key}`] = get("gray", "solid", 10);
    });
    groupGrayL11.forEach((key) => {
      finalVars[`--${key}`] = get("gray", "accessible", 11);
    });
    groupGrayL12.forEach((key) => {
      finalVars[`--${key}`] = get("gray", "accessible", 12);
    });

    groupAccentL4.forEach((key) => {
      finalVars[`--${key}`] = get("accent", "interactive", 4);
    });
    groupAccentL5.forEach((key) => {
      finalVars[`--${key}`] = get("accent", "interactive", 5);
    });
    groupAccentL6.forEach((key) => {
      finalVars[`--${key}`] = get("accent", "borders", 6);
    });
    groupAccentL7.forEach((key) => {
      finalVars[`--${key}`] = get("accent", "borders", 7);
    });
    groupAccentL8.forEach((key) => {
      finalVars[`--${key}`] = get("accent", "borders", 8);
    });
    groupAccentL9.forEach((key) => {
      finalVars[`--${key}`] = get("accent", "solid", 9);
    });
    groupAccentL10.forEach((key) => {
      finalVars[`--${key}`] = get("accent", "solid", 10);
    });
    groupAccentL11.forEach((key) => {
      finalVars[`--${key}`] = get("accent", "accessible", 11);
    });

    const primaryColor = finalVars["--primary"];
    if (primaryColor) {
      groupIsPrimary.forEach((key) => {
        finalVars[`--${key}`] = primaryColor;
      });
    }

    groupDerivedInfo.forEach((key) => {
      finalVars[`--${key}`] = createDerivedColor(204);
    });
    groupDerivedSuccess.forEach((key) => {
      finalVars[`--${key}`] = createDerivedColor(141);
    });
    groupDerivedWarning.forEach((key) => {
      finalVars[`--${key}`] = createDerivedColor(48);
    });
    groupDerivedDanger.forEach((key) => {
      finalVars[`--${key}`] = createDerivedColor(350);
    });

    for (const [key, value] of Object.entries(finalVars)) {
      if (value) {
        root.style.setProperty(key, value);
      }
    }

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
          const invertColor = tc.isLight() ? "#000000" : "#ffffff";
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
