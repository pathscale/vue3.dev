<script>
import { VTooltip, VButton } from '@pathscale/vue3-ui'

const Component = {
  components: { VTooltip, VButton },
}
export default Component;
</script>
<template>
  <section>
    <v-tooltip type="is-success" label="Top/Always" always>
      <v-button type="is-success">
        Top/Always
      </v-button>
    </v-tooltip>
    <v-tooltip type="is-info" label="Right/Animated" position="is-right" animated>
      <v-button type="is-info">
        Right/Animated
      </v-button>
    </v-tooltip>
    <v-tooltip type="is-danger" label="Bottom/Delay 500(ms)" position="is-bottom" 
               :delay="500">
      <v-button type="is-danger">
        Bottom/Delay 500(ms)
      </v-button>
    </v-tooltip>

    <v-tooltip type="is-warning" label="Left/Square" position="is-left" square> 
      <v-button type="is-warning">
        Left/Square
      </v-button>
    </v-tooltip>
    <v-tooltip type="is-dark" label="Multilined/Large/Dashed Multilined/Large/Dashed" 
               position="is-right" multilined size="is-large" dashed> 
      <v-button type="is-text">
        Multilined/Large/Dashed
      </v-button>
    </v-tooltip>
  </section>
</template>

<style scoped>
 .button {
      margin: .5rem;
  }
</style>
