<script>
import { reactive, watchEffect, computed } from 'vue'
import { VField, VInput } from '@pathscale/vue3-ui'

export default {
  name: 'ValidationBasicExample',
  components: { VField, VInput },
  setup() {
    const state = reactive({
      username: '',
      password: ''
    })
    const errors = reactive({})

    const validators = {
      username: value => value.length >= 2,
      password: value => value.length >= 5 && !value.includes(' ')
    }

    watchEffect(() => {
      if (!validators.username(state.username)) {
        errors.username = 'Must be at least 2 chars long'
      } else {
        delete errors.username
      }

      if (!validators.password(state.password)) {
        errors.password = 'Must be at least 5 chars long and contain no spaces'
      } else {
        delete errors.password
      }
    })

    const types = computed(() => ({
      username: errors.username ? 'is-danger' : 'is-info',
      password: errors.password ? 'is-danger' : 'is-info'
    }))

    return { state, errors, types }
  }
}
</script>

<template>
  <v-field label="Username" :message="errors.username" :type="types.username">
    <v-input v-model="state.username" type="text" :color="types.username" />
  </v-field>
  <v-field label="Password" :message="errors.password" :type="types.password">
    <v-input v-model="state.password" type="password" :color="types.password" />
  </v-field>
</template>
