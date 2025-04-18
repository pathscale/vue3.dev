<script>
import {
  VButton,
  VImage,
  VNavbar,
  VNavbarDropdown,
  VNavbarItem,
} from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseNavbar",
  components: { VNavbar, VNavbarItem, VNavbarDropdown, VButton, VImage },
};
</script>

<template>
  <v-navbar type="is-info">
    <template #brand>
      <v-navbar-item tag="router-link" :to="{ name: 'navbar' }">
        <v-image width="100" height="100" class="has-background-grey-light" />
      </v-navbar-item>
    </template>

    <template #start>
      <v-navbar-item href="#" active>
        Home
      </v-navbar-item>
      <v-navbar-item href="#">
        Documentation
      </v-navbar-item>
      <v-navbar-dropdown label="Info" hoverable>
        <v-navbar-item href="#" active>
          About
        </v-navbar-item>
        <v-navbar-item href="#">
          Contact
        </v-navbar-item>
      </v-navbar-dropdown>
    </template>

    <template #end>
      <v-navbar-item tag="div">
        <div class="buttons">
          <v-button type="is-success">
            <strong>Sign up</strong>
          </v-button>
          <v-button type="is-light">
            Log in
          </v-button>
        </div>
      </v-navbar-item>
    </template>
  </v-navbar>
</template>

<!--
<style scoped>
</style>
-->
