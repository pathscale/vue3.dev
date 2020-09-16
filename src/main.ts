import { createApp } from "vue";
import App from "./App.vue";
import '@pathscale/bulma-pull-2981-css-var-only/css/bulma.css';
import '@pathscale/bulma-extensions-css-var/css/bulma-extensions-css-var.css';

import "./assets/styles/index.css";
import "./assets/styles/scrollbar.css";
import "./assets/styles/flexbox.css";
import "./assets/styles/icons.css";

import { router } from "./router";


createApp(App).use(router).mount('#app');