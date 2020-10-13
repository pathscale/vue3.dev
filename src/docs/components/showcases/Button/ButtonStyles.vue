<script>
import { VButton } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseButton',
  components: { VButton }
}
</script>

<template>
  <section>
    <div class="buttons">
      <v-button rounded type="is-info">
        Rounded
      </v-button>
    </div>

    <div class="buttons">
      <v-button type="is-primary" outlined>
        Outlined
      </v-button>
      <v-button type="is-success" outlined>
        Outlined
      </v-button>
      <v-button type="is-danger" outlined>
        Outlined
      </v-button>
      <v-button type="is-warning" outlined>
        Outlined
      </v-button>
    </div>

    <div class="buttons">
      <v-button type="is-primary" expanded>
        Expanded
      </v-button>
    </div>

    <div class="notification is-primary">
      <div class="buttons">
        <v-button type="is-primary" inverted>
          Inverted
        </v-button>
        <v-button type="is-primary" inverted outlined>
          Invert Outlined
        </v-button>
      </div>
    </div>
  </section>
</template>
