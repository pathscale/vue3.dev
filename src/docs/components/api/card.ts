const api = 
  [ 
    {
      title: 'VCard',
      props: [
        {
          name: 'tag',
          description: 'Card tag name',
          type: 'String',
          values: 'div, a, router-link, nuxt-link...',
          default: 'div'
        },
      ],
    },
    {
      title: 'VCardHeader',
      props: [
        {
          name: 'title',
          description: 'Card title',
          type: 'String',
        },
        {
          name: 'tag',
          description: 'Card tag name',
          type: 'String',
          values: 'div, a, router-link, nuxt-link...',
          default: 'header'
        },
      ],
    },
    {
      title: 'VCardFooter',
      props: [
        {
          name: 'tag',
          description: 'Card tag name',
          type: 'String',
          values: 'div, a, router-link, nuxt-link...',
          default: 'footer'
        },
      ],
    },
    {
      title: 'VCardContent',
    },
    {
      title: 'VCardImage',
    },
    {
      title: 'VCardFooterItem',
    },

  ]

export default api;
