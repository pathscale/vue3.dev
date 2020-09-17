import { createRouter, createWebHistory } from "vue-router";

import Main from "../layouts/Main.vue";

import { Home } from "../pages";

const routes = [
  {
    path: "/",
    component: Main,
    children: [
      {
        name: 'home',
        path: '',
        component: Home
      },
    ]
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
