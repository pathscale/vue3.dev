import { createRouter, createWebHistory } from "vue-router";

import Main from "../layouts/Main.vue";

import { ForgotPassword, ResetPassword, SignInCheckout } from "../components";
import { Home, About, Contact, Cart, Checkout, TrackOrder, Products, Product, Faq, Account, Orders, ItemReturnRequest } from "../pages";

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
      {
        name: 'forgotPassword',
        path: '/forgot-password',
        component: ForgotPassword
      },
      {
        name: 'resetPassword',
        path: '/reset-password',
        component: ResetPassword
      },
      {
        name: 'about',
        path: '/about-us',
        component: About
      },
      {
        name: 'faq',
        path: '/faq',
        component: Faq
      },
      {
        name: 'contact',
        path: '/contact-us',
        component: Contact
      },
      {
        name: 'cart',
        path: '/cart',
        component: Cart
      },
      {
        name: 'signInCheckout',
        path: '/sign-in-checkout',
        component: SignInCheckout
      },
      {
        name: 'checkout',
        path: '/checkout',
        component: Checkout
      },
      {
        name: 'order',
        path: '/order',
        component: TrackOrder
      },
      {
        name: 'products',
        path: '/products',
        component: Products
      },
      {
        name: 'product',
        path: '/product/:id',
        component: Product
      },
      {
        name: 'account',
        path: '/account',
        component: Account
      },
      {
        name: 'orders',
        path: '/orders',
        component: Orders
      },
      {
        name: 'itemReturnRequest',
        path: '/item-return-request',
        component: ItemReturnRequest
      },
    ]
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
