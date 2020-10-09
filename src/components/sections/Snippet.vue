<script>
/* eslint-disable no-unsanitized/property -- ignore */
import { VAccordion, VButton } from '@pathscale/vue3-ui'

import 'highlight.js/styles/github.css'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)

const Demo = {
  name: 'Demo',
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
  components: { VAccordion, VButton },
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
  }
}

export default Demo
</script>

<template>
  <div class="box">
    <h1 class="title is-size-4 mt-4">
      <a :href="`${path}#demo`" class="is-active">#</a> {{ title }}
    </h1>
    <component :is="component" />
    <v-accordion is-horizontal header-is-trigger background="transparent">
      <template #trigger>
        <v-button light class="my-2">
          &lt;>
        </v-button>
      </template>
      <template #content>
        <pre v-highlightjs :class="format"><code>{{ code }}</code></pre>
      </template>
    </v-accordion>
  </div>
</template>
