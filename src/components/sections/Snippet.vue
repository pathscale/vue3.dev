<script>
/* eslint-disable no-unsanitized/property -- ignore */
import { VButton, VTabs, VTab } from '@pathscale/vue3-ui'
import { ref, computed } from 'vue'

import 'highlight.js/styles/github.css'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)

export default {
  name: 'Demo',
  components: { VButton, VTabs, VTab },
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
    const getDemoLink = () => {
      return `${props.path}#${props.title.toLowerCase()}`
    }

    // arrays
    const _script = computed(() => props.code.match(/<script>([\s\S]*)<\/script>/g))
    const _template = computed(() => props.code.match(/<template>([\s\S]*)<\/template>/g))
    const _style = computed(() => props.code.match(/<style>([\s\S]*)<\/style>/g))

    // first elements of arrays as .?[0] is not supported
    const script = computed(() => _script.value ? _script.value[0] : null)
    const template = computed(() => _template.value ? _template.value[0] : null)
    const style = computed(() => _style.value ? _style.value[0] : null)

    const activeTab = ref(_template.value ? 1 : 0)
    return { getDemoLink, script, template, style, activeTab }
  }
}
</script>

<template>
  <div class="box" :id="title.toLowerCase()">
    <h1 v-if="title" class="title is-size-4 mt-4">
      <a :href="getDemoLink()" class="is-active">#</a> {{ title }}
    </h1>
    <component :is="component" />
    <v-tabs v-model="activeTab" type="is-boxed" class="mt-4">
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
  </div>
</template>
