<script>
import { ref } from 'vue'
import { VField, VInput, VButton, VSelect } from '@pathscale/vue3-ui'

const Component = {
  components: { VField, VInput, VButton, VSelect }
}

export default Component;
</script>

<template>
  <section>
    <v-field label="Default">
      <v-input />
    </v-field>

    <v-field label="Form addons">
      <v-field addons>
        <v-input />
        <v-button type="is-info">
          Search
        </v-button>
      </v-field>
      <v-field addons position="has-addons-centered">
        <v-select placeholder="Category">
          <option>New</option>
          <option>Used</option>
        </v-select>
        <v-input placeholder="Product name" />
        <v-button type="is-info">
          Search
        </v-button>
      </v-field>
      <v-field addons position="has-addons-right">
        <v-input placeholder="Your email" />
        <v-button type="is-static">
          @gmail.com
        </v-button>
      </v-field>
    </v-field>

    <v-field label="Grouped">
      <v-field grouped class="buttons">
        <v-button type="is-primary">
          Accept
        </v-button>
        <v-button type="is-light">
          Cancel
        </v-button>
      </v-field>
      <v-field grouped class="buttons" position="is-grouped-centered">
        <v-button type="is-primary">
          Accept
        </v-button>
        <v-button type="is-light">
          Cancel
        </v-button>
      </v-field>
      <v-field grouped class="buttons" position="is-grouped-right">
        <v-button type="is-primary">
          Accept
        </v-button>
        <v-button type="is-light">
          Cancel
        </v-button>
      </v-field>
    </v-field>

    <v-field label="Horizontal">
      <v-field horizontal label="From">
        <v-field grouped group-multiline>
          <v-input placeholder="Name" />
          <v-input placeholder="Your email" />
        </v-field>
      </v-field>
    </v-field>

    <v-field label="Label size">
      <v-field horizontal label="From" size="is-small">
        <v-input placeholder="Name" />
      </v-field>
      <v-field horizontal label="From" size="is-medium">
        <v-input placeholder="Name" />
      </v-field>
      <v-field horizontal label="From" size="is-large">
        <v-input placeholder="Name" />
      </v-field>
    </v-field>

    <v-field label="Message" type="is-danger" message="Message is required!">
      <v-input color="is-danger" />
    </v-field>
  </section>
</template>
