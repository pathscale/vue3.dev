import { createRouter, createWebHistory } from "vue-router";

import Main from "../layouts/Main.vue";

// eslint-disable-next-line no-restricted-syntax -- All pages will be used
import * as Pages from "../pages";

const metaTags = (title, content) => {
  return {
    title,
    metaTags: [
      {
        name: 'description',
        content
      },
      {
        property: 'og:description',
        content
      }
    ]
  }
}

const routes = [
  {
    path: "/",
    redirect: 'home',
    component: Main,
    children: [
      {
        name: 'home',
        path: 'home',
        component: Pages.Home,
        meta: metaTags('Meta','Very clean Vue3 components styled with love and care.')
      },
      {
        name: 'documentation',
        path: 'documentation',
        component: Pages.Documentation,
        meta: metaTags('Documentation','Very clean Vue3 components styled with love and care.'),
        children: [
          {
            name: 'button',
            path: 'button',
            component: Pages.Button,
            meta: metaTags('Button','The classic button, in different colors, sizes, and states'),
          },
          {
            name: 'image',
            path: 'image',
            component: Pages.Image,
            meta: metaTags('Image','A container for responsive images'),
          },
          {
            name: 'progress',
            path: 'progress',
            component: Pages.Progress,
            meta: metaTags('Progress', 'Display an indicator showing the completion progress of a task.')
          },
          {
            name: 'tag',
            path: 'tag',
            component: Pages.Tag,
            meta: metaTags('Tag', "It's very useful as a way to attach information to a block or other component")
          },
          {
            name: 'input',
            path: 'input',
            component: Pages.Input,
            meta: metaTags('Input', 'The text input and its variations')
          },
          {
            name: 'switch',
            path: 'switch',
            component: Pages.Switch,
            meta: metaTags('Switch', 'Display the classic checkbox as a switch button with different colors, sizes, and states')
          },
          {
            name: 'select',
            path: 'select',
            component: Pages.Select,
            meta: metaTags('Select', 'The browser built-in select dropdown, styled accordingly')
          },
          {
            name: 'textarea',
            path: 'textarea',
            component: Pages.Textarea,
            meta: metaTags('Textarea', 'The multiline textarea and its variations')
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
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title + '| Vue3-ui';

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
