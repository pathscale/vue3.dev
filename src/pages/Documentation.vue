<script>
import {
	VBreadcrumb,
	VBreadcrumbItem,
	VColumn,
	VColumns,
	VMenu,
	VMenuItem,
	VMenuList,
} from "@pathscale/vue3-ui";
import { computed, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

export default {
	name: "DevPageDocumentation",
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
		const router = useRouter();
		const paths = computed(() =>
			router.currentRoute.value.path.split("/").slice(1),
		);
		const current = ref({});

		const isActiveBreadcrumb = (item) => {
			return item === router.currentRoute.value.name;
		};

		function redirect(name) {
			router.push({
				name,
			});
		}

		watchEffect(() => {
			current.value = { [router.currentRoute.value.name]: true };
			if (router.currentRoute.value.name === "documentation") {
				redirect("installation");
			}
		});

		const isDevelopment = process.env.NODE_ENV === "development";
		return { paths, redirect, current, isActiveBreadcrumb, isDevelopment };
	},
};
</script>

<template>
  <section class="has-background-white pt-6">
    <v-columns class="pt-5 mx-0">
      <v-column size="is-2">
        <div class="pt-6 px-5">
          <v-menu>
            <v-menu-list label="Getting Started">
              <v-menu-item v-if="isDevelopment" label="Playground" :active="current.playground"
                @click="redirect('playground')" />
              <v-menu-item label="Installation" :active="current.installation" expanded
                @click="redirect('installation')" />
              <v-menu-item label="Design" expanded>
                <v-menu-item label="Bulma" :active="current.bulma" @click="redirect('bulma')" />
                <v-menu-item label="Theming" :active="current.theming" @click="redirect('theming')" />
                <v-menu-item label="Colors" :active="current.colors" @click="redirect('colors')" />
                <v-menu-item label="Layout" expanded>
                  <v-menu-item label="Columns" :active="current.columns" @click="redirect('columns')" />
                  <v-menu-item label="Sidebar" :active="current.sidebar" @click="redirect('sidebar')" />
                  <v-menu-item label="Media" :active="current.media" @click="redirect('media')" />
                </v-menu-item>
              </v-menu-item>
              <v-menu-item label="Appstate-fast" expanded>
                <v-menu-item label="Introducing" :active="current.introducing" @click="redirect('introducing')" />
                <v-menu-item label="Modules" :active="current.modules" @click="redirect('modules')" />
              </v-menu-item>
              <v-menu-item label="Icons" :active="current.icons" @click="redirect('icons')" />
            </v-menu-list>
            <v-menu-list label="UI Components">
              <v-menu-item label="Elements" expanded>
                <!-- <v-menu-item label="Typography" /> -->
                <!-- <v-menu-item label="Box" /> -->
                <v-menu-item label="Button" :active="current.button" @click="redirect('button')" />
                <!-- <v-menu-item label="Content" /> -->
                <!-- <v-menu-item label="Delete" /> -->
                <!-- <v-menu-item label="Form" /> -->
                <!-- <v-menu-item label="Icon" /> -->
                <!-- <v-menu-item label="Image" @click="redirect('image')" :active="current.image" /> -->
                <v-menu-item label="Avatar" :active="current.avatar" @click="redirect('avatar')" />
                <!-- <v-menu-item label="Notifications" /> -->
                <v-menu-item label="Progress" :active="current.progress" @click="redirect('progress')" />
                <v-menu-item label="Table" :active="current.table" @click="redirect('table')" />
                <v-menu-item label="Tag" :active="current.tag" @click="redirect('tag')" />
                <v-menu-item label="Tooltip" :active="current.tooltip" @click="redirect('tooltip')" />
                <v-menu-item label="Slider" :active="current.slider" @click="redirect('slider')" />
                <v-menu-item label="Pagination" :active="current.pagination" @click="redirect('pagination')" />
              </v-menu-item>
              <v-menu-item label="Form" expanded>
                <v-menu-item label="Input" :active="current.input" @click="redirect('input')" />
                <v-menu-item label="Autocomplete" :active="current.autocomplete" @click="redirect('autocomplete')" />

                <v-menu-item label="Validation" :active="current.validation" @click="redirect('validation')" />
                <v-menu-item label="Textarea" :active="current.textarea" @click="redirect('textarea')" />
                <v-menu-item label="Select" :active="current.select" @click="redirect('select')" />
                <!-- <v-menu-item label="Radio" /> -->
                <v-menu-item label="Upload" :active="current.file" @click="redirect('upload')" />
                <v-menu-item label="Switch" :active="current.switch" @click="redirect('switch')" />
                <v-menu-item label="Field" :active="current.field" @click="redirect('field')" />
                <v-menu-item label="Checkbox" :active="current.checkbox" @click="redirect('checkbox')" />
                <v-menu-item label="Calendar" @click="redirect('calendar')" :active="current.calendar" />
              </v-menu-item>
              <v-menu-item label="Components" expanded>
                <v-menu-item label="Breadcrumb" :active="current.breadcrumb" @click="redirect('breadcrumb')" />
                <!-- <v-menu-item label="Card" @click="redirect('card')" :active="current.card" /> -->
                <v-menu-item label="Dropdown" :active="current.dropdown" @click="redirect('dropdown')" />
                <v-menu-item label="Menu" :active="current.menu" @click="redirect('menu')" />
                <!-- <v-menu-item label="Message" /> -->
                <!-- <v-menu-item label="Modal" @click="redirect('modal')" :active="current.modal" /> -->
                <v-menu-item label="Navbar" :active="current.navbar" @click="redirect('navbar')" />
                <!-- <v-menu-item label="Pagination" /> -->
                <!-- <v-menu-item label="Panel" /> -->
                <!-- <v-menu-item label="Collapse" /> -->
                <v-menu-item label="Accordion" :active="current.accordion" @click="redirect('accordion')" />
                <v-menu-item label="Tabs" :active="current.tabs" @click="redirect('tabs')" />
                <v-menu-item label="Timeline" :active="current.timeline" @click="redirect('timeline')" />

                <v-menu-item label="Steps" :active="current.steps" @click="redirect('steps')" />
                <v-menu-item label="Chart" :active="current.chart" @click="redirect('chart')" />
              </v-menu-item>
            </v-menu-list>
            <v-menu-list label="Utilities">
              <v-menu-item label="Toast Notification" :active="current.toast" @click="redirect('toast')" />

              <v-menu-item label="Datagrid" :active="current.datagrid" @click="redirect('datagrid')" />
            </v-menu-list>
          </v-menu>
        </div>
      </v-column>
      <v-column class="pt-6">
        <v-breadcrumb>
          <v-breadcrumb-item tag="router-link" :to="{ name: 'home' }"> Home </v-breadcrumb-item>
          <v-breadcrumb-item v-for="item in paths" :key="item" class="is-capitalized" tag="router-link"
            :active="isActiveBreadcrumb(item)" :to="{ name: item }">
            {{ item }}
          </v-breadcrumb-item>
        </v-breadcrumb>
        <router-view />
      </v-column>
    </v-columns>
  </section>
</template>
