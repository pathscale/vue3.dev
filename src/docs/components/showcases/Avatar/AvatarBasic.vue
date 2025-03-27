<script>
import { VAvatar } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseAvatar',
  components: { VAvatar }
}
</script>

<template>
  <div class="is-flex is-justify-content-flex-start is-align-items-center">
    <v-avatar alt="John Doe" />
    <v-avatar alt="Marry Jane" background="has-background-warning" text="has-text-black" />
  </div>
</template>
