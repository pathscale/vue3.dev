<script>
import { ref, watchEffect, computed } from 'vue'
import {
  VBreadcrumb,
  VBreadcrumbItem,
  VColumn,
  VColumns,
  VMenu,
  VMenuItem,
  VMenuList,
} from '@pathscale/vue3-ui'
import { useRouter } from 'vue-router'

export default {
  name: 'DevPageDocumentation',
  components: {
    VBreadcrumb,
    VBreadcrumbItem,
    VColumn,
    VColumns,
    VMenu,
    VMenuItem,
    VMenuList,
  },
  setup() {
    const router = useRouter()
    const paths = computed(() => router.currentRoute.value.path.split('/').slice(1))
    const current = ref({})

    const isActiveBreadcrumb = item => {
      return item === router.currentRoute.value.name
    }

    function redirect(name) {
      router.push({
        name,
      })
    }

    watchEffect(() => {
      current.value = { [router.currentRoute.value.name]: true }
      if (router.currentRoute.value.name === 'documentation') { redirect('installation') }
    })

    const isDevelopment = process.env.NODE_ENV === 'development'
    return { paths, redirect, current, isActiveBreadcrumb, isDevelopment }
  },
}
</script>

<template>
  <section class="has-background-white pt-6">
    <v-columns class="pt-5 mx-0">
      <v-column size="is-2">
        <div class="pt-6 px-5">
          <v-menu>
            <v-menu-list label="Getting Started">
              <v-menu-item
                v-if="isDevelopment"
                label="Playground"
                @click="redirect('playground')"
                :active="current.playground"/>
              <v-menu-item
                label="Installation"
                @click="redirect('installation')"
                :active="current.installation"
                expanded/>
              <v-menu-item label="Design" expanded>
                <v-menu-item label="Bulma" @click="redirect('bulma')" :active="current.bulma" />
                <v-menu-item
                  label="Theming"
                  @click="redirect('theming')"
                  :active="current.theming"/>
                <v-menu-item label="Layout" expanded>
                  <v-menu-item
                    label="Columns"
                    @click="redirect('columns')"
                    :active="current.columns"/>
                  <v-menu-item
                    label="Sidebar"
                    @click="redirect('sidebar')"
                    :active="current.sidebar"/>
                  <v-menu-item label="Media" @click="redirect('media')" :active="current.media" />
                </v-menu-item>
              </v-menu-item>
              <v-menu-item label="Appstate-fast" expanded>
                <v-menu-item
                  label="Introducing"
                  @click="redirect('introducing')"
                  :active="current.introducing"/>
                <v-menu-item
                  label="Modules"
                  @click="redirect('modules')"
                  :active="current.modules"/>
              </v-menu-item>
              <v-menu-item label="Icons" @click="redirect('icons')" :active="current.icons" />
            </v-menu-list>
            <v-menu-list label="UI Components">
              <v-menu-item label="Elements" expanded>
                <!-- <v-menu-item label="Typography" /> -->
                <!-- <v-menu-item label="Box" /> -->
                <v-menu-item label="Button" @click="redirect('button')" :active="current.button" />
                <!-- <v-menu-item label="Content" /> -->
                <!-- <v-menu-item label="Delete" /> -->
                <!-- <v-menu-item label="Form" /> -->
                <!-- <v-menu-item label="Icon" /> -->
                <!-- <v-menu-item label="Image" @click="redirect('image')" :active="current.image" /> -->
                <v-menu-item label="Avatar" @click="redirect('avatar')" :active="current.avatar" />
                <!-- <v-menu-item label="Notifications" /> -->
                <v-menu-item
                  label="Progress"
                  @click="redirect('progress')"
                  :active="current.progress"/>
                <v-menu-item label="Table" @click="redirect('table')" :active="current.table" />
                <v-menu-item label="Tag" @click="redirect('tag')" :active="current.tag" />
                <v-menu-item
                  label="Tooltip"
                  @click="redirect('tooltip')"
                  :active="current.tooltip"/>
                <v-menu-item label="Slider" @click="redirect('slider')" :active="current.slider" />
                <v-menu-item
                  label="Pagination"
                  @click="redirect('pagination')"
                  :active="current.pagination"/>
              </v-menu-item>
              <v-menu-item label="Form" expanded>
                <v-menu-item label="Input" @click="redirect('input')" :active="current.input" />
                <v-menu-item label="Autocomplete" @click="redirect('autocomplete')" :active="current.autocomplete" />

                <v-menu-item
                  label="Validation"
                  @click="redirect('validation')"
                  :active="current.validation"/>
                <v-menu-item
                  label="Textarea"
                  @click="redirect('textarea')"
                  :active="current.textarea"/>
                <v-menu-item label="Select" @click="redirect('select')" :active="current.select" />
                <!-- <v-menu-item label="Radio" /> -->
                <v-menu-item label="Upload" @click="redirect('upload')" :active="current.file" />
                <v-menu-item label="Switch" @click="redirect('switch')" :active="current.switch" />
                <v-menu-item label="Field" @click="redirect('field')" :active="current.field" />
                <v-menu-item
                  label="Checkbox"
                  @click="redirect('checkbox')"
                  :active="current.checkbox"/>

                <!--
 <v-menu-item
                  label="Calendar"
                  @click="redirect('calendar')"
                  :active="current.calendar" />
