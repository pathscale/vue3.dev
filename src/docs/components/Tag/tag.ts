const api = 
  [ 
    {
      title: 'VTag',
      props: [
        {
            name: 'type',
            description: 'Like with buttons, there are different colors available',
            type: 'String',
            values: `is-white, is-black, is-light,
                is-dark, is-primary, is-info, is-success,
                is-warning, is-danger...`,
            default: '—'
        },
        {
          name: 'size',
          description: 'The tag comes in 3 different sizes',
          type: 'String',
          values: 'is-normal, is-medium, is-large',
          default: '—'
        },
        {
            name: 'close-type',
            description: 'Color of the cross button of tag',
            type: 'String',
            values: `is-white, is-black, is-light,
                is-dark, is-primary, is-info, is-success,
                is-warning, is-danger...`,
            default: '—'
        },
        {
            name: 'rounded',
            description: 'You can add it to to make a rounded tag',
            type: 'Boolean',
            values: '—',
            default: 'false'
        },
        {
            name: 'closable',
            description: 'You can add it to turn the tag into a closable tag',
            type: 'Boolean',
            values: '—',
            default: 'false'
        },
        {
            name: 'attached',
            description: 'Close/delete button style equal to attached tags',
            type: 'Boolean',
            values: '—',
            default: 'false'
        },
        {
            name: 'ellipsis',
            description: 'Adds ellipsis to not overflow the text',
            type: 'Boolean',
            values: '—',
            default: 'false'
        },
        {
            name: 'tabstop',
            description: 'If should stop when using tab key',
            type: 'Boolean',
            values: '—',
            default: 'true'
        },
        {
            name: 'disabled',
            description: 'Disable delete button',
            type: 'Boolean',
            values: '—',
            default: 'false'
        },
        {
            name: 'aria-close-label',
            description: 'Accessibility label for the close button',
            type: 'String',
            values: '—',
            default: '—'
        },
        {
            name: 'close-icon',
            description: 'Add close icon to Tag',
            type: 'String',
            values: '—',
            default: '—'
        },
    ],
      events: [
          {
              name: 'close',
              description: 'Triggers when closable section is clicked',
              parameters: '—'
          }
      ]
    }
  ]

export default api;
