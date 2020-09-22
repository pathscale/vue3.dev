<script>
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VButton, VColumns, VColumn, VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VSidebar, VMenu, VMenuItem, VMenuList} from "@pathscale/vue3-ui"
import { useI18n } from "vue-composable";
import { useRouter } from 'vue-router';


const Component = {
  components: { VButton, VColumns, VColumn,  VSelect, VField, VInput, VBreadcrumb, VBreadcrumbItem, VSidebar, VMenu, VMenuItem, VMenuList },
  setup() {
    const intl = useI18n();
    const router = useRouter();
    const { path } = router.currentRoute.value;
    return { intl, path }
  }
}
export default Component;
</script>

<template>
  <section class="hero is-fullheight has-background-white pt-6">
    <v-columns class="pt-5 mx-0">
      <v-column size="is-2">
        <div class="pt-6 px-5">
          <v-menu>
            <v-menu-list label="Getting Started">
              <v-menu-item label="Installation" />
              <v-menu-item label="Why Vue3-ui" />
              <v-menu-item label="Theming" />
            </v-menu-list>
            <v-menu-list label="Elements">
              <!-- <v-menu-item label="Typography" /> -->
              <!-- <v-menu-item label="Box" /> -->
              <v-menu-item tag="router-link" :to="{name: 'button'}" label="Button" />
              <!-- <v-menu-item label="Content" /> -->
              <!-- <v-menu-item label="Delete" /> -->
              <!-- <v-menu-item label="Form" /> -->
              <!-- <v-menu-item label="Icon" /> -->
              <v-menu-item label="Image" />
              <!-- <v-menu-item label="Notifications" /> -->
              <v-menu-item label="Progress" />
              <!-- <v-menu-item label="Table" /> -->
              <v-menu-item label="Tag" />
            </v-menu-list>
            <v-menu-list label="Form controls">
              <v-menu-item label="Input" />
              <v-menu-item label="Switch" />
              <v-menu-item label="Select" />
              <v-menu-item label="Textarea" />
              <v-menu-item label="Checkbox" />
            </v-menu-list>
            <v-menu-list label="Components">
              <!-- <v-menu-item label="Breadcrumb" /> -->
              <v-menu-item label="Dropdown" />
              <v-menu-item label="Card" />
              <!-- <v-menu-item label="Hero" /> -->
              <!-- <v-menu-item label="Level" /> -->
              <!-- <v-menu-item label="Media" /> -->
              <v-menu-item label="Menu" />
              <!-- <v-menu-item label="Message" /> -->
              <v-menu-item label="Modal" />
              <v-menu-item label="Navbar" />
              <!-- <v-menu-item label="Pagination" /> -->
              <!-- <v-menu-item label="Panel" /> -->
              <v-menu-item label="Tabs" />
            </v-menu-list>
          </v-menu>
        </div>
      </v-column>
      <v-column>
        <div class="hero-body pt-6 is-aligned-start">
          <div class="container">
            <v-breadcrumb>
              <v-breadcrumb-item tag="router-link" :to="{ name: 'home' }">
                Home
              </v-breadcrumb-item>
              <v-breadcrumb-item v-for="item in path.split('/').slice(1)" :key="item" class="is-capitalized" tag="router-link" :to="{ name: item }">
                {{ item }}
              </v-breadcrumb-item>
            </v-breadcrumb>
            <router-view />
          </div>
        </div>
      </v-column>
    </v-columns>
  </section>
</template>