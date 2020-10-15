<script>
import { reactive, watchEffect, computed } from 'vue'
import { VField, VInput, VColumns, VColumn } from '@pathscale/vue3-ui'

export default {
  name: 'ValidationBasicExample',
  components: { VColumns, VColumn, VField, VInput },
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
  <v-columns>
    <v-column size="is-4">
      <v-field label="Username" :message="errors.username" :type="types.username">
        <v-input type="text" v-model="state.username" :color="types.username" />
      </v-field>
      <v-field label="Password" :message="errors.password" :type="types.password">
        <v-input type="password" v-model="state.password" :color="types.password" />
      </v-field>
    </v-column>
  </v-columns>
</template>
