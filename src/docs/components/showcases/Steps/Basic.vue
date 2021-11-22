<script>
import { VField, VInput, VIcon, VColumns, VColumn, VButton } from '@pathscale/vue3-ui'

import { ref, reactive } from 'vue'
import { VSteps, VStepItem } from './src'

export default {
  name: 'DevShowcaseTabs',
  components: { VSteps, VStepItem, VField, VInput, VIcon, VColumns, VColumn, VButton },
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
  <v-columns hcentered>
    <v-column size="is-6">
      <v-steps v-model="activeTab">
        <v-step-item title="Contact" marker="1">
          <v-field label="Name">
            <v-input v-model="state.name" />
          </v-field>

          <v-field label="Email">
            <v-input type="email" v-model="state.email" maxlength="30">
              <template #leftIcon>
                <v-icon custom-class="input-icon" name="email-icon" bundle="icons" />
              </template>
              <template #rightIcon>
                <v-icon custom-class="input-icon" name="alert-icon" bundle="icons" />
              </template>
            </v-input>
          </v-field>

          <div class="buttons">
            <v-button type="is-dark" @click="next">
              Next
            </v-button>
          </div>
        </v-step-item>
        <v-step-item title="Account" marker="2" clickable subtitle="You can click me">
          <v-field label="Username">
            <v-input v-model="state.username" maxlength="30">
              <template #leftIcon>
                <v-icon custom-class="input-icon" name="account-icon" bundle="icons" />
              </template>
              <template #rightIcon>
                <v-icon custom-class="input-icon" name="check-icon" bundle="icons" />
              </template>
            </v-input>
          </v-field>

          <v-field label="Password">
            <v-input type="password" v-model="state.password" />
          </v-field>

          <div class="buttons">
            <v-button type="is-light" @click="back">
              Back
            </v-button>
            <v-button type="is-dark" @click="next">
              Next
            </v-button>
          </div>
        </v-step-item>
        <v-step-item title="Recovery" marker="3">
          <v-field label="Recovery passphrase">
            <v-input maxlength="144" type="textarea" v-model="state.message" />
          </v-field>

          <v-field label="Amount">
            <v-input v-model="state.amount" min="0" type="number">
              <template #leftIcon>
                <span> &#36; </span>
              </template>
            </v-input>
          </v-field>
          <div class="buttons">
            <v-button type="is-light" @click="back">
              Back
            </v-button>
            <v-button type="is-dark" @click="next">
              Next
            </v-button>
          </div>
        </v-step-item>

        <v-step-item title="Finish" class="has-text-centered">
          <h1 class="title is-4">
            Your account is now created!
          </h1>
          <!-- eslint-disable-next-line @pathscale/vue3/v-directive -->
          <v-button type="is-dark" @click="activeTab = 0">
            Restart
          </v-button>
        </v-step-item>
      </v-steps>
    </v-column>
  </v-columns>
</template>

