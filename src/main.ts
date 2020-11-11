import { createApp } from 'vue'
import App from './App.vue'
import '@pathscale/bulma-pull-2981-css-var-only'
import '@pathscale/bulma-extensions-css-var'
import 'vue3-carousel/dist/carousel.css'

import './assets/styles/index.css'
// import "./assets/styles/scrollbar.css";
import './assets/styles/carousel.css'
import './assets/styles/icons.css'
import './assets/styles/flexbox.css'

import { router } from './router/index.js'

import Icons from './Icons.vue'

const app = createApp(App)
app.component('Icons', Icons)

app.use(router).mount('#app')


