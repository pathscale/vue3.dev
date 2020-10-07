<script>
import { VSidebar, VMenu, VMenuList, VMenuItem } from "@pathscale/vue3-ui"
import { reactive } from 'vue';
import { useI18n } from "vue-composable";
import { useRouter } from "vue-router"

const Component = {
  components: { VSidebar, VMenu, VMenuList, VMenuItem },
  emits: ['open', 'close'],
  setup(props, { emit }) {
    const intl = useI18n();
    const router = useRouter();
    const state = reactive({
      list: [{
        title: 'Shop by Category',
        href: 'products',
        submenu: true
      },
      {
        title: 'Orders & Returns History',
        href: 'orders',
        submenu: true
      },
      {
        title: 'My Subscription Plan',
        href: 'products',
        submenu: true
      },
      {
        title: 'VIP Access',
        href: 'products',
        submenu: true
      },
      {
        title: 'Customer Support',
        href: 'products',
      },
      {
        title: 'Our Events',
        href: 'products',
      },
      {
        title: 'About Us',
        href: 'about',
      },
      {
        title: 'Contact Us',
        href: 'contact',
      },
      {
        title: 'FAQs',
        href: 'faq',
      }]
    })
    function redirect(name) {
     router.push({
        name
     })
      emit('close')
    }
    return { intl, emit, state, redirect, router }
  }
}
export default Component;
</script>

<template>
  <v-sidebar :open="emit('open')" fullheight overlay @close="emit('close')" width="350" position="fixed">
    <div>
      <div class="px-5 py-4 has-background-grey-lighter is-inline-flex is-100">
        <div>
          <i class="icon icon-account-circle is-medium" />
        </div>
        <div class="is-100 ml-2">
          <p>
            Hello <b>80yomillionaire</b>
          </p>
          <div class="is-inline-flex is-justified-between is-100">
            <a @click="redirect('account')">My Profile</a>
            <div class="is-inline-flex ml-4">
              <i class="icon icon-login-variant" />
              <a class="ml-2">Logout</a>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-4">
        <v-menu>
          <v-menu-list>
            <v-menu-item v-for="item in state.list" :key="item.list" class="py-4 has-text-grey has-text-weight-bold has-border-bottom" @click="redirect(item.href)">
              <template #label="props">
                {{ item.title }}
                <i v-if="item.submenu" class="icon is-pulled-right" :class="props.expanded ? 'icon-menu-up':'icon-menu-down'" />
              </template>
            </v-menu-item>
          </v-menu-list>
        </v-menu>
      </div>
    </div>
  </v-sidebar>
</template>

<style>
  .sidebar-background {
    background: transparent !important;
  }
  .has-border-bottom {
    border-bottom: 1px solid lightgray;
  }
</style>
