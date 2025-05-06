import { Toaster } from "@pathscale/vue3-ui";
import { createApp } from "vue";

import App from "./App.vue";
import "bulma/css/bulma.css";
import "@pathscale/bulma-extensions-css-var";

import "@pathscale/fonts-metroclean";

import "./assets/styles/index.css";
// import "./assets/styles/scrollbar.css";
import "./assets/styles/carousel.css";
import "./assets/styles/icons.css";
import "./assets/styles/flexbox.css";
import "bulma-calendar/dist/css/bulma-calendar.min.css";

import { router } from "./router/index.js";

import "./Icons.vue";

createApp(App).use(Toaster).use(router).mount("#app");
