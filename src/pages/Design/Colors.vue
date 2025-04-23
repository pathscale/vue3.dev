<script>
import { VColumn, VColumns, VField, VInput, VSwitch } from "@pathscale/vue3-ui";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import { reactive, ref, watchEffect } from "vue";
import ComponentShowcase from "../../components/ComponentShowcase.vue";
import { useBulmaTheme } from "./composables/useBulmaTheme";
import { useColorPalette } from "./composables/useColorPalette";

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

    const { colorScales } = useColorPalette(
      {
        accent,
        gray,
        background,
      },
      theme,
    );

    const { applyTheme } = useBulmaTheme(
      {
        accent,
        gray,
        background,
      },
      colorScales,
      theme,
    );

    watchEffect(() => {
      applyTheme();
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
