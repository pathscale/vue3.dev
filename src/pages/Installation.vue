<script>
import { useI18n } from 'vue-composable'

import { useRouter } from 'vue-router'
import { VAccordion, VIcon } from '@pathscale/vue3-ui'

import { reactive, computed } from 'vue'
import Showcase from '../docs/components/showcases/HelloWord.vue'
import ShowcaseCode from '../docs/components/raw/HelloWord.txt'

import { SnippetSection } from '../components'



export default {
  name: 'DevPageInstallation',
  components: { SnippetSection, VAccordion, VIcon },
  setup() {
    const intl = useI18n()
    const router = useRouter()
    const state = reactive({
      cli: false,
      rollup: true
    })

    const cliIcon = computed(() => {
      return state.cli ? 'icon-menu-up' : 'icon-menu-down'
    }
    )

    function toggle(value) {
      state[value] = !state[value]
    }
    return { intl, router, Showcase, ShowcaseCode, state, cliIcon, toggle }
  }
}
</script>

<template>
  <div>
    <h1 class="title">
      {{ router.currentRoute.value.meta.title }}
    </h1>
    <br />

    <div class="content">
      <p>
        There are several ways to get started with Vue3-ui. You can either:
      </p>

      <ol>
        <li>
          use our <a href="https://github.com/pathscale/vue3-starter" target="_blank" rel="noopener">Vue3 Starter</a> template to create a Vue3-ui ready app based in
          <a href="https://rollupjs.org/" target="_blank" rel="noopener">Rollup</a>
        </li>
        <li>
          use npm to install the <a href="https://www.npmjs.com/package/@pathscale/vue3-ui" target="_blank" rel="noopener">@pathscale/vue3-ui</a> package in an Vue3 App generared by
          <a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener">Vue CLI</a>
        </li>
      </ol>
    </div>


    <v-accordion :expanded="state.rollup" header-is-trigger>
      <template #header>
        <div class="is-inline-flex mt-6" @click="toggle('rollup')">
          <h4 class="title is-4">
            1. Rollup Install <i>(recommended)</i>
          </h4>
          <v-icon v-if="state.rollup" src="../assets/icons/menu-up.svg" name="menu-up-icon" bundle="navbar-icons" />
          <v-icon v-else src="../assets/icons/menu-down.svg" name="menu-down-icon" bundle="navbar-icons" />
        </div>
      </template>
      <template #content>
        <div class="content">
          <a href="https://rollupjs.org/" target="_blank" rel="noopener">Rollup</a> is a <i>module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application</i>.
        </div>

        <div class="subtitle content">
          What's Included
        </div>

        <div class="content">
          <ul>
            <li>Vue3-ui and Bulma with Theming support</li>
            <li>Hot-reload</li>
            <li>Lint-on-save with ESLint</li>
            <li>JavaScript compiled and minified with google-closure-compiler.</li>
            <li>CSS across all components extracted into a single file and minified.</li>
            <li>Unused CSS removed with our PurgeCSS based <a href="https://github.com/pathscale/rollup-plugin-vue3-ui-css-purge" target="_blank" rel="noopener">plugin</a></li>
          </ul>
        </div>

        <div class="subtitle content">
          Prerequisites
        </div>
        <div class="box has-background-light is-family-code">
          npm install -g vue-cli @vue/cli-init
        </div>
        <div class="subtitle content">
          Create a new project based on our Vue3 Starter template
        </div>
        <div class="box has-background-light is-family-code">
          vue init pathscale/vue3-starter my-project
          <br />
          cd my-project
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
    <v-accordion :expanded="state.cli" header-is-trigger>
      <template #header>
        <div class="is-inline-flex mt-3" @click="toggle('cli')">
          <h4 class="title is-4">
            2. Vue3 CLI Install
          </h4>
          <v-icon v-if="state.cli" src="../assets/icons/menu-up.svg" name="menu-up-icon" bundle="navbar-icons" />
          <v-icon v-else src="../assets/icons/menu-down.svg" name="menu-down-icon" bundle="navbar-icons" />
        </div>
      </template>
      <template #content>
        <div class="content">
          Use  <a href="https://cli.vuejs.org/" target="_blank" rel="noopener">Vue CLI</a> to create an app with hot-reload, lint-on-save, and production-ready builds.
        </div>
        <div class="subtitle content">
          Prerequisites
        </div>

        <div class="box has-background-light is-family-code">
          npm install -g @vue/cli
        </div>

        <div class="subtitle content">
          Create a Vue3 app
        </div>

        <div class="box has-background-light is-family-code">
          vue create hello-world
          <br />
          ? Please pick a preset: Default (Vue3 Preview) ([Vue 3] babel, eslint)
        </div>

        <div class="subtitle content">
          Install required packages
        </div>

        <div class="box has-background-light is-family-code">
          npm i @pathscale/vue3-ui @pathscale/bulma-extensions-css-var @pathscale/bulma-pull-2981-css-var-only
        </div>

        <div class="subtitle content">
          Import styles in main.js
        </div>

        <div class="box has-background-light is-family-code">
          import '@pathscale/bulma-pull-2981-css-var-only/css/bulma.css'
          <br />
          import '@pathscale/bulma-extensions-css-var'
        </div>

        <div class="content">
          Update <b>HelloWord.vue </b> with the snippet code below and you should get a similar output in <a href="http://localhost:8080/" target="_blank" rel="noopener">http://localhost:8080/</a>
        </div>
      </template>
    </v-accordion>
    <snippet-section title="" :code="ShowcaseCode" :component="Showcase" :path="router.currentRoute.value.path" />
  </div>
</template>
