<script>
import { reactive } from 'vue'
import { VField, VInput, VIcon } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseInput',
  components: { VField, VInput, VIcon },
  setup() {
    const state = reactive({
      name: 'John Wick',
      email: 'boogeyman@',
      username: 'the_boogeyman',
      password: 'Daisy',
      message: 'Guns. Lots of guns.'

    })
    return { state }
  }
}
</script>

<template>
  <v-field label="Name">
    <v-input v-model="state.name" />
  </v-field>

  <v-field label="Email" type="is-danger" message="This email is invalid">
    <v-input v-model="state.email" type="email" maxlength="30" color="is-danger">
      <template #leftIcon>
        <v-icon custom-class="input-icon" name="email-icon" bundle="icons" />
      </template>
      <template #rightIcon>
        <v-icon custom-class="input-icon" name="alert-icon" bundle="icons" />
      </template>
    </v-input>
  </v-field>

  <v-field label="Username" type="is-success" message="This username is available">
    <v-input v-model="state.username" maxlength="30" color="is-success">
      <template #leftIcon>
        <v-icon custom-class="input-icon" name="account-icon" bundle="icons" />
      </template>
      <template #rightIcon>
        <v-icon custom-class="input-icon" name="check-icon" bundle="icons" />
      </template>
    </v-input>
  </v-field>

  <v-field label="Password" type="is-warning" message="This password is weak">
    <v-input v-model="state.password" type="password" color="is-warning" password-reveal />
  </v-field>

  <v-field label="Recovery passphrase">
    <v-input v-model="state.message" maxlength="144" type="textarea" size="is-large" />
  </v-field>

  <v-field label="Amount">
    <v-input v-model="state.amount" min="0" type="number" placeholder="Enter amount">
      <template #leftIcon>
        <span>
          &#36;
        </span>
      </template>
    </v-input>
  </v-field>
</template>

<style>
.input-icon {
  fill: lightgray;
  width: 20px;
  height: 20px;
}
</style>
