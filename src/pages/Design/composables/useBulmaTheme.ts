import type { ComputedRef, Ref } from "vue";

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
  const applyTheme = (): void => {
    const root = document.documentElement;
    const currentTheme = theme.value;

    const get = (
      scale: keyof ColorScales,
      category: keyof ColorScale,
      index: number,
    ): string | undefined =>
      colorScales.value[scale][category][index]?.[currentTheme];

    const vars: Record<string, string | undefined> = {
      "--background-color": baseColors.background[currentTheme],

      "--black": get("gray", "accessible", 1),
      "--black-bis": get("gray", "accessible", 0),
      "--black-ter": get("gray", "solid", 1),
      "--grey-darker": get("gray", "solid", 0),
      "--grey-dark": get("gray", "borders", 2),
      "--grey": get("gray", "borders", 1),
      "--grey-light": get("gray", "borders", 0),
      "--grey-lighter": get("gray", "interactive", 2),
      "--grey-lightest": get("gray", "interactive", 1),
      "--white-ter": get("gray", "interactive", 0),
      "--white-bis": get("gray", "backgrounds", 1),
      "--white": get("gray", "backgrounds", 0),

      "--orange": get("accent", "interactive", 2),
      "--yellow": get("accent", "interactive", 1),
      "--green": get("accent", "borders", 0),
      "--turquoise": get("accent", "borders", 1),
      "--cyan": get("accent", "borders", 0),
      "--blue": get("accent", "borders", 2),
      "--purple": get("accent", "solid", 1),
      "--red": get("accent", "accessible", 0),

      "--primary": get("accent", "solid", 0),
      "--primary-light": get("accent", "interactive", 1),
      "--primary-dark": get("accent", "accessible", 0),
      "--link": get("accent", "borders", 1),
      "--info": get("accent", "interactive", 0),
    };

    const backgroundVars: string[] = [
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
      "dropdown-item-active-background-color",
      "dropdown-item-hover-background-color",
      "file-cta-active-background-color",
      "file-cta-background-color",
      "file-cta-hover-background-color",
      "footer-background-color",
      "hr-background-color",
      "input-background-color",
      "input-disabled-background-color",
      "menu-item-active-background-color",
      "menu-item-hover-background-color",
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
      "navbar-dropdown-item-active-background-color",
      "navbar-dropdown-item-hover-background-color",
      "navbar-item-active-background-color",
      "navbar-item-hover-background-color",
      "navbar-tab-active-background-color",
      "navbar-tab-hover-background-color",
      "notification-background-color",
      "notification-code-background-color",
      "pagination-current-background-color",
      "pagination-disabled-background-color",
      "panel-block-hover-background-color",
      "panel-heading-background-color",
      "progress-bar-background-color",
      "progress-value-background-color",
      "radio-active-background-color",
      "snackbar-background-color",
      "steps-background-color",
      "steps-details-background-color",
      "switch-active-background-color",
      "table-background-color",
      "table-body-background-color",
      "table-foot-background-color",
      "table-head-background-color",
      "table-row-active-background-color",
      "table-row-hover-background-color",
      "table-striped-row-even-background-color",
      "table-striped-row-even-hover-background-color",
      "tabs-boxed-link-active-background-color",
      "tabs-boxed-link-focus-active-background-color",
      "tabs-boxed-link-focus-background-color",
      "tabs-boxed-link-hover-background-color",
      "tabs-toggle-link-active-background-color",
      "tabs-toggle-link-focus-active-background-color",
      "tabs-toggle-link-focus-background-color",
      "tabs-toggle-link-hover-background-color",
      "tag-active-background-color",
      "tag-background-color",
      "tag-focus-background-color",
    ];

    const borderVars: string[] = [
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
    ];

    const interactiveVars: string[] = [
      "-box-link-active-shadow-color",
      "-box-link-hover-shadow-color",
      "breadcrumb-item-active-color",
      "breadcrumb-item-hover-color",
      "button-active-border-color",
      "button-active-color",
      "button-focus-border-color",
      "button-focus-box-shadow-color",
      "button-focus-color",
      "button-ghost-hover-color",
      "button-hover-border-color",
      "button-hover-color",
      "button-text-hover-color",
      "checkbox-focus-box-shadow-color",
      "datepicker-item-hover-color",
      "dropdown-item-active-color",
      "dropdown-item-hover-color",
      "file-cta-active-color",
      "file-cta-hover-color",
      "input-focus-border-color",
      "input-focus-box-shadow-color",
      "input-focus-color",
      "input-hover-border-color",
      "input-hover-color",
      "input-icon-active-color",
      "menu-item-active-color",
      "menu-item-hover-color",
      "navbar-dropdown-item-active-color",
      "navbar-dropdown-item-hover-color",
      "navbar-item-active-color",
      "navbar-item-hover-color",
      "navbar-tab-active-border-bottom-color",
      "navbar-tab-active-color",
      "navbar-tab-hover-border-bottom-color",
      "pagination-active-border-color",
      "pagination-active-color",
      "pagination-focus-border-color",
      "pagination-focus-color",
      "pagination-hover-border-color",
      "pagination-hover-color",
      "panel-block-active-border-left-color",
      "panel-block-active-color",
      "panel-block-active-icon-color",
      "panel-list-item-hover-color",
      "panel-tab-active-border-bottom-color",
      "panel-tab-active-color",
      "select-hover-color",
      "steps-active-color",
      "table-row-active-color",
      "tabs-boxed-link-active-border-bottom-color",
      "tabs-boxed-link-active-border-color",
      "tabs-boxed-link-focus-active-border-bottom-color",
      "tabs-boxed-link-focus-border-bottom-color",
      "tabs-boxed-link-hover-border-bottom-color",
      "tabs-link-active-border-bottom-color",
      "tabs-link-active-color",
      "tabs-link-focus-active-border-bottom-color",
      "tabs-link-focus-border-bottom-color",
      "tabs-link-hover-border-bottom-color",
      "tabs-link-hover-color",
      "tabs-toggle-link-active-border-color",
      "tabs-toggle-link-active-color",
      "tabs-toggle-link-focus-active-border-color",
      "tabs-toggle-link-focus-border-color",
      "tabs-toggle-link-hover-border-color",
    ];

    const textVars: string[] = [
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
      "invert-dark-color",
      "invert-light-color",
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
      "tabs-border-bottom-color",
      "tabs-link-color",
      "tag-color",
      "title-color",
      "title-strong-color",
    ];

    backgroundVars.forEach((key) => {
      vars[`--${key}`] = get("gray", "backgrounds", 0);
    });

    borderVars.forEach((key) => {
      vars[`--${key}`] = get("gray", "borders", 1);
    });

    interactiveVars.forEach((key) => {
      vars[`--${key}`] = get("gray", "interactive", 1);
    });

    textVars.forEach((key) => {
      vars[`--${key}`] = get("gray", "solid", 1);
    });

    for (const [key, value] of Object.entries(vars)) {
      if (value) {
        root.style.setProperty(key, value);
      }
    }
  };

  return {
    applyTheme,
  };
}
