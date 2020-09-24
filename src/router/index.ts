import { createRouter, createWebHistory } from "vue-router";

import Main from "../layouts/Main.vue";

import { Home, Documentation, Button } from "../pages";

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
        ]
        
      },
    ]
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
