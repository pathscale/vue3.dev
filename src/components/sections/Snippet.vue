

<script>
/* eslint-disable no-unsanitized/property -- ignore */
// eslint-disable-next-line import/no-unresolved -- temporary
import { VColumns, VColumn, VAccordion, VButton } from '@pathscale/vue3-ui'

import 'highlight.js/styles/github.css'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

const Demo = {
	name: 'Demo',
	props: {
		code: String,
		format: {
			type: String,
			default: 'javascript'
        },
		component: [Object, Function],
		path: String
	},
	components: { VColumns, VColumn, VAccordion, VButton },
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

<template>
  <div>
    <h1 class="title is-size-4 pt-5">
      <a :href="`${path}#demo`" class="is-active">#</a> Showcase
    </h1>
    <v-columns>
      <v-column>
        <component :is="component" />
      </v-column>
      <v-column>
        <v-accordion is-horizontal header-is-trigger background="transparent">
          <template #trigger>
            <v-button light class="mb-2">
              &lt;>
            </v-button>
          </template>
          <template #content>
            <pre v-highlightjs :class="format"><code>{{ code }}</code></pre>
          </template>
        </v-accordion>
      </v-column>
    </v-columns>
  </div>
</template>
