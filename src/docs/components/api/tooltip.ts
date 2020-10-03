const api = 
  [ 
    {
      title: 'VTooltip',
      props: [
        {
          name: 'active',
          description: 'Show tooltip',
          type: 'Boolean',
          default: 'true'
        },
        {
          name: 'type',
          description: 'Tooltip color',
          type: 'String',
          values: `is-white, is-light, is-dark, is-black, is-text, is-primary, is-link, is-info, is-success, is-warning, is-danger...`,
          default: 'is-primary'
        },
        {
            name: 'label',
            description: 'Tooltip label',
            type: 'String',
            required: true,
        },
        {
          name: 'position',
          description: 'Tooltip position',
          type: 'String',
          values: 'is-top, is-bottom, is-left, is-right',
          default: 'is-top'
        },
        {
          name: 'always',
          description: 'Always active',
          type: 'Boolean',
        },
        {
          name: 'animated',
          description: 'Tooltip fade animation',
          type: 'Boolean',
        },
        {
            name: 'square',
            description: 'Square style',
            type: 'Boolean',
        },
        {
            name: 'dashed',
            description: 'Dashed style',
            type: 'Boolean',
        },
        {
            name: 'multilined',
            description: 'Multiline style',
            type: 'Boolean',
        },
        {
            name: 'size',
            description: 'Tooltip multiline size, multilined required',
            type: 'String',
            values: 'is-small, is-medium, is-large',
            default: 'is-medium'
        },
        {
            name: 'delay',
            description: 'Transition delay (ms)',
            type: 'Number',
            default: '0'
        }
    ]
    }
  ]

export default api;
