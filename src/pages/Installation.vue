<script>
import { VAccordion, VIcon } from "@pathscale/vue3-ui";
import { useRouter } from "vue-router";

import { reactive } from "vue";
import ShowcaseCode from "../docs/components/raw/HelloWord.txt";
import Showcase from "../docs/components/showcases/HelloWord.vue";

import { SnippetSection } from "../components";

export default {
	name: "DevPageInstallation",
	components: { SnippetSection, VAccordion, VIcon },
	setup() {
		const router = useRouter();
		const state = reactive({
			template: true,
		});

		function toggle(value) {
			state[value] = !state[value];
		}
		return { router, Showcase, ShowcaseCode, state, toggle };
	},
};
</script>

<template>
  <div>
    <h1 class="title">
      {{ router.currentRoute.value.meta.title }}
    </h1>
    <br />

    <div class="content">
      <p>
        The easy way to get started with Vue3-ui is use our <a href="https://github.com/pathscale/vue3-starter" target="_blank" rel="noopener">Vue3 Starter</a> template to create a Vue3-ui ready app using
        Rollup.
      </p>
    </div>

    <v-accordion :expanded="state.template" header-is-trigger>
      <template #header>
        <div class="is-inline-flex mt-5" @click="toggle('template')">
          <h4 class="title is-4">
            1. Starter Template <i>(recommended)</i>
          </h4>
          <v-icon v-show="state.template" custom-class="collapse-icon" name="menu-up-icon" bundle="icons" />
          <v-icon v-show="!state.template" custom-class="collapse-icon" name="menu-down-icon" bundle="icons" />
        </div>
      </template>
      <template #content>
        <div class="content">
          A Vue3 starter kit that gives you rollup and many optimized goodies out of the box.
        </div>
        <div class="subtitle content">
          What's Included
        </div>

        <div class="content">
          <ul>
            <li>Vue3-ui and Bulma with CSS variables support</li>
            <li>Hot-reload</li>
            <li>Lint-on-save with ESLint</li>
            <li>JavaScript compiled and minified with google-closure-compiler.</li>
            <li>CSS across all components extracted into a single file and minified.</li>
            <li>Unused CSS removed with our PurgeCSS based plugin</li>
          </ul>
        </div>
        <div class="subtitle content">
          Create a new project based on our Vue3 Starter template
        </div>
        <div class="box has-background-light is-family-code">
          git clone git@github.com:pathscale/vue3-starter.git --depth 1
          <br />
          cd vue3-starter
        </div>
        <div class="subtitle content">
          Install packages and run the app
        </div>
        <div class="box has-background-light is-family-code">
          npm i
          <br />
          npm start
        </div>
        <div class="content">
          You should see something like the example below in <a href="http://localhost:5000/" target="_blank" rel="noopener">http://localhost:5000/</a>
        </div>
      </template>
    </v-accordion>
    <div class="title is-4 mt-4">
      Additional packages
    </div>
    <div class="content">
      <ul>
        <li><a href="https://github.com/pathscale/rollup-plugin-vue3-ui-css-purge" target="_blank" rel="noopener">@pathscale/rollup-plugin-vue3-ui-css-purge</a>: remove unused css.</li>
        <li><a href="https://github.com/pathscale/vue3-svg-icons" target="_blank" rel="noopener">@pathscale/vue3-svg-icons</a>: mega compilation of svg icons.</li>
        <li><a href="https://github.com/pathscale/rollup-plugin-tsickle" target="_blank" rel="noopener">@pathscale/rollup-plugin-tsickle</a>: typescript transpiler.</li>
        <li><a href="https://github.com/pathscale/eslint-plugin-vue3" target="_blank" rel="noopener">@pathscale/eslint-plugin-vue3</a>: linting rules to help enforce our rather limited view of the world. Highly opinionated and not for everyone.</li>
      </ul>
      To see them working together and more advance config, check out this project <a href="https://github.com/pathscale/vue3.dev/blob/master/rollup.config.js" target="_blank" rel="noopener">rollup.config.js</a>
    </div>
    <snippet-section title="" :code="ShowcaseCode" :component="Showcase" :path="router.currentRoute.value.path" />
  </div>
</template>
