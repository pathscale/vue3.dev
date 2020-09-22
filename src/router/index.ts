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
        component: Home
      },
      {
        name: 'documentation',
        path: 'documentation',
        component: Documentation,
        children: [
          {
            name: 'button',
            path: 'button',
            component: Button
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
