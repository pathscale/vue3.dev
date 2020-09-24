import { createRouter, createWebHistory } from "vue-router";

import Main from "../layouts/Main.vue";

import { Home, Documentation, Button, Image } from "../pages";

const routes = [
  {
    path: "/",
    redirect: 'home',
    component: Main,
    children: [
      {
        name: 'home',
        path: 'home',
        component: Home,
        meta: {
          title: 'Vue3-ui',
          metaTags: [
            {
              name: 'description',
              content: 'Very clean Vue3 components styled with love and care.'
            },
            {
              property: 'og:description',
              content: 'Very clean Vue3 components styled with love and care.'
            }
          ]
        }
      },
      {
        name: 'documentation',
        path: 'documentation',
        component: Documentation,
        meta: {
          title: 'Documentation | Vue3-ui',
          metaTags: [
            {
              name: 'description',
              content: 'Very clean Vue3 components styled with love and care.'
            },
            {
              property: 'og:description',
              content: 'Very clean Vue3 components styled with love and care.'
            }
          ]
        },
        children: [
          {
            name: 'button',
            path: 'button',
            component: Button,
            meta: {
              title: 'Button | Vue3-ui',
              metaTags: [
                {
                  name: 'description',
                  content: 'The classic button, in different colors, sizes, and states'
                },
                {
                  property: 'og:description',
                  content: 'The classic button, in different colors, sizes, and states'
                }
              ]
            }
          },
          {
            name: 'image',
            path: 'image',
            component: Image,
            meta: {
              title: 'Image | Vue3-ui',
              metaTags: [
                {
                  name: 'description',
                  content: 'A container for responsive images'
                },
                {
                  property: 'og:description',
                  content: 'A container for responsive images'
                }
              ]
            }
          }
        ]
        
      },
    ]
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  [...document.querySelectorAll('[data-vue-router-controlled]')].map(el => el.remove());

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.dataset.vueRouterControlled = '';

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.append(tag));
  next();
});
