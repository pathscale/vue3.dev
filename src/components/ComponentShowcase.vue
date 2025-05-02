<script>
import {
  DataGrid,
  VAccordion,
  VAutocomplete,
  VAvatar,
  VBreadcrumb,
  VBreadcrumbItem,
  VButton,
  VCalendar,
  VCard,
  VCardContent,
  VCardFooter,
  VCardFooterItem,
  VCardHeader,
  VChart,
  VCheckbox,
  VColumn,
  VColumns,
  VDropdown,
  VDropdownItem,
  VField,
  VIcon,
  VImage,
  VInput,
  VMedia,
  VMenu,
  VMenuItem,
  VMenuList,
  VPagination,
  VProgress,
  VSelect,
  VSidebar,
  VSlider,
  VSteps,
  VSwitch,
  VTab,
  VTable,
  VTabs,
  VTag,
  VTextarea,
} from "@pathscale/vue3-ui";
import bulmaCalendar from "bulma-calendar/dist/js/bulma-calendar.min";
import { computed, provide, reactive, ref } from "vue";

export default {
  name: "ComponentShowcase",
  components: {
    VField,
    VInput,
    VButton,
    VCard,
    VCardContent,
    VMenu,
    VMenuList,
    VMenuItem,
    VTag,
    VTabs,
    VTab,
    VAccordion,
    VBreadcrumb,
    VBreadcrumbItem,
    VChart,
    VCalendar,
    VAutocomplete,
    VAvatar,
    VIcon,
    VImage,
    VCardHeader,
    VCardFooter,
    VCardFooterItem,
    VMedia,
    VCheckbox,
    VColumns,
    VColumn,
    VTable,
    VDropdown,
    VDropdownItem,
    DataGrid,
    VSelect,
    VTextarea,
    VSwitch,
    VPagination,
    VSteps,
    VProgress,
    VSidebar,
    VSlider,
  },

  setup() {
    const activeTab = ref(0);
    //chart data
    const basicChart = computed(() => ({
      data: {
        labels: [
          "12am-3am",
          "3am-6am",
          "6am-9am",
          "9am-12pm",
          "12pm-3pm",
          "3pm-6pm",
          "6pm-9pm",
          "9pm-12am",
        ],
        datasets: [
          {
            name: "Some Data",
            chartType: "bar",
            values: [25, 40, 30, 35, 8, 52, 17, -4],
          },
          {
            name: "Another Set",
            chartType: "bar",
            values: [25, 50, -10, 15, 18, 32, 27, 14],
          },
        ],
      },
      title: "Basic Chart Example",
      type: "axis-mixed",
      height: 300,
      colors: [
        getComputedStyle(document.documentElement)
          .getPropertyValue("--primary")
          .trim(),
        getComputedStyle(document.documentElement)
          .getPropertyValue("--warning")
          .trim(),
        getComputedStyle(document.documentElement)
          .getPropertyValue("--light-blue")
          .trim(),
      ],
    }));
    // candle chart data
    const candleChart = computed(() => ({
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            name: "Candle Data",
            chartType: "candle",
            values: [
              [100, 120, 90, 110],
              [110, 130, 100, 120],
              [120, 140, 110, 130],
              [130, 150, 120, 140],
              [140, 160, 130, 150],
              [150, 170, 140, 160],
            ],
          },
        ],
      },
      title: "Candle Chart Example",
      type: "candle",
      height: 300,
      colors: [
        getComputedStyle(document.documentElement)
          .getPropertyValue("--primary")
          .trim(),
        getComputedStyle(document.documentElement)
          .getPropertyValue("--warning")
          .trim(),
        getComputedStyle(document.documentElement)
          .getPropertyValue("--light-blue")
          .trim(),
      ],
    }));
    // calendar data:
    provide("$bulmaCalendar", bulmaCalendar);
    const state = reactive({
      date: [null, null],
      options: {
        dateFormat: "dd.MM.yyyy",
        labelFrom: "From",
        labelTo: "To",
      },
    });

    const displayDate = computed(() => {
      if (!state.date || !state.date[0] || !state.date[1]) {
        return "- n/a -";
      }
      return `${state.date[0]} to ${state.date[1]}`;
    });

    // autocomplete data
    const items = [
      "Apple",
      "Banana",
      "Orange",
      "Mango",
      "Pear",
      "Peach",
      "Grape",
      "Tangerine",
      "Pineapple",
    ];
    const result = ref("");

    // button data
    const isActive = ref(true);

    const onClick = () => {
      isActive.value = !isActive.value;
    };

    // checkbox data
    const value = ref(false);
    function getValue() {
      // Need the `toString` to show `false` when indeterminate
      return value.value.toString();
    }

    // datagrid data
    const datagrid = ref(new DataGrid());

    datagrid.value.addColumn("id", "ID", "number");
    datagrid.value.addColumn("firstName", "First Name", "string");
    datagrid.value.addColumn("lastName", "Last Name", "string");
    datagrid.value.addColumn("color", "Color", "custom");

    datagrid.value.addRow({
      id: 1,
      firstName: "John",
      lastName: "Doe",
      color: "Blue",
    });
    datagrid.value.addRow({
      id: 2,
      firstName: "Sheri",
      lastName: "Adamin ",
      color: "Green",
    });
    datagrid.value.addRow({
      id: 3,
      firstName: "Kristopher",
      lastName: "Amos",
      color: "Blue",
    });
    datagrid.value.addRow({
      id: 4,
      firstName: "Nelly",
      lastName: "Derby",
      color: "Green",
    });
    datagrid.value.addRow({
      id: 5,
      firstName: "Philander",
      lastName: "Barney",
      color: "Blue",
    });

    const statePagination = reactive({
      total: 200,
      current: 10,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: "",
      size: "",
      isSimple: false,
      isRounded: false,
    });
    const stateSidebar = reactive({
      open: false,
      overlay: false,
      reduced: false,
    });

    function close() {
      stateSidebar.open = false;
      stateSidebar.overlay = false;
      stateSidebar.reduced = false;
    }
    return {
      activeTab,
      basicChart,
      candleChart,
      state,
      displayDate,
      items,
      result,
      isActive,
      onClick,
      value,
      getValue,
      datagrid,
      statePagination,
      stateSidebar,
      close,
    };
  },
};
</script>

