const api =
  [
    {
      title: 'VBreadcrumb',
      github: 'https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Breadcrumb/Breadcrumb.vue',
      props: [
        {
          name: 'alignment',
          description: 'For alternative alignments',
          type: 'String',
          values: 'is-centered, is-right',
        },
        {
          name: 'size',
          description: 'The breadcrumb comes in 3 different sizes',
          type: 'String',
          values: 'is-normal, is-medium, is-large',
        },
        {
          name: 'separator',
          description: 'Alternative separators',
          type: 'String',
          values: 'has-arrow-separator, has-bullet-separator, has-dot-separator and has-succeeds-separator'
        },
      ],
    },
    {
      title: 'VBreadcrumbItem',
      github: 'https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Breadcrumb/BreadcrumbItem.vue',
      props: [
        {
          name: 'tag',
          description: 'Breadcrumb item tag name',
          type: 'String',
          values: 'a, router-link, nuxt-link...',
          default: 'a'
        },
        {
          name: 'active',
          description: 'Active item',
          type: 'Bolean',
        },
      ],
      events: [
        {
          name: 'click',
          description: 'Triggers on click',
          parameters: 'event: $event'
        },
        {
          name: '[any].native',
          description: 'Listen to any event using this syntax, e.g mousedown.native',
          parameters: 'event: $event'
        }
      ]
    }
  ]

export default api
