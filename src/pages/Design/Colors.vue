<script>
import { VColumn, VColumns, VField, VInput, VSwitch } from "@pathscale/vue3-ui";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import tinycolor from "tinycolor2";
import { computed, reactive, ref, watchEffect } from "vue";
import ComponentShowcase from "../../components/ComponentShowcase.vue";

export default {
  name: "DevPageColors",
  components: {
    VField,
    VInput,
    VSwitch,
    VColumns,
    VColumn,
    ComponentShowcase,
    ColorPicker,
  },
  setup() {
    const theme = ref("light");
    const accent = reactive({
      light: "#3D63DD",
      dark: "#4cb050",
    });
    const gray = reactive({
      light: "#8B8D98",
      dark: "#aa47bc",
    });
    const background = reactive({
      light: "#F9FAFB",
      dark: "#1F1F1F",
    });

    const generateColorScale = (baseColor, steps) => {
      const color = tinycolor(baseColor);
      const scale = [];

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

    const colorScales = computed(() => {
      const accentScale = generateColorScale(accent[theme.value], 12);
      const grayScale = generateColorScale(gray[theme.value], 12);

      const createCategory = (start, length, lightScale) => {
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

    const applyBulmaColorVars = (colorScales, theme = "light") => {
      const root = document.documentElement;

      const get = (scale, category, index) =>
        colorScales[scale][category][index]?.[theme];

      const vars = {
        "--background-color": background[theme],
        // Grays → Bulma core grays
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

        // Accent → Bulma semantic colors
        "--orange": get("accent", "interactive", 2),
        "--yellow": get("accent", "interactive", 1),
        "--green": get("accent", "borders", 0),
        "--turquoise": get("accent", "borders", 1),
        "--cyan": get("accent", "borders", 0),
        "--blue": get("accent", "borders", 2),
        "--purple": get("accent", "solid", 1),
        "--red": get("accent", "accessible", 0),

        // Primary roles
        "--primary": get("accent", "solid", 0),
        "--primary-light": get("accent", "interactive", 1),
        "--primary-dark": get("accent", "accessible", 0),
        "--link": get("accent", "borders", 1),
        "--info": get("accent", "interactive", 0),

        // Backgrounds
        ...Object.fromEntries([
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
          "tag-focus-background-color"
        ].map(k => [`--${k}`, get("gray", "backgrounds", 0)])),

        // Borders and shadows
        ...Object.fromEntries([
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
          "tabs-toggle-link-border-color"
        ].map(k => [`--${k}`, get("gray", "borders", 1)])),

        // Interactive
        ...Object.fromEntries([
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
          "tabs-toggle-link-hover-border-color"
        ].map(k => [`--${k}`, get("gray", "interactive", 1)])),

        // Text / Solid
        ...Object.fromEntries([
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
          "title-strong-color"
        ].map(k => [`--${k}`, get("gray", "solid", 1)])),
      };

      for (const [key, value] of Object.entries(vars)) {
        if (value) {
          root.style.setProperty(key, value);
        }
      }
    };

    watchEffect(() => {
      applyBulmaColorVars(colorScales.value, theme.value);
    });

    return {
      theme,
      accent,
      gray,
      background,
      colorScales,
    };
  },
};
</script>

<template>
  <div class="section">
    <h1 class="title">
      Color Palette
    </h1>

    <div class="block mt-5">
      <v-switch v-model="theme" type="is-success" passive-type="is-success" true-value="dark" false-value="light">
        {{ theme === 'light' ? '🌞 Light' : '🌙 Dark' }}
      </v-switch>
    </div>

    <div class="columns is-variable is-4 mt-5">
      <div class="column">
        <v-field label="Accent">
          <div class="is-flex is-align-items-center">
            <ColorPicker v-model:pureColor="accent[theme]" format="hex" />
            <v-input v-model="accent[theme]" type="text" color="is-primary" class="ml-2" />
          </div>
        </v-field>
      </div>

      <div class="column">
        <v-field label="Gray">
          <div class="is-flex is-align-items-center">
            <ColorPicker v-model:pureColor="gray[theme]" format="hex" />
            <v-input v-model="gray[theme]" type="text" color="is-primary" class="ml-2" />
          </div>
        </v-field>
      </div>

      <div class="column">
        <v-field label="Background">
          <div class="is-flex is-align-items-center">
            <ColorPicker v-model:pureColor="background[theme]" format="hex" />
            <v-input v-model="background[theme]" type=" text" color="is-primary" class="ml-2" />
          </div>
        </v-field>
      </div>
    </div>
    <v-columns v-for="(scale, scaleName) in colorScales" :key="scaleName">
      <v-column hcentered v-for="(colors, category) in scale" :key="category" narrow>
        <span v-if="scaleName === 'accent'" class="mb-4 is-capitalized">{{ category }}</span>
        <div class="columns">
          <v-column narrow v-for="color in colors" :key="color.id" class="column">
            <div class="box has-text-centered p-4" :style="{
              backgroundColor: theme === 'light' ? color.light : color.dark,
              width: '80px',
              minWidth: '80px'
            }">
              <span class="has-text-white has-text-weight-bold is-size-4">{{ color.id }}</span>
            </div>
          </v-column>
        </div>
      </v-column>
    </v-columns>

    <component-showcase />
  </div>
</template>
