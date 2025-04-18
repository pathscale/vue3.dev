<script>
import { VButton } from "@pathscale/vue3-ui";

export default {
	name: "DevShowcaseButton",
	components: { VButton },
};
</script>

<template>
  <div class="buttons">
    <v-button light size="is-small">
      Small
    </v-button>
    <v-button light>
      Default
    </v-button>
    <v-button light size="is-medium">
      Medium
    </v-button>
    <v-button light size="is-large">
      Large
    </v-button>
  </div>
</template>
