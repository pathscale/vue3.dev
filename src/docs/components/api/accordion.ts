const api =
    [
      {
        title: 'VAccordion',
        props: [
          {
            name: 'is-horizontal',
            type: 'boolean',
            description: 'Makes the accordion show horizontally'
          },
          {
            name: 'trigger-right',
            type: 'boolean',
            description: 'Places the trigger at the right of the content'
          },
          {
            name: 'trigger-left',
            type: 'boolean',
            description: 'Places the trigger at the left of the content'
          },
          {
            name: 'expanded',
            type: 'boolean',
            description: 'Controls the initial state for the accordion'
          },
          {
            name: 'background',
            type: 'string',
            description: 'Set a background for both the trigger and the content'
          },
          {
            name: 'color',
            type: 'string',
            description: 'Sets the font color for content'
          },
          {
            name: 'hover',
            type: 'boolean',
            description: 'Expands the accordion on mouse hover'
          },
          {
            name: 'is-link',
            type: 'boolean'
          },
          {
            name: 'is-active',
            type: 'boolean'
          },
          {
            name: 'header-is-trigger',
            type: 'boolean',
            description: 'Expands the accordion when the trigger gets clicked'
          }
        ],
        slots: [
          {
            name: 'content'
          },
          {
            name: 'header'
          },
          {
            name: 'trigger'
          }
        ]
      },
      {
        title: 'VAccordionMenu',
        slots: [
          {
            name: 'label',
            description: 'File label',
          }
        ],
      }
    ]

export default api
