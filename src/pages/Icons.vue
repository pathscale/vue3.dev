<script>
import { useRouter } from 'vue-router'
import {  VTabs, VTab } from '@pathscale/vue3-ui'
import { ref } from "vue" 
import { SnippetSection, ApiSection } from '../components'

import api from '../docs/components/api/icon.ts'


// eslint-disable-next-line no-restricted-syntax -- Using all of them
import * as Showcases from '../docs/components/showcases/Icon'
import SizesCode from '../docs/components/raw/Icon/IconSizes.txt'
import CustomSizesCode from '../docs/components/raw/Icon/IconCustomSizes.txt'
import ColorsCode from '../docs/components/raw/Icon/IconColors.txt'
import CustomClassCode from '../docs/components/raw/Icon/IconCustomClass.txt'

export default {
  name: 'DevPageInstallation',
  components: { SnippetSection, ApiSection, VTabs, VTab },
  setup() {
    const router = useRouter()
    const activeTab = ref(0);
    return { router, Showcases, SizesCode, CustomSizesCode, ColorsCode, CustomClassCode, api, activeTab }
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

    <div class="subtitle content mt-4">
      Prerequisites
    </div>
    <v-tabs v-model="activeTab" type="is-boxed" class="mt-4">
      <v-tab label="rollup.config.js">
        <div class="box has-background-light is-family-code">
          import vue3svg from '@pathscale/vue3-svg-icons'
          <br />
          plugins: [
          <br />&nbsp; vue3svg()
          <br />
          ]
        </div>
      </v-tab>
      <v-tab label="main.js">
        <div class="box has-background-light is-family-code">
          import Icons from './Icons.vue'
          <br />const app = createApp(App)
          <br />app.component('Icons', Icons)
          <br />app.mount('#app')
        </div>
      </v-tab>
      <v-tab label="Icons.vue">
        <div class="box has-background-light is-family-code">
          <i class=" has-text-grey-light">Register here all icons you want to use in your app indicating once the <b>src</b> svg icon path</i>
          <br />
          &lt;template>
          <br />&nbsp;&lt;v-icon src="@pathscale/vue3-svg-icons/mdi/discord.svg" name="discord-icon" bundle="icons"/>
          <br />&nbsp;&lt;v-icon src="@pathscale/vue3-svg-icons/mdi/vuejs.svg" name="vuejs-icon" bundle="icons"/>
          <br />&nbsp;&lt;v-icon src="@pathscale/vue3-svg-icons/mdi/github.svg" name="github-icon" bundle="icons"/>
          <br />&nbsp;&lt;v-icon src="@pathscale/vue3-svg-icons/devicon/bower/bower-original-wordmark.svg name="bower-icon" bundle="icons"/>

          <br />
          &lt;/template>
        </div>
      </v-tab>
    </v-tabs>

    <p class="mt-4">
      Checkout <a href="https://github.com/pathscale/vue3-svg-icons" target="_blank" rel="noopener">here</a> all available icons sets
    </p>

    <snippet-section title="Sizes" :code="SizesCode" :component="Showcases.IconSizes" :path="router.currentRoute.value.path" />
    <snippet-section title="Colors" :code="ColorsCode" :component="Showcases.IconColors" :path="router.currentRoute.value.path" />
    <snippet-section title="Custom Sizes" :code="CustomSizesCode" :component="Showcases.IconCustomSizes" :path="router.currentRoute.value.path" />
    <snippet-section title="Custom Class" :code="CustomClassCode" :component="Showcases.IconCustomClass" :path="router.currentRoute.value.path" />


    <section id="api" class="py-4">
      <h2 class="title is-4">
        <a :href="`${router.currentRoute.value.path}#api`" class="is-active">#</a> API
      </h2>
      <api-section :api="api" />
    </section>
  </div>
</template>
