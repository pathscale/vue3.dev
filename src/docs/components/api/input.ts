const api =
  [
    {
      title: 'VInput',
      github: 'https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/Input/Input.vue',
      props: [
        {
          name: 'v-model',
          description: 'Binding value',
          type: 'String, Number',
        },
        {
          name: 'type',
          description: 'The input can be displayed in several ways, depending on the type attribute.',
          type: 'String',
          values: 'text, password, email, tel, maxlength, ...',
          default: 'text'
        },
        {
          name: 'size',
          description: 'Input size',
          type: 'String',
          values: 'is-small, is-medium, is-large',
        },
        {
          name: 'loading',
          description: 'Add the loading state to the input',
          type: 'Boolean',

        },
        {
          name: 'icon-right',
          description: 'Right icon',
          type: 'String',
        },
        {
          name: 'icon-left',
          description: 'Left Icon',
          type: 'String',
        },
        {
          name: 'Any native attribute',
        }
      ],
      events: [
        {
          name: '[any].native',
          description: 'Listen to any native event, e.g. click.native',
          parameters: 'event: $event'
        }
      ],
    }
  ]

export default api
