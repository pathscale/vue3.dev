import { createApp } from "vue";
import App from "./App.vue";
import '@pathscale/bulma-pull-2981-css-var-only/css/bulma.css';
import '@pathscale/bulma-extensions-css-var/css/bulma-extensions-css-var.css';
import 'vue3-carousel/dist/carousel.css';

import "./assets/styles/index.css";
// import "./assets/styles/scrollbar.css";
import "./assets/styles/carousel.css";
import "./assets/styles/icons.css";


import { router } from "./router";

router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  
    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
  
    // Remove any stale meta tags from the document using the key attribute we set below.
    [...document.querySelectorAll('[data-vue-router-controlled]')].map((el: any) => el.remove());
  
    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next();
  
    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map((tagDef: any) => {
      const tag = document.createElement('meta');
  
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });
  
      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.dataset.vueRouterControlled = '';
  
      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag: any) => document.head.append(tag));
    next();
  });


createApp(App).use(router).mount('#app');