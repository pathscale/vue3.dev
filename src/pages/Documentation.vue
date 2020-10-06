<script>
import {
  VButton,
  VColumns,
  VColumn,
  VSelect,
  VField,
  VInput,
  VBreadcrumb,
  VBreadcrumbItem,
  VSidebar,
  VMenu,
  VMenuItem,
  VMenuList,
// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
} from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'
import { useRouter } from 'vue-router'

const Component = {
  components: {
    VButton,
    VColumns,
    VColumn,
    VSelect,
    VField,
    VInput,
    VBreadcrumb,
    VBreadcrumbItem,
    VSidebar,
    VMenu,
    VMenuItem,
    VMenuList,
  },
  setup() {
    const intl = useI18n()
    const router = useRouter()

    function redirect(name) {
      router.push({
        name,
      })
    }

    const { path } = router.currentRoute.value
    return { intl, path, redirect }
  },
}
export default Component
</script>

<template>
  <section class="has-background-white pt-6">
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
              <v-menu-item @click="redirect('button')" label="Button" />
              <v-menu-item @click="redirect('datagrid')" label="Datagrid" />
              <!-- <v-menu-item label="Content" /> -->
              <!-- <v-menu-item label="Delete" /> -->
              <!-- <v-menu-item label="Form" /> -->
              <!-- <v-menu-item label="Icon" /> -->
              <v-menu-item label="Image" @click="redirect('image')" />
              <!-- <v-menu-item label="Notifications" /> -->
              <v-menu-item label="Progress" @click="redirect('progress')" />
              <v-menu-item label="Table" @click="redirect('table')" />
              <v-menu-item label="Tag" @click="redirect('tag')" />
              <v-menu-item label="Tooltip" @click="redirect('tooltip')" />
            </v-menu-list>
            <v-menu-list label="Form controls">
              <v-menu-item label="Input" @click="redirect('input')" />
              <v-menu-item label="Textarea" @click="redirect('textarea')" />
              <v-menu-item label="Select" @click="redirect('select')" />
              <!-- <v-menu-item label="Radio" /> -->
              <v-menu-item label="File" @click="redirect('file')" />
              <v-menu-item label="Switch" @click="redirect('switch')" />
              <v-menu-item label="Field" @click="redirect('field')" />
              <v-menu-item label="Checkbox" @click="redirect('checkbox')" />
            </v-menu-list>
            <v-menu-list label="Components">
              <v-menu-item label="Breadcrumb" @click="redirect('breadcrumb')" />
              <v-menu-item label="Card" @click="redirect('card')" />
              <v-menu-item label="Dropdown**" @click="redirect('dropdown')" />
              <v-menu-item label="Menu**" @click="redirect('menu')" />
              <!-- <v-menu-item label="Message" /> -->
              <v-menu-item label="Modal" @click="redirect('modal')" />
              <v-menu-item label="Navbar**" @click="redirect('navbar')" />
              <!-- <v-menu-item label="Pagination" /> -->
              <!-- <v-menu-item label="Panel" /> -->
              <!-- <v-menu-item label="Collapse" /> -->
              <v-menu-item label="Accordion" @click="redirect('accordion')" />
              <v-menu-item label="Tabs" @click="redirect('tabs')" />
            </v-menu-list>
            <v-menu-list label="Layout">
              <v-menu-item label="Columns**" @click="redirect('columns')" />
              <!-- <v-menu-item label="Container" /> -->
              <v-menu-item label="Sidebar**" @click="redirect('sidebar')" />
              <!-- <v-menu-item label="Hero" /> -->
              <!-- <v-menu-item label="Level" /> -->
              <v-menu-item label="Media**" @click="redirect('media')" />
            </v-menu-list>
          </v-menu>
        </div>
      </v-column>
      <v-column class="pt-6">
        <v-breadcrumb>
          <v-breadcrumb-item tag="router-link" :to="{ name: 'home' }">
            Home
          </v-breadcrumb-item>
          <v-breadcrumb-item
            v-for="item in path.split('/').slice(1)"
            :key="item"
            class="is-capitalized"
            tag="router-link"
            :to="{ name: item }">
            {{ item }}
          </v-breadcrumb-item>
        </v-breadcrumb>
        <router-view />
      </v-column>
    </v-columns>
  </section>
</template>