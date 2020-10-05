import { createApp } from "vue";
import Vue3ui from "@pathscale/vue3-ui";
import App from "./App.vue";
import '@pathscale/bulma-pull-2981-css-var-only/css/bulma.css';
import '@pathscale/bulma-extensions-css-var/css/bulma-extensions-css-var.css';
import 'vue3-carousel/dist/carousel.css';

import "./assets/styles/index.css";
// import "./assets/styles/scrollbar.css";
import "./assets/styles/carousel.css";
import "./assets/styles/icons.css";


import { router } from "./router";


createApp(App).use(Vue3ui).use(router).mount('#app');