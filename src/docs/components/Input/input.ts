const api = 
  [ 
    {
      title: 'VInput',
      props: [
        {
            name: 'v-model',
            description: 'Binding value',
            type: 'String, Number',
            values: '—',
            default: '—'
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
            default: '—'
        },
        {
            name: 'loading',
            description: 'Add the loading state to the input',
            type: 'Boolean',
            values: '—',
            default: 'false'
        },
        {
            name: 'icon-right',
            description: 'Right icon',
            type: 'String',
            values: '—',
            default: '—'
        },
        {
            name: 'icon-left',
            description: 'Left Icon',
            type: 'String',
            values: '—',
            default: '—'
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
