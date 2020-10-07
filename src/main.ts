import { createApp } from "vue";
import App from "./App.vue";
import '@pathscale/bulma-pull-2981-css-var-only/css/bulma.css';
import '@pathscale/bulma-extensions-css-var/css/bulma-extensions-css-var.css';
import 'vue3-carousel/dist/carousel.css';

import "./assets/styles/index.css";
// import "./assets/styles/scrollbar.css";
import "./assets/styles/carousel.css";
import "./assets/styles/icons.css";


import { router } from "./router/index.js";

createApp(App).use(router).mount('#app');
