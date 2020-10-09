const api =
  [
    {
      title: 'VModal',
      props: [
        {
          name: 'v-model',
          description: 'Binding value',
          type: 'Boolean',
          required: true,
        },
        {
          name: 'card',
          description: 'Display as a modal card, slots will be required',
          type: 'Boolean',
        },
      ],
      slots: [
        {
          name: 'title',
          description: 'The title element',
        },
        {
          name: 'content',
          description: 'The content element',
        },
        {
          name: 'footer',
          description: 'The footer element',
        }
      ],
    }
  ]

export default api
