import { createRouter, createWebHistory } from 'vue-router'

import Main from 'src/layouts/Main.vue'

// eslint-disable-next-line no-restricted-syntax -- All pages will be used
import * as Pages from 'src/pages'

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
    path: '/',
    redirect: 'home',
    component: Main,
    children: [
      {
        name: 'home',
        path: 'home',
        component: Pages.Home,
        meta: metaTags('Vue3-ui', 'Very clean Vue3 components styled with love and care to integrate nicely with Bulma CSS.')
      },
      {
        name: 'documentation',
        path: 'documentation',
        component: Pages.Documentation,
        meta: metaTags('Documentation', 'Very clean Vue3 components styled with love and care to integrate nicely with Bulma CSS.'),
        children: [
          {
            name: 'installation',
            path: 'installation',
            component: Pages.Installation,
            meta: metaTags('Installation', 'Install vue3-ui, a vue3 ready components library')
          },
          {
            name: 'appstate',
            path: 'appstate',
            component: Pages.Appstate,
            meta: metaTags('Appstate', 'Fast state management for Vue3 with reduced overhead and robust API')
          },
          {
            name: 'theming',
            path: 'theming',
            component: Pages.Theming,
            meta: metaTags('Theming', 'Customize Vue3-ui and make it your own.')
          },
          {
            name: 'bulma',
            path: 'bulma',
            component: Pages.Bulma,
            meta: metaTags('Bulma', 'Vue3-ui is set of Vue components designed to integrate nicely with Bulma, so you can use any feature of the original CSS Framework.')
          },
          {
            name: 'icons',
            path: 'icons',
            component: Pages.Icons,
            meta: metaTags('Icons', 'Mega compilation of svg icons optimized for fast delivery')
          },
          {
            name: 'button',
            path: 'button',
            component: Pages.Button,
            meta: metaTags('Button', 'The classic button, in different colors, sizes, and states'),
          },
          {
            name: 'image',
            path: 'image',
            component: Pages.Image,
            meta: metaTags('Image', 'A container for responsive images'),
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
            meta: metaTags('Tag', 'It\'s very useful as a way to attach information to a block or other component')
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
          },
          {
            name: 'checkbox',
            path: 'checkbox',
            component: Pages.Checkbox,
            meta: metaTags('Checkbox', 'Display a toggling box to keep your on / off states')
          },
          {
            name: 'file',
            path: 'file',
            component: Pages.File,
            meta: metaTags('File input', 'Let the user choose one or more files from their device storages')
          },
          {
            name: 'field',
            path: 'field',
            component: Pages.Field,
            meta: metaTags('Field', 'The field container is a simple container for: a text label; a form control; an optional help text')
          },
          {
            name: 'validation',
            path: 'validation',
            component: Pages.Validation,
            meta: metaTags('Validation', 'Usage of validators with vue3-ui form components')
          },
          {
            name: 'breadcrumb',
            path: 'breadcrumb',
            component: Pages.Breadcrumb,
            meta: metaTags('Breadcrumb', 'For improving navigation experience')
          },
          {
            name: 'card',
            path: 'card',
            component: Pages.Card,
            meta: metaTags('Card', 'Component to display content')
          },
          {
            name: 'dropdown',
            path: 'dropdown',
            component: Pages.Dropdown,
            meta: metaTags('Dropdown', 'The classic dropdown component')
          },
          {
            name: 'media',
            path: 'media',
            component: Pages.Media,
            meta: metaTags('Media', 'The famous media object prevalent in social media interfaces, but useful in any context')
          },
          {
            name: 'columns',
            path: 'columns',
            component: Pages.Columns,
            meta: metaTags('Columns', 'The power of Flexbox in a simple interface')
          },
          {
            name: 'modal',
            path: 'modal',
            component: Pages.Modal,
            meta: metaTags('Modal', 'A classic modal overlay, in which you can include any content you want')
          },
          {
            name: 'sidebar',
            path: 'sidebar',
            component: Pages.Sidebar,
            meta: metaTags('Sidebar', 'A classic sidebar, in which you can include any content you want')
          },
          {
            name: 'navbar',
            path: 'navbar',
            component: Pages.Navbar,
            meta: metaTags('Navbar', 'A responsive horizontal navbar that can support images, links, buttons, and dropdowns')
          },
          {
            name: 'menu',
            path: 'menu',
            component: Pages.Menu,
            meta: metaTags('Menu', 'A simple menu, for any type of vertical navigation')
          },
          {
            name: 'tabs',
            path: 'tabs',
            component: Pages.Tabs,
            meta: metaTags('Tabs', 'For any type of horizontal navigation')
          },
          {
            name: 'tooltip',
            path: 'tooltip',
            component: Pages.Tooltip,
            meta: metaTags('Tooltip', 'Display a tooltip attached to any kind of element with different positioning')
          },
          {
            name: 'table',
            path: 'table',
            component: Pages.Table,
            meta: metaTags('Table', 'Display a table with many features for enhanced data visualization')
          },
          {
            name: 'accordion',
            path: 'accordion',
            component: Pages.Accordion,
            meta: metaTags('Accordion', 'Expansion panel that saves screen space')
          },
          {
            name: 'datagrid',
            path: 'datagrid',
            component: Pages.Datagrid,
            meta: metaTags('DataGrid', 'Powerful class to store and alter data')
          }
        ]
      },
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title + '| Vue3-ui';

  // Remove any stale meta tags from the document using the key attribute we set below.
  [...document.querySelectorAll('[data-vue-router-controlled]')].map(el => el.remove())

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.dataset.vueRouterControlled = ''

    return tag
  })
  // Add the meta tags to the document head.
    .forEach(tag => document.head.append(tag))
  next()

  return undefined
})
