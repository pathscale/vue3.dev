<script>
import { VField, VInput } from "@pathscale/vue3-ui";
import { computed, reactive, watchEffect } from "vue";

export default {
  name: "ValidationBasicExample",
  components: { VField, VInput },
  setup() {
    const state = reactive({
      username: "",
      password: "",
    });
    const errors = reactive({});

    const validators = {
      username: (value) => value.length >= 2,
      password: (value) => value.length >= 5 && !value.includes(" "),
    };

    watchEffect(() => {
      if (!validators.username(state.username)) {
        errors.username = "Must be at least 2 chars long";
      } else {
        errors.username = undefined;
      }

      if (!validators.password(state.password)) {
        // eslint-disable-next-line sonarjs/no-hardcoded-passwords -- Not a real password
        errors.password = "Must be at least 5 chars long and contain no spaces";
      } else {
        errors.password = undefined;
      }
    });

    const types = computed(() => ({
      username: errors.username ? "is-danger" : "is-info",
      password: errors.password ? "is-danger" : "is-info",
    }));

    return { state, errors, types };
  },
};
</script>

<template>
	<v-field label="Username" :message="errors.username" :type="types.username">
		<v-input v-model="state.username" type="text" :color="types.username" />
	</v-field>
	<v-field label="Password" :message="errors.password" :type="types.password">
		<v-input v-model="state.password" type="password" :color="types.password" />
	</v-field>
</template>
