const api =
  [
    {
      title: 'VModal',
      github: 'https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/Modal/Modal.vue',
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
