<script>
import { CFooter, Cookie, Navbar } from "../components";

export default {
  name: "DevMain",
  components: {
    Cookie,
    Navbar,
    CFooter,
  },
  setup() {
    function setDocHeight() {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight / 100}px`,
      );
    }
    window.addEventListener("resize", setDocHeight);
    globalThis.addEventListener("orientationchange", setDocHeight);
    setDocHeight();
  },
};
</script>

<template>
  <div>
    <cookie />
    <navbar />
    <div id="well" class="well">
      <router-view />
    </div>
    <c-footer />
  </div>
</template>
