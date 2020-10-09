const api =
  [
    {
      title: 'VMenu',
      slots: [
        {
          name: 'default',
          description: 'Menu list elements',
        }
      ]
    },
    {
      title: 'VMenuList',
      props: [
        {
          name: 'label',
          description: 'Menu list label',
          type: 'String',
        },
        {
          name: 'aria-role',
          description: 'Role attribute to be passed to list container for better accessibility.',
          type: 'String',
          values: 'menu',
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Menu item elements',
        }
      ]
    },
    {
      title: 'VMenuItem',
      props: [
        {
          name: 'label',
          description: 'Menu item label',
          type: 'String',
        },
        {
          name: 'active',
          description: 'Active style',
          type: 'Boolean',
        },
        {
          name: 'expanded',
          description: 'Item is expanded when default contains menu items.',
          type: 'Boolean',
        },
        {
          name: 'disabled',
          description: 'Item is disabled',
          type: 'Boolean',
        },
        {
          name: 'icon',
          description: 'Icon name',
          type: 'String',
        },
        {
          name: 'tag',
          description: 'Item tag name',
          type: 'String',
          values: 'a, input, router-link, nuxt-link...',
          default: 'a'
        },
        {
          name: 'aria-role',
          description: 'Role attribute to be passed to list item for better accessibility. Use menuitem only in situations where your menu item is really related to navigation.',
          type: 'String',
          values: 'menuitem',
        },
        {
          name: 'Any attribute',
          description: 'Native or inherited attributes',
          type: ' String',
          values: 'href, to, ...'
        }
      ],
      slots: [
        {
          name: 'default',
          description: 'Menu item body',
        },
        {
          name: 'label',
          description: 'Menu list custom label',
          props: 'active: Boolean,expanded: Boolean'
        }
      ]
    }
  ]

export default api
