<script>
import { VTimeline } from '@pathscale/vue3-ui'

export default {
  name: 'VTimelinExample',
  components: { VTimeline },
  setup() {
    return {
      stages: [
        { title: 'Create Account' },
        { title: 'Complete profile', active: true },
        { title: 'Apply to jobs' },
      ],
    }
  },
}
</script>

<template>
  <v-timeline :stages="stages">
    <template #default="props">
      <h1>{{ props.stage.title }}</h1>
    </template>
  </v-timeline>
</template>
