const api =
  [
    {
      title: 'VPagination',
      github: 'https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Pagination/PaginationItem.vue',
      props: [
        {
          name: 'v-model:current',
          description: 'Binding value for current page number',
          type: 'File, Array',
        },
        {
          name: 'total',
          description: 'total number of items',
          type: 'Number, String',
        },
        {
          name: 'per-page',
          description: 'items number per page',
          type: 'Number',
          default: 20,
        },
        {
          name: 'range-before',
          description: 'Number of pagination items to show before current page',
          type: 'Number',
          default: 1
        },
        {
          name: 'range-after',
          description: 'Number of pagination items to show after current page',
          type: 'Number',
          default: 1
        },
        {
          name: 'order',
          description: 'Button order',
          values: 'is-centered, is-right',
          type: 'String'
        },
         {
          name: 'size',
          description: 'Pagination size',
          values: 'is-centered, is-right',
          type: 'String'
        },
        {
          name: 'simple',
          description: 'Simple style',
          type: 'Boolean',
        },
        {
          name: 'rounded',
          description: 'Rounded button styles',
          type: 'Boolean',
        },
      ],
      slots: [
        {
          name: 'previous',
          description: 'previous component button',
        },
        {
          name: 'next',
          description: 'next component button',
        }
      ],
      events: [
        {
          name: 'change',
          description: 'on current page change',
          parameters: 'current: number'
        }
      ]
    }
  ]

export default api
