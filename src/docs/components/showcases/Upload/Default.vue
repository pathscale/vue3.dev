<script>
import { ref, watchEffect } from 'vue'
import { VUpload, VIcon, VTag } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseUpload',
  components: { VUpload, VIcon, VTag },
  setup() {
    const files = ref([
      {
        name: 'examples-of-situational-questions.docx',
      },
      {
        name: 'SWTM-2088_Atlassian-Git-Cheatsheet.pdf',
      },
    ])

    watchEffect(() => {
      if (files.value) {
        console.log(files.value)
      }
    })

    function deleteFile(index) {
      files.value.splice(index, 1)
    }
    return { files, deleteFile }
  },
}
</script>

<template>
  <v-upload v-model="files" multiple boxed>
    <template #icon>
      <v-icon name="upload-icon" bundle="icons" />
    </template>
    <template #label>
      Choose a file…
    </template>
  </v-upload>
  <div class="tags is-block mt-2">
    <v-tag
      v-for="(file, index) in files"
      :key="index"
      type="is-info"
      closable
      @close="deleteFile(index)">
      {{ file.name }}
    </v-tag>
  </div>
</template> 

