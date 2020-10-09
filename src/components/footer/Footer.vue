<script>
import { VNavbar, VNavbarItem, VNavbarDropdown, VInput, VColumns, VColumn } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'

const Component = {
  components: { VNavbar, VNavbarItem, VNavbarDropdown, VInput, VColumns, VColumn },
  setup() {
    const intl = useI18n()
    return { intl }
  }
}

export default Component
</script>

<template>
  <footer class="footer py-5">
    <div class="content has-text-centered">
      <v-columns vcentered>
        <v-column>
          Subscription Plans
        </v-column>
        <v-column>
          Events
        </v-column>
      </v-columns>
      <v-columns vcentered hcentered>
        <v-column>
          <p>
            <strong>2020 ©</strong>
            by Mach IV Motors {{ process.env.VUE_APP_VERSION_NUMBER }}
          </p>
        </v-column>
      </v-columns>
    </div>
  </footer>
</template>
