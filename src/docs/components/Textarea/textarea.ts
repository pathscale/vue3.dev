const api = 
  [ 
    {
      title: 'VTextarea',
      props: [
        {
            name: 'v-model',
            description: 'Binding value',
            type: 'String, Number',
            values: '—',
            default: '—'
        },
        {
          name: 'color',
          description: 'Textarea color',
          type: 'String',
          values: `is-white, is-light, is-dark, is-black, is-text, is-primary, is-link, is-info, is-success, is-warning, is-danger...`,
          default: '—'
        },
        {
            name: 'size',
            description: 'The textarea element comes in 4 different sizes',
            type: 'String',
            values: 'is-small, is-normal, is-medium, is-large',
            default: '—'
        },
        {
            name: 'loading',
            description: 'Add the loading state to the textarea',
            type: 'Boolean',
            values: '—',
            default: 'false'
        },
        {
          name: 'focused',
          description: 'Focused style',
          type: 'Boolean',
          values: '—',
          default: 'false'
        },
        {
          name: 'hovered',
          description: 'Hovered style',
          type: 'Boolean',
          values: '—',
          default: 'false'
        },
        {
            name: 'Any native attribute',
            description: '—',
            type: '—',
            values: '—',
            default: '—'
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

export default api;
