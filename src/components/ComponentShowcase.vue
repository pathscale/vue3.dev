<script>
import {
  VAccordion,
  VBreadcrumb,
  VBreadcrumbItem,
  VButton,
  VCard,
  VCardContent,
  VChart,
  VField,
  VInput,
  VMenu,
  VMenuItem,
  VMenuList,
  VTab,
  VTabs,
  VTag,
} from "@pathscale/vue3-ui";
import { computed, ref } from "vue";

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
  },
  setup() {
    const activeTab = ref(0);

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
          .getPropertyValue("--ligth")
          .trim(),
        getComputedStyle(document.documentElement)
          .getPropertyValue("--primary")
          .trim(),
        getComputedStyle(document.documentElement)
          .getPropertyValue("--link")
          .trim(),
      ],
    }));

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
      colors: ["#26a69a", "#ef5350"],
    }));

    return {
      activeTab,
      basicChart,
      candleChart,
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
