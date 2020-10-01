<script>
import { VButton } from '@pathscale/vue3-ui'

const Component = {
  components: { VButton },
}
export default Component;
</script>
<template>
  <div class="buttons">
    <v-button type="is-primary">
      Primary
    </v-button>
    <v-button type="is-success">
      Success
    </v-button>
    <v-button type="is-danger">
      Danger
    </v-button>
    <v-button type="is-warning">
      Warning
    </v-button>
    <v-button type="is-info">
      Info
    </v-button>
    <v-button type="is-link">
      Link
    </v-button>
    <v-button type="is-light">
      Light
    </v-button>
    <v-button type="is-dark">
      Dark
    </v-button>
    <v-button type="is-text">
      Text
    </v-button>
  </div>
</template>
