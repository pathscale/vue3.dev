
<template>
  <div>
    <h1 class="title is-size-4 pt-5">
      {{ title }}
    </h1>
    <component :is="component" />
    <div class="codeSnippet">
      <v-accordion is-horizontal header-is-trigger background="transparent">
        <template #trigger>
          <v-button light>
            &lt;>
            Code
          </v-button>
        </template>
        <template #content>
          <pre v-highlightjs :class="format"><code>{{ code }}</code></pre>
        </template>
      </v-accordion>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unsanitized/property -- ignore */
// eslint-disable-next-line import/no-unresolved -- temporary
import { VColumn, VAccordion, VButton } from '@pathscale/vue3-ui'

import 'highlight.js/styles/github.css'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

const Demo = {
	name: 'Demo',
	props: {
		title: String,
		code: String,
		format: {
			type: String,
			default: 'javascript'
        },
        component: [Object, Function],
	},
	components: { VColumn, VAccordion, VButton },
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
};
export default Demo;
</script>
