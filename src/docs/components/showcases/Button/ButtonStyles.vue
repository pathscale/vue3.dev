<script>
import { VButton, VIcon } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseButton",
  components: { VButton, VIcon },
};
</script>

<template>
  <div class="buttons">
    <v-button rounded type="is-info">
      Rounded
    </v-button>
    <v-button rounded type="is-light">
      <span>
        Github
      </span>
      <v-icon name="github-icon" color="white" bundle="icons" />
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
</template>
