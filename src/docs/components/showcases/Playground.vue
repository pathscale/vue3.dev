<script>
import { ref } from 'vue'
import { VUpload } from '@pathscale/vue3-ui'


export default {
  name: 'DevShowcasePlayground',
  components: { VUpload },
  setup() {
    const file = ref([])
    return { file }
  },
}
</script>

<template>
  <v-upload boxed v-model="file">
    <template #label>
      Choose a file…
    </template>
    <template #name>
      {{ file?.name }}
    </template>
  </v-upload>
</template> 