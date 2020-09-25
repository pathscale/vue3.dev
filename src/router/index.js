import { createRouter, createWebHistory } from "vue-router";

import Main from "../layouts/Main.vue";

import { Home, Documentation, Button, Image, Progress, Tag, Input } from "../pages";

const metaTags = (content) => {
  return [
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
          metaTags: metaTags('Very clean Vue3 components styled with love and care.')
        }
      },
      {
        name: 'documentation',
        path: 'documentation',
        component: Documentation,
        meta: {
          title: 'Documentation',
          metaTags: metaTags('Very clean Vue3 components styled with love and care.')
        },
        children: [
          {
            name: 'button',
            path: 'button',
            component: Button,
            meta: {
              title: 'Button',
              metaTags: metaTags('The classic button, in different colors, sizes, and states')
            }
          },
          {
            name: 'image',
            path: 'image',
            component: Image,
            meta: {
              title: 'Image',
              metaTags: metaTags('A container for responsive images')
            }
          },
          {
            name: 'progress',
            path: 'progress',
            component: Progress,
            meta: {
              title: 'Progress',
              metaTags: metaTags('Display an indicator showing the completion progress of a task.')
            }
          },
          {
            name: 'tag',
            path: 'tag',
            component: Tag,
            meta: {
              title: 'Tag',
              metaTags: metaTags("It's very useful as a way to attach information to a block or other component")
            }
          },
          {
            name: 'input',
            path: 'input',
            component: Input,
            meta: {
              title: 'Input',
              metaTags: metaTags('The text input and its variations')
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
