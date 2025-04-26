<script>
import { VButton, VTab, VTabs } from "@pathscale/vue3-ui";
import { computed, onMounted, ref, watchEffect } from "vue";
import { useTheme } from "../../composables/useTheme";

// Import both themes but we'll control them via disabled attribute
import "highlight.js/styles/github.css";
import "highlight.js/styles/vs2015.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);

// Add theme stylesheets to head
const githubTheme = document.createElement("link");
githubTheme.rel = "stylesheet";
githubTheme.href =
  "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css";
githubTheme.title = "github";

const vsTheme = document.createElement("link");
vsTheme.rel = "stylesheet";
vsTheme.href =
  "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/vs2015.min.css";
vsTheme.title = "vs2015";

document.head.appendChild(githubTheme);
document.head.appendChild(vsTheme);

function updateHighlightTheme(theme) {
  if (theme === "dark") {
    githubTheme.setAttribute("disabled", "disabled");
    vsTheme.removeAttribute("disabled");
  } else {
    vsTheme.setAttribute("disabled", "disabled");
    githubTheme.removeAttribute("disabled");
  }
}

export default {
  name: "Demo",
  components: { VButton, VTabs, VTab },
  directives: {
    highlightjs: {
      beforeMount(el, binding) {
        const targets = el.querySelectorAll("code");
        for (const target of targets) {
          if (binding.value) {
            target.innerHTML = binding.value;
          }
          hljs.highlightBlock(target);
        }
      },
      componentUpdated(el, binding) {
        const targets = el.querySelectorAll("code");
        for (const target of targets) {
          if (binding.value) {
            target.innerHTML = binding.value;
            hljs.highlightBlock(target);
          }
        }
      },
    },
  },
  props: {
    code: String,
    format: {
      type: String,
      default: "javascript",
    },
    component: [Object, Function],
    path: String,
    title: {
      type: String,
      default: "Showcase",
    },
    isHalfWidth: Boolean,
  },
  setup(props) {
    const { theme } = useTheme();
    updateHighlightTheme(theme.value);
    watchEffect(() => {
      updateHighlightTheme(theme.value);
    });

    const getDemoLink = () => {
      return `${props.path}#${props.title.toLowerCase()}`;
    };

    // arrays
    const _script = computed(() =>
      props.code.match(/<script>([\s\S]*)<\/script>/g),
    );
    const _template = computed(() =>
      props.code.match(/<template>([\s\S]*)<\/template>/g),
    );
    const _style = computed(() =>
      props.code.match(/<style(\s(scoped))*>([\s\S]*)<\/style>/g),
    );

    // first elements of arrays as .?[0] is not supported
    const script = computed(() => (_script.value ? _script.value[0] : null));
    const template = computed(() =>
      _template.value ? _template.value[0] : null,
    );
    const style = computed(() => (_style.value ? _style.value[0] : null));

    const activeTab = ref(_template.value ? 1 : 0);
    return { getDemoLink, script, template, style, activeTab };
  },
};
</script>

<template>
  <div :id="title.toLowerCase()" class="box mt-6">
    <h1 v-if="title" class="title is-size-4 mt-4">
      <a :href="getDemoLink()" class="is-active">#</a> {{ title }}
    </h1>
    <div v-if="component" :class="{ 'is-40': isHalfWidth }">
      <component :is="component" />
    </div>
    <v-tabs v-model="activeTab" type="is-boxed" class="mt-4">
      <v-tab v-if="script" label="Code">
        <pre v-highlightjs :class="format"><code>{{ script }}</code></pre>
      </v-tab>
      <v-tab v-if="template" label="Template">
        <pre v-highlightjs :class="format"><code>{{ template }}</code></pre>
      </v-tab>
      <v-tab v-if="style" label="Style">
        <pre v-highlightjs :class="format"><code>{{ style }}</code></pre>
      </v-tab>
    </v-tabs>
  </div>
</template>

<style>
@media only screen and (min-width: 1024px) {
  .is-40 {
    width: 40%;
  }
}
</style>
