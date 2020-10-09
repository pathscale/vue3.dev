<script>
import { VMenu, VMenuItem, VMenuList } from '@pathscale/vue3-ui'

const Component = {
  components: { VMenu, VMenuItem, VMenuList }
}

export default Component
</script>

<template>
  <section>
    <v-menu>
      <v-menu-list label="Menu">
        <v-menu-item label="Info" />
        <v-menu-item :active="true" expanded label="Administrator">
          <v-menu-item label="Users" />
          <v-menu-item label="Devices" />
          <v-menu-item label="Payments" disabled />
        </v-menu-item>
        <v-menu-item label="My Account">
          <v-menu-item label="Account data" />
          <v-menu-item label="Addresses" />
        </v-menu-item>
      </v-menu-list>
      <v-menu-list>
        <v-menu-item label="Expo" tag="router-link" target="_blank" to="/" />
      </v-menu-list>
      <v-menu-list label="Actions">
        <v-menu-item label="Logout" />
      </v-menu-list>
    </v-menu>
  </section>
</template>
