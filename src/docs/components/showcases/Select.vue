<script>
import { VField, VSelect } from '@pathscale/vue3-ui'

const Component = {
  components: { VField, VSelect }
}
export default Component;
</script>
<template>
  <section>
    <v-field label="Sizes">
      <v-select color="is-info" placeholder="info" size="is-small">
        <option>Select dropdown</option>
        <option>With options</option>
      </v-select>
    </v-field>
    <v-field>
      <v-select color="is-primary" placeholder="primary">
        <option>Select dropdown</option>
        <option>With options</option>
      </v-select>
    </v-field>
    <v-field>
      <v-select color="is-success" placeholder="success" size="is-large">
        <option>Select dropdown</option>
        <option>With options</option>
      </v-select>
    </v-field>

    <v-field label="Loading">
      <v-select placeholder="loading" loading>
        <option>Select dropdown</option>
        <option>With options</option>
      </v-select>
    </v-field>

    <v-field label="Rounded">
      <v-select placeholder="warning" rounded>
        <option>Select dropdown</option>
        <option>With options</option>
      </v-select>
    </v-field>

    <v-field label="Expanded">
      <v-select color="is-danger" placeholder="danger" expanded>
        <option>Select dropdown</option>
        <option>With options</option>
      </v-select>
    </v-field>

    <v-field label="Empty">
      <v-select placeholder="empty" expanded />
    </v-field>
  </section>
</template>
