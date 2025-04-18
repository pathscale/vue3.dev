<script>
import { useRouter } from "vue-router";

import { VButton, VDropdown, VDropdownItem } from "@pathscale/vue3-ui";
import { computed, onUnmounted, ref, watch } from "vue";

const NAVBAR_BACKGROUND_COLOR = "--navbar-background-color";

export default {
  name: "DevPageTheming",
  components: { VDropdown, VDropdownItem, VButton },
  setup() {
    const router = useRouter();
    const root = document.documentElement;
    const colors = ["black", "red", "blue", "green"];
    const originalColor = getComputedStyle(root).getPropertyValue(
      NAVBAR_BACKGROUND_COLOR,
    );
    const color = ref(originalColor);
    const isOriginalColor = computed(() => color.value === originalColor);

    function setColor(value) {
      root.style.setProperty(NAVBAR_BACKGROUND_COLOR, value);
    }

    onUnmounted(() => {
      setColor(originalColor);
    });

    watch(color, () => {
      setColor(color.value);
    });

    return { router, color, colors, isOriginalColor };
  },
};
</script>

<template>
  <h1 class="title">
    {{ router.currentRoute.value.meta.title }}
  </h1>
  <p>
    {{ router.currentRoute.value.meta.metaTags[0].content }}
  </p>

  <h4 class="title is-4 mt-6">
    Vue3-ui Styles
  </h4>

  <p>
    You can add styles to Vue3-ui quickly by installing <a
href="https://www.npmjs.com/package/@bulvar/bulma"
      target="_blank" rel="noopener">@bulvar/bulma</a>, getting support for CSS
    Variables and theming changes in running time.
    <br /><br /> Additionally, if you want to use <b>Accordion</b>, <b>Sidebar</b>, <b>Switch</b> or <b>Tooltip</b>, you
    have to install <a
href="https://www.npmjs.com/package/@pathscale/bulma-extensions-css-var" target="_blank"
      rel="noopener">bulma-extensions-css-var</a>, because those components are not in the Bulma core.
  </p>

  <h5 class="title is-5 mt-6">
    Installation
  </h5>

  <div class="box has-background-light is-family-code">
    npm i @bulvar/bulma @pathscale/bulma-extensions-css-var
  </div>

  <h5 class="title is-5 mt-6">
    Usage
  </h5>

  <div class="box has-background-light is-family-code">
    import { createApp } from 'vue'
    <br />
    import App from 'App.vue'
    <br />
    import '@bulvar/bulma/css/bulma.css'
    <br />
    import '@pathscale/bulma-extensions-css-var'
    <br />
    <br />
    createApp(App).mount('#app')
  </div>

  <h5 class="title is-4 mt-6">
    Customization
  </h5>

  <p>
    <strong>@bulvar/bulma</strong> exports css variables for most of Vue3-ui components,
    they can be swapped to create dynamic ui styles and themes.
    <br />
    <br />
    <span class="has-text-danger">
      You will find what css variables are available for what components in their <b> API section </b>.
    </span>
  </p>


  <v-dropdown v-model="color" class="pt-3">
    <template #trigger>
      <v-button type="is-info">
        <span class="mr-2">
          🎨
        </span>
        <span v-if="isOriginalColor">Choose your Navbar color</span>
        <span v-else>I choose you, {{ color }} </span>
      </v-button>
    </template>

    <v-dropdown-item
v-for="clr in colors" :key="clr" :value="clr" :style="`background-color: ${clr}`"
      class="has-text-white">
      {{ clr }}
    </v-dropdown-item>
  </v-dropdown>

  <p class="py-3">
    💡 <i>Select a color to see the magic!</i>
  </p>

  <code>
  element.style {
  <br />&nbsp; --navbar-background-color: {{ color }};
  <br />
  }
</code>

  <h6 class="title is-6 mt-6">
    Swapping css variables using vanilla javascript
  </h6>

  <p class="mb-4">
    You can assign values to a css variable by appending properties to your root DOM node
  </p>

  <div class="box has-background-light is-family-code">
    const root = document.documentElement
    <br />
    root.style.setProperty('--navbar-background-color', '#000')
  </div>

  <h6 class="title is-6 mt-6">
    Swapping css variables using Vue composable
  </h6>

  <p class="mb-4">
    Css variables can be assigned values using helper functions from <b>vue-composable</b>, a vue3 utility library.
    <br />
    <br />
    For this you will need to add vue-composable as a dependency.
  </p>

  <div class="box has-background-light is-family-code">
    npm i vue-composable
  </div>

  <p class="mb-4">
    You can now use vue-composable <strong>useCssVariables</strong> method to set your variables
  </p>

  <div class="box has-background-light is-family-code">
    import { useCssVariables } from 'vue-composable'
    <br />
    <br />
    useCssVariables([{ name: '--navbar-background-color', value: '#000' }])
  </div>
</template>
