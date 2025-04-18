<script>
import {
  ClientsSection,
  FeaturesSection,
  HomeSection,
  OverviewSection,
} from "../components/sections";

export default {
  name: "DevPageHome",
  components: {
    HomeSection,
    OverviewSection,
    ClientsSection,
    FeaturesSection,
  },
};
</script>

<template>
  <home-section />
  <overview-section id="overview" />
  <features-section />
  <clients-section />
</template>
