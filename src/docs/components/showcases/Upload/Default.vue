<script>
import { ref, watchEffect } from 'vue'
import { VUpload, VIcon } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseUpload',
  components: { VUpload, VIcon },
  setup() {
    const file = ref(
      {
        name: 'examples-of-situational-questions_54ce1256-33c3-4551-91d2-ca9dc940b9df.docx',
      },
    )

    watchEffect(() => {
      if (file.value) {
        console.log(file.value)
      }
    })
    return { file }
  },
}
</script>

<template>
  <v-upload v-model="file">
    <template #icon>
      <v-icon name="upload-icon" bundle="icons" fill="white" />
    </template>
    <template #label>
      Choose a file…
    </template>
    <template #name>
      {{ file?.name }}
    </template>
  </v-upload>
</template> 