const api =
    [
      {
        title: 'VDropdown',
        props: [
          {
            name: 'v-model',
            description: 'Binding value',
            type: 'Any',
          },
          {
            name: 'position',
            description: 'Dropdown position',
            type: 'String',
            values: 'is-top-right, is-top-left, is-bottom-left',
          },
          {
            name: 'disabled',
            description: 'Disables style',
            type: 'Boolean',
            default: 'false'
          },
          {
            name: 'hoverable',
            description: 'Show content on hover',
            type: 'Boolean',
            default: 'false'
          },
          {
            name: 'inline',
            description: 'Display content inline',
            type: 'Boolean',
            default: 'false'
          },
          {
            name: 'mobile-modal',
            description: 'Display content in a modal in mobile',
            type: 'Boolean',
            default: 'true'
          },
          {
            name: 'expanded',
            description: 'Full width',
            type: 'Boolean',
            default: 'false'
          },
          {
            name: 'aria-role',
            description: 'Role attribute to be passed to list container for better accessibility.',
            type: 'String',
            values: 'list, menu, dialog',
          },
          {
            name: 'close-on-click',
            description: 'Close dropdown when content is clicked',
            type: 'Boolean',
            default: 'true'
          },
        ],
        slots: [
          {
            name: 'trigger',
            description: 'Trigger content for the dropdown'
          }
        ],
        events: [
          {
            name: 'change',
            description: 'Triggers when an item is selected',
            parameters: 'value: String'
          },
          {
            name: 'active-change',
            description: 'Triggers when dropdown is activated or deactivated (visibility of list)',
            parameters: 'active: Boolean'
          }
        ],
      },
      {
        title: 'VDropdownItem',
        props: [
          {
            name: 'value',
            description: 'The returned value on click',
            type: 'Any',
            default: 'null'
          },
          {
            name: 'separator',
            description: 'Use item as a separator',
            type: 'Boolean',
            default: 'false'
          },
          {
            name: 'disabled',
            description: 'Disabled style',
            type: 'Boolean',
            default: 'false'
          },
          {
            name: 'focusable',
            description: 'Focused style',
            type: 'Boolean',
            default: 'true'
          },
          {
            name: 'custom',
            description: 'Disable clickeable property',
            type: 'Boolean',
            default: 'false'
          },
          {
            name: 'has-link',
            description: 'Use it if item is an anchor tag or router-link',
            type: 'Boolean',
            default: 'false'
          },
          {
            name: 'paddingless',
            description: 'Remove padding',
            type: 'Boolean',
            default: 'false'
          },
          {
            name: 'aria-role',
            description: 'Role attribute to be passed to list item for better accessibility',
            type: 'String',
            values: 'listitem, menuitem',
          }
        ],
        events: [
          {
            name: 'click',
            description: 'Triggers when the item is clicked',
            parameters: '—'
          }
        ]
      }

    ]

export default api
