<script>
import { VField, VInput, VButton, VSteps, VStepItem } from '@pathscale/vue3-ui'

import { ref, reactive } from 'vue'

export default {
  name: 'DevShowcaseSteps',
  components: { VSteps, VStepItem, VField, VInput, VButton },
  setup() {
    const activeTab = ref(0)
    const state = reactive({
      name: 'John Wick',
      email: 'boogeyman@gmail.com',
      username: 'the_boogeyman',
      password: 'Daisy',
      message: 'Guns. Lots of guns.',
    })

    const next = () => {
      activeTab.value += 1
    }

    const back = () => {
      activeTab.value -= 1
    }

    return { activeTab, state, next, back }
  },
}
</script>

<template>
  <v-steps v-model="activeTab" animated>
    <!-- Step 1 -->
    <v-step-item title="Contact" marker="1">
      <v-field label="Name">
        <v-input v-model="state.name" />
      </v-field>
      <v-field label="Email">
        <v-input v-model="state.email" type="email" maxlength="30" />
      </v-field>

      <div class="buttons is-justify-content-right">
        <v-button type="is-dark" @click="next"> Next </v-button>
      </div>
    </v-step-item>

    <!-- Step 2 -->
    <v-step-item title="Account" marker="2" clickable subtitle="You can click me">
      <v-field label="Username">
        <v-input v-model="state.username" maxlength="30" />
      </v-field>
      <v-field label="Password">
        <v-input v-model="state.password" type="password" />
      </v-field>

      <div class="buttons is-justify-content-right">
        <v-button type="is-light" @click="back"> Back </v-button>
        <v-button type="is-dark" @click="next"> Next </v-button>
      </div>
    </v-step-item>

    <!-- Step 3 -->
    <v-step-item title="Recovery" marker="3">
      <v-field label="Recovery passphrase">
        <v-input v-model="state.message" maxlength="144" type="textarea" />
      </v-field>
      <v-field label="Amount">
        <v-input v-model="state.amount" min="0" type="number" />
      </v-field>

      <div class="buttons is-justify-content-right">
        <v-button type="is-light" @click="back"> Back </v-button>
        <v-button type="is-dark" @click="next"> Next </v-button>
      </div>
    </v-step-item>

    <!-- Step 4 -->
    <v-step-item title="Finish" class="has-text-centered">
      <h1 class="title is-4">Your account is now created!</h1>
      <!-- eslint-disable-next-line @pathscale/vue3/v-directive -->
      <v-button type="is-dark" @click="activeTab = 0"> Restart </v-button>
    </v-step-item>
  </v-steps>
</template>