-->
              </v-menu-item>
              <v-menu-item label="Components" expanded>
                <v-menu-item
                  label="Breadcrumb"
                  @click="redirect('breadcrumb')"
                  :active="current.breadcrumb"/>
                <!-- <v-menu-item label="Card" @click="redirect('card')" :active="current.card" /> -->
                <v-menu-item
                  label="Dropdown"
                  @click="redirect('dropdown')"
                  :active="current.dropdown"/>
                <v-menu-item label="Menu" @click="redirect('menu')" :active="current.menu" />
                <!-- <v-menu-item label="Message" /> -->
                <!-- <v-menu-item label="Modal" @click="redirect('modal')" :active="current.modal" /> -->
                <v-menu-item label="Navbar" @click="redirect('navbar')" :active="current.navbar" />
                <!-- <v-menu-item label="Pagination" /> -->
                <!-- <v-menu-item label="Panel" /> -->
                <!-- <v-menu-item label="Collapse" /> -->
                <v-menu-item
                  label="Accordion"
                  @click="redirect('accordion')"
                  :active="current.accordion"/>
                <v-menu-item label="Tabs" @click="redirect('tabs')" :active="current.tabs" />
                <v-menu-item
                  label="Timeline"
                  @click="redirect('timeline')"
                  :active="current.timeline"/>

                <v-menu-item label="Steps" @click="redirect('steps')" :active="current.steps" />
                <v-menu-item label="Chart" @click="redirect('chart')" :active="current.chart" />
              </v-menu-item>
            </v-menu-list>
            <v-menu-list label="Utilities">
              <v-menu-item
                label="Toast Notification"
                @click="redirect('toast')"
                :active="current.toast"/>

              <v-menu-item
                label="Datagrid"
                @click="redirect('datagrid')"
                :active="current.datagrid"/>
            </v-menu-list>
          </v-menu>
        </div>
      </v-column>
      <v-column class="pt-6">
        <v-breadcrumb>
          <v-breadcrumb-item tag="router-link" :to="{ name: 'home' }"> Home </v-breadcrumb-item>
          <v-breadcrumb-item
            v-for="item in paths"
            :key="item"
            class="is-capitalized"
            tag="router-link"
            :active="isActiveBreadcrumb(item)"
            :to="{ name: item }">
            {{ item }}
          </v-breadcrumb-item>
        </v-breadcrumb>
        <router-view />
      </v-column>
    </v-columns>
  </section>
</template>
