<script>
/* eslint-disable no-unsanitized/property -- ignore */
import { VAccordion, VButton, VTabs, VTab } from '@pathscale/vue3-ui'
import { ref, computed } from 'vue'

import 'highlight.js/styles/github.css'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)

export default {
  name: 'Demo',
  components: { VAccordion, VButton, VTabs, VTab },
  directives: {
    highlightjs: {
      beforeMount(el, binding) {
        const targets = el.querySelectorAll('code')
        for (const target of targets) {
          if (binding.value) {
            target.innerHTML = binding.value
          }
          hljs.highlightBlock(target)
        }
      },
      componentUpdated(el, binding) {
        const targets = el.querySelectorAll('code')
        for (const target of targets) {
          if (binding.value) {
            target.innerHTML = binding.value
            hljs.highlightBlock(target)
          }
        }
      }
    }
  },
  props: {
    code: String,
    format: {
      type: String,
      default: 'javascript'
    },
    component: [Object, Function],
    path: String,
    title: {
      type: String,
      default: 'Showcase'
    }
  },
  setup(props) {
    const activeTag = ref(null)

    const getDemoLink = () => {
      return `${props.path}#demo`
    }

    const script = computed(() => props.code.match(/<script>([\s\S]*)<\/script>/g)?.[0] )
    const template = computed(() => props.code.match(/<template>([\s\S]*)<\/template>/g)?.[0] )
    const style = computed(() => props.code.match(/<style>([\s\S]*)<\/style>/g)?.[0] )

    return { getDemoLink, script, template, style, activeTag }
  }
}
</script>

<template>
  <div class="box">
    <h1 v-if="title" class="title is-size-4 mt-4">
      <a :href="getDemoLink()" class="is-active">#</a> {{ title }}
    </h1>
    <component :is="component" />
    <v-accordion header-is-trigger>
      <template #trigger>
        <v-button light class="my-2">
          &lt;&gt;
        </v-button>
      </template>
      <template #content>
        <v-tabs v-model="activeTag">
          <v-tab label="Code" v-if="script">
            <pre v-highlightjs :class="format"><code>{{ script }}</code></pre>
          </v-tab>
          <v-tab label="Template" v-if="template">
            <pre v-highlightjs :class="format"><code>{{ template }}</code></pre>
          </v-tab>
          <v-tab label="Style" v-if="style">
            <pre v-highlightjs :class="format"><code>{{ style }}</code></pre>
          </v-tab>
        </v-tabs>
      </template>
    </v-accordion>
  </div>
</template>