<template>
  <h2 class="title mt-6">Component Showcase</h2>

  <div class="buttons">
      <v-button type="is-primary">
      Primary
    </v-button>
    <v-button type="is-success">
      Success
    </v-button>
    <v-button type="is-danger">
      Danger
    </v-button>
    <v-button type="is-warning">
      Warning
    </v-button>
    <v-button type="is-info">
      Info
    </v-button>
    <v-button type="is-link">
      Link
    </v-button>
    <v-button type="is-light">
      Light
    </v-button>
    <v-button type="is-dark">
      Dark
    </v-button>
    <v-button type="is-text">
      Text
    </v-button>
    <v-button type="is-primary" outlined>
      Outlined
    </v-button>
    <v-button rounded type="is-info">
      Rounded
    </v-button>
    <v-button type="is-primary" inverted>
      Inverted
    </v-button>
    <v-button type="is-primary" inverted outlined>
      Invert Outlined
    </v-button>
    <v-button disabled type="is-info">
      Disabled
    </v-button>
    <v-button loading type="is-info">
      Loading
    </v-button>
    <v-button type="is-info" focused :inverted="isActive" rounded @click="onClick">
      Click me
    </v-button>
  </div>
  <!-- Breadcrumb showcase -->
  <div class="block mt-4">
    <h3 class="title is-4">Breadcrumb Navigation</h3>
    <v-breadcrumb>
      <v-breadcrumb-item label="Home" icon="home" />
      <v-breadcrumb-item label="Products" icon="shopping-bag" />
      <v-breadcrumb-item label="Electronics" icon="laptop" />
      <v-breadcrumb-item label="Laptops" icon="laptop" />
    </v-breadcrumb>
  </div>
  <!-- New compoenents showcase Start -->
  <div class="columns mt-4">
    <div class="column">
      <h3 class="title is-4">Basic Chart</h3>
      <v-chart v-bind="{ ...basicChart }" />
    </div>
    <div class="column">
      <h3 class="title is-4">Candle Chart</h3>
      <v-chart v-bind="{ ...candleChart }" />
    </div>
  </div>
  <!-- Calendar showcase -->
  <div class="block mt-4">
    <h3 class="title is-4">Calendar</h3>
    <v-field label="Date">
		<v-calendar v-model="state.date" type="date" :options="state.options" range />
	</v-field>
	<v-field label="Range">
		<div class="field">
			Selected Range: {{ displayDate }}
		</div>
	</v-field>
  </div>
  <!-- Accordion showcase -->
  <v-field>
    <v-accordion header-is-trigger>
      <template #header>
        <div class="py-3 px-3 has-text-danger">
          Click me
        </div>
      </template>
      <template #content>
        <div class="py-3 px-3">
          Content
        </div>
      </template>
    </v-accordion>
  </v-field>
  <!-- Autocomplete showcase -->
  <div class="block mt-4">
    Selected: {{ result }}
    <v-autocomplete v-model="result" :items="items" />
  </div>
  <!-- Avatar showcase -->
  <div class="is-flex is-justify-content-flex-start is-align-items-center">
    <v-avatar alt="John Doe" />
    <v-avatar alt="Marry Jane" background="has-background-warning" text="has-text-black" />
  </div>
  <!-- Card showcase -->
  <div class="block mt-4">
    <v-card>
      <v-card-header title="User" />
      <v-image src="https://vue3.dev/128x128.png" alt="placeholder image" />
      <v-card-content>
        <v-media>
          <template #left>
            <v-image src="https://vue3.dev/128x128.png" size="is-48x48" rounded alt="placeholder image" />
          </template>
          <template #content>
            <p class="title is-4">
              John Smith
            </p>
            <p class="subtitle is-6">
              @johnsmith
            </p>
          </template>
        </v-media>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@vue3-ui</a>.
          <a href="#">#vue3</a> <a href="#">#responsive</a>
          <br />
        </div>
      </v-card-content>

      <v-card-footer>
        <v-card-footer-item>
          <time datetime="2020-5-8">11:22 PM - 5 Oct 2020</time>
        </v-card-footer-item>
      </v-card-footer>
    </v-card>
  </div>
  <!-- Checkbox showcase -->
  <v-field>
    <v-checkbox v-model="value">
      Active checkbox
    </v-checkbox>
    <br />
    <v-checkbox indeterminate>
      Indeterminate checkbox
    </v-checkbox>
    <br />
    <v-checkbox disabled>
      Disabled checkbox
    </v-checkbox>
  </v-field>
  <!-- Columns showcase -->
  <v-columns>
    <v-column>
      <p class="has-background-link has-text-white px-4 py-4">
        First Column
      </p>
    </v-column>
    <v-column>
      <p class="has-background-success has-text-white px-4 py-4">
        Second Column
      </p>
    </v-column>
    <v-column>
      <p class="has-background-primary has-text-white px-4 py-4">
        Third Column
      </p>
    </v-column>
  </v-columns>
  <!-- Datagrid showcase -->
  <v-table :data="datagrid" />
  <!-- Dropdown showcase -->
  <v-dropdown>
    <template #trigger>
      <v-button type="is-primary">
        Click me
      </v-button>
    </template>
    <v-dropdown-item> Blue </v-dropdown-item>
    <v-dropdown-item> Green </v-dropdown-item>
  </v-dropdown>
  <!-- Field showcase -->
  <v-field>
    <v-field addons>
      <v-input />
      <v-button type="is-info">
        Search
      </v-button>
    </v-field>
    <v-field addons position="has-addons-centered">
      <v-select placeholder="Category">
        <option>New</option>
        <option>Used</option>
      </v-select>
      <v-input placeholder="Product name" />
      <v-button type="is-info">
        Search
      </v-button>
    </v-field>
    <v-field addons position="has-addons-right">
      <v-input placeholder="Your email" />
      <v-button type="is-static">
        @gmail.com
      </v-button>
    </v-field>
  </v-field>
  <!-- Media showcase -->
  <v-media>
    <template #left>
      <v-image
        size="is-64x64" rounded
        src="https://avatars0.githubusercontent.com/u/29805241?s=460&u=efe58fc5bb0ee7ad11fb7fc976820a7cda3f0c77&v=4" 
      />
    </template>
    <template #content>
      <div class="content">
        <p>
          <strong>Oscar Albornoz</strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non.
          <br /> Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          <br />
          <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
        </p>
      </div>

      <v-media>
        <template #left>
          <v-image
            size="is-48x48" rounded
            src="https://avatars0.githubusercontent.com/u/17007165?s=460&u=45b8448bece9d199a3096a07a0ff90e25530802b&v=4" 
          />
        </template>
        <template #content>
          <div class="content">
            <p>
              <strong>Radu Pasparuga</strong>
              <br />
              Morbi tellus est, consectetur sit amet dui facilisis, imperdiet pellentesque lorem
              <br />
              Mauris sit amet velit commodo, semper felis sed, sodales ante.
              <br />
              <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
            </p>
          </div>
        </template>
      </v-media>
    </template>
  </v-media>
  <v-media>
    <template #left>
      <v-image
        size="is-64x64" rounded
        src="https://avatars3.githubusercontent.com/u/11345792?s=460&u=497fb860444eef3f36843047804181c35ff9a763&v=4" 
      />
    </template>
    <template #content>
      <v-field>
        <v-textarea placeholder="Add a comment Anton Kudryavtsev" />
      </v-field>
      <v-field>
        <v-button type="is-info">
          Post comment
        </v-button>
      </v-field>
    </template>
  </v-media>
  <!-- Pagination showcase -->
  <v-field grouped group-multiline>
    <v-field label="Order" class="mr-1">
      <v-select v-model="statePagination.order">
        <option value="">
          default
        </option>
        <option value="is-centered">
          is-centered
        </option>
        <option value="is-right">
          is-right
        </option>
      </v-select>
    </v-field>
    <v-field label="Size">
      <v-select v-model="statePagination.size">
        <option value="">
          default
        </option>
        <option value="is-small">
          is-small
        </option>
        <option value="is-medium">
          is-medium
        </option>
        <option value="is-large">
          is-large
        </option>
      </v-select>
    </v-field>
  </v-field>
  <div class="block">
    <v-switch v-model="statePagination.isSimple">
      Simple
    </v-switch>
    <v-switch v-model="statePagination.isRounded">
      Rounded
    </v-switch>
  </div>
   <!-- Steps showcase -->

  <div class="block">
    <steps />
    </div>

  <v-pagination v-model:current="state.current" :total="state.total" :range-before="state.rangeBefore"
    :range-after="state.rangeAfter" :order="state.order" :size="state.size" :simple="state.isSimple"
    :rounded="state.isRounded" :per-page="state.perPage" aria-next-label="Next page" aria-previous-label="Previous page"
    aria-page-label="Page" aria-current-label="Current page" />

       <!-- Progress showcase -->
  <v-progress type="is-danger" :value="40" />
  <v-progress type="is-success" :value="60" />
  <v-progress type="is-info" :value="80" />
  <v-progress type="is-warning" :value="100" />
  <hr />
   <!-- Sidebar showcase -->

    <v-field>
    <v-select v-model="selected" color="is-info" placeholder="Info" size="is-normal">
      <option value="1">
        Option 1
      </option>
      <option value="2">
        Option 2
      </option>
    </v-select>
  </v-field>
   <!-- Select showcase -->
   <v-field>
    <v-switch v-model="state.open" type="is-dark">
      Open
    </v-switch>
    <v-switch v-show="state.open" v-model="state.overlay" type="is-dark">
      Overlay
    </v-switch>
    <v-switch v-show="state.open" v-model="state.reduced" type="is-dark">
      Reduced
    </v-switch>
  </v-field>

  <v-field>
    <v-switch v-model="stateSidebar.open" type="is-dark">
      Open
    </v-switch>
    <v-switch v-show="stateSidebar.open" v-model="stateSidebar.overlay" type="is-dark">
      Overlay
    </v-switch>
    <v-switch v-show="stateSidebar.open" v-model="stateSidebar.reduced" type="is-dark">
      Reduced
    </v-switch>
  </v-field>
   <!-- Sidebar showcase -->

  <v-sidebar
    :open="stateSidebar.open"
    type="is-light"
    fullheight
    :reduce="stateSidebar.reduced"
    :overlay="stateSidebar.overlay"
    position="fixed"
    @close="close">
    <section class="section px-1">
      <v-button tag="a" type="is-text" class="is-pulled-right" @click="close">
        &#x274C;
      </v-button>
    </section>
    <section class="section py-2">
      <v-menu>
        <v-menu-list>
          <v-menu-item :label="stateSidebar.reduced ? '' : 'Home'" icon="&#x1F3E0;" />
          <v-menu-item :label="stateSidebar.reduced ? '' : 'Contact'" icon="&#x1F4DE;" />
          <v-menu-item :label="stateSidebar.reduced ? '' : 'Services'" icon="&#9877;" />
        </v-menu-list>
      </v-menu>
    </section>
  </v-sidebar>
   <!-- Slider showcase -->

  <v-slider />
  <v-slider type="is-success" />
  <v-slider type="is-warning" />
  <v-slider type="is-danger" />
  <v-slider type="is-info" />
  <!-- New compoenents showcase End-->
  <div class="columns mt-4">
    <div class="column">
      <v-field class="mb-4">
        <v-field addons>
          <v-input placeholder="Search..." />
          <v-button type="is-primary">
            Search
          </v-button>
        </v-field>
      </v-field>

      <v-menu class="mb-4">
        <v-menu-list label="Navigation">
          <v-menu-item label="Home" :active="true" />
          <v-menu-item label="Products" expanded>
            <v-menu-item label="Electronics" />
            <v-menu-item label="Clothing" />
            <v-menu-item label="Books" />
          </v-menu-item>
          <v-menu-item label="About">
            <v-menu-item label="Company" />
            <v-menu-item label="Team" />
            <v-menu-item label="Contact" />
          </v-menu-item>
        </v-menu-list>
        <v-menu-list label="Account">
          <v-menu-item label="Settings" />
          <v-menu-item label="Logout" />
        </v-menu-list>
      </v-menu>

      <div class="tags">
        <v-tag type="is-primary" class="mr-2">Primary</v-tag>
        <v-tag type="is-success" class="mr-2">Success</v-tag>
        <v-tag type="is-warning" class="mr-2">Warning</v-tag>
        <v-tag type="is-danger">Danger</v-tag>
      </div>
    </div>

    <div class="column">
      <v-card>
        <v-card-content>
          <v-field label="Full Name">
            <v-input placeholder="John Doe" />
          </v-field>
          <v-field label="Email">
            <v-input type="email" placeholder="john@example.com" />
          </v-field>
          <v-field label="Password">
            <v-input type="password" placeholder="••••••••" password-reveal />
          </v-field>
          <v-field>
            <v-button type="is-primary" expanded>Create Account</v-button>
          </v-field>
        </v-card-content>
      </v-card>
    </div>

    <div class="column">
      <v-tabs v-model="activeTab">
        <v-tab label="Overview">
          <div class="p-4">
            <p>Overview content goes here</p>
          </div>
        </v-tab>
        <v-tab label="Details">
          <div class="p-4">
            <p>Details content goes here</p>
          </div>
        </v-tab>
        <v-tab label="Settings">
          <div class="p-4">
            <p>Settings content goes here</p>
          </div>
        </v-tab>
      </v-tabs>
    </div>
  </div>
</template>
