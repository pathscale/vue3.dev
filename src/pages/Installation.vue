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
    <p>
      {{ router.currentRoute.value.meta.metaTags[0].content }}
    </p>
    <v-accordion :expanded="state.rollup" header-is-trigger>
      <template #header>
        <div class="is-inline-flex mt-6" @click="toggle('rollup')">
          <h4 class="title is-4">
            Rollup Install <i>(recommended)</i>
          </h4>
          <v-icon v-if="state.rollup" src="../assets/icons/menu-up.svg" name="menu-up-icon" bundle="navbar-icons" />
          <v-icon v-else src="../assets/icons/menu-down.svg" name="menu-down-icon" bundle="navbar-icons" />
        </div>
      </template>
      <template #content>
        <div class="content">
          Instructions here
        </div>
        <snippet-section title="" :code="ShowcaseCode" :component="Showcase" :path="router.currentRoute.value.path" />
      </template>
    </v-accordion>
    <v-accordion :expanded="state.cli" header-is-trigger>
      <template #header>
        <div class="is-inline-flex mt-3" @click="toggle('cli')">
          <h4 class="title is-4">
            Vue3 CLI Install
          </h4>
          <v-icon v-if="state.cli" src="../assets/icons/menu-up.svg" name="menu-up-icon" bundle="navbar-icons" />
          <v-icon v-else src="../assets/icons/menu-down.svg" name="menu-down-icon" bundle="navbar-icons" />
        </div>
      </template>
      <template #content>
        <div class="content">
          Vue provides an official CLI for quickly scaffolding ambitious Single Page Applications.
          It provides batteries-included build setups for a modern frontend workflow.
          It takes only a few minutes to get up and running with hot-reload, lint-on-save, and production-ready builds.
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
          Update <b>HelloWord.vue </b> with the bottom snippet code, you should get a similar output in http://localhost:8080/
        </div>

        <snippet-section title="" :code="ShowcaseCode" :component="Showcase" :path="router.currentRoute.value.path" />
      </template>
    </v-accordion>
  </div>
</template>
